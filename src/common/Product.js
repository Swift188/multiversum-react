import React from 'react'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBCardFooter,
} from 'mdb-react-ui-kit'

const Product = ({ product }) => {
  return (
    <MDBCard alignment='center' style={{ flex: '33.33%' }}>
      <MDBCardBody>
        <img
          src={product.imageUrl}
          className='product-image'
          alt={product.title}
        />
        <MDBCardTitle>{product.title}</MDBCardTitle>
        <MDBCardText>{product.description}</MDBCardText>
      </MDBCardBody>
      <MDBCardFooter>
        <MDBBtn>In winkelwagen + €{product.price}</MDBBtn>
        <MDBBtn>Button</MDBBtn>
      </MDBCardFooter>
    </MDBCard>
  )
}

export default Product
