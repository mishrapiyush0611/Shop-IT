
import Header from './Components/Layout/Header';
import './App.css'
import Footer from './Components/Layout/Footer';
import Home from './Components/Home';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
function App() {
  return (
    <Router>
    <div className="App"> 
     <Header></Header>
     <div className='container container-fluid'>
       <Routes>
       <Route path='/' element={<Home></Home>} exact></Route>
       </Routes>
      </div>
     <Footer></Footer>
    </div>
    </Router>
  );
}

export default App;
