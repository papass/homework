import logo from '../logo.svg';
import '../App.css';

function Home () {
    return (
      <div className="App">
        <header>
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
            Домашние задания Рандин Н.А.
          </h1>
        </header>
      </div>
    );
  }
  
  export default Home;