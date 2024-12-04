import logo from './logo.svg';
import './App.css';
import List from './components/List';
import React, { useEffect, useRef, useState } from 'react';
import Editor from './components/Editor';
import Quill from 'quill';
import { TextField, ThemeProvider, Button } from '@mui/material';
import RelatedItems from './components/RelatedItems';
import AddSection from './components/AddSection';
import { createTheme } from '@mui/material/styles';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { createBusinessCasePrompt } from './prompts';

const Delta = Quill.import('delta');
const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);

const theme = createTheme({
  palette: {
    primary: {
      light: '#ECF6FE',
      main: '#0A6CB9',
      dark: '#0757AA',
      contrastText: '#fff',
    },
    secondary: {
      light: '#F0F3F5',
      main: '#F0F3F5',
      dark: '#D1D5D9',
      contrastText: '#000',
    },
    tertiary: {
      light: '#000',
      main: '#ECF6FE',
      dark: '#C0E2F9',
      contrastText: '#0A6CB9',
    },
  },
});


function App() {
  const [range, setRange] = useState();
  const [lastChange, setLastChange] = useState();
  const [sections, setSections] = useState([]);
  const [aiResponse, setAiResponse] = useState('');

  // Use a ref to access the quill instance directly
  const quillRef = useRef();

  async function aiRun() {
    const model = genAI.getGenerativeModel({
      model: "gemini-pro",
      generationConfig: {
        temperature: 1.0,
      },
    });
    const prompt = createBusinessCasePrompt;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    const content = text.split(/```json/i);
    var filtered = content.filter(function (el) {
      return el != "";
    });
    const json = JSON.parse(filtered[0].replace("```", ""));
    quillRef.current.setContents(json['ops']);
  }

  const addSectionsToTemplate = (numSections) => {
    var newSection = new Array(numSections).fill("empty");
    setSections([...sections, newSection]);
  }

  const addContentToSection = (contentType, buttonXIndex, buttonYIndex) => {
    var newContent = [... sections];
    newContent[buttonYIndex][buttonXIndex] = contentType
    setSections(newContent);
  }


  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <TextField label="Opportunity" variant="outlined"/>
      <Button onClick={aiRun}>Generate with AI</Button>
      <Editor
        ref={quillRef}
        readOnly={false}
        defaultValue={new Delta()
          .insert(aiResponse)
          .insert('\n')}
        onSelectionChange={setRange}
        onTextChange={setLastChange}
      />
      <AddSection addSectionsToTemplate={addSectionsToTemplate}/>
      <List sections={sections} setSections={setSections} addContentToSection={addContentToSection}/>
      <RelatedItems/>
    </div>
    </ThemeProvider>
  );
}

export default App;
