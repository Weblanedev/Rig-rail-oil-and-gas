import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Container from "./Components/Container/Container";
import LandingPage from "./Components/Home/LandingPage/LandingPage";
import ContactUs from "./Components/Contact/ContactUs";
import Product from "./Components/ProductPage/Product";
import Storage from "./Components/ourServices/Storage";
import OffshoreIntake from "./Components/ourServices/OffshoreIntake";
import WhatWeDo from "./Components/About/WhatWeDo";
import Company from "./Components/About/Company";
import WhoWeAre from "./Components/About/WhoWeAre";
import PPM from "./Components/ourServices/PPM";
import LHS from "./Components/ourServices/LHS";
import Checkout from "./Components/Checkout/Checkout";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Container />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/storage",
        element: <Storage />,
      },
      {
        path: "/offshore",
        element: <OffshoreIntake />,
      },
      {
        path: "/whatWeDo",
        element: <WhatWeDo />,
      },
      {
        path: "/company",
        element: <Company />,
      },
      {
        path: "/whoWeAre",
        element: <WhoWeAre />,
      },
      {
        path: "/ppm",
        element: <PPM />,
      },
      {
        path: "/lhs",
        element: <LHS />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}

export default App;
