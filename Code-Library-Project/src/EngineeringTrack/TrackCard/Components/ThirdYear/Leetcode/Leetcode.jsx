import React from "react";
import CardDetails from "../CardDetails";
const Leetcode = () => {
  var titles = [
    {
      youtube: "https://www.youtube.com/embed/l1EssrLxt7E",
      title:
        "Introduction to Web Development | World's most premium Web Development Course | Lecture 0",
      content: "Learn to build fully functional web applications.",
      link: "#",
    },
    {
      youtube: "https://www.youtube.com/embed/Rek0NWPCNOc",
      title: "Course | From Beginners to Advance Level | Lecture 1",
      content: "Learn to build fully functional web applications.",
      link: "#",
    },
    {
      youtube: "https://www.youtube.com/embed/Rek0NWPCNOc",
      title: "Course | World's most premium HTML Course | Lecture 2",
      content: "Learn to build fully functional web applications.",
      link: "#",
    },
  ];
  console.log(titles);
  console.log(titles[0]);
  return (
    <div>
      <header>Leetcode</header>
      <CardDetails data={titles[0]} />
      <CardDetails data={titles[1]} />
      <CardDetails data={titles[2]} />
      <CardDetails data={titles[0]} />
      <CardDetails data={titles[1]} />
      <CardDetails data={titles[2]} />
      <CardDetails data={titles[0]} />
      <CardDetails data={titles[1]} />
      <CardDetails data={titles[2]} />
      <CardDetails data={titles[0]} />
    </div>
  );
};

export default Leetcode;
