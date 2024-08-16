import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RandomUser, { callingRandomUser } from "./components/RandomUser/RandomUser.jsx";
import RandomJokes, { callingRandomJokes } from "./components/RandomJokes/RandomJokes.jsx";
import CatListing from "./components/CatListing/CatListing.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RandomUser />} loader={callingRandomUser} />
      <Route
        path="/random-user"
        element={<RandomUser />}
        loader={callingRandomUser}
      />
      <Route path="/random-jokes" element={<RandomJokes />} loader = {callingRandomJokes} />
      <Route path="/cats-listing" element={<CatListing />} />
    </>
  )
);

createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);
