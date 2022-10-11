import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import "./CardComponent.css"
function CardComponent({name, img, url}) {
return (
    <Card className='Card_div'>
    <Card.Img className='Card-img' variant="top" src={img} />
    <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
        </Card.Text>
        <Link to={url}>
        <Button  variant="primary" className='button'>Administrar {name}</Button>
        </Link>
    </Card.Body>
    </Card>
);
}

export default CardComponent;