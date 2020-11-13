import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './components/header/header.component'
import HomePage from './pages/home-page/home-page.component'
import ShopPage from './pages/shop-page/shop-page.component'
import AuthPage from './pages/auth-page/auth-page.component'
import './App.css'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/auth' component={AuthPage} />
      </Switch>
    </div>
  );
}

export default App;
