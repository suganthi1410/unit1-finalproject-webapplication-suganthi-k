import { kidsLevels } from './mockdata/LevelData';

function KidsLevels() {
    return(
        <div>
            <h3>Kids Levels</h3>
            {kidsLevels.map((item, index) =>(
                <section key={index}>
                    <h4>{item.level}</h4>
                    <p>{item.description}</p>
                </section>
            )
        )}
        </div>
    );
}
export default KidsLevels;