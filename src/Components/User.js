import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const User = () => {
  const [data, setData] = useState({}); // Intialize with an empty object.
  const { id } = useParams(); // Object destructuring is used for useParams() hook.

  // We need useEffect() to set according to the details.
  useEffect(() => {
    // We can check at which time useEffect() runs if we wants.
    console.log("useEffect running");
    // getData is a async function because the fetching or the data fetch is a promise.
    const getData = async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      ); // Validation must necessarily be coded for id.
      const data = await res.json();
      if (data) {
        setData(data);
      }
    };

    getData();

    // Cleanup process
    return () => {
      console.log("useEffect cleanup"); // This will check how many times it will run.
      getData();
    };
  }, [id]); // [id] is here because useEffect() should be rerendered every time the id changes.

  console.log(id);
  return (
    <div>
      User page
      {/* () means return. */}
      {data ? (
        <div>
          <h2>{data.title}</h2>
          <p>{data.body}</p>
        </div>
      ) : null}
      {/* This is to go backward. */}
      <Link to="/contact">Back</Link>
    </div>
  );
};

export default User;

// To change the content according to the dynamic data. To do this we need a special hook named useParams which comes from react router dom.
