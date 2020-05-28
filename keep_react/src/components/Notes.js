import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import { Fab } from "@material-ui/core";

function Notes(props) {

    let [delIcon, setDelIcon] = useState(true);

    function onDelete(event) {
        props.deleteNote(props.id);
        event.preventDefault();
    }

    return (
        <div className='note'
            onMouseEnter={() => setDelIcon(false)}
            onMouseLeave={() => setDelIcon(true)}>
            <h1>{props.title}</h1>
            <p>{props.note}</p>
            <Fab disabled={delIcon}
                onClick={onDelete}>
                <DeleteIcon />
            </Fab>
        </div >
    );
}

export default Notes;
