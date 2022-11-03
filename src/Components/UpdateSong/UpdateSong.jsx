import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';



const UpdateSong = ({updateSong, song, songs, setSongs}) => {
    const [show,setShow] = useState(false);
    const [title,setTitle] = useState(song.title);
    const [album,setAlbum] = useState(song.album);
    const [artist,setArtist] = useState(song.artist);
    const [genre,setGenre] = useState(song.genre);
    const [releaseDate,setDate] = useState(song.release_date);
    const handleShow = () =>setShow(true);
    const handleClose = () =>setShow(false);

    useEffect(() => {
        setTitle(song.title);
        setArtist(song.artist);
        setAlbum(song.album);
        setGenre(song.genre);
        setDate(song.release_date)
    },[song])

    const handleSubmit = () => {
        const updatedSong = {id:song.id,title:title,artist:artist,album:album,release_date:releaseDate,genre:genre}
        updateSong(updatedSong);
        handleClose();
    }
    return ( 
        <>
            <button onClick = {handleShow}>Update</button>
            <Modal show = {show} onHide = {handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Enter Song Information</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className = 'mb-3'>
                        <Form.Group  className = 'mb-3' >
                            <Form.Label> Title</Form.Label>
                            <Form.Control type = 'string' value = {title} onChange = {(event)=> setTitle(event.target.value)}/> 
                        </Form.Group>
                        <Form.Group  className = 'mb-3' >
                            <Form.Label> Album</Form.Label>
                            <Form.Control type = 'string' value = {album} onChange = {(event)=> setAlbum(event.target.value)}/> 
                        </Form.Group>
                        <Form.Group  className = 'mb-3' >
                            <Form.Label> Artist</Form.Label>
                            <Form.Control type = 'string' value = {artist} onChange = {(event)=> setArtist(event.target.value)}/> 
                        </Form.Group>
                        <Form.Group  className = 'mb-3' >
                            <Form.Label> Genre</Form.Label>
                            <Form.Control type = 'string' value = {genre} onChange = {(event)=> setGenre(event.target.value)}/> 
                        </Form.Group>
                        <Form.Group  className = 'mb-3' >
                            <Form.Label> Release Date</Form.Label>
                            <Form.Control type = 'date' value = {releaseDate} onChange = {(event)=> setDate(event.target.value)}/> 
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <button varriant = 'secondary' onClick ={handleClose}>Cancel</button>
                    <button type = 'submit' varriant = 'primary' onClick = {handleSubmit}>Update Song</button>
                </Modal.Footer>
            </Modal>
        </>
        
     );
}
 
export default UpdateSong;