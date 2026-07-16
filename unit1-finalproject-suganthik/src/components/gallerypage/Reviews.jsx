import { useState } from "react";
import ReusableButton from "../ReusableButton";

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [text, setText] = useState("");

  /*function for adding Review */
  const addReview = () => {
    if (!text.trim()) return;
    setReviews([...reviews, { id: Date.now(), text }]);
    setText("");
  };

  const deleteReview = (id) => {
    setReviews(reviews.filter((r) => r.id !== id));
  };

  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write review here"
      />
      <ReusableButton label="Add Review" />
      <ul>
        {reviews.map(({ id, text }) => (
          <li key={id}>
            {text}
            <ReusableButton label="Delete" onClick={() => deleteReview(id)} />
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Reviews;
