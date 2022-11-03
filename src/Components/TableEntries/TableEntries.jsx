import React from "react";


const TableEntries = ({song}) => {
    return ( 
        <>
        <td>{song.title}</td>
        <td>{song.album}</td>
        <td>{song.artist}</td>
        <td>{song.genre}</td>
        <td>{song.release_date}</td>
        </>
     );
}
 
export default TableEntries;