class BackgroundVideo extends React.Component {
  render() {
    return (
      <div className="fullscreen-bg">
        <video loop muted autoPlay className="fullscreen-bg__video"></video>
      </div>
    );
  }
}

export default BackgroundVideo;
