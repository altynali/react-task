import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {fetchItems} from '../../actions/homeActions'
import {Card, Container} from 'react-bootstrap'
import './Home.css'

const Home = () => {
    
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchItems())
    }, [])

    const {error, errorMessage, items} = useSelector(state => state.homeReducer)


    return(
        <div>           
            <Container className='home-container'>
                {items?.map(item => (
                    <Card className='home-card' key={item.id}>
                        <h3 className='home-id' style={{width: '5rem', marginLeft: '3rem'}}> {item.id} </h3>
                        <Card.Img variant="left" src={item.thumbnailUrl} />

                        <Card.Body className='home-body'>
                            <Card.Title className='home-title' >
                                {item.title}
                            </Card.Title>
                        </Card.Body>
                    </Card>
                ))}
            </Container> 
            
            {error}
            {errorMessage}
        </div>
    )
}

export default Home