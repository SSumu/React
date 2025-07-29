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

  const [myVar, setMyVar] = useState(
    /*"sumudupriya"*/ /*45*/ {
      name: "sadeepal",
      city: "gampaha",
      position: "web developer",
    }
  ); // [] is array destructuring. In here through array destructuring, we can access two things. The first one is the state or state value or it is like a value in the variable. So we can access a variable as the first thing. We can give any name to this variable. The second one is the state changing function. We can write any name to this but there is a standard way of writting this. That is begin the function name with word set and add the name of the state with it's first letter capital. We have to give a default value in the brackets of useState() like 'sadeepal'. Now the myVar is like a variable.

  // Data type changes does not affect to the change of the new value but the data type change affect at some places(occasions). We can give even an object to the brackets of useState() also.

  const clickHandle = () => {
    // myVar = "pavan"; // Here it can put ; to end the expression but it is not necessary in JavaScript.
    setMyVar("pavan"); // Inside brackets of the state changing function, we have to give the value must be shown after the button is clicked.
    // When the button is clicked, the whole component is automatically rerendered. Change of the useState() means automatic rerendering of the component. This value is set when the component is rendered. The changing value of the useState() is set at the tme when the component is rendered. That is why this value was came through the console.log() when the component was rendered. But this gives the previous value at the time when we do a change.
    // console.log(myVar); // If we take a console.log() in a useState(), it gives the old value after the button is clicked. Not the changed value.
  };

  console.log(myVar); // When we see the value at the time when the component is rendered, it gives us the value of the useState() at time of render.

  // This is the second method
  const /*MainBlock*/ mainBlock = myData.map(
      ({ name, city, image, position, id }) => {
        return (
          <Main
            key={id}
            name={name}
            city={city}
            position={position}
            image={image}
          />
        );
      }
    ); // There the mainBlock returns as a JSX element array or variable array because an array is return through the map().

  return (
    <div className="main__container">
      {/* <Fragment> */}
      <div>
        Sadeepal Sumudupriya
        {/* <h1>Sadeepal</h1> */}
        {/* <h1>{myVar}</h1> */}
        <h1>{myVar.name}</h1>
        {/* When the object is used inside the brackets od useState(), then we have to give like this. */}
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
    </div>
  );
}

export default App;

// Things inside the return() are HTML things. The className in here is the class in HTML.
