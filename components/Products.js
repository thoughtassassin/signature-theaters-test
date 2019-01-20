const Products = () => (
  <section className="products" id="products">
    <div className="container">
      <h1>Signature Products</h1>
      <div className="row products-list-item">
        <div className="col-sm-4 col-xs-6 product">
          <a href="https://www.anthemav.com/" target="_blank">
            <img src="/static/anthem-logo.svg" alt="Anthem logo" />
          </a>
        </div>
        <div className="col-sm-4 col-xs-6 product">
          <a href="https://www.control4.com/" target="_blank">
            <img src="/static/control4-logo.svg" alt="Control4 logo" />
          </a>
        </div>
        <div className="col-sm-4 col-xs-6 product">
          <a href="https://www.klipsch.com/" target="_blank">
            <img src="/static/klipsch-logo.svg" alt="Klipsch logo" />
          </a>
        </div>
        <div className="col-sm-4 col-xs-6 product">
          <a href="http://www.lutron.com/en-US/Pages/default.aspx" target="_blank">
            <img src="/static/lutron-logo.svg" alt="Lutron logo" />
          </a>
        </div>
        <div className="col-sm-4 col-xs-6 product">
          <a href="https://www.pakedge.com/" target="_blank">
            <img src="/static/pakedge-logo.svg" alt="Pakedge logo" />
          </a>
        </div>
        <div className="col-sm-4 col-xs-6 product">
          <a href="https://www.screeninnovations.com/" target="_blank">
            <img src="/static/SI-logo.svg" alt="Blueprints of home" />
          </a>
        </div>
        <div className="col-sm-4 col-xs-6 product">
          <a href="https://www.sonance.com/" target="_blank">
            <img src="/static/sonance-logo.svg" alt="Sonance logo" />
          </a>
        </div>
        <div className="col-sm-4 col-xs-6 product">
          <a href="https://www.sony.com/" target="_blank">
            <img src="/static/sony-logo.svg" alt="Sony logo" />
          </a>
        </div>
        <div className="col-sm-4 col-xs-12 product last">
          <a href="https://www.triadspeakers.com/" target="_blank">
            <img src="/static/triad-logo.svg" alt="Triad logo" />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Products;
