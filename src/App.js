import './App.scss';
// react router dom
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
// pages
import { Home, MealDetails, Error, Category } from "./pages/index";
// components
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import BlogPage from './pages/BlogPage/BlogPage';
import AboutusPage from './pages/AboutusPage/AboutusPage';
import ConnectusPage from './pages/ConnectusPage/ConnectusPage';
import Footer from "./components/Footer/Footer";
//import { Footer } from 'react-bootstrap/lib/Modal';
import { Modal } from 'react-bootstrap';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Sidebar />
      <Routes>
        <Route path = "/" element = {<Home/>} />
        <Route path = "/Blog" element = {<BlogPage/>} />
        <Route path = "/Aboutus" element = {<AboutusPage />} />
        <Route path = "/Connectus" element = {<ConnectusPage/>} />
        <Route path = "/meal/:id" element = {<MealDetails />} />
        <Route path = "/meal/category/:name" element = {<Category />} />
        <Route path  = "*" element = {<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
