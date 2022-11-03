import React, { useState } from 'react';
import {Form} from 'react-bootstrap';
import DropdownList from "react-widgets/DropdownList";

const SearchBar = ({songs, setSongs, getAllSongs}) => {
    const [search,setSearch] = useState('');
    const [criteria,setCriteria] = useState('All');

    const handleSubmit = (event) => {
        event.preventDefault();
        searchAll();
        switch(criteria) {
            case 'Title':
                searchTitle();
                return;
            case 'Artist':
                searchArtist();
                return;
            case 'Album':
                searchAlbum();
                return;
            case 'Genre' :
                searchGenre();
                return;
            case 'Date':
                searchDate();
                return;
            default:
                searchAll();
                return;
        }
    }

    const searchGenre = () => {
        let results = songs.filter((song) => {return song.Genre.toLowerCase().includes(search.toLowerCase())});
        setSongs(results);
    }
    const searchAlbum = () => {
        let results = songs.filter((song) => {return song.album.toLowerCase().includes(search.toLowerCase())});
        setSongs(results);
    }
    const searchArtist = () => {
        let results = songs.filter((song) => {return song.artist.toLowerCase().includes(search.toLowerCase())});
        setSongs(results);
    }
    const searchTitle = () => {
        let results = songs.filter((song) => {return song.title.toLowerCase().includes(search.toLowerCase())});
        setSongs(results);
    }
    const searchDate = () => {

        let results = songs.filter((song)=> {return song.release_date == (search)})
        setSongs(results);
    }

    const searchAll = () => {
        let results = songs.filter((song) => {return song.title.toLowerCase().includes(search.toLowerCase()) ||
            song.artist.toLowerCase().includes(search.toLowerCase())|| 
            song.release_date == (search) ||
            song.album.toLowerCase().includes(search.toLowerCase())|| 
            song.genre.toLowerCase().includes(search.toLowerCase())});
        setSongs(results);
    }

    return ( 
        <div>
            <Form onSubmit = {handleSubmit}>
                <Form.Group>
                    <Form.Control  placeholder = 'Looking for a song?' type = 'string' value = {search} onChange = {(event)=> setSearch(event.target.value)}/>
                </Form.Group>
                <button type = 'submit'>Search</button>
                <button onClick = {getAllSongs}>New Search</button>
            </Form>
            <div>
            <div>Search Category</div>
            <DropdownList
                value = {criteria}
                data={["All", "Title", "Artist", "Album",'Genre', 'Date']}
                onChange = {criteria => setCriteria(criteria)}
            />
            </div>
        </div>
     );
}
 
export default SearchBar;