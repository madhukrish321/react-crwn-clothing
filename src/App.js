import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './components/header/header.component'
import HomePage from './pages/home-page/home-page.component'
import ShopPage from './pages/shop-page/shop-page.component'
import AuthPage from './pages/auth-page/auth-page.component'
import { auth } from './firebase/firebase.utils'
import './App.css'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      currentUser: null
    }
    this.unsubscribeFromAuth = null
  }

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({
        currentUser: user
      })
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/auth' component={AuthPage} />
        </Switch>
      </div>
    )
  }
}

export default App
