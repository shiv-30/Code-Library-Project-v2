import React from "react";
import CardComponent from "../CardComponent/CardComponent";

const SecondYear = () => {
  var titles = {
    card1: {
      img: "https://th.bing.com/th/id/R.3690f017c1a4acc253198c36a783af9c?rik=jv1j4agdr5ZiKA&riu=http%3a%2f%2fwww.azinovatechnologies.com%2fblog%2fwp-content%2fuploads%2f2016%2f03%2fweb-development.jpg&ehk=Jlcoaf884VU5qnCVl3gTA4dZpjqXV2uIgttagVepASA%3d&risl=&pid=ImgRaw&r=0",
      title: "Web Devlopment",
      content:
        "Learn to build fully functional web applications. Course options include starting from the basics of coding and then learning web. Recommended course to do after data structures / foundation",
      link: "/engtrack/secondyear/web_dev",
    },
    card2: {
      img: "https://th.bing.com/th/id/OIP.BC5XufMKG40BwrkBa56oMAHaEK?pid=ImgDet&rs=1",
      title: "Android Devlopment",
      content: "Learn to build fully functional Android applications. Recommended course to do after data structures / foundation",
      link: "/engtrack/secondyear/android_dev",
    },
    card3: {
      img: "https://th.bing.com/th/id/OIP.0WovIM1hELf8ODHpSO3dFQHaEw?pid=ImgDet&rs=1",
      title: "Machine Learning",
      content: "Learn about Machine Learning",
      link: "/engtrack/secondyear/machine_learning",
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

export default SecondYear;
