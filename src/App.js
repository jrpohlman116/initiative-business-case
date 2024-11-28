import logo from './logo.svg';
import './App.css';
import List from './components/List';
import React, { useRef, useState } from 'react';
import Editor from './components/Editor';
import Quill from 'quill';
import { Button, TextField } from '@mui/material';
import RelatedItems from './components/RelatedItems';
import AddSection from './components/AddSection';

const Delta = Quill.import('delta');


function App() {
  const [range, setRange] = useState();
  const [lastChange, setLastChange] = useState();
  const [sections, setSections] = useState([]);

  const addSectionsToTemplate = (numSections) => {
    var newSections = new Array(numSections).fill(<Button variant='outlined' style={{width: '100%'}}>Add content</Button>);
    setSections([...sections, newSections]);
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
      <List sections={sections} setSections={setSections}/>
      <RelatedItems/>
    </div>
  );
}

export default App;
