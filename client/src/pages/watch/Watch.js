import { ArrowBackOutlined } from "@material-ui/icons";
import "./watch.scss";

export default function Watch() {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      <video
        className="video"
        autoPlay
        controls
        progress
        src="https://cdnuploads.aa.com.tr/uploads/VideoGallery/2022/03/12/969f92977d939883c2e1b33b6607956d.mp4"
      />
    </div>
  );
}
