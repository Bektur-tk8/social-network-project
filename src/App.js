import { Route, Routes } from 'react-router';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/Navbar';

const App = (props) => {
  return (

    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Routes>
          <Route exact path='/dialogs' Component={() => <Dialogs state = {props.state.dialogsPage}/>} />
          <Route path='/profile' Component={() => <Profile state ={props.state.profilePage} 
                                                           dispatch={props.dispatch}  />} />
        </Routes>
      </div>
    </div>

  );
}

export default App;
