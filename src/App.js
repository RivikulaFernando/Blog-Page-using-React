
import NavBar from './NavBar.js';
import Home from './Home.js';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; //importing react router dom
import Create from './create.js';
import BlogDetails from './blogdetails.js';
import NotFound from './NotFound.js';


function App() {


  return (
    <Router>
    <div className="App"> {/* not html as this is jsx */}
     <NavBar/> {/* this is a component */}
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/create">
            <Create/>
          </Route>
              <Route path="/blogs/:id">
                <BlogDetails/>
              </Route>
              <Route path = "*">
                <NotFound/>
              </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App; //export our component function
