import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Home from './components/Home';
import Profile from './components/profile'
import RecipeInfo from './components/RecipeInfo';

function App() {
  return (
    <Router>
      <Header/>
      <div className="App">
        <Routes>
          <Route exact path='/' element={< Home />}></Route>
          <Route exact path='/users/sign-in' element={< SignIn />}></Route>
          <Route exact path='/users/sign-up' element={< SignUp />}></Route>
          <Route path='/recipe/:id' element={< RecipeInfo />}></Route>
          <Route path='/profile' element={< Profile />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
