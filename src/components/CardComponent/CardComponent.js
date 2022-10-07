import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./CardComponent.css"
function CardComponent({name, img}) {
return (
    <Card className='Card_div'>
    <Card.Img variant="top" src={img} />
    <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
    </Card.Body>
    </Card>
);
}

export default CardComponent;