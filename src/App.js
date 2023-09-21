import { Route, Routes } from 'react-router';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Nav from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

const App = () => {
  return (
    
      <div className="app-wrapper">
        <Header />
        <Nav />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/profile' Component={Profile} />
            <Route path='/dialogs' Component={Dialogs} />
          </Routes>
        </div>
      </div>
    
  );
}

export default App;
