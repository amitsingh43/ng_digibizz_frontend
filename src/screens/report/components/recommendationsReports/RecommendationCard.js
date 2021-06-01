import Percentage from "./Percentage";

const RecommendationCard = ({ recommendations }) => {
    const results = recommendations;
    const excludeReports = ["delivery_services", "digital_khata"];
    return (
      <div className="row ">
        {results &&
          results.map((recommendation, index) => (
            <div
              className="col-lg-2 col-xs-6 card"
              key={index}
              style={{
                cursor: excludeReports.includes(recommendation.category)
                  ? "default"
                  : "pointer",
              }}
              onClick={
                excludeReports.includes(recommendation.category)
                  ? () => {}
                  : () =>
                      window.open(
                        `/services#${recommendation.category}`,
                        "_blank"
                      )
              }
            >
              <Percentage image_url={recommendation.image_url} />
              <div style={{ height: "fit-content" }}>{recommendation.name}</div>
              <p
                style={{
                  wordSpacing: 0,
                  fontSize: 17,
                  display: excludeReports.includes(recommendation.category)
                    ? "none"
                    : "block",
                }}
              >
                <br />
                Know more
                <br />
              </p>
            </div>
          ))}
      </div>
    );
  };

  export default RecommendationCard
  