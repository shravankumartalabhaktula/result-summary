import './app.css';

function App() {
  return (
    <>
      <div className="center main">
        <div className="result">
          <div className="result-inner">
            <div>Your Result</div>
            <div>76 of 100</div>
            <div>Great</div>
            <div>
              You scored higher than 65% of the people who have taken these
              tests.
            </div>
          </div>
        </div>
        <div className="summary">
          <div>Summary</div>
          <div>Reaction 80 / 100</div>
          <div>Memory 92 / 100</div>
          <div>Verbal 61 / 100</div>
          <div>Visual 72 / 100 </div>
          <div>Continue</div>
        </div>
      </div>
    </>
  );
}

export default App;
