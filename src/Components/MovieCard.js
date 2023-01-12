import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import MovieRating from './MovieRating';

function MovieCard({el}) {
  return (
    <div className='aa'>
        
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={el.image} />
      <Card.Body>
      
        <Card.Title>{el.name}</Card.Title>
        <Card.Text>{el.type}</Card.Text>
        <Card.Text>
      {el.description}
        </Card.Text>
        <Card.Text>{el.date}</Card.Text>
        <MovieRating el={el}/>
        <Button variant="danger">Go </Button>

      </Card.Body>
    </Card>
    
  


    </div>
    
  );
}

export default MovieCard;