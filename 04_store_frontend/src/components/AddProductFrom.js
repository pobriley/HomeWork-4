import React from 'react';
import {Container, Row, Button, Form, FormGroup,Label,Input,Alert,} from "reactstrap";

function AddProductFrom() {
  return (
    <Container>
        <Row>
            <h3>Add New Product</h3>
        </Row>

        <Form>
            <FormGroup>
                <label form='productName'>Product Name</label>
                <input type="text" name="name" id="productName" value="" placeholder='Enter Name'/>
            </FormGroup>

            <FormGroup>
                <label form='productName'>Product Category</label>
                <input type="text" name="category" id="productCategory" value="" placeholder='EnterCategory<'/>
            </FormGroup>
            
            <FormGroup>
                <label form='productName'>Product Price</label>
                <input type="text" name="price" id="productPrice" value="" placeholder='Enter Price'/>
            </FormGroup>

            <FormGroup>
                <label form='productName'>Product Tags</label>
                <input type="text" name="tags" id="productTags" value="" placeholder='Enter Tags'/>
            </FormGroup>

            <Button className='btn btn-success'>Add New Product</Button>
        </Form>
    </Container>
  )
}

export default AddProductFrom