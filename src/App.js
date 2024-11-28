import logo from './logo.svg';
import './App.css';
import List from './components/List';
import React, { useEffect, useRef, useState } from 'react';
import Editor from './components/Editor';
import Quill from 'quill';
import { Button, TextField } from '@mui/material';
import RelatedItems from './components/RelatedItems';
import AddSection from './components/AddSection';
import AddContent from './components/AddContent';

const Delta = Quill.import('delta');


function App() {
  const [range, setRange] = useState();
  const [lastChange, setLastChange] = useState();
  const [sections, setSections] = useState([]);

  const addSectionsToTemplate = (numSections) => {
    const sectionIndex = sections.length;
    var newSection = new Array(numSections).fill("empty");
    setSections([...sections, newSection]);
  }

  const addContentToSection = (contentType, buttonXIndex, buttonYIndex) => {
    var newContent = [... sections];
    newContent[buttonYIndex][buttonXIndex] = contentType
    setSections(newContent);
  }

  // Use a ref to access the quill instance directly
  const quillRef = useRef();

  return (
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
  );
}

export default App;
