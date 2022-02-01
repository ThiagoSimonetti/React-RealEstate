import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle, Button } from "reactstrap";
import { Link } from "react-router-dom";
import CardBody from "reactstrap/lib/CardBody";
import CardText from "reactstrap/lib/CardText";
import CardFooter from "reactstrap/lib/CardFooter";
// import { Loading } from "./LoadingComponent";
// import { baseUrl } from "../shared/baseUrl";

function RenderDirectoryItem({ home }) {
  return (
    <div className="col pb-5">
      <Card className="h-100 shadow-sm">
        {/* <Link to={`/directory/${home.id}`}> */}
        <CardImg
          className="card-img-top"
          width="100%"
          src={home.image}
          alt={home.title}
        />
        <CardBody>
          <CardTitle className="text-center">{home.title}</CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet, quando eruditi tacimates eu pri. Dicta
            vocent democritum pri ea, per ut dicat atqui placerat. Quas soleat
            hendrerit at his, ut eos veritus expetendis, modus.
          </CardText>
        </CardBody>
        <CardFooter className="bg-transparent border-top-0 mb-3 d-flex justify-content-center">
          <Button className="btn btn-sm btn-success">Mais Informações</Button>
        </CardFooter>
        {/* </Link> */}
      </Card>
    </div>
  );
}

function Directory(props) {
  console.log("props", props);
  const directory = props.homes.homes.map((home) => {
    return (
      <div key={home.id} className="col-md-5 m-1">
        <RenderDirectoryItem home={home} />
      </div>
    );
  });

  // if (props.homes.isLoading) {
  //   return (
  //     <div className="container">
  //       <div className="row">
  //         <Loading />
  //       </div>
  //     </div>
  //   );
  // }
  // if (props.homes.errMess) {
  //   return (
  //     <div className="container">
  //       <div className="row">
  //         <div className="col">
  //           <h4>{props.campsites.errMess}</h4>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }
  return (
    <React.Fragment>
      <div className="container py-5 text-center">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Imóveis em Destaque</h1>
            <p className="lead text-muted">
              Lorem ipsum dolor sit amet, quando eruditi tacimates eu pri. Dicta
              vocent democritum pri ea, per ut dicat atqui placerat. Quas soleat
              hendrerit at his, ut eos veritus expetendis, modus.
            </p>
          </div>
        </div>
      </div>
      <div className="container pb-5 px-5">
        <div className="row">{directory}</div>
      </div>
    </React.Fragment>
  );
}

export default Directory;
