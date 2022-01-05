import "styles/tAndC.css";
import MoneyfyOne from "../assets/partners/moneyfy.png";

const PartnerTandc = ({ showmore, setCheck }) => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <div
        onClick={() => showmore(false)}
        style={{ width: "100vw", height: "10vh" }}
      ></div>
      <div style={{ display: "flex" }}>
        <div onClick={() => showmore(false)} style={{ width: "10vw" }}></div>

        <div className="t-and-c-main">
          <span
            style={{ position: "absolute", right: 10, top: 10 }}
            className="close"
            onClick={() => showmore(false)}
          >
            Close
          </span>
          <div className="text-center">
            <h3>New Year Campaign With</h3>
            <img style={{ height: 90 }} src={MoneyfyOne} />
          </div>

          <div className="">
            <h4 className="mb-0 mt-0">Terms & Conditions </h4>
          </div>

          <ul style={{ clear: "both" }} className='mb-4'>
            <li>
              This campaign is exclusively for new users of Moneyfy App (hereinafter referred to as
              ‘App’) acquired through an association between Tata Securities Limited and
              NEOGROWTH CREDIT PRIVATE LIMITED (hereinafter referred to as ‘Neogrowth’).
            </li>
            <li>
              To be eligible for the campaign the user should only download the App though the link
              shared by Neogrowth. Downloads made prior to the below mentioned offer period would
              be considered eligible for this campaign. However, the investment through App should be
              made between the offer period i.e.,
              <b> till 31st March, 2022.</b>
            </li>
            <li>
              Users who have already invested through the App are not eligible for this campaign.
            </li>
            <li>
              There is no bar on the nature of investment nor is there a
              requirement of any minimum investment amount to be eligible for
              the campaign.{" "}
            </li>
            <li>
              A user is only eligible to participate once in this campaign.
            </li>
            <li>
              The campaign is at all times subject to the validity of arrangement between Tata
              Securities Limited and Neogrowth and with the entity providing the third-party gift
              vouchers.
            </li>
            <li>
              The issued gift vouchers are subject to the terms and conditions laid down by the
              respective entity providing the vouchers.
            </li>
            <li>
              Tata Securities Limited and NeoGrowth does not guarantee and make any representation
              about the usefulness/worthiness/features of the vouchers and is not responsible for the
              warranties and expiry of the vouchers.
            </li>
            <li>
              Tata Securities Limited is registered with The Association of Mutual Funds in India as a
              Mutual Fund Distributor bearing ARN No. 0021. All Mutual Fund Investments are
              subject to market risks, read all scheme-related documents carefully before investing for
              full understanding and details.
            </li>
            <li>
              Tata Securities Limited reserves the right, in its absolute discretion, to change, alter or
              discontinue the campaign and alter the applicable terms and conditions from time to time.
            </li>
            <li>
              These Terms and Conditions should be read along with the other terms and conditions
              available on the Moneyfy App.
            </li>
            <li>
              In the event of any dispute, the decision of Tata Securities Limited will be considered as
              final and binding.
            </li>
            <li>
              By participating in the campaign, the user agrees to have read, understood, and accepted
              these Terms and Conditions.
            </li>
          </ul>
        </div>
        <div style={{ width: "10vw" }} onClick={() => showmore(false)}></div>
      </div>
      <div
        style={{ width: "100vw", height: "10vh" }}
        onClick={() => showmore(false)}
      ></div>
    </div>
  );
};
export default PartnerTandc;
