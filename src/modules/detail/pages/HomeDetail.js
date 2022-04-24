import React, { useState, useEffect } from "react";

const HomeDetail = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="detail">
      <header className="App-header">
        <p>xxxx</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </header>
    </div>
  );
};

export default HomeDetail;
