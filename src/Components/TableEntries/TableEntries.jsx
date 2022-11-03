import React from "react";
import EditButton from "../EditButton/EditButton";


const TableEntries = ({song, songs, setSongs, i}) => {
    return ( 
        <>
        <td>{song.title}</td>
        <td>{song.album}</td>
        <td>{song.artist}</td>
        <td>{song.genre}</td>
        <td>{song.release_date}</td>
        <td><EditButton song={song} songs={songs} setSongs={setSongs} i={i}/></td>
        </>
     );
}
 
export default TableEntries;