import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Header from './components/header/header.component'
import HomePage from './pages/home-page/home-page.component'
import ShopPage from './pages/shop-page/shop-page.component'
import AuthPage from './pages/auth-page/auth-page.component'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { setCurrentUser } from './redux/user/user.actions'
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.unsubscribeFromAuth = null
  }

  componentDidMount() {
    const { setCurrentUser } = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          })
        })
      } else {
        setCurrentUser(null)
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    console.log('State in App Component: ', this.state)
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route
            exact
            path='/auth'
            render={
              () => this.props.currentUser ? (<Redirect to='/' />) : (<AuthPage />)
            }
          />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = ({ user }) => {
  return {
    currentUser: user.currentUser
  }
}

const mapDispathToProps = (dispatch) => {
  return {
    setCurrentUser(user) {
      dispatch(setCurrentUser(user))
    }
  }
}

export default connect(mapStateToProps, mapDispathToProps)(App)
