import logo from './logo.svg';
import './App.css';

import Header from './components/Header'
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import ProjectsComp from './components/ProjectsComp';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='dark-blue'>  <hr className="lineDiv"/> </div>
      <NavBar/>

      <Welcome/>

      <ProjectsComp/>

      <Contact/>

      {/* <img src={logo} className="App-logo" alt="logo" /> */}

      <Footer/>
    </div>
  );
}

export default App;
