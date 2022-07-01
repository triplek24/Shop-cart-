import {
  Container,
  Card,
  Button,
  Badge,
  Row,
  Col,
} from 'react-bootstrap';
import { Rating } from './Rating.js';
import { CardData } from './CardData.js';

export function CardComp({ item, setItem }) {
  // Adding to  the cart
  const Add = (data) => {
    const items = [...item];
    items.push(data);
    setItem(items);
  };

  return (
    <div className="main">
      <Container>
        <Row>
         
            {CardData.map((data, index) => {
              const { id, title, ratings, striked, price, sale, options } =
                data;

              return (
                <Col xs={6} md={6} lg={3} key={index}>
                  <Card className="cards">
                    <Badge
                      className="saleBdg"
                      variant="dark"
                      style={{
                        padding: '0.35em 0.65em',
                        display: sale === true ? 'block' : 'none',
                      }}
                    >
                      Sale
                    </Badge>

                    <Card.Img
                      variant="top"
                      src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
                    />

                    <Card.Body className="cardBody">
                      <h5>{title}</h5>
                      <Rating ratings={ratings} />

                      <p>
                        <span className="striked">{striked}</span>

                        {title === 'Fancy Product'
                          ? price
                          : '$' + price + '.00'}
                      </p>
                    </Card.Body>

                    <div>
                      {options === true ? (
                        <Button variant="outline-dark">View Options</Button>
                      ) : (
                        <Button
                          className={id}
                          variant="outline-dark"
                          onClick={() => {
                            Add(data);
                          }}
                        >
                          Add to cart
                        </Button>
                      )}
                    </div>
                  </Card>
                </Col>
              );
            })}
         
        </Row>
      </Container>
    </div>
  );
}
