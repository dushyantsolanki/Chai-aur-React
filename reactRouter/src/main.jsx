import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import RootRoutes from "./components/Root/RootRoutes.jsx";
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
import Root from "./Root";

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

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
