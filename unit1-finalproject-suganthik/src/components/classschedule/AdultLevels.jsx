import { adultsLevels } from './mockdata/LevelData';

function AdultsLevels() {
    return(
        <div className= "level-card">
            <h3 className= "adult-level-title">Adults Levels</h3>
            {adultsLevels.map((item, index) =>(
                <section key={index} className= "adult-card">
                    <h4 className= "level-title">{item.level}</h4>
                    <p className= "level-description">{item.description}</p>
                </section>
            )
        )}
        </div>
    );
}
export default AdultsLevels;