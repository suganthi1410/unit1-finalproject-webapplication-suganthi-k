import { kidsLevels } from './mockdata/LevelData';

function KidsLevels() {
    return(
        <div className= "level-card">
            <h3 className="kid-level-title">Kids Levels</h3>
            {kidsLevels.map((item, index) =>(
                <section key={index} className="kid-card">
                    <h4 className="level-title">{item.level}</h4>
                    <p className="level-description">{item.description}</p>
                </section>
            )
        )}
        </div>
    );
}
export default KidsLevels;