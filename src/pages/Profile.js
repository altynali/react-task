import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Card, Container} from 'react-bootstrap'
import {fetchProfile} from '../actions/profileActions'

const Profile = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProfile())
    }, [])

    const {error, errorMessage, profile} = useSelector(state => state.profileReducer)

    return(
        <div>
            <Container style={{paddingLeft: '20%', marginTop: '5%'}}>
                <Card.Title>Name: {profile?.name}</Card.Title>
                <Card.Title>Username: {profile?.username}</Card.Title>
                <Card.Title>Email: {profile?.email}</Card.Title>
                <Card.Text style={{marginTop: '1rem'}}>Address: { profile?.address.city}
                                   { profile?.address.street}
                                   { profile?.address.suite}
                                   { profile?.address.street}
                                   { profile?.address.zipcode}
                </Card.Text>
                <Card.Text>Phone: { profile?.phone}</Card.Text>
                <Card.Text>Company: { profile?.company.name}
                                   { profile?.company.catchPhrase}
                                   { profile?.company.bs}
                </Card.Text>
            </Container>

            {error}
            {errorMessage}
        </div>
    )
}

export default Profile