import React, { useState } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import User from "./components/User/User";
import Github, { useLoaderDataInfo } from "./components/Github/Github";
import {LoadingBarProvider} from "./contexts/loading_bar/loadingBar";
function Root() {
  const [progress, setProgress] = useState(0);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="github" element={<Github />} loader={useLoaderDataInfo} />
        <Route path="user" element={<User />} />

        <Route path="user/:userId" element={<User />} />
      </Route>
    )
  );
  return (
    <LoadingBarProvider value={{ progress, setProgress }}>
      <RouterProvider router={router} />
    </LoadingBarProvider>
  );
}

export default Root;
