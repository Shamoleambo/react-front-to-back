import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);
  let ratingsSum = feedback.reduce(
    (acc, feedback) => (acc += feedback.rating),
    0
  );
  let ratingsAverage = (ratingsSum / feedback.length)
    .toFixed(2)
    .replace(/[.,]00$/, "");

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average rating: {isNaN(ratingsAverage) ? 0 : ratingsAverage}</h4>
    </div>
  );
}

export default FeedbackStats;
