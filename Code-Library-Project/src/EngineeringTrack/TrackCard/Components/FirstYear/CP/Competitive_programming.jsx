import React from "react";
import CardDetails from "../CardDetails";
const Competitive_programming = () => {
  var titles = [
    {
      youtube: "https://www.youtube.com/embed/OMcxQ3IY-qc",
      title:
        "Ultimate Competitive Programming Course for FREE: The Beginning | EP 0",
      content:
        "Learn to build fully functional web applications. Course options include starting from the basics of coding and then learning web. Recommended course to do after data structures / foundation",
      link: "#",
    },
    {
      youtube: "https://www.youtube.com/embed/9S-b52CSCbQ",
      title:
        "Overflow, Precision Errors, Calculation Order | C++ Basics - Part 2 | CP Course | EP 3",
      content:
        "Learn to build fully functional web applications. Course options include starting from the basics of coding and then learning web. Recommended course to do after data structures / foundation",
      link: "#",
    },
    {
      youtube: "https://www.youtube.com/embed/LQKYXnxCiU0",
      title:
        "Conditions, Loops, Jump Statements and Questions | C++ Basics - Part 3 | CP Course | EP 4",
      content:
        "Learn to build fully functional web applications. Course options include starting from the basics of coding and then learning web. Recommended course to do after data structures / foundation",
      link: "#",
    },
    {
      youtube: "https://www.youtube.com/embed/JAfJssvFgDI",
      title:
        "Advanced Binary Search with Predicate Function | SPOJ EKO | CP Course ",
      content:
        "Learn to build fully functional web applications. Course options include starting from the basics of coding and then learning web. Recommended course to do after data structures / foundation",
      link: "#",
    }
  ];
  console.log(titles);
  console.log(titles[0]);
  return (
    <div>
      <header>Competitive Programming Tutorials</header>
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

export default Competitive_programming;
