import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";
// import { Loading } from "./LoadingComponent";
// import { baseUrl } from "../shared/baseUrl";

function RenderDirectoryItem({ home }) {
  return (
    <Card>
      {/* <Link to={`/directory/${home.id}`}> */}
      <CardImg width="100%" src={home.image} alt={home.title} />
      <CardImgOverlay>
        <CardTitle>{home.title}</CardTitle>
      </CardImgOverlay>
      {/* </Link> */}
    </Card>
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
      <div className="py-5 text-center container">
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
      <div className="pb-5 px-5 featuredHomes">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
          {directory}
        </div>
      </div>
    </React.Fragment>

    // <div className="container">
    //   <div className="row">
    //     <div className="col text-center py-5">
    //       <h1 className="fw-light">Imovéis em Destaque</h1>
    //       <p className="lead text-muted">
    //         Lorem ipsum dolor sit amet, quando eruditi tacimates eu pri. Dicta
    //         vocent democritum pri ea, per ut dicat atqui placerat. Quas soleat
    //         hendrerit at his, ut eos veritus expetendis, modus.
    //       </p>
    //       <hr />
    //     </div>
    //     <hr />
    //   </div>
    //   <div className="row">{directory}</div>
    // </div>
  );
}

export default Directory;
