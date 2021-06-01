import download from "assets/download.svg";
import { downloadReport } from "store/actions";

const DetailView = ({ downloadText, setDownloadText }) => {
    return (
      <div className="container">
        <h4>For more detailed recommendations please download the report.</h4>
        <div className="button-container">
          <div
            className="download-btn"
            onClick={() => downloadReport(downloadText, setDownloadText)}
          >
            {downloadText}
            <img src={download} alt="download" />
          </div>
        </div>
        {/* <p style={{ fontWeight: "normal" }}>
                  Explore our services at{" "}
                  <span>
                      <a
                          href="https://www.neogrowth.in/partners"
                          target="_blank"
                          rel="noreferrer"
                      >
                          www.neogrowth.in/partners
                      </a>
                  </span>
              </p> */}
      </div>
    );
  };


  export default DetailView;