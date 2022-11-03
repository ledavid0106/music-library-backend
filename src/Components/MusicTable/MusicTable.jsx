import NewSong from "../NewSong/NewSong2";
import TableEntries from "../TableEntries/TableEntries";



const MusicTable = ({songs,getAllSongs}) => {
    return ( 
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Album</th>
                    <th>Artist</th>
                    <th>Genre</th>
                    <th>Release Date</th>
                    <th><NewSong getAllSongs={getAllSongs}/></th>
                </tr>
            </thead>
            <tbody>
                {songs.map((song)=> {
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