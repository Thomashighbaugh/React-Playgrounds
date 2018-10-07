# React (Udemy Course)

Ride the tiger, make the example pages and post them. 
2 Months of Docker, Jenkins, Ansible and Back End Later, this seems much easier. Just saying. 

## React CDN Links

    <script src="https://unpkg.com@16.0.0/umd/react.development.js">
    <script src="https://unpkg.com/react-dom@16.0.0/umd/react-dom.development.js">

- Place above tags within the body of the html file
- Using the console on chrome, these can be checked for (JetBrains also does this and locally downloads the content)

## Custom JS file HTML tag

    <script src="/scripts/app.js">

- This requires a script folder in

## HTML File

    <!DOCTYPE html>
    <html>
    <head> 
    <meta charset="UTF-8">
    <title>The Indecision App: Or My Ex In the Machine!</title>
    </head> 
    
    <body>
    <div id="app></div>
    <script src="https://unpkg.com@16.0.0/umd/react.development.js">
    <script src="https://unpkg.com/react-dom@16.0.0/umd/react-dom.development.js">
    <script src="/scripts/app.js">
    </body>
    
    </html>

## Custom Javascript File with JSX

    console.log('App.js is running!');
    
    //JSX - Javascript XML 
    
    var template = <p>This is JSX from app.js </p>;
    
    var appRoot=document.getElementById('app');

- JSX is a language extension that is included with React
    - Similar to scss to css
- React DOM = display object model = also prevelant in HTML5 is a reference to how the code objects display on screen
- JSX extension will nto render naturally in the browser. It instead must be transpiled down into regular JS
- Babel is the transpiler of choice - commonly used to take ES6 or ES 7 and transpiles down into ES5
- possible to paste the code from the demo into editor but the more elegant method would instead be to use JETBRAINS IDE or using yarn install it in project or even globally!

## Babel Presets

- Installing presets enable use of JSX in code without using individual plug ins
- Using specific versions of Babel create consistency with tutorial and prevent
- yarn init sets up yarn in the project itself with a package.json
- package.json specifies all dependencies

    # yarn global add babel-cli@6.24.1
    # yarn init
    # yarn add babel-preset-react@6.24.1 babel-preset-env@1.5.2

## Working With Babel

- All of the JSX will be typed into a file in the source (src) folder
- app.js in the scripts file will host the transformed JSX > ES05
- 

    # babel /path/to/code/src/app.js --out-file=public/scripts/app.js --presets=env,react 
    

## Wrapper Div

- Insure that there is JSX support in your editor/IDE
- Wrapper Div - all jsx that is written must be written within a single element in order to be compiled
    - single root element is all that is possible
- JSX is still valid when spaced out (see example code)

    console.log('Below you will see an example of a wrapper div');
    
    //JSX - Javascript XML
    var template = (
    	<div>
    		<h1>Wrapper Divs!</h1> 
    		<p>They don't suck as much as most rappers</p> 
    	</div>
    );
    var appRoot = document.getElementById('app');
    
    ReactDOM.render(template,appRoot); 

## Course Coding Challenge

    //JSX Challenge I 
    var template2 = (
    	 <div>
    			<h1>TLH TESTING</h1>
    			<p>Too old to watch these videos without falling asleep </p>
    			<p>Location: Butt Ugly Hayward, California</p>	
    </div> //ends the wrapper div
    )

- Make sure to change called variable on ReactDOM fucntional Call

## JSX Expressions

- Data being changed as is the display according to various values from within variables.
- Static websites are not web apps but web sites
- Web Apps make use of the various input from outside to render some useful result (databases are one use case)
- Adding {} inside the varios tags makes it responsive.

/code

## Coding Challenge 2

    var example = {
    title: 'Title',
    subtitle: 'Subtitle' };
    var app = (
    	<div>
    		<h1>{example.title}</h1>
    		<h2> {example.subtitle} </h2>
    	</div>
    )

## Conditional Logic

- The same as in other contexts, no new syntax or logic
    - if statements
    - ternary operators
    - logical and conditional operators
- if statements called from within the expression (where the html is calling variables in {}) not as an if statement within the {}

    var user={
    	name: 'Rocky'
    	age: 99;
    
    }
    function getLocal(location){
    	if (location){
    		return location; 
    }else{
    		return unknown;} //If it is undefined (as in nothing here) than nothing will display regarding location
    }
    
    var template = ( 
    <div>
    <h1> If Statements {user.name] </h1>
    <h2>Pickled Old creature at {user.age}</h2>
    <p>Location:{getLocation(user.location)}</p> //curly braces here enable JSX function to be called within the html (which helps blur functionality)
    );

- JSX can be added within {} in the function in which you are inputting all of the html in
- undefined does not render anything to the screen (as seen below)

    var user = {
    name: 'alex',
    age: 26,
    location:'Bangkok'; 
    };
    
    function getLocation(location) {
    	if (location) {
    		return <p>Location: {location} </p>;
    	}
    }
    

## Ternary Operator

