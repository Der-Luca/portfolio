import { motion } from "framer-motion";
import { Root } from "postcss";
import { useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link,
  Outlet,
  RouterProvider,
  Navigate,
} from "react-router-dom";
  import Contact from "../pages/Contact";
  import Home from "../pages/Home";
import Navbar from "./Navbar";



function MyRouter() {
  const [authenticated, setAuthenticated] = useState(true);
  const Root = () => {
      return <div>
        <Navbar/>
        <Outlet/>
      </div>;
   
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
       
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default MyRouter;
