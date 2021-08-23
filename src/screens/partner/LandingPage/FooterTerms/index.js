import "styles/footer.css";

function FooterTerms() {
  const linkColor = {
    color: "black",
  };
  return (
    <div
      style={{
        width: "100%",
        // height: "80px",
        padding: "1.5rem 0",
        color: "black",
        backgroundColor: "#ffe04b",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <div>
          Credit at Sole Discretion of NeoGrowth |{" "}
          <a
            style={linkColor}
            href="https://www.neogrowth.in/interestratepolicy/"
            target="_blank"
          >
            Our Interest Policy
          </a>
          {" | "}
          <a
            style={linkColor}
            href="https://www.neogrowth.in/customer-services/"
            target="_blank"
          >
            Contact Us
          </a>
        </div>
        <div>
          {`Copyright © ${new Date().getFullYear()}`} <b>NeoGrowth</b>, All
          Rights Reserved |{" "}
          <a
            style={linkColor}
            href="https://www.neogrowth.in/disclaimer/"
            target="_blank"
          >
            Disclaimer
          </a>
        </div>
      </div>
    </div>
  );
}
export default FooterTerms;
