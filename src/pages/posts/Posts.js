import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {fetchPosts} from '../../actions/postsActions'
import {Card, Container} from 'react-bootstrap'
import './Posts.css'

const Posts = () => {
    
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPosts())
    }, [])

    const {error, errorMessage, posts} = useSelector(state => state.postsReducer)

    return(
        <div>
            <Container className="posts-container">
                {posts?.map(post => (
                    <Card className='posts-card' key={post.id}>
                    
                        <h3 style={{width: '5rem', marginLeft: '3rem'}}> {post.id} </h3>
                    
                        <Card.Body className='posts-body'>
                            <Card.Title style={{ width: '100%'}}>
                                {post.title}
                            </Card.Title>
                            <Card.Text>
                                {post.body}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                ))}
            </Container> 
            
            {error}
            {errorMessage}
        </div>
    )
}

export default Posts