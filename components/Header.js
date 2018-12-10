import {Component} from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

class Header extends Component {
  state = {
    open: false,
  };
  handleClick = () => {
    this.setState (state => ({open: !state.open}));
  };
  render () {
    const {open} = this.state;
    return (
      <header>
        <nav className="navbar navbar-inverse" role="navigation">
          <div className="navbar-logo">
            <AnchorLink href="#__next">
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
              <AnchorLink href="#service">
                Service
              </AnchorLink>
            </li>
            <li>
              <AnchorLink href="#experience" target="_self">
                Experience
              </AnchorLink>
            </li>
            <li>
              <AnchorLink href="#products" target="_self">
                Products
              </AnchorLink>
            </li>
            <li>
              <AnchorLink href="#contact" target="_self">
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
