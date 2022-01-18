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
    <div className="container">
      <div className="row">
        <div className="col">
          <h2>Directory</h2>
          <hr />
        </div>
      </div>
      <div className="row">{directory}</div>
    </div>
  );
}

export default Directory;
