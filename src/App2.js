import "./App.css";

import { useEffect, useState } from "react";

const App2 = () => {
  const [apiId, setApiId] = useState("1"); // There it gives the 1 as a default string value.
  const [search, setSearch] = useState(0);
  const [data, setData] = useState({}); // This useState() is used to save the data comes from api call. Data comes as an object. So an empty object is given in here as the default value.

  // console.log(apiId);
  // console.log(data);

  useEffect(() => {
    console.log("useEffect running..");

    // As the async function runs for fetch data, async function is created in here.
    const apiCall = async () => {
      // To see how many times apiCall occurs, we can see how many times the function here is executed.
      console.log("api call running");
      // Fetch data or data fetching.
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${apiId}`
      ); // In here the id is given by the user in the input box is checked as apiId. Then the fetch data is passed according to the id which we want.
      const data = await res.json();

      if (data) {
        setData(data);
      }
    };

    // Remove the bug of running the useEffect when is removed.
    // Actually the useEffect is running when the apiId is changed. That means if the change happens in the input box. But console.log("useEffect running.."); runs only if the logic is true.
    // There is a limit even in the free services of api websites. So there it must validate the apiCalls before send it the server. We have to filter the apiCalls like this before send it to the server. We have to validate the apiCalls and send it to the server with necessary conditions. This is the validation of apiCalls.
    if (apiId.length > 0 && Number(apiId) > 0 && Number(apiId) <= 100) {
      // Number() to convert apiId to the number format.
      //   console.log("useEffect running..");
      console.log("useEffect if condition");

      // // As the async function runs for fetch data, async function is created in here.
      // const apiCall = async () => {
      //   // To see how many times apiCall occurs, we can see how many times the function here is executed.
      //   console.log("api call running");
      //   // Fetch data or data fetching.
      //   const res = await fetch(
      //     `https://jsonplaceholder.typicode.com/posts/${apiId}`
      //   ); // In here the id is given by the user in the input box is checked as apiId. Then the fetch data is passed according to the id which we want.
      //   const data = await res.json();

      //   if (data) {
      //     setData(data);
      //   }
      // };

      apiCall(); // Code to run the function. This is a promise and it awaits a little time.
    }
    // Now when the value(id) is given, rerendering is happened. Component is also rerendered. useEffect is also runs once. There it also runs the if condition inside the useEffect(). But the if condition does not run when there is no value(id) in the input box.
    // There must be a value if it sends an api call.

    // We want to send the api call when the useEffect is running.

    return () => {
      console.log("cleanup");
      apiCall();
    };
    // eslint-disable-next-line
  }, [/*apiId*/ search]); // Two parameters are useEffect callback function and the dependency array or the dependency list. This callback function cannot be an async function. apiId is the dependency array. Then this rerenders every time when the apiId is changed.
  // Running the useEffect() when id is removed is a problem and it is a bug.
  // This warning because we have tried to use a variable(search) inside in here that is not in the useEffect's tray.
  // This is way is more secure than the previous way.

  return (
    <div>
      {/* In this useEffect(), we are going to do a data fetching. */}
      <input
        type="text"
        value={apiId}
        onChange={(e) => setApiId(e.target.value)} // In this way, useEffect() rerenders also for the removing of the ids in the input box.
        placeholder="enter id"
      />
      <button onClick={() => setSearch((pre) => (pre === 0 ? 1 : 0))}>
        Search
      </button>
      {data && (
        <div>
          <h2>{data.title}</h2>
          <p>{data.body}</p>
        </div>
      )}

      {/*   
        This is a wrong method.

        e.preventDefault();

           Remove the bug of running the useEffect when is removed.
           const enteredId = e.target.value;
           if (enteredId.length > 0) {
             setApiId(enteredId); // Now it only rerenders when the length of the enteredId is greater than 0.
           }*/}
      {/* onChange is an event */}
    </div>
  );
};

export default App2;
