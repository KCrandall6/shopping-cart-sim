import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import useFetchFruits from '../../hooks/useFetchFruits';

const Home = () => {

  const fruitList = useFetchFruits();

  return (
    <div>
    <div className="d-flex flex-column align-items-center p-2">
      <h1>Welcome to the Shopping Cart Simulator!</h1>
      <h4>Click on an item to add it to your cart</h4>
    </div>
    <div className="d-flex p-2 m-2 align-items-center justify-content-center flex-wrap">
      {fruitList.map((fruit) => (
        <Card key={fruit.name} style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{fruit.name}</Card.Title>
          <Card.Text>
            ${fruit.price}
          </Card.Text>
          <Button variant="primary">add to cart</Button>
        </Card.Body>
      </Card>
      ))

      }
    </div>
    </div>
  )
}

export default Home;