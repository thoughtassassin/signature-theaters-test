import AnchorLink from 'react-anchor-link-smooth-scroll'

const Header = () => (
    <header>
      <nav className="navbar navbar-inverse" role="navigation">
        <div className="navbar-logo">
          <AnchorLink  href="#__next">
            <img
              src="/static/signature-theaters-logo.png"
              alt="Signature Theaters logo"
            />
          </AnchorLink >
        </div>
        <a className="navbar-toggle">
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </a>
        <ul className="nav navbar-nav">
          <span className="icon-bar" />
          <li>
            <AnchorLink href="#service">
              Service
            </AnchorLink>
          </li>
          <li>
            <AnchorLink  href="#experience" target="_self">
              Experience
            </AnchorLink >
          </li>
          <li>
            <AnchorLink  href="#products" target="_self">
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
)

export default Header;