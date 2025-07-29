// const name = "Sadeepal Sumudupriya";
// const position = "web developer";

// const myObj = {
//   name: `${name}`, // name is a property
//   position: `${position}`,
//   city: "Gampaha",
// };

// import { Fragment } from "react/jsx-runtime";

function Main(/*props*/ { /*children,*/ name, city, image, position }) {
  // We can destructure the properties.
  /*
  const name = "Sadeepal Sumudupriya";
  const position = "web developer";
  */

  // console.log(props); // Properties under props come as an object. After the the properties were destructured, there it can directly put children instead of props.
  // const { city } = myObj;
  return (
    <div>
      {/* <Fragment> */}
      {/* If <Fragment></Fragment> is used, then grid is not working properly */}
      {/*This is main component*/}
      {/*<ul>*/}
      {/* <li>{myObj.name}</li>
        <li>{myObj.position}</li> */}
      {/*<li>react</li>*/}
      {/*<li>{name}</li>
        <li>{position}</li>
        <li>{city}</li>
        <li>javaScript</li>*/}
      {/*<li>{props.children}</li> To access the inner elements in the componenet, there it has to use children property of the property.*/}
      {/*</ul>*/}
      {/* {props.children} */}
      {/* {children} */}
      {/* After the properties has been destructured, there it can directly put like this. */}
      <img
        src={
          image
            ? `${image}`
            : `https://images.pexels.com/photos/207891/pexels-photo-207891.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500`
        } // Here we can also use && instead of ? to check whether there are data. This is called ternary operator.
        alt="cardImage"
      />
      <div className="mainBlock__details">
        <h3>{!name ? `no-name` : `${name}`}</h3>
        {/* Here ! is used for not. So here the condition is that if there is no name, then give it as no-name otherwise give name value. */}
        <p>
          <span>{city}</span>
          <span>{position}</span>
        </p>
      </div>
      {/* </Fragment> */}
    </div>
  );
}

export default Main;
