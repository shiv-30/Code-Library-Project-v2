import React from "react";
import CardComponent from "../CardComponent/CardComponent";
import "./FirstYear.css";
const FirstYear = () => {
  var titles = {
    card1: {
      img: "https://th.bing.com/th/id/R.677d865b6a9a9af1542f04b2a66b8e8c?rik=%2bM8sko36UGtyGQ&riu=http%3a%2f%2fassets2.bigthink.com%2fsystem%2fidea_thumbnails%2f60118%2fprimary%2fcomputer_code.jpg%3f1448159143&ehk=dM4rPUdNhK%2bJUITn4XvJmjXsSrqqPnX5g7R1AfKyUXs%3d&risl=&pid=ImgRaw&r=0",
      title: "Language",
      content: "Learn C++,Java and Python Language.",
      link: "/engtrack/firstyear/component",
    },
    card2: {
      img: "https://res.cloudinary.com/grand-canyon-university/image/fetch/w_750,h_564,c_fill,g_faces/https://www.gcu.edu/sites/default/files/2020-09/programming.jpg",
      title: "Competitive Programming",
      content: "Learn Competitive Programming.",
      link: "/engtrack/firstyear/cp",
    },
    card3: {
      img: "https://th.bing.com/th/id/OIP.ZwTIyB9sA183yCgfJVCpGgHaEP?pid=ImgDet&rs=1",
      title: "DSA",
      content: "Learn data structures and algorithms.",
      link: "/engtrack/firstyear/dsa",
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

export default FirstYear;
