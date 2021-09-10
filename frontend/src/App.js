import React, { useEffect } from 'react';
import { 
  /*BrowserRouter as Router, */
  Route, 
  Switch,
  useLocation
} from 'react-router-dom';
import './css/style.scss';
import {focusHandling } from 'cruip-js-toolkit';

/* import Layout from './hocs/Layout';
import Home from './components/Home';
import Blog from './components/Blog';
import BlogDetail from './components/BlogDetail';
import Category from './components/Category'; */


/* const App = () => (
  <Router>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/blog' component={Blog} />
        <Route exact path='/category/:id' component={Category} />
        <Route exact path='/blog/:id' component={BlogDetail} />
      </Switch>
    </Layout>
  </Router>
); */

import Dashboard from './pages/Dashboard';

function App() {
  const location = useLocation()

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top:0 })
    document.querySelector('html').style.scrollBehavior = ''
    focusHandling('outline');
  }, [location.pathname]); // triggered on route change
 
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
      </Switch>
    </>
  );
}

export default App;