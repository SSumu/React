// import Main from "./Components/Main";

import "./App.css";

import { /*Fragment,*/ useEffect, useState } from "react";
import Unit from "./Components/Unit";
import Header from "./Components/Header";

// This is a direct return.
// const App1 = () => (
//   <div>
//     {/* <Main /> */}
//     {/* As there are details that must placed inside Main component, this is not used. */}
//     <h1>Sadeepal Sumudupriya</h1>
//   </div>
// );

// If there the things like useState(), functions, may be component arrays are not written inside this function, we can take only a direct return. In a direct return, there is no {} and instead of that there is (). Also there is not used return keyword.

const App1 = () => {
  // What is actually happens here is that destructuring the values of the useState().
  // const [imageUrl, setImageUrl] = useState(""); // We created useState() s to save the details which we are mainly targeting. [state, stateChangeFunction] = useState(default value)
  // const [name, setName] = useState("");
  // const [city, setCity] = useState("");
  // const [position, setPosition] = useState("");

  // In here 4 states are used.

  // Input boxes do not get the data even keys in the keyboard are pressed because input boxes takes the values which default values in the useState() s are empty strings.

  const [inputData, setInputData] = useState({
    imageUrl: "", // Here the imageUrl is the property and '' (empty string) is the default value. When the '' (empty string) sets as the default value, this imageUrl and the above imageUrl are two things. This is an object element.
    name: "", // Here the name is the property and '' (empty string) is the default value. When the '' (empty string) sets as the default value, this imageUrl and the above imageUrl are two things. This is an object element.
    city: "", // Here the city is the property and '' (empty string) is the default value. When the '' (empty string) sets as the default value, this imageUrl and the above imageUrl are two things. This is an object element.
    position: "", // Here the position is the property and '' (empty string) is the default value. When the '' (empty string) sets as the default value, this imageUrl and the above imageUrl are two things. This is an object element.
    // If there are only the property names without the empty strings as values, then the states in above useStates are replaced to here.
  }); // 4 Data are taken as in object form. This object is given as a default object. In here one single state is used and data are put as an object. But in the previous way 4 states are used and those 4 states' tasks are done using one single state in here.

  // Run the objects inside an array. There it sets the data which was imported.
  const [myData, setMyData] = useState([]); // This is to make the details (which is given from above useStates) in object form and save it as the array in useState(). The values was given by the user that is put in to this array inside the useState([]).

  // console.log(myData); // To check the value changing of myData. console.log() the data when the component is refreshed.

  // useEffect(() => {
  //   // We can write anything we like like activation of a function or any other thing, fetch or data fetching, api call.
  //   console.log("use effect calling..");
  // }); // First parameter is the effect callback function or the effect. useEffect(()=>{}) is the basic architecture of the useEffect().
  // 1 st Theory
  // When the data are typed in text boxes, the useState() is executed. Execution of useState() means that component is rerendered. The callback function inside the useEffect() is executed every time the component is rerendered when the useEffect() is written in basic structure.

  // 1st part of useEffect()
  // Other Structure of useEffect()
  // useEffect(()=>{},[])
  // In this occasion, empty array [] is given after the callback function.

  // useEffect(() => {
  //   console.log("use effect calling..");
  // }, [/*inputData*/ inputData.name, inputData.position]);

  // This empty array is a rendering object array or a variable array. According to the variables in this array which it decides that useEffect() should be run(executed) or not. useEffect() runs when the variables are changed.
  // 2nd Theory
  // After the [] are used, useEffect() is executed when the component renders only at the very first time.
  // In here, If there is a change happens in the data in the variables in this variable array or object array, this useEffect() is fired.
  // When the inputData are changed, useEffect() is run. The real meaning is that if there is a inputData are changed, useEffect() must be run.
  // When there is a state change in the variable, useEffect() is run.
  // Only when there is a change in a variable or a object or a state, callback function in the useEffect() is executed. This is the specialty of the useEffect().

  // 2nd part of useEffect()

  const [windowWidth, setWindowWidth] = useState(
    window.innerWidth
  ); /*changeWindowWidth*/ // This useState() is needed for this useEffect(). This is to measure window width. Number output will be come. // ); // Listener is written inside double quotes. resize is the event. resize event is to check whether there is a change.

  // Clean Up process
  // useEffect() has another part inside of it which is cleanup process.
  // useEffect(() => {
  // console.log("use effect calling..");
  // const changeWindowWidth = () => {
  //   setWindowWidth(window.innerWidth);
  // };

  // In this way same addEventListener is executed so many rounds. addEventListener is added in that each round(Accordng to the rounds of executed.).
  // window.addEventListener(
  //   "resize",
  /*() => {
      setWindowWidth(window.innerWidth);
    }*/ // This addEventListener were added again and again and many rounds. This is not so good.

  // There is no difference between these two methods.
  // When the effect is running, window.addEventListener("resize", changeWindowWidth); is fired once. Then the Event Listener is added once. With that, every time this changes, the useEffect() fires up every time the state changes. This happens in the basic structure of the useEffect(without the []).

  //   console.log("use effect calling...");
  // }, [inputData.name]); // Definitely there must be something like inputData.name to fire up the effect unless there is no use of executing the effect once. According to the new data inside of it, fire up the data or send the data, if it is a fetching data, to send the data we definitely have to expect state change or otherwise we have to expect a url change. At such a time, if a state changes, the useEffect will definitely be triggered every time that state changes. So, the eventListener will definitely run every time like this. That is the thing which practically happens. Practically it is really difficult to give a useEffect to runs only once. There are very few occasions which can give to run useEffect only once. At all other times definitely we have to give to fire the useEffect when there is a state change or a url change.

  // Sometimes when the data comes, in here we consider this executes only once(But according to amila it is not executed once). But when the api call comes, useEffect must be executed and it must be executed when the function fires up. It is necessary to execute the useEffect and then a api call must be sent according to the new data by the time it is necessary to run api call or fire up a function when a state or a url is changed when a state or a url is changed. So several listens must be there.

  // Clean up process of the useEffect is used for remove the executing of Event Listeners repeatedly. In this we can, if the thing you want the use effect to execute for the second time is already executed, clear it first. The new one is executed after the old same one was cleared.

  useEffect(() => {
    // console.log("use effect calling..");
    const changeWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    // addEventListener is adding a new event.
    window.addEventListener("resize", changeWindowWidth);
    console.log("use effect calling...");

    // This is the clean up process
    // Clean up process is written as a function.
    return () => {
      console.log("use effect cleanup function running..");

      // The thing what cleanup function must do.
      // There is a window in event listener. This is to remove that event listener.
      // Clean up the changeWindowWidth in resize.
      window.removeEventListener("resize", changeWindowWidth);

      // The cleanup process is executed first when useEffect is going to be run. After the cleanup process has executed that things inside in the useEffect() is executed.
    };
  }, [inputData.name]);

  return (
    // <Fragment>
    <div
    // style={{
    //   width: "100vw",
    // }}
    >
      <Header />
      <div className="main__container">
        <h1>{windowWidth}</h1>
        <div className="main_left">
          <input
            type="text"
            // value={imageUrl} // value is the it's state value. This is the first way.
            value={inputData.imageUrl} // Now there is no variable or state as imageUrl in this second way. There is a inputData state and it has an object. That object has imageUrl.
            placeholder="image url"
            onChange={(e) => {
              e.preventDefault();
              // setImageUrl(e.target.value); // e.target.value means when there is a change in the input object, take the value at the time of change is happening. Then that value sets to the imageUrl state. Then that value shows as the value of the input object. When the onChange happens, changing value is taken through e.target.value (e means event). Then at this event input object value is targeted and it was accessed. That input object's value change is taken. That changed value or changing value is sent to the imageUrl state through setImageUrl() state handler or state changing function or method. Then the value of the state is taken as the value of the input object. When the onChange happens, change the value from changing value with using setImageUrl(e.target.value). This is the first way.
              // setImageUrl(e.target.value); // This is the first way.
              setInputData((preInputData) => ({
                ...preInputData, // Here we have to spread objects from previous value by accessing the previous value. The reason for this is that we only change the imageUrl object element and we want the other elements to keep it as it was before because we cannot only send the imageUrl object element only as there another elements in the object.
                imageUrl: e.target.value, // imageUrl is the property or the object property. It is object element of the object. Value of the imageUrl property is replaced from a new value.
              })); // This is the second way. Curly braces must be wrapped from brackets(()) to show this is a return. To give the return in arrow function, there it has to give (). So we give it as object is returned from brackets.
            }}
          />
          <input
            type="text"
            // value={name} // value is the it's state value. This is the first way.
            value={inputData.name} // Now there is no variable or state as name in this second way. There is a inputData state and it has an object. That object has name.
            placeholder="your name"
            onChange={(e) => {
              // This input is also the same.
              e.preventDefault();
              // setName(e.target.value); // This is the first way.
              setInputData((preInputData) => ({
                ...preInputData,
                name: e.target.value,
              })); // This is the second way.
            }}
          />
          <input
            type="text"
            // value={city} // value is the it's state value. This is the first way.
            value={inputData.city} // Now there is no variable or state as city in this second way. There is a inputData state and it has an object. That object has city.
            placeholder="your city"
            onChange={(e) => {
              // This input is also the same.
              e.preventDefault();
              // setCity(e.target.value); // This is the first way.
              setInputData((preInputData) => ({
                ...preInputData,
                city: e.target.value,
              })); // This is the second way.
            }}
          />
          <input
            type="text"
            // value={position} // value is the it's state value. This is the first way.
            value={inputData.position} // Now there is no variable or state as position in this second way. There is a inputData state and it has an object. That object has position.
            placeholder="your position"
            onChange={(e) => {
              // This input is also the same.
              e.preventDefault();
              // setPosition(e.target.value); // This is the first way.
              setInputData((preInputData) => ({
                ...preInputData,
                position: e.target.value,
              })); // This is the second way.
            }}
          />
          <button
            onClick={
              () =>
                // In this way values are remained in the text boxes after the values were submitted.
                // console.log({
                //   imageUrl,
                //   name,
                //   city,
                //   position,
                // })

                // In this way values are not remained in the text boxes after the values were submitted.
                {
                  // This is arrow function's opening curly bracket.
                  // console.log({
                  //   imageUrl,
                  //   name,
                  //   city,
                  //   position,
                  // });

                  // Handling the previous values.
                  setMyData(
                    (
                      pre //{
                    ) => /*return*/ [
                      // This is direct return method( without writing the return keyword. ).
                      ...pre,
                      {
                        // image: imageUrl, // The state value of the imageUrl is come to here. Here two things are used because property name in the object is different from the key value name.
                        // name: name,
                        // name, // As the property name and the value are same, we can use a single word. The state value of the name is come to here. Both property name and the key value name are same.
                        // city, // This is also the same. The state value of the city is come to here. Both property name and the key value name are same.
                        // position, // This is also the same. The state value of the position is come to here. Both property name and the key value name are same.

                        // This is the second way.
                        // We can take this data from destructuring.
                        image: inputData.imageUrl,
                        name: inputData.name,
                        city: inputData.city,
                        position: inputData.position,
                      },
                    ] //; // Return an array. Spread the values in previous value. Then send a new object. At each time the new values come, objects in the array are updated.
                    /*}*/
                  );
                  // When the button is clicked, the previous data(pre) were taken from setMyData. Those pre data were returned as an array because myData must be an array. If that happens we can map it. We spread the previous(pre) values. Then we replace it with new values(values in the object).

                  // Previous value handling. Cleaning process of the values in the input box after submitting the values. // After the values were set, Those values are cleaned in the states. Values are cleaned in the states means that automatically those values are cleaned in the input boxes also. That's why values are cleaned after submission.

                  // This is the first way.
                  // setImageUrl((pre) => {
                  //   if (pre.length > 0) {
                  //     // pre.length>0 means pre has a value.
                  //     return "";
                  //   } else {
                  //     return pre;
                  //   }
                  // });

                  // setName((sadeepal) => (sadeepal.length > 0 ? "" : sadeepal)); // After the ternary operator(?), we can use () to denote the return. Here the sadeepal means previous value parameter. Here sadeepal is used to denote that parameter can use any name.
                  // setCity((preCity) => (preCity.length > 0 ? "" : preCity));
                  // setPosition((prePosition) =>
                  //   prePosition.length > 0 ? "" : prePosition
                  // );

                  // This is the second way.
                  setInputData((pre) => {
                    if (pre.imageUrl.length > 0) {
                      // Here it returns an object.
                      return {
                        ...pre,
                        imageUrl: "", // defaulting the value
                      };
                    } else {
                      return pre;
                    }
                  });

                  setInputData((sadeepal) =>
                    sadeepal.name.length > 0
                      ? /* Here it returns an object. */ {
                          ...sadeepal,
                          name: "",
                        }
                      : sadeepal
                  );
                  setInputData((preCity) =>
                    preCity.city.length > 0
                      ? /* Here it returns an object. */ {
                          ...preCity,
                          city: "",
                        }
                      : preCity
                  );
                  setInputData((prePosition) =>
                    prePosition.position.length > 0
                      ? /* Here it returns an object. */ {
                          ...prePosition,
                          position: "",
                        }
                      : prePosition
                  );
                } // This is arrow function's closing curly bracket.
            }
          >
            Submit
          </button>
          {/* Inside the console.log(), there is an object. When we print an object, if the object name and the key name are equal, we can use the same name. Then the submit button is clicked, the values come as an object.*/}
        </div>
        <div className="main_right">
          {/* Mapping of myData. ? is used to confirm whether there are values in the myData array or not. If there are values, then do the mapping otherwise do not map. When the mapping is done, the values are destructured from the object. We used index of the map and key property of the component because React must be able to uniquely identify and target the object when the objects in the array are looped. */}
          {myData?.map(({ image, name, city, position }, index) => (
            <Unit
              image={image}
              name={name}
              city={city}
              position={position}
              key={index}
            />
          ))}
          {/* Here the object destructuring is used to destructure the values. It returns the <Unit /> component. Parameters are passed inside the Unit component. */}
        </div>
      </div>
    </div>
    //  </Fragment>
  );
};

export default App1;
