import React, {Component, Fragment} from 'react';
import Blog from './components/Blog';
import Blogs from './components/Blogs';
import BlogForm from './components/BlogForm';
import { Route, Switch, } from 'react-router-dom';
import { Container } from 'semantic-ui-react'

// // class App extends Component {
//   render() {
//     return (
const App = () => (
      <Container>
        <Fragment>
          <Switch>
            <Route exact path='/' component={Blogs} />
            <Route exact path='/blog/:id' component={Blog} />
            <Route exact path='/Blogs' component={Blogs} />
            <Route exact path='/blogform' component={BlogForm} />
          </Switch>
        </Fragment>
      </Container>
    )
//   }
// }
export default App;
