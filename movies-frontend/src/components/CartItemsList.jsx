import ListGroup from "react-bootstrap/ListGroup";
import React from "react";
import {Button} from "react-bootstrap";
import axios from "axios";


function CartItemsList ({ cartItems }) {

    const calculatePrice = (price, quantity) => {
        return price * quantity;
    };

    const calculateTotalCartPrice = () => {
        if (cartItems.length === 0) {
            return 0;
        }
        else {
            let total = 0;
            cartItems.forEach((item) => {
                    total += item.price * item.quantity;
                }
            )
            return total;
        }
    };

    const handleDeleteItem = async (movieId) => {
        await axios.post(`http://localhost:8080/api/cart/delete`, null, {
            params: { movieId: movieId },
            withCredentials: true
        });
        window.location.reload();
    };

    return (
        <div>
            <ListGroup>
                {cartItems.length === 0 ? (
                    <p>Your cart is empty!</p>
                ) : (
                cartItems.map((item, index) => (
                    <ListGroup.Item key={index} className="bg-body-secondary border-4 my-2 rounded">
                        <div className="fs-2"><b>{item.title}</b></div>
                        <div className="d-flex">
                            <p>Quantity: {item.quantity}, Price per item: {item.price}$</p>
                            <p className="ms-auto">Total item price: {calculatePrice(item.price, item.quantity)}$</p>
                            <Button className="ms-3" variant="secondary" onClick={() => handleDeleteItem(item.movieId)}>Delete item</Button>
                        </div>
                    </ListGroup.Item>
                    ))
                )}
            </ListGroup>
            <h1>TOTAL: {calculateTotalCartPrice()}$</h1>
        </div>
    );
}

export default CartItemsList;