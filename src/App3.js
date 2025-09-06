import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import ContactDetails from "./Components/ContactDetails";
import User from "./Components/User";

// There are two ways to do this because there are two versions of React router as version 5 and version 6. As this version changes, there are two ways to do this. There is a method from combination of React router version 5 and version 6.

// This is the method from combination of React router version 5 and version 6.

const App3 = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <div>hi</div> */}
        <Route path="/" element={<Home />} />
        {/* This is the default path. / means it directs to the home. element property to render which element. */}
        <Route path="/about" element={<About />} />
        {/* In React 6 version, location changing does not effect the for the nested routing. It was effected in React version 5. */}
        <Route path="/contact/details" element={<ContactDetails />} />
        <Route path="/contact" element={<Contact />} />
        {/* Nested routing :- One page contains another page. */}
        {/* <Route path="/contact/details" element={<ContactDetails />} /> */}
        {/* This is for dynamic data. Like urls sends with changings. When the time of url is changing, eg: like change according to the userId. So data changes which user sees. :id is the dynamic parameter which we can access and give userIds dynamically. id is the name of the dynamic parameter. This Route is for dynamic data. */}
        <Route path="/contact/:id" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App3;
