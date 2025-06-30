import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App"; 
import Home from "./Components/Home";
import Error from "./Components/Error";
import CountryDetails from "./Components/CountryDetails"; 

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/contact",
        element: <div>contact us</div>,
      },
      {
        path: "/:country",
        element: <CountryDetails/>, 
      },  
    ],
  },
]);

const root = createRoot(document.querySelector("#root"));
root.render(
  <>
    <RouterProvider router={router} />
  </>
);
