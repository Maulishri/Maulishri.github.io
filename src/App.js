import React, { useContext } from 'react';
import Navbar from './components/navbar/navbar.js';
import Intro from "./components/intro/intro.js"
import About from "./components/about/about.js"
import Product from "./components/productList/productList.js"
import Contact from "./components/contact/contact.js"
import Toggle from './components/toggle/toggle.js';
import { ThemeContext } from './context.js';
// import {Scrollbars} from 'react-custom-scrollbars-2';
import "./App.css";

const App=()=> {
  const theme = useContext(ThemeContext);
  console.log(theme);
  const darkMode = theme.state.darkMode;
  return (
      <div 
      className='main'
          style={
            {
              backgroundColor : darkMode? '#222' : 'white', 
              color: darkMode? 'white' : 'black' ,
              transition: 'all 0.5s ease'
            }
          }
      >
        <Navbar/>
        <section id="about" ><Intro/></section>
        <section id="education" ><About/></section> 
        <section id="project" ><Product/></section>
        <section id="contact" ><Contact/></section>
        <Toggle/> 
      </div>
  );
};
export default App;