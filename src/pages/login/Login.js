import * as React from 'react'
import {useState} from 'react'
import './Login.css'
import {useDispatch, useSelector} from 'react-redux'
import {login} from '../../actions/loginActions'
import { useHistory } from "react-router-dom";

const Login = () => {

    const history = useHistory();

    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')

    const {isLoggedIn, errorMessage} = useSelector(state => state.loginReducer)
    
    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault();

        dispatch(login(user, password))
        
        if(user === 'Admin' && password === '12345') {
            history.push('/profile')
        }

        setUser('')
        setPassword('')
    }

    return(

    <div>
        <div className='login'>
            <div className="login-content">
                <h1>Log In</h1>
                
                <form onSubmit={(e) => {submitHandler(e)}}>
                    <div>
                    <label>
                        Username
                    </label>
                        <input className='input'
                        type="text"
                        value={user}
                        onChange={(e) => {setUser(e.target.value)}}
                        />
                    </div>

                    <div className='login-password'>
                    <label>
                        Password
                    </label>
                        <input className='input'
                        type="password"
                        value={password}
                        onChange={(e) => {setPassword(e.target.value)}}
                        />
                    </div>
                    <button>Log In</button>
                </form>
            </div>
        </div>
        <h1 style={{textAlign: 'center', color: 'red'}}>
            {errorMessage}
        </h1>    
    </div>
    )
    
}

export default Login