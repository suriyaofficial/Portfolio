
import React from "react";
import "./App.css";
import NavTab from "./components/NavTab";
import Experience from './components/Experience';
import Project from './components/Project';
import ContactUs from './components/ContactUs';
import Header from './components/Header'
import Aboutus from "./components/AboutUs";

import ReactDOM from 'react-dom';
import MessengerCustomerChat from 'react-messenger-customer-chat';

function App() {
  return (
    <>
      <MessengerCustomerChat
        pageId="788312234566911"
        appId="1428441074582807"

      />

      <div className='App'>
        <NavTab />
        <Header />
        <Experience />
        <Project />
        <ContactUs />
        <Aboutus />
      </div>
    </>
  );
}

export default App;
