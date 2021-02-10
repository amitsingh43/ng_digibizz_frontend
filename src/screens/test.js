function Test() {
  return (
    <div>
      <div className="row">
        <div className="col-xs-9 col-md-7" style={{ backgroundColor: "red" }}>
          .col-xs-9 .col-md-7
        </div>
        <div
          className="col-xs-3 col-md-5"
          style={{ backgroundColor: "lavender" }}
        >
          .col-xs-3 .col-md-5
        </div>
      </div>
      <div className="row">
        <div
          className="col-xs-6 col-md-10"
          style={{ backgroundColor: "lavenderblush" }}
        >
          .col-xs-6 .col-md-10
        </div>
        <div
          className="col-xs-6 col-md-2"
          style={{ backgroundColor: "lightgrey" }}
        >
          .col-xs-6 .col-md-2
        </div>
      </div>
      <div className="row" style={{ backgroundColor: "lightcyan" }}>
        <div className="col-xs-6">.col-xs-6</div>
        <div className="col-xs-6">.col-xs-6</div>
      </div>
    </div>
  );
}

export default Test;
