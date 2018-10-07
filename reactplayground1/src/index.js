import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

var namevar = "Magic Mike";
var namevar = "Georgie";
console.log("namevar", namevar); // Example of the var characteristic of allowing redefinition

let namelet = "Croad";
namelet = "Drunkard";
console.log("namelet", namelet); // Example of redefinition

function square(x) {
  return x * x;
} //ES05 syntax function

const squareArrow = x => {
  //example of arrow function
  return x * x;
};

const squarerArrow = x => x * x;

const getFirstName = fullName => {
  return fullName.split(" ")[0];
};

const getLastName = fullName => fullName.split(" ")[1];

function App() {
  return (
    <div className="App">
      <h1> React Playground 1</h1>
      <h2>Created to Explore Variables and Arrow Functions in ES06 </h2>
      <br />
      <div class="main">
        <h3>ES06 Variables: Let and Const </h3>
        <p>
          {namevar} is displayed because ES05 and the var standard enable
          redefinition{" "}
        </p>
        <p>
          Let does not allow redefinition but it does allow for reassignment as
          seen here... {namelet}
        </p>
        <p>
          {" "}
          The const = constant and is used as the defaulkt variable in most
          situations to prevent the program from doing random switcheroos or
          hogging up tons of memory on the client side
        </p>{" "}
      </div>
      <br />
      <div class="aside">
        <h3>Arrow Functions</h3>
        <p>
          The ES05 function definition allows for naming the function outside of
          its definitions within a namedvariable. This was made via an ES05
          squaring function: {square(9)} (square of 9){" "}
        </p>
        <p>
          The ES06 arrow function has a generally more compact syntax and is
          anonymous. Not like the ineffective computer hackers, anonymous here
          means that there is not a name assigned to the function. It is just
          contained within a named variable.{" "}
        </p>
        <p>
          This is the result of squaring 4 with an arrow function:{" "}
          {squareArrow(4)}{" "}
        </p>
        <p>
          {" "}
          There is also an expression syntax for the arrow function that enables
          the expression to be written out without needing to do the burdensome
          typing of square brackets or the word return.{" "}
        </p>
        <p>
          This is the result of squaring 22 via arrow function using expression
          syntax: {squarerArrow(22)}
        </p>
      </div>
      <div class="codingchallenge">
        <div class="rules">
          <h2> Challenge Code</h2>
          <h4 class="leftTitle">Challenge Rules</h4>
          <ul>
            <li>Get First Name From a String</li>
            <li> Create Regular Arrow Function </li>
            <li> Create Arrow Function with Expression Syntax </li>
          </ul>
        </div>
        <div class="solution">
          <h4>Solution</h4>
          <p>
            {getFirstName("Alex Tribeck")} is printed because the function
            "getFirstName" cut off the last name, Tribeck!{" "}
          </p>
          <p>
            Using the expression syntax but unmodified logic, the result is the
            same. As seen here: {getLastName("Alex Tribeck")}{" "}
          </p>
        </div>
        <div class="arrowMore" />
      </div>
      <div class="footer">
        <h5>
          As you can see clearly from the above examples, React introduces new
          concepts and while it may seem overwhelming, they are not radically
          hard concepts to master. The hardest part is setting up your
          development environment!
        </h5>{" "}
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
