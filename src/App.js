import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch ,Route} from 'react-router-dom';
import './App.css';
import ExploreServices from './Pages/Home/Explore/ExploreServices/ExploreServices';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer'
import Order from './Pages/Home/Order/Order';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/explore'>
            <ExploreServices></ExploreServices>
          </Route>
          <Route exact path='/order/:id'>
            <Order></Order>
          </Route>
          <Route  path='/login'>
            <Login></Login>
          </Route>
          <Route  path='/register'>
            <Register></Register>
          </Route>
          <Route exact path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
