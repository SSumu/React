import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [mainData, setMainData] = useState([]); // Here we need an array because the data comes as an array to here.

  useEffect(() => {
    // This is the data fetching
    const dataFetching = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts/"); // res means response. Now all data comes as we remove 1.All data will be fetched. This will give a direct array.
      const data = await res.json();

      if (data) {
        console.log(data); // This checks the way how data were existed. The way that incoming data are formated.
        setMainData(data);
      }
    };

    dataFetching();
  }, []); // Empty array render this component single time.

  return (
    <div>
      Contact page
      <div>
        {mainData?.map(({ id, title }) => (
          // This is the looping one.
          <Link to={`/contact/${id}`} key={id}>
            <div>
              <h3>{title}</h3>
            </div>
          </Link>
        ))}
        {/* ? to check whether there are data or not. . is to get the map method of mainData state. Link tag is to link a path to main url. to in the Link tag refers to the place where it is going to be linked. */}
      </div>
      {/* This solution will stops the rerendering 3-4 times. Solution only to here. */}
    </div>
  );
};

export default Contact;
