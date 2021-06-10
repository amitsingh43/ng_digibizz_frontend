import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { header_user_guide } from "store/actions";
import { KNOWLEDGE_CENTER } from "store/strings";
import UserCard from "components/userCard";
import "styles/successStories.css";
import { Content } from "./components";

export default function UserGuide() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(header_user_guide());
    window.scrollTo(0, 0);
  }, [dispatch]);

  return (
    <div className="success-stories">
      <div className="top-content">
        <Content />
      </div>
      {KNOWLEDGE_CENTER.map((knowledge, index) => (
        <div className="success-content" key={index}>
          <UserCard
            id={knowledge.id}
            heading={knowledge.heading}
            desc={knowledge.desc}
            image={knowledge.image}
          />
        </div>
      ))}
    </div>
  );
}