import logo from "./logo.svg";
import "./App.css";
import Navbar from "./reusable/navbar";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Footer from "./reusable/footer";
import AboutUs from "./components/AboutUs";
import PressRoom from "./components/PressRoom";
import Marine from "./components/industry/Marine";
import Digital from "./components/practises/Digital";
import Design from "./components/practises/Design";
import BFSI from "./components/industry/BFSI";
import ECommerce from "./components/industry/E-Commerce";
import Logistics from "./components/industry/Logistics";
import FMCG from "./components/industry/FMCG";
import HealthCare from "./components/industry/HealthCare";
import MediaNEntertainment from "./components/industry/MediaNEntertainment";
import Realestate from "./components/industry/Realestate";
import Retail from "./components/industry/Retail";
import ChannelPart from "./components/offerings/ChannelPart";
import Innovation from "./components/offerings/Innovation";
import LeanProd from "./components/offerings/LeanProd";
import ProdDev from "./components/offerings/ProdDev";
import Professional from "./components/offerings/Professional";
import Erp from "./components/practises/Erp";
import BigData from "./components/practises/BigData";
import Artificial from "./components/practises/Artificial";
import Cloud from "./components/practises/Cloud";
import OpenSource from "./components/practises/OpenSource";
import Microsoft from "./components/practises/Microsoft";
import Carrers from "./components/carrers";
import Home from "./components/Home";
import { REACH_OUT } from "./utils/constsnts";
import ReachOut from "./reusable/reachOut";

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <ReachOut {...REACH_OUT}/>
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
        element: <Home />,
        path: "/",
      },
      {
        element: <AboutUs />,
        path: "/about-us",
      },
      {
        element: <PressRoom />,
        path: "/pressroom",
      },
      // industry
      {
        element:<Marine/>,
        path:"/marine"
      },
      {
        element:<BFSI/>,
        path:""
      },
      {
        element: <ECommerce/>,
        path:""
      },
      {
        element:<Logistics/>,
        path:""
      },
      {
        element:<FMCG/>,
        path:""
      },
      {
        element:<HealthCare/>,
        path:""
      },
      {
        element:<MediaNEntertainment/>,
        path:""
      },
      {
        element:<Realestate/>,
        path:""
      },
      {
        element:<Retail/>,
        path:""
      },

      // offerings
      {
        element:<ChannelPart/>,
        path:""
      },
      {
        element:<Innovation/>,
        path:""
      },
      {
        element:<LeanProd/>,
        path:""
      },
      {
        element:<ProdDev/>,
        path:""
      },
      {
        element:<Professional/>,
        path:""
      },

      // practises
      {
        element:<Digital/>,
        path:'/digital'
      },
      {
        element:<Design/>,
        path:""
      },
      {
        element:<Erp/>,
        path:""
      },
      {
        element:<BigData/>,
        path:""
      },
      {
        element:<Artificial/>,
        path:"Ai&Ml"
      },
      {
        element:<Cloud/>,
        path:""
      },
      {
        element:<OpenSource/>,
        path:""
      },
      {
        element:<Microsoft/>,
        path:""
      },
      {
        element:<Carrers/>,
        path:""
      },
      {
        element:"",
        path:""
      },
      {
        element:"",
        path:""
      },
      {
        element:"",
        path:""
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
