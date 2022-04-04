
import Header from './Components/Layout/Header';
import './App.css'
import Footer from './Components/Layout/Footer';
import Home from './Components/Home';
import ProductDetails from './Components/Product/ProductDetails';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Login from './Components/User/Login';
import Register from './Components/User/Register';
import {loadUser} from './action/userAction'
import store from './store'
import { useEffect } from 'react';
import Profile from './Components/User/Profile';
function App() {
  useEffect(()=>{
    store.dispatch(loadUser())
  },[])
  return (
    <Router>
    <div className="App"> 
     <Header></Header>
     <div className='container container-fluid'>
       <Routes>
       <Route path='/' element={<Home></Home>} exact></Route>
       <Route path='/product/:id' element={<ProductDetails></ProductDetails>} exact></Route>
       <Route path='/login' element={<Login></Login>} exact></Route>
       <Route path='/register' element={<Register></Register>} exact></Route>
       <Route path='/me' element={<Profile></Profile>} exact></Route>
       </Routes>
      </div>
     <Footer></Footer>
    </div>
    </Router>
  );
}

export default App;
