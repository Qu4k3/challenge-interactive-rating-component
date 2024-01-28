import { useState, useEffect } from 'react';
import './App.scss';

function App() {

  const [isSubmitted, setSubmitted] = useState(false);
  const [rating, setRating] = useState();
  const [active, setActive] = useState(null);

  const handleClick = (value) => {
    setRating(value);
    setActive(value);
  }

  const maxRating = 5;
  let ratingElements = [];
  
  for (let i = 1; i <= maxRating; i++) {
    ratingElements.push(
      <li
        key={i}
        value={i}
        onClick={event => handleClick(event.target.value)}
        className={active === i ? "active" : ""}>
          {i}
      </li>
    );
  }

  useEffect(() => {
    rating && isSubmitted && setSubmitted(true);
  }, [rating, isSubmitted]);

  return (
    !isSubmitted ?
      <div className="card">
        <img src={process.env.PUBLIC_URL + "/assets/icon-star.svg"} className="star" alt="star" />
        <h2 className="title">How did we do?</h2>
        <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
        <ul className="rating">
          {ratingElements}
        </ul>
        <button onClick={() => {rating && setSubmitted(true)}} className="btn">Submit</button>
      </div>
      :
      <div className="card thank-you">
        <img src={process.env.PUBLIC_URL + "/assets/illustration-thank-you.svg"} className="thank-you" alt="thank-you" />
        <span className="submitted-result">You selected {rating} out of {maxRating}</span>
        <h2 className="title">Thank you!</h2>
        <p>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
      </div>
  );
}

export default App;
