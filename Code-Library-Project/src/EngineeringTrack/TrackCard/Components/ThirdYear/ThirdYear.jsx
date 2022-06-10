import React from "react";
import CardComponent from "../CardComponent/CardComponent";

const ThirdYear = () => {
  var titles = {
    card1: {
      img: "https://static01.nyt.com/images/2018/01/18/business/19AMAZONCITIES-1/19AMAZONCITIES-1-videoSixteenByNine3000.jpg",
      title: "CS Fundamentals",
      content: "Learn OOPS, DBMS, CN and OS",
      link: "/engtrack/thirdyear/cs_fundamentals",
    },
    card2: {
      img: "https://www.careerindia.com/img/2017/04/internship-13-1492085411.jpg",
      title: "Internship",
      content: "Apply for the position of interns through our portal.",
      link: "/engtrack/thirdyear/internship",
    },
    card3: {
      img: "https://theindianwire.com/wp-content/uploads/2018/06/LeetCode-logo.png",
      title: "Leetcode",
      content: "Practise for DSA rounds in interview",
      link: "/engtrack/thirdyear/leetcode",
    },
  };
  return (
    <div className="main__card">
      <CardComponent data={titles.card1} />
      <CardComponent data={titles.card2} />
      <CardComponent data={titles.card3} />
    </div>
  );
};

export default ThirdYear;
