const DataSection = ({
  title,
  show,
  toggleShow,
  data,
  field,
  tAndc,
  partner,
  setView,
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

        {partner === "Onsurity" && (
          <div>
            <div className={show[field] ? "active" : "hidden"}>
              <h5>Benefits of Onsurity HealthCare Membership</h5>

              <h5>For Employers</h5>
              <ul>
                <li>
                  Designed for SMEs, sStart-ups, and growing businesses Monthly
                  subscription plans – first of its kind in India Inclusive for
                  all – Employees (including part-time), freelancers to
                  contractual workforce Highly affordable and easy to use
                  Membership available to teams as small as 3 and above
                </li>
                <li>
                  Tech-enabled platforms –
                  <ul>
                    {" "}
                    <li>
                      Digital dashboard for employers Onsurity iOS/Android app
                      for employees
                    </li>
                  </ul>
                </li>
                <li>
                  100 % Paperless Processes Team on-boarding journey in just 2
                  minutes Seamless process to continue the plan even after
                  leaving the organization
                </li>
                <li>
                  Multiple variations of Membership available based on:
                  <ul>
                    {" "}
                    <li>
                      Budget Team size – No. of employees Benefit requirements
                    </li>
                  </ul>
                </li>
              </ul>

              <h5>For Employees</h5>
              <ul>
                <li>
                  India’s first monthly subscription healthcare platform
                  Group healthcare and personal accidental insurance Addition of
                  family members in the plan with personal purchase Order
                  medicines and get health-check- ups at discounted prices Free
                  specialised doctor consultations
                </li>
                <li>
                  Wellness Benefits:
                  <ul>
                    {" "}
                    <li>
                      Mental wellness sessions Health and fitness webinars
                      Dental and eyecare plans Gym memberships LIVE Webinars by
                      industry experts
                    </li>
                  </ul>
                </li>
                <li>
                  Plan upgradation for greater benefits through personal
                  purchase Access to the Good Doctors Team for: Hospitalization
                  and Claim/Reimbursement Assistance
                </li>
              </ul>
            </div>
          </div>
        )}

        {partner === "ZikZuk" && (
          <div className={show[field] ? "active" : "hidden"}>
            <b> Why use BFM? </b>

            <ul>
              <li>360 Degree Visibility of your Business Finances</li>
              <li>Automated payment reminders via Email, SMS & WhatsApp</li>
              <li>
                Business Calendar that helps to manage daily business activities
              </li>
              <li>Cash flow Management</li>
              <li>Create Tally Entries</li>
              <li>Avail Credit</li>
              <li>100% Data security</li>
            </ul>
          </div>
        )}

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
