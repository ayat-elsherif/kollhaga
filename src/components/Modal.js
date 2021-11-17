import React, { Component } from "react";
import { ProductConsumer } from "./ProductContext";
import { Modal, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
class ProductModal extends Component {
  render() {
    return (
      <div>
        <ProductConsumer>
          {value => {
            const { id, info, title, img, inCart, price, company } =
              value.modalProduct;
            return (
              <Modal
                show={value.modalOpen}
                // aria-labelledby="contained-modal-title-vcenter"
                centered
                onHide={() => value.closeModal()}
              >
                <Card className="text-center">
                  <Modal.Header closeButton></Modal.Header>
                  <Card.Img
                    variant="top"
                    src={img}
                    style={{ width: "250px", margin: "auto" }}
                  />
                  <Card.Body>
                    <Card.Title>
                      {title}- {company}
                    </Card.Title>
                    <Card.Text className="price">${price}</Card.Text>
                    <Button
                      variant="secondary"
                      className="mx-3 mb-3"
                      onClick={value.closeModal}
                    >
                      Keep Shopping
                    </Button>
                    <Button
                      className="btn btn-black mx-3 mb-3"
                      onClick={value.closeModal}
                    >
                      <Link to={"/store"}>Go to Cart</Link>
                    </Button>
                  </Card.Body>
                </Card>
              </Modal>
            );
          }}
        </ProductConsumer>
      </div>
    );
  }
}

export default ProductModal;
