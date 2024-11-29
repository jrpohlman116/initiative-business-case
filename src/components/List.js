import { Reorder, useDragControls } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import AddContent from "./AddContent";
import Editor from "./Editor";
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';

function List({sections, setSections, addContentToSection}) {

  // Use a ref to access the quill instance directly
  const quillRef = useRef();

  const getContent = (content, sectionIndex, index) => {
    switch(content) {
      case 'empty':
        return <AddContent addContentToSection={addContentToSection} xIndex={index} yIndex={sectionIndex}/>
      case 'image':
        return<img src={"https://loremflickr.com/200/200?random=" + sectionIndex + index} />
      case 'text':
        return <Editor
          ref={quillRef}
          readOnly={false}
          defaultValue={false}
        />
      case 'code':
        return <iframe 
            style={{border: "1px solid rgba(0, 0, 0, 0.1)"}} 
            width="800" 
            height="450" 
            src="https://embed.figma.com/design/aaK58GuAIw44aEwcLwfiHb/Opportunities%E2%80%A8as-Business-Case-Prototype?node-id=4039-16071&m=dev&embed-host=share" 
            allowfullscreen>
          </iframe>
      default: 
        return <AddContent addContentToSection={addContentToSection} xIndex={index} yIndex={sectionIndex}/>
    }
  }

  return (
    <Reorder.Group id="template" values={sections} onReorder={setSections}>
      {sections.map((item, sectionIndex) => (
        <Reorder.Item className="item-container" key={item} value={item}>
          <span id="item-content">
            {item.map((content, index) => (getContent(content, sectionIndex, index)))}
          </span>
        </Reorder.Item>
      ))}
    </Reorder.Group>
  )
}

export default List