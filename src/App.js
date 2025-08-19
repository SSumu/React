// import { Fragment } from "react/jsx-runtime";
import { useState } from "react";
import "./App.css";
import Main from "./Components/Main"; // Here the .js is not necessary for Main file.

// import myData from "./Data/myData"; This is for default export. In this way, only a single one can be exported.
import { myData /*sadeepal*/ } from "./Data/myData"; // This is for Normal export. When only the export is used, it exports as an object. export is used when there are several functional components, components, functions or objects having in a one file.
// import { myData2 } from "./Data/myData"; // When noraml export is used, we must import the component from the name which had given at the component creation. We cannot use other names to import the component in normal export.

// // Object Array
// const myData = [
//   {
//     id: 1234,
//     name: "sadeepal",
//     city: "gampaha",
//     position: "web developer",
//   },
//   {
//     id: 1235,
//     name: "sumudupriya",
//     city: "matara",
//     position: "mern developer",
//   },
//   { id: 1236, name: "niduka", city: "kalutara", position: "react developer" },
//   { id: 1237, name: "nimal", city: "colombo", position: "app developer" },
// ];

// First letter of the name of the functional component must be capitalized.
// This is the third method. In this method, keeping this outside is the correct method.
// In this method we are going to create another component.
// This is a functional component of arrow function.

// const NewBlock = () => {
//   return (
//     <Fragment>
//       {/* Fragment is also work like JSX fragment or empty fragment or empty wrapper(<></>). */}
//       {
//         /*sadeepal*/ myData?.map(({ name, city, position, id }) => {
//           // ? is to check whether that there are data or not. If there are data, then perform the map. Otherwise there are not data, then do not perform the map. This is a condition that can be used in React.
//           // As there are no data, looping of the map() is skiped. Skip means that there is no return from NewBlock.
//           return <Main key={id} name={name} city={city} position={position} />;
//         })
//       }
//     </Fragment>
//   ); // Returns the component.
// };

// This is the second method
// const MainBlock = myData.map(({ name, city, position, id }) => {
//   return <Main key={id} name={name} city={city} position={position} />;
// });

// let myVar = "sadeepal";

// const clickHandle = () => {
//   myVar = "pavan"; // Here it can put ; to end the expression but it is not necessary in JavaScript.
//   console.log(myVar);
// };

