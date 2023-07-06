import './App.css';
import { Routes, Route} from 'react-router-dom';
import Login from './components/login/login';
import Signup from './components/signup/signup';
import SetPassword from './components/setPassword/setPassword';
import TwoSetPassword from './components/setPassword/twoSetPassword';
//import ProfileLeftside from './components/profile/profileLeftside';
import Profile from './components/profile/profile';
import SetNumber from './components/setNumber/setNumber';
import Favorites from './components/favorites/favorites';
import MyProducts from './components/myProducts/myProducts';
import MainPage from './components/mainPage/mainPage';
import Announcement from './components/mainPage/announcement';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element = {<Login/>}/>
        <Route path='/signup' element = {<Signup/>}/>
        <Route path='/setpassword' element = {<SetPassword/>}/>
        <Route path='/twosetpassword' element = {<TwoSetPassword/>}/>
        <Route path='/profile' element = {<Profile/>}/>
        <Route path='/setnumber' element = {<SetNumber/>} />
        <Route path='/favorite' element = {<Favorites/>} />
        <Route path='/myproducts' element = {<MyProducts/>} />
        <Route path='/mainpage' element = {<MainPage/>} />
        <Route path='/announcement' element = {<Announcement/>} />







      </Routes>
    </div>
  );
}

export default App;
