import React from "react";
import CardComponent from "../CardComponent/CardComponent";

const FourthYear = () => {
  var titles = {
    card1: {
      img: "https://th.bing.com/th/id/OIP.lQZxY_pNDM0kE2xtll06yAHaE8?pid=ImgDet&w=1200&h=800&rs=1",
      title: "Interview Preparation",
      content: "Preprare for Interview rounds include both technical and hr",
      link: "#",
    },
    card2: {
      img: "https://th.bing.com/th/id/OIP.bOFJD5kW7mlW1I7qwtyfmgHaHY?pid=ImgDet&rs=1",
      title: "Aptitude",
      content: "Learn to solve aptitude problems easily and quick for various exams",
      link: "#",
    },
    card3: {
      img: "https://i.pinimg.com/originals/c5/2a/7c/c52a7c0704606d4f25dc7c01842938a9.jpg",
      title: "Placement Portal",
      content: "Apply for various companies through our placement portal",
      link: "#",
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

export default FourthYear;
