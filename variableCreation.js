//Create a variable whose name is inside a varaible as a value and assign "Javascript is a Server side language"
var name = "Javascript";

// console.log(Javacript); //Javascript is a value to variable name question is to create a variable of the value assigned to another variable withou using var


//STEP 1

// window[name] = "Javascript is a Server side language"; //throws not defined because In JavaScript, the window object is specific to the browser environment and is not available in other environments such as Node.js or certain JavaScript runtime environments like CommonJS or AMD so use eval().


// console.log(Javascript);


//STEP 2

eval(`${name}="Javascript is a Server side language"`);
console.log(Javascript); 

// In a browser environment and want to dynamically create a global variable using a string as the variable name, you can't directly access window in environments that don't support it. Instead, you can use eval() to evaluate the string as code in the global context. However, eval() is generally discouraged due to security risks and potential performance issues.