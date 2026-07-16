import { useState } from 'react';

function Reviews(){
const [reviews, setReviews] = useState([]);
const [text, setText] =useState("");

    return(
        <div>
            <input
            value={text}
            onChange={(e) => setText(e.target.value)} 
            placeholder='Write review here'
            />
            

        </div>
    )
};
export default Reviews;