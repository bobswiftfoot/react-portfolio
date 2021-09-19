import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

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
      default:
        return(<About></About>);
      // case "Contact":
      //   return(<Contact></Contact>);
      // case "Resume":
      //   return(<Resume></Resume>);
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
