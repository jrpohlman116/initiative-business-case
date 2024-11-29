import logo from './logo.svg';
import './App.css';
import List from './components/List';
import React, { useEffect, useRef, useState } from 'react';
import Editor from './components/Editor';
import Quill from 'quill';
import { TextField, ThemeProvider } from '@mui/material';
import RelatedItems from './components/RelatedItems';
import AddSection from './components/AddSection';
import { createTheme } from '@mui/material/styles';

const Delta = Quill.import('delta');

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
  // Use a ref to access the quill instance directly
  const quillRef = useRef();

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
      <Editor
        ref={quillRef}
        readOnly={false}
        defaultValue={new Delta()
          .insert('Hello')
          .insert('\n', { header: 1 })
          .insert('Some ')
          .insert('initial', { bold: true })
          .insert(' ')
          .insert('content', { underline: true })
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
