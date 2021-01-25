import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { header_user_guide } from "../store/actions";
import Footer from "../components/main/footer";
import "../styles/successStoriesDetailed.css";
import { KNOWLEDGE_CENTER } from "../store/strings";
import { useHistory } from "react-router-dom";
import onee from "../assets/knowledge_portal/one/one.svg";
import twoo from "../assets/knowledge_portal/one/two.svg";
import threee from "../assets/knowledge_portal/one/three.svg";
const TopContent = ({ heading }) => {
  return (
    <div className="top-content">
      <div>
        User Guide{"    >>   "}
        <span>{heading}</span>
      </div>
    </div>
  );
};

const Image = ({ image }) => {
  return (
    <div className="img-responsive user-guide-top-image">
      <img
        className="img-responsive col-lg-10 col-xs-12 thumbnail"
        src={image}
        alt="thumbnail"
      />
    </div>
  );
};

const ImageContent = ({ image, content, type }) => {
  if (type === "left") {
    return (
      <div className="img-content">
        <img src={image} alt="theft" />
        <p>{content}</p>
      </div>
    );
  } else {
    return (
      <div className="right-img-content">
        <img src={image} alt="theft" />
        <p>{content}</p>
      </div>
    );
  }
};

const OnlyContent = ({ heading, content }) => {
  return (
    <div className="only-content">
      {heading && <div className="section-heading">{heading}</div>}
      <p className="p">{content}</p>
    </div>
  );
};

