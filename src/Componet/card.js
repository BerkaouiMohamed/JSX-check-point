import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ProfilePhoto from './Profile/ProfilePhoto';
import Adress from './Profile/Adress';
import FullName from './Profile/FullName';

function KitchenSinkExample() {
  return (
    <Card style={{ width: '18rem' }}>
      <ProfilePhoto/>
      <Card.Body>
        <Card.Title>
            <FullName/>
        </Card.Title>
       
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item><Adress/></ListGroup.Item>
      
      </ListGroup>
      <Card.Body>
        <Card.Link href="https://www.facebook.com/rasko.loco">facebook Link</Card.Link>
      
      </Card.Body>
    </Card>
  );
}

export default KitchenSinkExample;