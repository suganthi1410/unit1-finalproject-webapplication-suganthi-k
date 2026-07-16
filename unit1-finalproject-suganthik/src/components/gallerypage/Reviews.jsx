import { useState } from "react";

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [text, setText] = useState("");

  /*function for adding Review */
  const addReview = () => {
    if (!text.trim()) return;
    setReviews([...reviews, { id: Date.now(), text }]);
    setText("");
  }

  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write review here"
      />
      <button onClick={addReview}>Add Review</button>
    </div>
  );
}
export default Reviews;
