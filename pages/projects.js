import {withRouter} from 'next/router';
import Document, { Head, Main, NextScript } from 'next/document';
import Gallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import Images from '../assets/Images';
import '../stylesheets/projects.css';

const Projects = withRouter (props => {
  const selectedImages = Images.filter(image => image.gallery_id === props.router.query.id);
  const title = props.router.query.id.split("-").map(word => word.toUpperCase()).join(" ");
  return (
   <body className="no-background">
      <div className="products-page">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12">
              <h1>{title}</h1>
              <Gallery items={selectedImages} />
            </div>  
          </div>
        </div>
      </div>
    </body>
)});

export default Projects;
