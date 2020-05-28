import React from 'react';
import Header from './Header';
import Input from './Input';
import Footer from './Footer';

function App() {

    function addNote(note) {
        console.log(note);
    }

    return (
        <div>
            <Header />
            <Input onSubmit={addNote} />
            <Footer />
        </div>
    );
}

export default App;