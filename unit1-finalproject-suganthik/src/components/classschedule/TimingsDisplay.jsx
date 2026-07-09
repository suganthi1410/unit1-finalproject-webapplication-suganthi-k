function TimingsDisplay({ items}) {
    return(
        <div>
            {items.map((timingInfo, index) => (
                 <div key={index}>
                 <p>Day:{timingInfo.day}</p>
                 <p>Time:{timingInfo.time}</p>
                 <p>Fee:{timingInfo.fee}</p>
                </div>
                ))}
        </div>
    );
}       
             
   
export default TimingsDisplay;
