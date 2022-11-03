import axios from "axios";
import UpdateSong from "../UpdateSong/UpdateSong";
import { Modal } from 'react-bootstrap';
import React, {useState } from 'react';

const EditButton = ({song, setSongs, songs, i}) => {
    const [show,setShow] = useState(false);
    const handleShow = () =>setShow(true);
    const handleClose = () =>setShow(false);

    const deleteClick = () => {
        deleteSong();
        handleClose();
    }


    async function deleteSong(){
        let pinpoint = 'http://127.0.0.1:8000/api/music/' + song.id + "/"
        const response = await axios.delete(pinpoint)
        if (response.status === 204) {
            songs.splice(i,1)
            window.location.reload()
            const tempsongs = [...songs];
            setSongs(tempsongs);
        } 
    }
    async function updateSong(updatedSong){
        let pinpoint = 'http://127.0.0.1:8000/api/music/' + song.id + "/"
        const response = await axios.put(pinpoint,updatedSong)
        if (response.status === 200) {
            songs[i] = updatedSong;
            const tempsongs = [...songs];
            return setSongs(tempsongs);
            
        } 
    }

    return ( 
        <div>
            <UpdateSong updateSong = {updateSong} song = {song} setSongs = {setSongs} songs = {songs}/>
            <button onClick = {handleShow}>Delete</button>
            <Modal show = {show} onHide = {handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Deleting Song</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                   Are you sure you want to delete [{song.title}]?
                </Modal.Body>
                <Modal.Footer>
                    <button varriant = 'secondary' onClick ={handleClose}>Cancel</button>
                    <button type = 'submit' varriant = 'primary' onClick = {deleteClick}>Delete Song</button>
                    
                </Modal.Footer>
            </Modal>


        </div>

        


    );
}
 
export default EditButton;