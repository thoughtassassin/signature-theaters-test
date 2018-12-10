import {Component} from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

class Header extends Component {
  state = {
    open: false,
  };
  handleClick = () => {
    this.setState (state => ({open: !state.open}));
  };
  handleCloseClick = () => {
    this.setState ({open: false});
  };
  render () {
    const {open} = this.state;
    return (
      <header>
        <nav className="navbar navbar-inverse" role="navigation">
          <div className="navbar-logo">
            <AnchorLink onClick={this.handleCloseClick} href="#__next">
              <img
                src="/static/signature-theaters-logo.png"
                alt="Signature Theaters logo"
              />
            </AnchorLink>
          </div>
          <a onClick={this.handleClick} tabIndex="0" className={open ? "navbar-toggle open" : "navbar-toggle"}>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </a>
          <ul className={open ? 'nav navbar-nav new-class' : 'nav navbar-nav'}>
            <li>
              <AnchorLink onClick={this.handleCloseClick} href="#service">
                Service
              </AnchorLink>
            </li>
            <li>
              <AnchorLink onClick={this.handleCloseClick} href="#experience">
                Experience
              </AnchorLink>
            </li>
            <li>
              <AnchorLink onClick={this.handleCloseClick} href="#products">
                Products
              </AnchorLink>
            </li>
            <li>
              <AnchorLink onClick={this.handleCloseClick} href="#contact">
                Contact us
              </AnchorLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
