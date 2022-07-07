import { useState } from 'react';
import './App.scss';

function App() {

  const [isSubmitted, setSubmitted] = useState(true);

  let rating = [];
  for (var i = 0; i < 5; i++) {
    rating.push(<li>{i}</li>);
  }

  return (
    !isSubmitted ?
      <div className="card">
        <img src={process.env.PUBLIC_URL + "/assets/icon-star.svg"} className="star" alt="star" />
        <h2 className="title">How did we do?</h2>
        <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
        <ul className="rating">
          {rating}
        </ul>
        <button className="btn">Submit</button>
      </div>
      :
      <div className="card thank-you">
        <img src={process.env.PUBLIC_URL + "/assets/illustration-thank-you.svg"} className="thank-you" alt="thank-you" />
        <span className="submitted-result">You selected 4 out of 5</span>
        <h2 className="title">Thank you!</h2>
        <p>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
      </div>
  );
}

export default App;
