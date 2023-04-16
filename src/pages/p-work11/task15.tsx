import Form from 'react-bootstrap/Form'
import { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

interface IProduct {
  id: number;
  name: string;
  price: number;
}

interface IShoppingCartItem extends IProduct {
  quantity: number;
}

interface IShoppingCart {
  items: IShoppingCartItem[];
  setItems: React.Dispatch<React.SetStateAction<IShoppingCartItem[]>>;
}

export function Task15 () {
  const [items, setItems] = useState<IShoppingCartItem[]>([]);
  const handleAddItem = (product: IProduct) => {
    setItems((prevState) => {
      const existingItem = prevState.find((item) => item.id === product.id);
      if (existingItem) {
        return prevState.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevState, { ...product, quantity: 1 }];
      }
    });
  };

  return (
    <div className="row">
      <div className="col-md-6">
        <h3>Products</h3>
        <ListGroup>
          {shoppingList.map((product) => (
            <DisplayProduct
              key={product.id}
              {...product}
              handleAddItem={() => handleAddItem(product)}
            />
          ))}
        </ListGroup>
      </div>
      <div className="col-md-6">
        <h3>Cart</h3>
        <ShoppingCart items={items} setItems={setItems} />
      </div>
    </div>
  );
}



const shoppingList: IProduct[] = [
  { id: 1, name: 'Milk', price: 1.99 },
  { id: 2, name: 'Bread', price: 2.49 },
  { id: 3, name: 'Eggs', price: 4.99 },
  { id: 4, name: 'Cheese', price: 5.99 },
  { id: 5, name: 'Chicken', price: 8.99 },
  { id: 6, name: 'Beef', price: 12.99 },
  { id: 7, name: 'Salmon', price: 18.99 },
];

const ShoppingCart: React.FC<IShoppingCart> = ({ items, setItems }) => {
  const handleRemoveItem = (itemId: number) => {
    setItems((prevState) =>
      prevState.filter((item) => item.id !== itemId)
    );
  };

  const totalPrice = items.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  return (
    <ListGroup>
      {items.map((item) => (
        <ListGroup.Item key={item.id}>
          {item.name} - ${item.price} x {item.quantity}{' '}
          <Button variant="danger" onClick={() => handleRemoveItem(item.id)}>
            Remove
          </Button>
        </ListGroup.Item>
      ))}
      <ListGroup.Item>Total: ${totalPrice.toFixed(2)}</ListGroup.Item>
    </ListGroup>
  );
};

interface IDisplayProduct extends IProduct {
  handleAddItem: () => void;
}

const DisplayProduct: React.FC<IDisplayProduct> = ({
  id,
  name,
  price,
  handleAddItem,
}) => (
  <ListGroup.Item>
    {name} - ${price}{' '}
    <Button variant="primary" onClick={handleAddItem}>
      Add
    </Button>
  </ListGroup.Item>
);

interface IShoppingListProps {}