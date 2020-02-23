import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Order = props => (
    <tr>
    <td>{props.order.username}</td>
    <td>{props.order.items}</td>
    <td>{String(props.order.shipped)}</td>
    <td>{props.order.totalPrice}</td>
    <td>{props.order.date.substring(0,10)}</td>
    <td>
      <Link to={"/edit/"+props.order._id}>edit</Link> | <a href="#" onClick={() => { props.deleteOrder(props.order._id) }}>delete</a>
    </td>
  </tr>
)
export default class OrdersList extends Component{
    constructor(props){
        super(props);

        this.deleteOrder = this.deleteOrder.bind(this);

        this.state = { orders: []};
    }

    componentDidMount(){
        axios.get('http://localhost:5000/orders/')
            .then(response => {
                this.setState({orders: response.data})
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteOrder(id){
        axios.delete('http://localhost:5000/orders/' + id)
            .then(res => console.log(res.data));
        this.setState({
            orders: this.state.orders.filter(el => el._id !== id)
        })
    }

    orderList(){
        return this.state.orders.map(currentorder =>{
            return <Order order={currentorder} deleteOrder={this.deleteOrder} key={currentorder._id}/>;
        })
    }
    render(){
        return(
    
        <div>
            <h3>Logged Orders</h3>
            <table className="table">
            <thead className="thead-light">
                <tr>
                <th>Username</th>
                <th>Items</th>
                <th>Shipped</th>
                <th>Total Price</th>
                <th>Date</th>
                <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                { this.orderList() }
            </tbody>
            </table>
        </div>
        )
    }
}