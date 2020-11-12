import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component'
import './App.css'

const HatsPage = () => (
  <h3>
    This is Hats Shopping Page
  </h3>
)

function App() {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/shop/hats' component={HatsPage} />
    </Switch>
  );
}

export default App;
