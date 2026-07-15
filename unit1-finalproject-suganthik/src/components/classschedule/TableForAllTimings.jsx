import timings from './mockdata/ClassTimingsData.js';

function TableForAllTimings(){
    return(
        <div>
            <h3>Class Timings for Kids and Adults</h3>
            <table>
                <thead>
                    <tr> 
                        <th>Type</th>
                        <th> Level</th>
                        <th> Day</th>
                        <th>Time</th>
                        <th>fee</th>
                    </tr>
                </thead>

                <tbody>
{timings.map((item, index) =>(
   <tr key={index}>
    <td>{item.type}</td>
    <td>{item.level}</td>
    <td>{item.Day}</td>
    <td>{item.time}</td>
    <td>{item.fee}</td>
    </tr>
))}

                </tbody>
            </table>

        </div>
    );
}
export default TableForAllTimings;
