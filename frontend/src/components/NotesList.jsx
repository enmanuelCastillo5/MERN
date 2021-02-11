import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { Row, Col, Card, Icon, Button } from "react-materialize";
import { format } from 'timeago.js'
class NotesList extends Component {
    state = {
        notes: []
    }
    componentDidMount(){
        this.getNotes();
    }
    deleteNote = async (id) => {
        await axios.delete(`http://localhost:4000/api/notes/${id}`)
        this.getNotes()
    }

    async getNotes(){
        const res = await axios.get('http://localhost:4000/api/notes')
        this.setState({notes: res.data})
    }
    render(){
    return (
            <Row>
                <Col
                    m={6}
                    s={12}
                >
            {
                this.state.notes.map(note => (
                                <Card
                                key={note._id}
                                actions={[
                                    <Link key='1' to={`/edit/${note._id}`} className='green-text'>
                                        Actualizar
                                    </Link>,
                                    <Button key='2'
                                    className='red lighten-2'
                                        node="button"
                                        style={{
                                        marginRight: '5px'
                                        }}
                                        waves="light"
                                        onClick={() => this.deleteNote(note._id)}
                                    >
                                        Eliminar
                                    </Button>
                                ]}
                                className="blue-grey darken-1"
                                closeIcon={<Icon>close</Icon>}
                                revealIcon={<Icon>more_vert</Icon>}
                                textClassName="white-text"
                                title={note.title}
                                >
                                <p>{note.content}</p>
                                <br/>
                                <p>{note.author}</p>
                                <br/>
                                <p className="right-align">{format(note.date)}</p>
                                </Card>
                ))
            }
            </Col>
            </Row>
    )
}
}

export default NotesList;