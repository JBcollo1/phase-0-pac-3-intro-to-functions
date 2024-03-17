// Follow along with the examples here
function doNothing(){}
function sayHello(){
    console.log("Hello");
}
sayHello()

function sayHelloToGuadalupe(){
    console.log("Hello, Guadalupe")
}
sayHelloToGuadalupe()

function sayHelloToLiz(){
    console.log("Hello, Liz")
}
sayHelloToLiz()

function sayHelloToSamip() {
    console.log("Hello, Samip");
  }
  sayHelloToSamip()

  function doSomething(thing){
    console.log(thing);
  }
  doSomething("Empty the space")
  
  function sayHelloTo(firstName ){
    console.log(`Hello, ${firstName}`);
  }
  sayHelloTo("John doe")
  sayHelloTo("Jane")
  sayHelloTo("Anita")
  sayHelloTo("Sharon")

  function say(greeting, firstName){
    console.log("firstName: ", firstName);
    console.log("greeting: ", greeting);
    console.log(`${greeting}, ${firstName}`)
  }
  say("Good morning", "Ramón")


  function add(x,y,z,a,s,d){
    return (x + y  + z + a + s + d) 
  }
  console.log(add(2,4,5,6,7,8))

  function say(greeting, firstName) {
    console.log("I was called!")
    return `${greeting}, ${firstName}!`;
  }
  console.log(say("Hello, Ram"))