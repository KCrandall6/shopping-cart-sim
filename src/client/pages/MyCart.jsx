import React, {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const MyCart = ({setItemsAmount}) => {

  const [myCartList, setMyCartList] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('state'));
    if (items) {
      setMyCartList(items)
    }
    getTotal();
  }, []);

  const getTotal = () => {
    const nums = JSON.parse(localStorage.getItem('state'));
    if (nums) {
      const cost = nums.map((el) => Number(el.price))
      setTotal(cost.reduce((a, b) => a + b, 0));
    }
  }

  const deleteFromCart = (item) => {
    const newList = myCartList.filter((prev) => prev !== item);
    setMyCartList(newList);
    window.localStorage.setItem('state', JSON.stringify(newList))
    if (myCartList.length === 1) {
      window.localStorage.clear();
      setMyCartList([]);
      setTotal(0);
    }
    getTotal();
    setItemsAmount(newList? newList.length : 0);
  }

  
  return (
    <div>
      <div className="d-flex flex-column align-items-center p-2">
      <h4>Your Cart</h4>
      <h5>Total Cost: ${total}</h5>
      </div>
      <div className="d-flex p-2 m-2 align-items-center justify-content-center flex-wrap">
      {myCartList.map((fruit) => (
        <Card key={fruit.name} style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{fruit.name}</Card.Title>
          <Card.Text>
            ${fruit.price}
          </Card.Text>
          <Button onClick={() => deleteFromCart(fruit)} variant="primary">delete from cart</Button>
        </Card.Body>
      </Card>
      ))
      }
    </div>
    </div>
  )
}

export default MyCart;