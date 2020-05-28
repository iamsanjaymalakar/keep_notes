import React, { useState } from "react";
import Zoom from "@material-ui/core/Zoom";

function Input(props) {
    let [expand, setExpand] = useState(false);
    let [note, setNote] = useState({
        title: '',
        note: ''
    });

    function changeListener(event) {
        let { name, value } = event.target;
        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        })
    }

    function addNote(event) {
        props.onSubmit(note);
        setNote({
            title: '',
            note: ''
        })
        event.preventDefault();
    }

    return (
        <div>
            <form className="create-note">
                {expand && <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={note.title}
                    onChange={changeListener} />}
                <textarea name="note"
                    placeholder="Take a note..."
                    rows="3"
                    value={note.note}
                    onChange={changeListener}
                    onClick={function () {
                        setExpand(true);
                    }} />
                <Zoom in={expand}>
                    <button
                        onClick={addNote}>
                        Add
                    </button>
                </Zoom>
            </form>
        </div>
    );
}

export default Input;
