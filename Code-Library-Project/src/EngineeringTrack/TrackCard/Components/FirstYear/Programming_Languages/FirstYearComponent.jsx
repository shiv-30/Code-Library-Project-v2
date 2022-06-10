import React from "react";
import CardComponent from "../../CardComponent/CardComponent";

const FirstYearComponent = () => {
  var titles = {
    card1: {
      img: "https://ih0.redbubble.net/image.416406976.0438/ap,550x550,12x12,1,transparent,t.png",
      title: "C++",
      content:
        "Learn C++ Programming",
      link: "/engtrack/firstyear/component/cpp",
    },
    card2: {
      img: "https://behind-the-scenes.net/wp-content/uploads/understanding-the-java-versions-platfroms-1024x512.jpg",
      title: "Java",
      content: "Learn Java Programming.",
      link: "/engtrack/firstyear/component/java",
    },
    card3: {
      img: "https://ictslab.com/wp-content/uploads/2019/03/d1326ca6cca8038cd115a061b4e2b3bc.png",
      title: "Python",
      content: "Learn Python Programming.",
      link: "/engtrack/firstyear/component/python",
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

export default FirstYearComponent;
