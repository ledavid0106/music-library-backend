import axios from "axios";
import React, { useState } from 'react';
import { Form } from "react-bootstrap";
import { Modal } from "react-bootstrap";


const NewSong = ({getAllSongs}) => {

    const [show,setShow] = useState(false);
    const [title,setTitle] = useState('');
    const [album,setAlbum] = useState('');
    const [artist,setArtist] = useState('');
    const [genre,setGenre] = useState('');
    const [releaseDate,setDate] = useState('');
    const handleShow = () =>setShow(true);
    const handleClose = () =>setShow(false);

    async function newSong(song){
        const response = await axios.post('http://127.0.0.1:8000/api/music/',song)
        if (response.status === 201){
            await getAllSongs()
        }
    }

    const handleSubmit = () => {
        const newSong2 = {title:title,artist:artist,album:album,release_date:releaseDate,genre:genre}
        newSong(newSong2)
        handleClose()
    }

    return (
        <>
            <button onClick = {handleShow}>Add Song</button>   
            <Modal show = {show} onHide = {handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Enter Song Information</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className = 'mb-3'>
                        <Form.Group className = 'mb-3' >
                            <Form.Label> Title</Form.Label>
                            <Form.Control type = 'string' value = {title} onChange = {(event)=> setTitle(event.target.value)}/> 
                        </Form.Group>
                        <Form.Group className = 'mb-3' >
                            <Form.Label> Album</Form.Label>
                            <Form.Control type = 'string' value = {album} onChange = {(event)=> setAlbum(event.target.value)}/> 
                        </Form.Group>
                        <Form.Group className = 'mb-3' >
                            <Form.Label> Artist</Form.Label>
                            <Form.Control type = 'string' value = {artist} onChange = {(event)=> setArtist(event.target.value)}/> 
                        </Form.Group>
                        <Form.Group className = 'mb-3' >
                            <Form.Label> Genre</Form.Label>
                            <Form.Control type = 'string' value = {genre} onChange = {(event)=> setGenre(event.target.value)}/> 
                        </Form.Group>
                        <Form.Group className = 'mb-3' >
                            <Form.Label>Release Date</Form.Label>
                            <Form.Control type = 'date' value = {releaseDate} onChange = {(event)=> setDate(event.target.value)}/> 
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <button varriant = 'secondary' onClick ={handleClose}>Cancel</button>
                    <button type = 'submit' varriant = 'primary' onClick = {handleSubmit}>Add Song</button>
                </Modal.Footer>
            </Modal>
        </>
        
     );
}
 
export default NewSong;