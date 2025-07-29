import React, { lazy, Suspense, useState } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
// import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import Instamart from "./components/Instamart";
import userContext from "./utils/userContext";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";

const About = lazy(() => import("./components/About"));

 const AppLayout = () => {
  const [user, setUser] = useState({
    name: "surbhi",
    email: "dummy@gmail.com",
  });
  return (
    <>
      <Provider store={store}>
        <userContext.Provider
          value={{
            user: user,
            setUser: setUser,
          }}>
          <Header />
          <Outlet />
          <Footer />
        </userContext.Provider>
      </Provider>
    </>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense>
            <About />{" "}
          </Suspense>
        ),
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: <Instamart />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
// root.render(<AppLayout/>);
