import React from "react";

function Notes(props) {

    function onDelete(event) {
        props.deleteNote(props.id);
        event.preventDefault();
    }

    return (
        <div className='note'>
            <h1>{props.title}</h1>
            <p>{props.note}</p>
            <button
                onClick={onDelete}>
                Delete
          </button>
        </div>
    );
}

export default Notes;
