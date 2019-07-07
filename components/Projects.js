const Projects = () => (
  <section className="projects" id="projects">
    <div className="container">
      <h1>Signature Projects</h1>
      <div className="row projects-list-item">
        <div className="col-sm-6 col-xs-12">
          <a href="/projects?id=old-midland-new-tech">
            <img src="/static/old-midland-new-tech.png" alt="Library" />
            <h2>Old Midland, New Tech</h2>
          </a>
        </div>
        <div className="col-sm-6 col-xs-12">
          <a href="/projects?id=big-game-automation">
            <img
              src="/static/big-game-automation.png"
              alt="Patio"
              className="bottom"
            />
            <h2>Big Game Automation</h2>
          </a>
        </div>
      </div>
      <div className="row projects-list-item">
        <div className="col-sm-6 col-xs-12">
          <a href="/projects?id=audiophile-simplicity">

            <img
              src="/static/audiophile-simplicity.png"
              alt="Home Audio System"
            />
            <h2>Audiophile Simplicity</h2>
          </a>
        </div>
        <div className="col-sm-6 col-xs-12">
          <a href="/projects?id=automation-elegance">
            <img src="/static/automation-elegance.png" alt="Home Theater" />
            <h2>Automation Elegance</h2>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Projects;
