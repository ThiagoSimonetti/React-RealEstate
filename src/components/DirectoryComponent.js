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
import { Link } from "react-router-dom";
import CardBody from "reactstrap/lib/CardBody";
import CardText from "reactstrap/lib/CardText";
import CardFooter from "reactstrap/lib/CardFooter";
import ModalFooter from "reactstrap/lib/ModalFooter";

// import { Loading } from "./LoadingComponent";
// import { baseUrl } from "../shared/baseUrl";

// class RenderDirectoryItem extends Component({ home }) {
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

  renderImages(images) {
    console.log("image props", images);
    images.map((img) => {
      console.log("image arr", img);
      return (
        <CardImg
          className="card-img-top mb-2"
          width="100%"
          src={img}
          alt={img}
        />
      );
    });
  }
  render() {
    return (
      <React.Fragment>
        <Card className="h-100 shadow-sm">
          {/* <Link to={`/directory/${home.id}`}> */}
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
              Mais Informações
            </Button>
          </CardFooter>

          {/* </Link> */}
        </Card>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Fotos</ModalHeader>
          <ModalBody>
            {this.props.home.images.forEach((img) => {
              console.log("image arr", img);
              return (
                <CardImg
                  className="card-img-top mb-2"
                  width="100%"
                  src={img}
                  alt={img}
                />
              );
            })}

            {/* {this.renderImages(this.props.home.images)} */}

            {/* <CardImg
              className="card-img-top mb-2"
              width="100%"
              src={this.props.home.images[0]}
              alt={this.props.home.title}
            />
            <CardImg
              className="card-img-top"
              width="100%"
              src={this.props.home.images[1]}
              alt={this.props.home.title}
            />
            <CardImg
              className="card-img-top"
              width="100%"
              src={this.props.home.images[2]}
              alt={this.props.home.title}
            />
            <CardImg
              className="card-img-top"
              width="100%"
              src={this.props.home.images[3]}
              alt={this.props.home.title}
            />
            <CardImg
              className="card-img-top"
              width="100%"
              src={this.props.home.images[4]}
              alt={this.props.home.title}
            />
            <CardImg
              className="card-img-top"
              width="100%"
              src={this.props.home.images[2]}
              alt={this.props.home.title}
            /> */}
          </ModalBody>
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
              <h1 className="fw-light">Imóveis em Destaque</h1>
              <p className="lead text-muted">
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
