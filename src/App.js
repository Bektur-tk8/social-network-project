import { Route, Routes } from 'react-router';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/Navbar';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';

const App = (props) => {
  return (

    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Routes>
          <Route exact path='/dialogs' Component={() => <DialogsContainer store = {props.store}/>} />
          <Route path='/profile' Component={() => <Profile store = {props.store}  />} />
          <Route path='/users' Component={() => <UsersContainer store = {props.store}  />} />
        </Routes>
      </div>
    </div>

  );
}

export default App;
