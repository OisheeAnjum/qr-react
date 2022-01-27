import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Popular } from './components/Popular';
import { Cards } from './components/Cards';
import { Premium } from './components/Premium';
import { Plans } from './components/Plans';
import { Trial } from './components/Trial';
import { Footer } from './components/Footer';
import { Alltools } from './components/Alltools';
import { Genrate } from './components/Genrate';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
function App() {
  return (
    <Router>
      <>
      <Navbar />
      <div className='homepage'>
        <Switch>
          <Route exact path="/">
            <Hero />
            <Popular />
            <Cards />
            <Premium />
            <Plans />
            <Trial/>
          </Route>
        </Switch>
        

      </div>
     
      
      <div className='content'>
        <Switch>
      <Route exact path="/alltools">
        <Alltools/>
      </Route>
      </Switch>
      </div>
      <Footer/>
      
      </>
    </Router>
  );
}

export default App;
