import {Component} from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

class Header extends Component {
  state = {
    open: false,
  };
  handleClick = () => {
    this.setState (state => ({open: !state.open}));
  };
  handleLogoClick = () => {
    this.setState ({open: false});
  };
  render () {
    const {open} = this.state;
    return (
      <header>
        <nav className="navbar navbar-inverse" role="navigation">
          <div className="navbar-logo">
            <AnchorLink onClick={this.handleLogoClick} href="#__next">
              <img
                src="/static/signature-theaters-logo.png"
                alt="Signature Theaters logo"
              />
            </AnchorLink>
          </div>
          <a onClick={this.handleClick} className="navbar-toggle">
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </a>
          <ul className={open ? 'nav navbar-nav new-class' : 'nav navbar-nav'}>
            <span className="icon-bar" />
            <li>
              <AnchorLink onClick={this.handleClick} href="#service">
                Service
              </AnchorLink>
            </li>
            <li>
              <AnchorLink onClick={this.handleClick} href="#experience">
                Experience
              </AnchorLink>
            </li>
            <li>
              <AnchorLink onClick={this.handleClick} href="#products">
                Products
              </AnchorLink>
            </li>
            <li>
              <AnchorLink onClick={this.handleClick} href="#contact">
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
