import "./App.css";

function App() {
  const throwError = () => {
    throw new Error(
      `this is error from sentry test ${process.env.REACT_APP_ENV}`
    );
  };

  return (
    <div className="App">
      <button onClick={throwError}>Throw Error</button>
    </div>
  );
}

export default App;
