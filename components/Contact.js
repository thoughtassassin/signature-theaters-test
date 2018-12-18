import {emailValidation} from '../utils/emailValidation';
const initialState = {
  name: {
    value: '',
    validation: null,
    errorMessage: 'Name is required.',
    error: false,
  },
  email: {
    value: '',
    validation: emailValidation,
    errorMessage: 'Email must be a valid email.',
    error: false,
  },
  comment: {
    value: '',
    validation: null,
    errorMessage: 'Comment is required.',
    error: false,
  },
  errors: [],
  messageSent: false,
};

class Contact extends React.Component {
  state = initialState;

  handleChange = ({target: {name, value}}) => {
    const {[name]: element} = this.state;
    this.setState ({
      [name]: {...element, value, error: false},
    });
  };

  closeAlert = () => {
    this.setState({messageSent: false});
  }

  handleSubmit = e => {
    e.preventDefault ();
    let errorCount = 0;
    this.setState ({errors: []});
    for (const field in this.state) {
      if (field !== 'errors' && field !== 'messageSent') {
        const {validation, value, errorMessage} = this.state[field];
        if (!value || (validation && !validation.test (value))) {
          errorCount++;
          this.setState (state => ({
            [field]: {...state[field], error: true},
            errors: [...state.errors, errorMessage],
          }));
        }
      }
    }
    if (errorCount === 0) {
      if (grecaptcha) {
        grecaptcha.ready (() =>
          grecaptcha
            .execute ('6Lcdd4EUAAAAAHBWMAYgcS2KxkXt4_cc_1e6yIDa')
            .then (token => {
              fetch ('/validate', {
                method: 'post',
                headers: {
                  'Content-Type': 'application/json; charset=utf-8',
                },
                body: JSON.stringify ({token}),
              })
                .then (response => {
                  if (response.ok) {
                    fetch ('/mail', {
                      method: 'post',
                      headers: {
                        'Content-Type': 'application/json; charset=utf-8',
                      },
                      body: JSON.stringify ({
                        to: 'utpbart@yahoo.com',
                        name: this.state.name.value,
                        from: this.state.email.value,
                        comment: this.state.comment.value,
                      }),
                    })
                      .then (reponse => {
                        if (response.ok) {
                          return console.log ('Message Sent');
                        } else {
                          Promise.reject ('Message was not sent.');
                        }
                      })
                      .then (() =>
                        this.setState ({...initialState, messageSent: true})
                      );
                  }
                })
                .then (validation => console.log (validation));
            })
        );
      }
    }
  };

  render () {
    const {name, email, comment, messageSent} = this.state;
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
              {messageSent &&
                <div class="alert alert-success" role="alert">
                  Message sent!
                  <button
                    type="button"
                    class="close"
                    onClick={this.closeAlert}
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>}
              <form name="contact-form" noValidate onSubmit={this.handleSubmit}>
                <div className={name.error ? 'form-group error' : 'form-group'}>
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
                  {name.error &&
                    <div className="error-message"> {name.errorMessage}</div>}
                </div>
                <div
                  className={email.error ? 'form-group error' : 'form-group'}
                >
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
                  {email.error &&
                    <div className="error-message"> {email.errorMessage}</div>}
                </div>
                <div
                  className={comment.error ? 'form-group error' : 'form-group'}
                >
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
                  {comment.error &&
                    <div className="error-message">
                      {' '}{comment.errorMessage}
                    </div>}
                </div>
                <div className="section-button">
                  <button className="btn btn-default btn-lg">
                    Send Email
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
