import {emailValidation} from '../utils/emailValidation';

class Contact extends React.Component {
  state = {
    name: {
      value: '',
      validation: null,
      errorMessage: 'Name is required.'
    },
    email: {
      value: '',
      validation: emailValidation,
      errorMessage: 'Email must be a valid email.'
    },
    comment: {
      value: '',
      validation: null,
      errorMessage: 'Comment is required.'
    },
    errors: []
  };

  handleChange = ({target: {name, value}}) => {
    const { [name] : element } = this.state;
    this.setState ({
      [name] : {...element, value}
    });
  }
    
  handleSubmit = e => {
    e.preventDefault();
    this.setState({errors: []})
    for (const field in this.state) {
      if (field != 'errors') {
        const {validation, value, errorMessage} = this.state[field];
        if (!value || validation && !validation.test(value)) {
          this.setState(state => ({errors: [...state.errors, errorMessage]}));
        }
      } 
    }
  }

  render () {
    const {name, email, comment} = this.state;
    return (
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
              <form name="contact-form" noValidate onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name" className="control-label">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="form-control"
                    value={name.value}
                    pattern={name.valiation}
                    onChange={this.handleChange}
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
                    value={email.value}
                    pattern={email.valiation}
                    onChange={this.handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="comment" className="control-label">
                    Comment
                  </label>
                  <textarea
                    id="comment"
                    name="comment"
                    className="form-control"
                    placeholder="Type here..."
                    value={comment.value}
                    pattern={comment.valiation}
                    onChange={this.handleChange}
                    required
                    rows="7"
                  />
                </div>
                <div className="section-button">
                  <button className="btn btn-default btn-lg">
                    Send Email
                  </button>
                </div>
              </form>
            </div>
          </div>
          {JSON.stringify(this.state.errors)}
        </div>
      </section>
    );
  }
}

export default Contact;
