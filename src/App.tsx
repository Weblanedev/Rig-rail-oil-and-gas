import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Container from "./Components/Container/Container";
import LandingPage from "./Components/Home/LandingPage/LandingPage";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Container />,
    children:[
      {
        path:"/",
        element: <LandingPage />
      }
    ]
  },
]);
function App() {
  return(
    <>
    <RouterProvider router={route} />
    </>
  )
}

export default App;
