import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import LiveSport from "./components/Live-Sport/LiveSport";

import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Subscription from "./components/Subscription/Subscription";

const Layout = () => {
  return (
    <div>
      <Header />
      <LiveSport />
      <Subscription />
      <Outlet />
      <Footer />
    </div>
  );
};

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
      </Route>
    )
  );
  return (
    
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
    
  );
}

export default App;
