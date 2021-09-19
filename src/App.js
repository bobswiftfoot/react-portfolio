import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import ContactForm from './components/Contact';

function App()
{
  const [currentPage, handlePageChange] = useState('About');

  function renderPage()
  {
    switch(currentPage)
    {
      case "About":
        return(<About></About>);
      case "Portfolio":
        return(<Portfolio></Portfolio>);
      case "Contact":
        return(<ContactForm></ContactForm>);
      // case "Resume":
      //   return(<Resume></Resume>);
      default:
        return(<About></About>);
    }
  };


  return (
    <div>
      <Header
        currentPage={currentPage} 
        handlePageChange={handlePageChange} >
      </Header>
      <div>
        {renderPage()}
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
