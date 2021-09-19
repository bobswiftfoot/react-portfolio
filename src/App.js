import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'; 
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header></Header>
      <About></About>
      <Portfolio></Portfolio>
      <Footer></Footer>
    </div>
  );
}

export default App;
