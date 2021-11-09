const DataSection = ({
  title,
  show,
  toggleShow,
  data,
  field,
  tAndc,
  setView, points
}) => {
  return (
    <div>
      <div className={"descHeading"} key={title}>
        <h3>{title}</h3>
        <h3
          style={{
            cursor: "pointer",
            textAlign: "end",
            flex: 1,
            fontSize: 19,
            color: "#0070C0",
          }}
          onClick={() => toggleShow({ show, [field]: !show[field] })}
        >
          {show[field] ? "View less <" : "View more > "}
        </h3>
      </div>
      <hr style={{ padding: 0, margin: 0, marginBottom: 10 }} />
      <div>
        {field === "description" && (
          <div className={show[field] ? "hidden" : "active"}>
            <div>{data[0]}</div>
          </div>
        )}
        {data.map((val, index) => (
          <div key={index} className={show[field] ? "active" : "hidden"}>
            <div>{val}</div>
          </div>
        ))}

        {show[field] && points.title &&
          <div style={{ paddingLeft: 10 }}>
            <h5>{points.title}</h5>
            <ul>
              {points.list.map((x, i) =>
                <li key={i}>{x}</li>
              )}
            </ul>
          </div>

        }

        {tAndc && (
          <div>
            <a onClick={() => setView(true)} style={{ paddingLeft: 10 }}>
              Click here{" "}
            </a>
            for Terms and Conditions
          </div>
        )}
      </div>
    </div>
  );
};

export default DataSection;
