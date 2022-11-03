import React, { useState } from 'react';





const NewSong = (props) => {

    const [title, setTitle] = useState("")
    const [album, setAlbum] = useState("")
    const [artist, setArtist] = useState("")
    const [genre, setGenre] = useState("")
    const [date, setDate] = useState("")

    function handleSubmit(event) {
        event.preventDefault();
        let newEntry = {
            title: title,
            album: album,
            artist: artist,
            genre: genre,
            date: date,
        }
        console.log(newEntry)
        props.addNewSongProperty(newEntry)
    }


    return ( 
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input type='text' value={title} onChange={(event)=>setTitle(event.target.value)}/>
            <label>Album</label>
            <input type='text' value={album} onChange={(event)=>setAlbum(event.target.value)}/>
            <label>Artist</label>
            <input type='text' value={artist} onChange={(event)=>setArtist(event.target.value)}/>
            <label>Genre</label>
            <input type='text' value={genre} onChange={(event)=>setGenre(event.target.value)}/>
            <label>Release Date</label>
            <input type='date' value={date}  onChange={(event)=>setDate(event.target.value)}/>
            <button type="submit">Add New Song</button>
        </form>
     );
}
 
export default NewSong;