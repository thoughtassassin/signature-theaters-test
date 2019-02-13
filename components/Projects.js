const Projects = () => (
<section className="projects" id="projects">
      <div className="container">
        <h1>Signature Projects</h1>
        <div className="row projects-list-item vertical-align">
          <div className="col-sm-4 col-xs-12">
            <div className="vert-wrapper top">
              <img src="/static/stevens-winfield-1.png" alt="Stevens Winfield Library" />
            </div>
            <h2>Old Midland, New Tech</h2>
          </div>
          <div className="col-sm-4 col-xs-12">
            <div className="vert-wrapper">
              <img
                src="/static/saulsbury-san-subia.png"
                alt="Saulsbury San Subia Patio"
                className="bottom"
              />
            </div>
            <h2>Big Game Automation</h2>
          </div>
          <div className="col-sm-4 col-xs-12">
            <div className="vert-wrapper">
              <img src="/static/smith-kahala-1.png" alt="Smith Kahala Theater" />
            </div>
            <h2>Audiophile Simplicity</h2>
          </div>
        </div>
      </div>
    </section>
)

export default Projects