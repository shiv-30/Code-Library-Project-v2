import React from "react";
import CardDetails from "../CardDetails";
const Android_Dev = () => {
  var titles = [
    {
      youtube: "https://www.youtube.com/embed/mXjZQX3UzOs",
      title:
        "Android Development Tutorial For Beginners In Hindi (With Notes) ",
      content: "Learn to build fully functional Android applications.",
      link: "#",
    },
    {
      youtube: "https://www.youtube.com/embed/fis26HvvDII",
      title: "Android Development Tutorial For Beginners",
      content: "Learn to build fully functional Android applications.",
      link: "#",
    },
    {
      youtube: "https://www.youtube.com/embed/YV4i_ksoe-Q",
      title: "#1. Android studio installation guide | Birthday Wishing App | Android development Tutorial",
      content: "Learn to build fully functional Android applications.",
      link: "#",
    },
    {
      youtube: "https://www.youtube.com/embed/9VPBtnUXvvU",
      title: "#3. Creating new Activities | Button clicks | Show Toast Message | Android Development Tutorial",
      content: "Learn to build fully functional Android applications.",
      link: "#",
    }
  ];
  console.log(titles);
  console.log(titles[0]);
  return (
    <div>
      <header>Android Devlopment Tutorials</header>
      {titles.forEach((element) => {
        // <CardDetails data={element}  />
        console.log(element);
      })}
      <CardDetails data={titles[0]} />
      <CardDetails data={titles[1]} />
      <CardDetails data={titles[2]} />
      <CardDetails data={titles[3]} />
      
    </div>
  );
};

export default Android_Dev;
