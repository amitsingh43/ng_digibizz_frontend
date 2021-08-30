import PartnerCard from "./PartnerCard";

const Services = (props) => {
  const { user, cardData, heading, update_lead } = props;
  return (
    <div className="col-md-12 col-lg-12">
      <div style={{ display: "flex", alignItems: "center" }}>
        <h2>{heading}</h2>
        <div className="hr"></div>
      </div>
      <span></span>
      <div className="row justify-content-md-center partner-main">
        {cardData.map((data, index) => (
          <div key={index}>
            <PartnerCard
              update_lead={update_lead}
              user={user}
              subTitle={data.subTitle}
              image={data.image}
              title={data.title}
              tag={data.tag}
              heading={heading}
              url={data.url}
              description={data.description}
              backgroundColor={data.backgroundColor}
            />
            <div className="col-md-1"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
