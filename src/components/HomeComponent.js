import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="home" id="home_id">
          <div className="py-5 text-center container">
            <div className="row py-lg-5">
              <div className="col-lg-6 col-md-8 mx-auto">
                <h1 className="fw-light pt-4">Excelência em Serviço</h1>
                <p className="lead my-4">
                  Os melhores imóveis da região de São Paulo para você. Serviço
                  personalizado ao cliente: Venda, locação, avaliação, análise
                  de documentação imobiliária. Estou pronto a atendê-lo!
                </p>

                <i className="signature">Waldemar Dela Marta</i>
                <p className="my-5">
                  CRECI-SP: 20.546 <br></br> Tel: (11) 3731-5997 Cel: 99165-0573
                  Claro/WhatsApp 24hs
                </p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
