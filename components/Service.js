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
            After a free consultation to determine the scope, budget requirements,
            and timeline of your project, we will submit a to-the-dollar proposal 
            complete with schematic drawings and blueprints tailored to your personal
            preferences. Design revisions continue until the system perfectly compliments 
            your home and fulfills all of your A/V and home automation needs. 
          </p>
        </div>
      </div>
      <div className="row service-list-item vertical-align order-right">
        <div className="col-lg-7 col-sm-6 col-xs-12">
          <img
            src="/static/home-stereo.png"
            alt="Home Stereo Example"
            className="right"
          />
        </div>
        <div className="col-lg-5 col-sm-6 col-xs-12">
          <h2>Installation</h2>
          <p>
            After an agreement is made on a design, we use our 25 years of experience
            and Cedia Certified professionals to insure that every install is done as 
            if it were our home. We know what makes a great installation are the 
            little things that our clients will likely never see. Our client’s 
            satisfaction is the most important part of this process. 
          </p>

        </div>
      </div>
      <div className="row service-list-item vertical-align">
        <div className="col-lg-7 col-sm-6 col-xs-12">
          <img
            src="/static/signature-truck.png"
            alt="Truck in front of home"
          />
        </div>
        <div className="col-lg-5 col-sm-6 col-xs-12">
          <h2>Support</h2>
          <p>
            Establishing long term personal relationships with our clients 
            through years of unfailing support after the install is the key 
            to our success. Using remote troubleshooting access and service 
            contracts, we monitor and update your system remotely, heading 
            off any potential problems, and doing what we do best: making 
            sure your system performs as it should.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Service;
