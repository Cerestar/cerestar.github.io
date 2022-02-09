import logo from './logo.svg';
import './App.css';

import Header from './components/Header'
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import ProjectsComp from './components/ProjectsComp';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='dark-blue'>  <hr className="lineDiv"/> </div>
      <NavBar/>

      <Welcome/>

      <ProjectsComp/>

      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>

      <Footer/>
    </div>
  );
}

export default App;