- false ? if-this : not-this
- can be used in the html portion of the code

    var user = {
    age:26
    };
    
    functiongetLocation(location) {
    	if(location){
    		return <p> Location: {location}</p>;
    	}
    }
    
    var templateTwo = (
    <div> 
    	<h1>{user.name ? user.name : 'Anonymous'} </h1> // if there is not a valid string it prints anonymous 
    	<p>Age: {user.age} </p> 
    	{getLocation(user.location)}
    </div>
    );
    
    var appRoot = document.getElementById('app');
    
    ReactDOM.render(templateTwo, appRoot);

- undefined null and boolean are all ignored by the JSX

## And Operator

- if first value is false, then the second value is ignored
- good for checking the age and displaying info based on age

    var templateTwo = (
    <div> 
    	<h1>{user.name ? user.name : 'Anonymous'}
    	{(user.name && user.age >=18) && <p>Age: {user.age}</p>  //if age is greater than or equal to 18, print. If not there will be noting from this line that renders
    	{getLocation(user.location)} 
    </div>
    );

## Coding Challenge

    //Render the subtitle and p tag if the subtitle exists 
    //render new p tag with "here are options" or "no options"
    
     app = {
    	title: 'Indecision App',
    	subtitle: 'Put your life in the hands of a computer'
    	options:['One','Two']
    };
    var template = (
    <div> 
    	<h1>{app.title}</h1>
    	<p>{app.subtitle}</p>
    
    <ol>
    	<li> Item one</li>
    	<li> Item two</li>
    </ol>
    
    var user = {
    	name: 'Alex',
    	age: 90,
    	location: 'Moose Landing'
    };
    
    functiongetLocation(location) {
    	if(location){
    		return <p> Location: {location}</p>;
    	}
    }
    
    var templateTwo = (
    <div> 
    	<h1>{user.name ? user.name : 'Anonymous'}
    	{(app.subtitle && <p>{app.subtitle}</p>)}
    	{(user.name && user.age >=18) && <p>Age: {user.age}</p>  //if age is greater than or equal to 18, print. If not there will be noting from this line that renders
    	<p>{app.Options.length > 0 ? 'Your Options Are... ':'Your fresh out of options there, bud!'}</p>
    	{getLocation(user.location)} 
    </div>
    );
    
    var appRoot = document.getElementById('app');
    
    ReactDOM.render(templateTwo, appRoot);

## ES06 let and const variable definitions

- used in place with var
    - var is easily accidently misused
    - make sure that Babel is transpiling the intended file if you are using a playground
    - ES06 will not allow the redefinition of a variable but you can reassign
    - const cannot be reassigned (hence the name constant)
    - let and const are all function scoped (cannot call a variable from a function in other function)
    - block level scoped - bound to code block its defined as(unlike var)
    - if the variable is necessary in other locations than define above
        - block level scoping helps to tame resource heavy tendency in JS
    - const will be course default for variable definition (prevents random switch-er-oos)
    - let will be used for variables with changing values and switched from const
        - this creates "defensive" code structure and helps prevent the infampous bloat that JS seems prone to causing (for me at least)
        - var will not be used again and is no beuno for modern react programming (so DO NOT USE IT)

    ## Coding Challenge

    //Render the subtitle and p tag if the subtitle exists 
    //render new p tag with "here are options" or "no options"
    
    const app = {
    	title: 'Indecision App',
    	subtitle: 'Put your life in the hands of a computer'
    	options:['One','Two']
    };
    const template = (
    <div> 
    	<h1>{app.title}</h1>
    	<p>{app.subtitle}</p>
    
    <ol>
    	<li> Item one</li>
    	<li> Item two</li>
    </ol>
    
    const user = {
    	name: 'Alex',
    	age: 90,
    	location: 'Moose Landing'
    };
    
    functiongetLocation(location) {
    	if(location){
    		return <p> Location: {location}</p>;
    	}
    }
    
    const templateTwo = (
    <div> 
    	<h1>{user.name ? user.name : 'Anonymous'}
    	{(app.subtitle && <p>{app.subtitle}</p>)}
    	{(user.name && user.age >=18) && <p>Age: {user.age}</p>  //if age is greater than or equal to 18, print. If not there will be noting from this line that renders
    	<p>{app.Options.length > 0 ? 'Your Options Are... ':'Your fresh out of options there, bud!'}</p>
    	{getLocation(user.location)} 
    </div>
    );
    
    const appRoot = document.getElementById('app');
    
    ReactDOM.render(templateTwo, appRoot);

- all the variables were assigned const cause they are never reassigned

## ES06 Arrow Function

- arrow functions cannot be named
- in certain situations the arrow function enables more concise functions due to concise syntax
- expression syntax doesn't require return~!

    const getFirstName = fullName => {
      return fullName.split(" ")[0];
    };
    
    const getLastName = fullName => fullName.split(" ")[1];

- arguments object - no longer bound

    //Arguments
    //ES05
    const add = function (a,b) {
    console.log(arguments);
    return a + b; };
    console.log(add(55,1);
    }
    
    //ES06
    const add => (a,b) {
    console.log(arguments); //throws error here as arguments are undefined (hence the bullet point above, no longer BOUND)
    return a + b; };
    console.log(add(55,1);
    }
    
    //This
    
    //