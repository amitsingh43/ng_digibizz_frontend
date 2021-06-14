import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { partnerMapping } from "store/partner_mapping";

const PdfView = () => {
  const { category, partner } = useParams();
  const history = useHistory();
  const [data, setData] = useState(null);
  const [numPages, setNumPages] = useState(null);

  useEffect(() => {
    let res = partnerMapping.find(
      (val) =>
        val.heading.toLowerCase() === category.toLowerCase() &&
        val.name.toLowerCase() === partner.toLowerCase()
    );
    if (!res) {
      history.replace("/services");
      return <div>Redirecting</div>;
    } else {
      if (res.partner.socialMedia.catalog) {
        setData(res.partner.socialMedia.catalog);
      } else {
        history.replace("/services");
        return <div>Redirecting</div>;
      }
    }
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const ShowPages = () => {
    let rows = [];
    for (let i = 0; i < numPages; i++) {
      rows.push(
        <div>
          <Page pageNumber={i + 1} />
          <hr />
        </div>
      );
    }
    return rows;
  };

  return (
    <div
      style={{
        minHeight: "99vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* {data && ( */}
      <div style={{ overflow: "scroll" }}>
        <Document
          file={{
            url: data,
          }}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          {numPages && <ShowPages />}
        </Document>
      </div>
      {/* )} */}
    </div>
  );
};

export default PdfView;
