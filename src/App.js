const App = () => {
  return (
    <div className="tc">
      <h1 className="pa5 ma3">
        This is the showcase of react projects. It's a good way to learn React
        with doing plenty projects.
      </h1>
      <div className="tc pa3 ma2 bw5 br4 shadow-5 dib">
        <img src="/images/07-reviews-resize.gif" alt="" />
        <div>
          <h3>Reviews</h3>
          <h5>Show slider automatically in 3 seconds.</h5>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://unsplash.com/"
            style={{ textDecoration: "none", padding: "10px" }}
          >
            demo
          </a>
          <a
            href="abc"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              padding: "10px",
            }}
          >
            code
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
