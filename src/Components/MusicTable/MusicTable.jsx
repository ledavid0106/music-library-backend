import TableEntries from "../TableEntries/TableEntries";



const MusicTable = (songs) => {
    return ( 
        <table>
            <thead>
                <tr>
                    <th>Song Number</th>
                    <th>Title</th>
                    <th>Album</th>
                    <th>Artist</th>
                    <th>Genre</th>
                    <th>Release Date</th>
                </tr>
            </thead>
            <tbody>
                {songs.songs.map((song)=> {
                    return (
                    <tr>
                        <TableEntries song={song} songs={songs}/>
                    </tr>
                    )})}
            </tbody>
        </table>
     );
}
 
export default MusicTable;