const Service = () => (
  <section id="service">
    <div className="container">
      <h1>Signature Services</h1>
      <div className="row service-list-item vertical-align">
        <div className="col-lg-7 col-sm-6 col-xs-12">
          <img
            src="/static/edwards-raquet-club-blueprint.png"
            alt="Blueprints of Edwards Raquet Club"
          />
        </div>
        <div className="col-lg-5 col-sm-6 col-xs-12">
          <h2>Design</h2>
          <p>
            A free consultation establishes needs and preferences. Afterwards 
            Signature Theaters begins the design phase by producing a detailed customer 
            proposal equipped with home schematic and blueprint. Customers make any
            revisions necessary.
          </p>
        </div>
      </div>
      <div className="row service-list-item vertical-align order-right">
        <div className="col-lg-7 col-sm-6 col-xs-12">
          <img
            src="/static/smith-kahala-stereo.png"
            alt="Home Stereo Example"
            className="right"
          />
        </div>
        <div className="col-lg-5 col-sm-6 col-xs-12">
          <h2>Installation</h2>
          <p>
            After the design phase is complete, installation timeframes
            are established. Signature Theater provides Cedia Certified
            professionals and over 25 years of industry experience for
            the installation phase. Customer satisfaction is our highest priority.
          </p>

        </div>
      </div>
      <div className="row service-list-item vertical-align">
        <div className="col-lg-7 col-sm-6 col-xs-12">
          <img
            src="/static/stevens-winfield-truck.png"
            alt="Truck in front of home"
          />
        </div>
        <div className="col-lg-5 col-sm-6 col-xs-12">
          <h2>Support</h2>
          <p>
            Establishing long-term relationships with clients ensures
            satisfaction is on-going. Through remote troubleshooting,
            Signature Theaters can monitor systems to avoid any potential
            problems. Updates can be conducted remotely. Technicians are
            always available by phone for support.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Service;
