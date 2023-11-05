import { Route, Routes } from 'react-router';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';

const App = () => {
  return (

    <div className="app-wrapper">
      <HeaderContainer />
      <Navbar />
      <div className='app-wrapper-content'>
        <Routes>
          <Route exact path='/dialogs' Component={() => <DialogsContainer />} />
          <Route path='/profile' Component={() => <ProfileContainer   />} />
          <Route path='/users' Component={() => <UsersContainer   />} />
        </Routes>
      </div>
    </div>

  );
}

export default App;
