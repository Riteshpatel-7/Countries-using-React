import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Country from "./components/Country.jsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>
    },
    {
        path: "/:country",
        element: <Country/> 
    }
])

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<RouterProvider router={router} />);