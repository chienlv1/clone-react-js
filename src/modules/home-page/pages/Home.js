import React, { useState, useEffect } from "react";
import "../styles.scss";

const Home = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="home">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React {count}
        </a>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </header>
    </div>
  );
};

export default Home;
