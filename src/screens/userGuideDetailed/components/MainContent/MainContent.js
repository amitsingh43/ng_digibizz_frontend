import OnlyContent from "./OnlyContent";
import ImageContent from "./ImageContent";

const MainContent = ({ heading, desc, image, sections }) => {
  return (
    <div className="main-content col-lg-10 ">
      <div className="heading">{heading}</div>
      {sections.map((section, index) => (
        <div key={index}>
          {section.type === "left" && (
            <ImageContent
              image={section.image}
              content={section.content}
              type={section.type}
            />
          )}
          {section.type === "content" && (
            <OnlyContent
              list={section.list}
              heading={section.heading}
              content={section.content}
            />
          )}
          {section.type === "right" && (
            <ImageContent
              image={section.image}
              content={section.content}
              type={section.type}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default MainContent;
