import {Navbar, Container, Nav, Button} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {logout} from '../actions/loginActions'
import {useDispatch} from 'react-redux'
import { useHistory } from "react-router-dom";

const Navigation = () => {

  const history = useHistory()

    const styles = {
        paddingLeft: '1.5rem', 
        color: 'white',
        textDecoration: 'none',
        fontSize: '20px'
    }

    const navStyles = {
      paddingLeft: '1.5rem', 
      color: 'white',
      textDecoration: 'none',
      fontSize: '20px',
      marginLeft: '150px'
    }
    const {isLoggedIn} = useSelector(state => state.loginReducer)
    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(logout())
        history.push('/')
    }

    return(
        <Navbar bg='dark' variant='dark' style={{height: '80px'}}>
          <Container>
            <Nav className="me-auto" style={navStyles} >
              <NavLink to="/" style={styles}>На главную</NavLink>
              <NavLink to="/posts" style={styles}>Посты</NavLink>
              <NavLink to="/" style={styles}></NavLink>
            </Nav>

            <Nav className="d-flex" style={{alignItems: "center", marginRight: '150px'}}>
            {isLoggedIn
            ?
            <>
                <NavLink to="/profile">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/1/12/User_icon_2.svg"
                    width="40"
                    height="38"
                    className="d-inline-block align-top"
                    alt="user"
                  />
                </NavLink>
                <Button onClick={logoutHandler} style={{width: '100%', marginLeft: '50px', marginTop: '0'}}>Log Out</Button>
              </>
            :
            <NavLink to="/login" style={styles}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/12/User_icon_2.svg"
                width="40"
                height="38"
                className="d-inline-block align-top"
                alt="user"
              />
            </NavLink>
            }
          </Nav>
        </Container>
      </Navbar>


    )
}

export default Navigation