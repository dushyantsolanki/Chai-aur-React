import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import { LoadingBarProvider } from "../../contexts/loading_bar/loadingBar.js";

function Layout() {
  const [progress, setProgress] = useState(0);
  return (
    <LoadingBarProvider value={{ setProgress, progress }}>
      <Header />
      <Outlet />
      <Footer />
    </LoadingBarProvider>
  );
}

export default Layout;
