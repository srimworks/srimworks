import logo from "./logo.svg";
import "./App.css";
import Navbar from "./reusable/navbar";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Footer from "./reusable/footer";
import AboutUs from "./components/AboutUs";
import PressRoom from "./components/PressRoom";

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export const Routes = createBrowserRouter([
  {
    element: <AppRouter />,
    path: "/",
    children: [
      {
        element: <AboutUs />,
        path: "/",
      },
      {
        element: <PressRoom />,
        path: "/press",
      },
    ],
  },
]);

function App() {
  return (
    <>
      <AboutUs />
      <PressRoom />
    </>
  );
}

export default App;
