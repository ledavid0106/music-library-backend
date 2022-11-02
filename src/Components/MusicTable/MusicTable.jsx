


const MusicTable = (props) => {
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
                {props.parentEntries.map((entry, index)=> {
                    return (
                    <tr>
                        <td>{index + 1 }</td>
                        <td>{entry.title}</td>
                        <td>{entry.artist}</td>
                    </tr>
                    )})}
            </tbody>
        </table>
     );
}
 
export default MusicTable;