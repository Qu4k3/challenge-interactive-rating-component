import './App.scss';

function App() {

  let rating = [];
  for (var i = 0; i < 5; i++) {
    rating.push(<li>{i}</li>);
  }

  return (
    <div className="card">
      <img src={process.env.PUBLIC_URL + "/assets/icon-star.svg"} className="star" alt="star" />
      <h2 className="title">How did we do?</h2>
      <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
      <ul className="rating">
        {rating}
      </ul>
      <button className="btn">Submit</button>
    </div>
  );
}

export default App;
