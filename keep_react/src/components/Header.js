import React from 'react';
import NotesIcon from '@material-ui/icons/Notes';

function Header() {
    return (
        <header>
            <h1>
                <NotesIcon
                    fontSize='medium'
                    style={{ marginRight: 10 }} />
                Keep Notes
            </h1>
        </header>
    );
}

export default Header;