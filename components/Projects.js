const Projects = () => (
<section className="projects" id="projects">
      <div className="container">
        <h1>Signature Projects</h1>
        <div className="row projects-list-item">
          <div className="col-sm-6 col-xs-12">
              <img src="/static/old-midland-new-tech.png" alt="Library" />
            <h2>Old Midland, New Tech</h2>
          </div>
          <div className="col-sm-6 col-xs-12">
              <img
                src="/static/big-game-automation.png"
                alt="Patio"
                className="bottom"
              />
            <h2>Big Game Automation</h2>
          </div>
        </div>
        <div className="row projects-list-item">
            <div className="col-sm-6 col-xs-12">
                <img src="/static/audiophile-simplicity.png" alt="Home Audio System" />
                <h2>Audiophile Simplicity</h2>
            </div>
            <div className="col-sm-6 col-xs-12">
                <img src="/static/automation-elegance.png" alt="Home Theater" />
                <h2>Automation Elegance</h2>
            </div>
          </div>
      </div>
    </section>
)

export default Projects