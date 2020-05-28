import React, { useState, useEffect } from 'react';
import Header from './Header';
import Input from './Input';
import Notes from './Notes';
import Footer from './Footer';

function App() {
    const [noteList, setNotes] = useState([]);

    // get API request
    async function fetchNotes() {
        const res = await fetch('/notes');
        res.json().then(res => setNotes(res));
    }

    useEffect(() => {
        fetchNotes();
    }, []);

    function addNote(note) {
        // post API request 
        const opt = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(note)
        };
        fetch('/notes', opt);
        setNotes(prevNotes => {
            return [...prevNotes, note];
        });
    }

    function deleteNote(id) {
        // delete API request 
        const opt = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: id.toString() })
        };
        console.log(opt.body);
        
        fetch('/notes', opt);
        setNotes(prevNotes => {
            return prevNotes.filter((item, index) => index !== id);
        })
    }


    return (
        <div>
            <Header />
            <Input onSubmit={addNote} />
            {noteList.map((item, index) => {
                return <Notes
                    key={index}
                    id={index}
                    title={item.title}
                    note={item.note}
                    deleteNote={deleteNote} />
            })}
            <Footer />
        </div>
    );
}

export default App;