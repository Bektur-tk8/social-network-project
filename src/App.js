import { Route, Routes } from 'react-router';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (

    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Routes>
          <Route exact path='/dialogs' Component={Dialogs} />
          <Route path='/profile' Component={Profile} />
        </Routes>
      </div>
    </div>

  );
}

export default App;
