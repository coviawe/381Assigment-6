import React from 'react';

function Sidebar ({notes, onAddNote, activeNote, setActiveNote}){

    // const [notes, setNotes] = useState([]); 

    // const onAddNote = () => {

    //   const newNote = {
    //      id: uuid(),

    //      title: "Untitled",

    //      body: "",

    //      date: Date.now(),

    //    };
    //    setNotes([newNote, ...notes]);
    //  };
    // const handleButtonClick = () => {
    // props.onButtonClick('/edit');
    // }

    const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);

    return (
        <>
            <div className="sidebar-header">
              <h1><b>Notes</b></h1>

              <button onClick={onAddNote}><b>+</b></button>
            </div>

            <div className="sidebar-content">
              {sortedNotes.map((note) => (
              <div className={`sidebar-note ${note.id === activeNote && "active"}`} onClick={() => setActiveNote(note.id)}>

                <div className="sidebar-note-title">
                  <strong>{note.title}</strong>
                </div>

                <p>{note.body && note.body.substr(0 ,100) + "..."}</p>

                <small className="sidebar-note-date">Last modified {new Date(note.lastModified).toLocaleDateString("en-CA",{
                  hour: "2-digit",
                  minute: "2-digit",
                })}
                  </small>
              </div>
              ))}
            </div>
            {/* ,  {notes, onAddNote} */}
        </>
    )
}

export default Sidebar;