function App() {
  // let myVar = "sadeepal";

  // const [myVar, setMyVar] = useState(
  //   /*"sumudupriya"*/ /*45*/ {
  //     name: "sadeepal",
  //     city: "gampaha",
  //     position: "web developer",
  //   }
  // ); // [] is array destructuring. In here through array destructuring, we can access two things. The first one is the state or state value or it is like a value in the variable. So we can access a variable as the first thing. We can give any name to this variable. The second one is the state changing function. We can write any name to this but there is a standard way of writting this. That is begin the function name with word set and add the name of the state with it's first letter capital. We have to give a default value in the brackets of useState() like 'sadeepal'. Now the myVar is like a variable.

  // Data type changes does not affect to the change of the new value but the data type change affect at some places(occasions). We can give even an object to the brackets of useState() also.

  // The change must be done in the data type which had been given in the default value in the useState().

  // This is also same for the array inside the brackets of useState().

  // const [myDataState, setMyDataState] = useState(myData); // Values in the myData are set to the myDataState state.
  const [inputVal, setInputVal] = useState(/*""*/ 0); // This state is for keep the values in the input box. The default value is given in the brackets of useState().

  const clickHandle = () => {
    // myVar = "pavan"; // Here it can put ; to end the expression but it is not necessary in JavaScript.
    // setMyVar("pavan"); // Inside brackets of the state changing function, we have to give the value must be shown after the button is clicked.
    // When the button is clicked, the whole component is automatically rerendered. Change of the useState() means automatic rerendering of the component. This value is set when the component is rendered. The changing value of the useState() is set at the tme when the component is rendered. That is why this value was came through the console.log() when the component was rendered. But this gives the previous value at the time when we do a change.
    // console.log(myVar); // If we take a console.log() in a useState(), it gives the old value after the button is clicked. Not the changed value.
    //
    // setMyVar({
    //   ...myVar, // This says that spread the values in myVar to here.
    //   // name: "pavan", // The value of name key in the myVar is changed because same key name is used in here. So the value of name key in myVar is replaced by pavan.
    //   city: "colombo",
    //   name: "sumudupriya", // But this is wrong and do not use same key name again.
    // }); // To change the name that we can use the spread operator. Spread operator brings back again the old values to the place where spread operator is used.
    //
    // setMyDataState([
    //   ...myDataState,
    //   {
    //     id: 1238,
    //     name: "pathum",
    //     city: "gampaha",
    //     position: "database developer",
    //     image:
    //       "https://images.pexels.com/photos/207891/pexels-photo-207891.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    //   }, // This new object is added to the myData object array. This new value is only added to the myDataState state when the button is clicked. When the button is clicked again and again, this object puts into the myDataState at each time. It do not change the myData object array. Because it comes from the seperate file and sets only as the default value of the useState().
    // ]); // If there is an array to spread, then it has to spread it to the array. {} or the object is the new value. New value has the same format because when there is a state change <Main> is rerendered.

    setTimeout(() => {
      console.log("I am clicked");
      // setInputVal(inputVal + 1);
      // setInputVal((pre) => pre + 1); // What is actually happen here is that it fetches the previous value from the data tree or data values of the setInputVal state function. Values inside the state is changed through that previous value. After that it puts into the component changing. So the last one is that putting it to component changing.
      setInputVal((pre) => {
        // simple logic to show that it can do the things like this with previous value.
        if (pre < 1) {
          return pre + 1; // So this returned value goes to the setInputVal() and sets as the value of the setInputVal().
        } else if (pre < 2) {
          return pre + 3; // So this returned value goes to the setInputVal() and sets as the value of the setInputVal().
        } else {
          return pre + 2;
        }
        // Definetly there it must send the value which set through a return. The value what must be set and returned.
      });
    }, /*3000*/ 2000); // When the "Click Me" button is clicked, it prints as "I am clicked" in the console and then it executes setInputVal(inputVal + 1); function after the wait of 3000ms or 3s of setTimeout() is taken through clickHandle function. After the 3s of delay, the number is increased. This is the normal logic which must be happened but it is not happened as we expect.
    // The actual incident happens here is if we take a console.log inside the clickHandle function to see the state value of inputVal, that state value is not changed at that time. State value is changed at the refreshing moment. But it does not matter about that it shows the previious value. This is actually an error that we use this in this way. The error is in the way we use the useState() in here.
    // Actually, when we do a set function in a useState() or set a value or executes the set function, the correct method is that not to take the state value from inputVal and take the previous value from the setInputVal if actually we look the previous value. That is a different way.
    // Here the state has the previous value. But there is a problem in here like timeouts or time changing or console.log(stateValue), even we give to change the state value in these situations, the state value is not changed.
    // What's happening here is it takes the state value at the first time then it gives the previous state value and after that state value was changed but when the state value is changed again before the refreshing of the component for the first state value changing, then it gives the state value which initially it had. But we want the state value after it was changed. The reason for this is that component was not refreshed for the first state value changing because it takes 3000 ms or 3s to refresh the component but the second state changing was done before the refreshing of the component. State value is changed when the component is refreshed.

    // Previous value is taken from the state changing function of setInputVal(). When we take the previous value from the state changing function of setInputVal(), we can take the state change even the function is not refreshed. Because the state is stored at the state changing function just like data are stored at the database.
    // But this executes when the component is refreshed to the inputVal state. If we want to see the previous value without refreshing the component, we have to access the memory of the state value changing function. So the way to access the memory(not a actual memory and just for explaination) inside the state changing function is that (inputVal + 1) or the state.
    //
    // setInputVal(inputVal + 1); // When the clickHandle is clicked, value of the setInputVal is incremented by 1.
  };

  // console.log(myVar); // When we see the value at the time when the component is rendered, it gives us the value of the useState() at time of render.

  // console.log(myDataState);

  // console.log(inputVal); // This is shown in the console even without the values for the first time in the new web page or web page after refreshment. It is not the execution of the function.
  // In the useState(), value is changed at the moment of refreshing. When the component is refreshed, state is changed. As this console is outside, it is refreshed as the component is rerendered. That is the reason why small number of line which is this line came second in the console output.

  // There the rerendering is definitely happen when the useState() runs.

  // This is the second method
  const /*MainBlock*/ mainBlock = /*myData*/ /*myDataState*/ myData.map(
      // Rerendering in the state change means myDataState is executed again in the component rerendering. When myDataState was executed previously, there had only 4 objects. But when the myDataState is executed now, there is 5 objects with the new object. Then myDataState maps with the new 5 objects. After the button is clicked, 5 main objects are given as the output.
      ({ name, city, image, position, id }, index) => {
        return (
          <Main
            key={id + index} // index is always changing so it does not affect the key even the id is always same.
            name={name}
            city={city}
            position={position}
            image={image}
          />
        );
      }
    ); // There the mainBlock returns as a JSX element array or variable array because an array is return through the map().

  // const inputChangeHandle = (event, data) => {
  //   // As this inputChangeHandle function is not executed, it is not a problem in here.
  //   event.preventDefault();
  //   console.log(data);
  //   setInputVal(event.target.value); // At refreshing moment, State is not changed because this is inside of the setInputVal function. That is the reason why large number of line which is this line came first in the console output.
  // };

  return (
    <div className="main__container">
      {/* <Fragment> */}
      <div>
        Sadeepal Sumudupriya
        {/* <h1>Sadeepal</h1> */}
        {/* <h1>{myVar}</h1> */}
        {/* <h1>{myVar.name}</h1> */}
        {/* When the object is used inside the brackets od useState(), then we have to give like this. */}
        <h1>{inputVal}</h1>
        {/* Here the changing speed in the document is the React power. */}
        {/* Changed value is changed at time when button is clicked. */}
        {/* In this way even we added the myVar variable here and click the Click Me button but the new value is not applied to the place in the document where this myVar variable is used. */}
      </div>
      <p>Sadeepal Sumudupriya</p>
      {/* <Main name="Dasun" city="Matara" position="python developer">
        <h5>Sadeepal Sumudupriya</h5>
        <p>I am a children</p>
      </Main>
      <Main name="sadeepal" city="gampaha" position="web developer" /> */}
      {/* name,city and position are manual parameters. These parameters are passed to the component as properties. */}
      {/* <Main name="sumudupriya" city="colombo" position="app developer" /> */}
      {/* <Main />
      <Main />
      <Main /> */}
      {/* <Main></Main> */}
      {/*{myData.map((*/} {/* This is the first method */}
      {/*ele*/} {/*{ name, city, position, id }*/} {/*, index*/}
      {/*) => {*/}
      {/* // there it can use the object destructuring for the parameters also.
        // Here the ele is the each object in the array. But that element can be an array or object.
        // return <p>Sadeepal</p>;
        // return <p>{ele.name}</p>; */}
      {/*return (*/}
      {/*<Main*/}
      {/*key={*/}
      {/*index*/} {/*id}*/}
      {/*name={*/}
      {/*ele.name*/} {/*name}*/}
      {/*city={*/}
      {/*ele.city*/} {/*city}*/}
      {/*position={*/}
      {/*ele.position*/} {/*position}*/}
      {/* /> */}
      {/*);*/}
      {/*// name, city and position are parameters of the Main component. So the parameters are passed to the Main component dynamically. We can reuse the component automatically in this way. After the parameters were destructured, those parameters can be directly used as the parameters of the components.*/}
      {/* })} */}
      {/*{MainBlock}*/} {/* This is for the second method */}
      <div className="mainBlock__container">{mainBlock}</div>
      {/* {mainBlock} */}
      {/* Inside these curly braces there it can write JavaScript. These are called JSX. JavaScript inside the HTML. */}
      {/* Here map() is used because we want to return the component while looping. */}
      {/* <p>Sadeepal</p> is looped relative to the number of objects in the myData object array. */}
      {/* <NewBlock />*/} {/* This is the component of NewBlock */}
      {/* So no value is returned to here if there is no data. */}
      {/* </Fragment> */}
      <br />
      <br />
      {/* This is the way how inline css are written. Here first outer blue {} of style is for writting JavaScript. The second inner yellow {} of style is for object which style object. So in here this(style) is passed a JavaScript object.*/}
      <button
        style={{
          // Here in JavaScript, the styles give through DOM manipulate. Here the objects are passed.
          fontSize: "12px",
          border: "1px solid red",
          padding: "7px 12px", // 7px is top bottom size and 12px is left right size.
        }}
        // onClick={clickHandle()} // Here it do not put () for the function name clickHandle. Here we do not give like clickHandle() with the any events like onClick, onChange because if we give like this, then the clickHandle function executes at the time when the component is rendered which we do not want this to happen.
        onClick={clickHandle} // We want to execute the clickHandle function when button is clicked.
      >
        Click Me
      </button>
      {/* <br />
      <br />
      <input
        style={{
          border: "1px solid red",
          fontSize: "14px",
          padding: "7px",
        }}
        type="text"
        placeholder="type what you want"
        onChange={(e) => {
          // e event is the change event in HTML.
          // e.preventDefault(); // It is better to apply this for remove default functionalities. This not much important for the input.
          // setInputVal(e.target.value); // e.target.value means value inside the input box goes into the setInputVal.
          // When useState() is using, refreshing happens speedily when there are changes happen in the input box. This refreshing happens very speedily.
          inputChangeHandle(e, inputVal); // In here we can put () for the inputChangeHandle() function because inputChangeHandle() function is inside an anonymous function. So inputChangeHandle() function executes only when the e event executes at the relevant occasion. So the reason for that there is a anonymous function to run. That anonymous function runs at the relevant event occasion. So inputChangeHandle() function is inside of the anonymous function and that is the point. We cannot give directly the inputChangeHandle() function with parameters passed to it because if we directly give it then it executes before the event executes. Here the first parameter is the event and second parameter is the inputVal.
        }} // This event to take the changes in the input box to the state. Here the e is the event. We can run the anonymous function in here like this.
      /> */}
    </div>
  );
}

export default App;

// Things inside the return() are HTML things. The className in here is the class in HTML.