const MainContent = ({ heading, desc, image }) => {
  const section1 = [
    {
      type: "content",
      heading: null,
      content:
        "The internet is not a stranger to anyone. Every business either has a website that tells potential customers about itself or has an eCommerce site. While many businesses have realised the importance of taking their business online, it is still a relatively new arena.",
    },
    {
      type: "content",
      heading: null,
      content:
        "New territory brings in new challenges. If you were opening a physical store in a high-crime neighbourhood, you would put certain security measures in place to prevent theft or other criminal attacks. The same logic applies to online businesses as well.",
    },
    {
      type: "left",
      image: onee,
      content:
        "You can think of your online store as a physical store located in a high-crime neighbourhood. With a significant increase in cyber fraud and phishing scams, the assumption is realistic. You need to employ a strong cybersecurity system and follow certain other steps to ensure that you do not become the victim of online scams.Here are a few tips to help you secure business and prevent cyber frauds.",
    },
    {
      content:
        "Strong cybersecurity is indispensable for every organisation and even more so for an e-commerce site. Strong cybersecurity measures involve a strong authentication mechanism, Infrastructure security like firewall, anti-virus, anti-malware and continuous backing up of data to a secure location.",
      heading: "Employ Strong Cybersecurity",
      type: "content",
    },
    {
      content:
        "Most online scams and cyber fraud start by hacking into your database and capturing sensitive information. If you can prevent phishing scams right at the bud, it would prevent a lot of trouble at a later stage.",
      heading: null,
      type: "content",
    },
    {
      type: "content",
      heading: null,
      content:
        "You must also ensure that you are compliant with the PCI Data Security Standards or PCI DSS. These standards are designed to ensure that your customers data is protected from cyber-attacks and credit card scams.",
    },
    {
      heading: "Educate Employees",
      content:
        "All your employees play a role in preventing cyber fraud. But for them to stop phishing scams, social engineering, they should know what to look for. You can start by arranging training for all existing employees on how to identify cyber fraud and what they can do to stop them. The material should also become a part of all onboarding training for new employees.",
      type: "content",
    },
    {
      type: "content",
      heading: null,
      content:
        "You should also educate them about using only secure computers for logging into work and the importance of choosing a secure password.",
    },
    {
      heading: "Establish Rules for Strong Passwords",
      content:
        "Whether it is employees or customers, everyone uses passwords to access various parts of the website. They protect sensitive information. Most leaks or cyber frauds occur due to weak passwords. People often use passwords that can be guessed easily. Many continue to use “password” as their password.",
      type: "content",
    },
    {
      type: "right",
      image: twoo,
      content:
        "You can think of your online store as a physical store located in a high-crime neighbourhood. With a significant increase in cyber fraud and phishing scams, the assumption is realistic. You need to employ a strong cybersecurity system and follow certain other steps to ensure that you do not become the victim of online scams.  Here are a few tips to help you secure business and prevent cyber frauds.",
    },
    {
      type: "content",
      heading: "Look for Suspicious Return Orders from Customers",
      content:
        "Many cases of internet fraud involve customers placing an order and then either returning it or cancelling the order and asking for a refund in some other payment method. Many even return the items after a single use and claim that it has never been used.",
    },
    {
      type: "content",
      heading: null,
      content:
        "You can spot such behaviour when a customer has an unusually large number of returns for seemingly silly reasons. You can cancel such customer accounts and bar them from making further purchases after issuing a few warnings.",
    },
    {
      type: "content",
      heading: "Beware of Fraudulent Calls",
      content:
        "Just as there are phishing scams where you get calls asking for your personal banking details, there are phishing scams that ask for sensitive information from businesses.  Most of these calls claim they are from some regulatory government body. They may claim that you have not filed something, or your licenses are expiring, etc.",
    },
    {
      type: "left",
      image: threee,
      content:
        "You can think of your online store as a physical store located in a high-crime neighbourhood. With a significant increase in cyber fraud and phishing scams, the assumption is realistic. You need to employ a strong cybersecurity system and follow certain other steps to ensure that you do not become the victim of online scams.  Here are a few tips to help you secure business and prevent cyber frauds.",
    },
    {
      type: "content",
      heading: null,
      content:
        "Advise all your employees to not divulge any information, tell the caller they will call back and then contact the respective department regarding the call. If it is an authentic call, then the department can handle it professionally.",
    },
    {
      type: "content",
      heading: "Use Software That Detects Cyber Fraud",
      content:
        "With advancements and AI and ML, there are many software that can detect suspicious behaviour from within the organisation as well as from outside. Monitoring user behaviour and detecting anomalous behaviour in time can save you a lot of trouble.",
    },
    {
      type: "content",
      heading: null,
      content:
        "There are many cases when the customers account gets hacked, and businesses are caught between the credit card company and the customer. You can avoid such situations by using software that detects suspicious activity.",
    },
    {
      type: "content",
      heading: "Pay Special Attention to Urgent Orders",
      content:
        "When you get a huge urgent order, most businesses rush to complete the order. Many things can be overlooked when you rush. You may forego certain basic security protocols, and criminals use this situation to gain access to sensitive information.",
    },
    {
      type: "content",
      heading: null,
      content:
        "When you do get urgent orders, pay close attention to what you reveal. You should always follow the established security protocol irrespective of how urgent the order is.",
    },
    {
      type: "content",
      heading: "Regular Security Checks",
      content:
        "You have put up a strong firewall and enabled powerful antivirus. However, cybercriminals are always one step ahead. There are new forms of threat and new viruses/malwares that pop up regularly. You must run sanity &amp; security checks on your websites, defences and re-evaluate your security measures from time to time.",
    },
    {
      type: "content",
      heading: null,
      content:
        "A security auditor might be the best person to figure out if there are any vulnerabilities that need to be fixed.",
    },
    {
      type: "content",
      heading: "Stay Protected, Stay Safe!",
      content:
        "Cyber fraud is a menace that every business must deal with. The only solution is constant vigilance. Your security systems must always be up to date, and employees need regular training on how to avoid internet scams.",
    },
    {
      type: "content",
      heading: null,
      content:
        "The only way to prevent cyber fraud is to stay hyper-vigilant. Make sure you follow all the tips given above. In addition to this, there are many insurance companies that offer insurance against cyber fraud for businesses. You can consider taking such an insurance as an added protection.",
    },
  ];
  return (
    <div className="main-content col-lg-10">
      <div className="heading">{heading}</div>
      {section1.map((section) => (
        <div>
          {section.type === "left" && (
            <ImageContent
              image={section.image}
              content={section.content}
              type={section.type}
            />
          )}
          {section.type === "content" && (
            <OnlyContent heading={section.heading} content={section.content} />
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

function UserGuideDetailed({ header_user_guide, match }) {
  useEffect(() => {
    header_user_guide();
    window.scrollTo(0, 0);
  }, []);
  const history = useHistory();
  const knowledge = KNOWLEDGE_CENTER.find((know) => know.id == match.params.id);
  if (knowledge === undefined) {
    history.push("/userGuide");
    return <h1>Loading</h1>;
  }
  return (
    <div className="success-stories-detailed">
      <div className="row">
        <TopContent heading={knowledge.heading} />
      </div>
      <div className="row ">
        <Image image={knowledge.image} />
      </div>
      <div className="row" style={{ margin: 0, paddingTop: 0 }}>
        <MainContent heading={knowledge.heading} desc={knowledge.desc} />
      </div>
      <Footer />
    </div>
  );
}

export default connect(null, { header_user_guide })(UserGuideDetailed);
