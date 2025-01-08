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
import Blogs from "./components/Blogs";
import Reviews from "./reusable/Reviews";
import Schedule from "./components/Schedule";

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
      {
        element: <Carrers />,
        path: "/carrers",
      },
            // industry
      {
        element:<Marine/>,
        path:"/marine"
      },
      {
        element:<BFSI/>,
        path:"/bfsi"
      },
      {
        element: <ECommerce/>,
        path:"/e-commerce"
      },
      {
        element:<Logistics/>,
        path:"/logistics"
      },
      {
        element:<FMCG/>,
        path:"/fmcg"
      },
      {
        element:<HealthCare/>,
        path:"/health-care"
      },
      {
        element:<MediaNEntertainment/>,
        path:"/media-entertainment"
      },
      {
        element:<Realestate/>,
        path:"/real-estate"
      },
      {
        element:<Retail/>,
        path:"/retail"
      },

      // offerings
      {
        element:<ChannelPart/>,
        path:"/channel-partners"
      },
      {
        element:<Innovation/>,
        path:"/innovation-research"
      },
      {
        element:<LeanProd/>,
        path:"/lean product-engineering"
      },
      {
        element:<ProdDev/>,
        path:"/prod dev-lifecycle"
      },
      {
        element:<Professional/>,
        path:"/professional-services"
      },

      // practises
      {
        element:<Digital/>,
        path:'/digital-engineering'
      },
      {
        element:<Design/>,
        path:"/design"
      },
      {
        element:<Erp/>,
        path:"/erp-crm"
      },
      {
        element:<BigData/>,
        path:"/big-data"
      },
      {
        element:<Artificial/>,
        path:"/AI&ML"
      },
      {
        element:<Cloud/>,
        path:"/cloud-computing"
      },
      {
        element:<OpenSource/>,
        path:"/open-source"
      },
      {
        element:<Microsoft/>,
        path:"/microsoft-technologies"
      },
      {
        element:<Carrers/>,
        path:"/carrers"
      },
      // Resources
      {
        element:<Blogs/>,
        path:"/blogs"
      },
      {
        element:<Schedule/>,
        path:"/contact-us"
      },
      {
        element:<Reviews/>,
        path:"/reviews"
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
