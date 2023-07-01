import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function OfferCards() {
  return (
    <Container className='border offer-cards'>
      <Row >
        <Col lg={3} md={6} sm={6}><img src="https://rukminim1.flixcart.com/fk-p-flap/400/400/image/3a49fcd3996d0236.jpg?q=50" alt="Card1" className='w-100' /></Col>
        <Col lg={3} md={6} sm={6}><img src="https://rukminim1.flixcart.com/fk-p-flap/400/400/image/7205c767fbea85f7.jpg?q=50" alt="Card2" className='w-100' /></Col>
        <Col lg={3} md={6} sm={6}><img src="https://rukminim1.flixcart.com/fk-p-flap/400/400/image/fb92fee9301e192c.jpg?q=50" alt="Card3" className='w-100' /></Col>
        <Col lg={3} md={6} sm={6}><img src="https://rukminim1.flixcart.com/fk-p-flap/400/400/image/e3be5c3b531726c7.jpg?q=50" alt="Card4" className='w-100'/></Col>
      </Row>
    </Container>
  );
}
