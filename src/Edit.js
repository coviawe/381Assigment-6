import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useOutletContext } from 'react-router-dom';

function Edit() {
    const [value, setValue] = useState('');
    const [activeNote] = useOutletContext();  
    // const onEditField = (key, value) => {
    //   onUpdateNote({
    //     ...activeNote,
    //     [key]: value,
    //     lastModified: Date.now(),
    //   });

    return (
        <>
        <div id="edit-header">
          <input className='edit-title' type="text" placeholder="Untitled" value={activeNote.title} autoFocus />
          <input type="datetime-local" className />
          <button>Save</button>
          <button>Delete</button>
        </div>
        <ReactQuill theme="snow" value={value} onChange={setValue} placeholder="Your note here"/>
        </>
    )
  }

export default Edit;