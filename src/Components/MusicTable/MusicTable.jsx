import NewSong from "../NewSong/NewSong2";
import TableEntries from "../TableEntries/TableEntries";



const MusicTable = ({songs,getAllSongs}) => {
    return ( 
        <table className="table table-dark table-striped table-bordered table-hover ">
            <thead className="table thead-light">
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
                        <TableEntries song={song} songs={songs} getAllSongs={getAllSongs}/>
                    </tr>
                    )})}
            </tbody>
        </table>
     );
}
 
export default MusicTable;