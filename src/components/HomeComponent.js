import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="section-1" id="home_id">
          <div className="py-5 text-center container">
            <div className="row py-lg-5">
              <div className="col-lg-6 col-md-8 mx-auto">
                <h1 className="fw-light pt-4">Excelência em Serviço</h1>
                <p className="lead my-4">
                  Os melhores imóveis da região de São Paulo para você. Serviço
                  personalizado ao cliente: Consultoria, financiamento, compra,
                  e venda. Estou pronto a atendê-lo!
                </p>
                {/* <!-- assinatura em letra cursiva --> */}
                <i className="signature">Waldemar Dela Marta</i>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
