import { useState } from "react";

const Form = ({ masterData, url, save_basic_details, title }) => {
  const { cities } = masterData;
  const [data, setData] = useState({
    full_name: null,
    business_name: null,
    mobile: null,
    cities_master_id: null,
    partner_availed: title,
  });
  const [cityName, setCityName] = useState(null);
  return (
    <div className={"partner-form"}>
      <div className={"form-body"}>
        <h3>Inquire Now</h3>
        <h5>Full name</h5>
        <input
          value={data.full_name}
          onChange={(e) =>
            setData((data) => ({ data, full_name: e.target.value }))
          }
        />
        <h5>Business Name</h5>
        <input
          value={data.business_name}
          onChange={(e) =>
            setData((data) => ({ data, business_name: e.target.value }))
          }
        />
        <h5>Mobile Number</h5>
        <input
          value={data.mobile}
          maxLength={10}
          onChange={(e) =>
            setData((data) => ({ data, mobile: e.target.value }))
          }
        />
        <h5>City</h5>
        <select
          onChange={(e) => {
            setData((data) => ({ data, cities_master_id: e.target.value }));
            setCityName(
              cities.find((city) => (city._id = e.target.value)).name
            );
          }}
        >
          <option selected disabled>
            {" "}
            Select City
          </option>
          {cities &&
            cities.map((city, index) => (
              <option value={city._id} key={index}>
                {city.name}
              </option>
            ))}
        </select>
        <div>
          <a>
            <div
              className={"avail-now"}
              onClick={() => save_basic_details(data, url, cityName)}
            >
              Avail Now
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Form;
