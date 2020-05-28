import React, { useState, useEffect } from 'react';
import Header from './Header';
import Input from './Input';
import Notes from './Notes';
import Footer from './Footer';

function App() {
    const [noteList, setNotes] = useState([]);

    async function fetchNotes() {
        const res = await fetch('/notes');
        res.json().then(res => console.log(res));
    }

    useEffect(() => {
        fetchNotes();
    }, []);

    function addNote(note) {
        setNotes(prevNotes => {
            return [...prevNotes, note];
        });
    }

    function deleteNote(id) {
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