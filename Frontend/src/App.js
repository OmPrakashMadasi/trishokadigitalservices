// import logo from './logo.svg';
// import './App.css';
// import Header from './components/header/Header';
// import Banner from './components/body/Banner';
// import ServiceCards from './components/body/services/ServiceCards'
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS
// import Body from './components/body/Body';
// import Footer from './components/footerComponents/Footer';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import Partnership from './components/body/navLinksBodys/Partnership';

// function App() {
//   const router = createBrowserRouter([
//     {
//       path:'/',
//       element:<Body/>
//     },
//     {
//       path:'/Partnership',
//       element:<Partnership/>
//     }

//   ])
//   return (
//     <div className="App">
//      <Header/>
//      <RouterProvider router={router}/>
//       <Footer/>

//     </div>
//   );
// }

// export default App;


import "./App.css";
import Header from "./components/header/Header";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Import Bootstrap JS
import Body from "./components/body/Body";
import Footer from "./components/footerComponents/Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Blogs from "./components/body/navLinksBodys/Blogs/Blogs";
import Careers from "./components/body/navLinksBodys/Careers/Careers";
import ContactUs from "./components/body/navLinksBodys/Contact/ContactUs";
import Servicepage from "./components/body/navLinksBodys/Servicespage/Servicepage";
import WhatsAppButton from "./components/whatsapp/WhatsAppButton";
import AboutUsScreen from "./components/body/navLinksBodys/AboutUs/aboutUs";
import Conditions from "./components/body/navLinksBodys/conditionspage/conditions";

function App() {
 
  const router = createBrowserRouter([
    {
      path: "/",
      element: <>  <Header /> <Body/> <Footer /></>,
    },
    {
      path: "/AboutUs",
      element: <>  <Header /> <AboutUsScreen/>  <WhatsAppButton/>  <Footer /></>,
    },
    {
      path:'/Blogs',
      element:<>  <Header /> <Blogs/>   <WhatsAppButton/>  <Footer /></>
    },
    {
      path:'/Careers',
      element:<> <Header/> <Careers/> <WhatsAppButton/> <Footer/> </>
    },
    {
      path:'/ContactUs',
      element: <><Header/> <ContactUs/> <WhatsAppButton/> <Footer/></>
    },
    {
      path: '/Services',
      element:<><Header/> <Servicepage/><WhatsAppButton/> <Footer/></>
    },
    {
      path: '/conditionspage',
      element:<> <Header/> <Conditions/> <WhatsAppButton/> <Footer/></>
    }

    
  ]);

  return (
    <RouterProvider router={router}>
      {/* <div className="App">
        <Header />
        <Footer />
      </div> */}

    </RouterProvider>
  );
}

export default App;
