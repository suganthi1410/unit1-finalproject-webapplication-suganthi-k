import { adultsLevels } from './mockdata/LevelData';

function AdultsLevels() {
    return(
        <div>
            <h3>Adults Levels</h3>
            {adultsLevels.map((item, index) =>(
                <section key={index}>
                    <h4>{item.level}</h4>
                    <p>{item.description}</p>
                </section>
            )
        )}
        </div>
    );
}
export default AdultsLevels;