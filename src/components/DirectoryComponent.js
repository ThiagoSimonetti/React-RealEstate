import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardTitle,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
} from "reactstrap";

import CardBody from "reactstrap/lib/CardBody";
import CardText from "reactstrap/lib/CardText";
import CardFooter from "reactstrap/lib/CardFooter";
import ModalFooter from "reactstrap/lib/ModalFooter";

class RenderDirectoryItem extends Component {
  constructor(props) {
    super(props);
    console.log("Home props", props);
    this.state = {
      isModalOpen: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  render() {
    return (
      <React.Fragment>
        <Card className="h-100 shadow-sm">
          <CardImg
            className="card-img-top"
            width="100%"
            src={this.props.home.featuredimage}
            alt={this.props.home.title}
          />
          <CardBody>
            <CardTitle className="text-center">
              {this.props.home.title}
            </CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, quando eruditi tacimates eu pri. Dicta
              vocent democritum pri ea, per ut dicat atqui placerat. Quas soleat
              hendrerit at his, ut eos veritus expetendis, modus.
            </CardText>
          </CardBody>
          <CardFooter className="bg-transparent border-top-0 mb-3 d-flex justify-content-center">
            <Button
              className="btn btn-sm btn-success"
              onClick={this.toggleModal}
            >
              Additional Photos
            </Button>
          </CardFooter>
        </Card>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Additional Photos</ModalHeader>
          <ModalBody>
            {this.props.home.images.map((img, i) => {
              console.log("image arr", img);
              return (
                <CardImg
                  className="card-img-top mb-2"
                  width="100%"
                  src={img}
                  alt={img}
                  key={i}
                />
              );
            })}
          </ModalBody>
          <ModalFooter>
            Contact us today for your next dream home.
            <a
              role="button"
              className="btn btn-link text-nowrap"
              href="tel:+(415) 123-4567"
            >
              <i className="fa fa-phone" /> (415) 123-4567
            </a>
          </ModalFooter>
        </Modal>
      </React.Fragment>
    );
  }
}

function Directory(props) {
  console.log("props", props);

  const directory = props.homes.homes.map((home) => {
    return (
      <div key={home.id} className="col pb-5">
        <RenderDirectoryItem home={home} />
      </div>
    );
  });

  return (
    <React.Fragment>
      <div id="directory_id">
        <div className="container py-5 text-center">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">Featured Homes</h1>
              <p className="lead pt-3 text-muted">
                Lorem ipsum dolor sit amet, quando eruditi tacimates eu pri.
                Dicta vocent democritum pri ea, per ut dicat atqui placerat.
                Quas soleat hendrerit at his, ut eos veritus expetendis, modus.
              </p>
            </div>
          </div>
        </div>
        <div className="container pb-5 px-5">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
            {directory}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Directory;
