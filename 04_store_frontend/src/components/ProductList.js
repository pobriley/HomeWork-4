import React, {useState, useEffect} from 'react';
import {Table, Container, Row, Button,} from "reactstrap";
import axios from "axios";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faTrasAlt} from "@fortawesome/free-solid-svg-core";

function ProductList() {
    const [products, setProducts ] =  useState([]);
    const updateProduct = () => {
        axios.get("http://localhost:5000/api/products").then((response)=> {
            setProducts(response.data);
            console.log ("Updating Product List......");
        }); 
     };
    useEffect(()=>{
        updateProduct();
    },[]);
    
  return (
    <Container>
        <Row>
            <h3>Product List</h3>
        </Row>

        <Row>
            <Table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product)=>{
                    return (
                            <tr key={product.id}>
                                 <td> {product.name}</td>
                                 <td> {product.category}</td>
                                 <td> {product.price}</td>
                                 <td>
                                    <Button color='into'href={"/edit/"+product.id}>
                                    <FontAwesomeIcon icon={faEdit} />Edit
                                    </Button>{" "}
                                     
                                     <Button color='danger'><FontAwesomeIcon icon={faTrasAlt}/>Detele</Button>
                                 </td>
                                </tr>
                        )
                    })}
                </tbody>
            </Table>
        </Row>
    </Container>
  )
}

export default ProductList