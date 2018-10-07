import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

let count = 0;
const addOne = () => {
  count++;
  renderCounterApp();
};
const minusOne = () => {
  count--;
  renderCounterApp();
};
const reset = () => {
  count = 0;
  renderCounterApp();
};

const renderCounterApp = () => {
  function App() {
    return (
      <div className="App">
        <h1>Playground 2</h1>
        <br />
        <h2>The Counter App</h2>
        <h2> Count: {count}</h2>
        <button onClick={minusOne}>-1</button>
        <button onClick={reset}>RESET</button>
        <button onClick={addOne}>+1</button>\
        <br />
        <br />
        <br />
        <br />
        <br />
        <p>
          Above is a simple React App that accepts clicks to modify the above
          counter! While not of much practical use it is the next stage in
          developing my ReactJS skills.
        </p>
                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" />

      </div>
    );
  }
  ReactDOM.render(<App />, rootElement);
};

const rootElement = document.getElementById("root");
renderCounterApp();
