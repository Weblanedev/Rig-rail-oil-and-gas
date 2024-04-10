import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Container from "./Components/Container/Container";
import LandingPage from "./Components/Home/LandingPage/LandingPage";
import ContactUs from "./Components/Contact/ContactUs";

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
