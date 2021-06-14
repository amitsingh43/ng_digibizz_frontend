import "styles/recommendationReport.css";
import RecommendationCard from "./RecommendationCard";
import DetailView from "./DetailView";

function RecommendationReport({
  recommendations,
  setDownloadText,
  downloadText,
}) {
  return (
    <div className="recommend-main">
      <h3>Recommendations</h3>
      <div>
        <RecommendationCard recommendations={recommendations} />
      </div>
      <div>
        <DetailView
          setDownloadText={setDownloadText}
          downloadText={downloadText}
        />
      </div>
    </div>
  );
}

export default RecommendationReport;
