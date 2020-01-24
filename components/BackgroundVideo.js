class BackgroundVideo extends React.Component {
  render() {
    return (
      <div className="fullscreen-bg">
        <video loop muted autoPlay className="fullscreen-bg__video">
          <source src="/static/sigtheaters_1280.mp4" type="video/mp4" preload />
        </video>
      </div>
    );
  }
}

export default BackgroundVideo;
