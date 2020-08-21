import React from 'react'
import "./Login.css"
import { Button } from '@material-ui/core'
import { auth, provider } from '../FirebaseConfig/firebase'
import { useStateValue } from '../../Context/StateContext'
import { actionTypes } from "../../Context/reducer"

const Login = () => {
  const [, dispatch] = useStateValue();
  const signIn = () => {
    auth.signInWithPopup(provider)
      .then(result => {
        dispatch({ type: actionTypes.SET_USER, payload: result.user })
      })
      .catch(err => alert(err.message))

  }
  return (
    <div className="login" >
      <div className="login__container">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1280px-WhatsApp.svg.png" alt="" />
        <div className="login__text">
          <h1>Sign in to WhatsApp</h1>
        </div>
        <Button onClick={signIn}>
          Sign In with Google
        </Button>
      </div>
    </div>
  )
}

export default Login
