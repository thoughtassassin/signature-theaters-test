const Contact = () => (
  <section className="contact" id="contact">
    <div className="container">
      <div className="row">
        <div className="contact-info">
          <div className="col-xs-12">
            <h1>Contact Us</h1>
          </div>
          <div className="col-xs-12">
            <h2 className="phone-label">Call</h2>
            <p className="phone">432-889-8458</p>
          </div>
        </div>
        <div className="col-xs-12 email">
          <h2>Send An Email</h2>
          <form name="contact-form" noValidate>
            <div className="form-group">
              <label htmlFor="name" className="control-label">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="control-label">Email</label>
              <input
                id="email"
                name="email"
                type="text"
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="comment" className="control-label">Comment</label>
              <textarea
                id="comment"
                className="form-control"
                placeholder="Type here..."
                required
                rows="7"
              />
            </div>
            <div className="section-button">
              <a href="/service" className="btn btn-default btn-lg">
                Send Email
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
