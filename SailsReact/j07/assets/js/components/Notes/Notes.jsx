import React from 'react'
import Note from "./Note.jsx"

class Notes extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Notes';
    }
    render() {
        return (           
            <div className="content_wrapper">
                <h1>Latest notes</h1>
                <ul className="notes">
                    {
                        this.props.notes.map( (note) => {
                            return <Note note={note} />
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Notes;
