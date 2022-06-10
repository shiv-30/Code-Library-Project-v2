import React from "react";
import CardDetails from "../CardDetails";
const Java = () => {
  var titles = [
    {
      youtube: "https://www.youtube.com/embed/uke1zGDAkhI",
      title:
        "Introducing JAVA SERIES | Episode 1 | Yogesh Yogendra",
      content:
        "Learn to build fully functional web applications. Course options include starting from the basics of coding and then learning web. Recommended course to do after data structures / foundation",
      link: "#",
    },
    {
      youtube: "https://www.youtube.com/embed/qq6J-qfKW48",
      title:
        "Strings | JAVA SERIES | Episode 2 | Yogesh Yogendra",
      content:
        "Learn to build fully functional web applications. Course options include starting from the basics of coding and then learning web. Recommended course to do after data structures / foundation",
      link: "#",
    },
    {
      youtube: "https://www.youtube.com/embed/PRdbm7boXag",
      title:
        "String Functions | JAVA SERIES | Episode 3 | Yogesh Yogendra",
      content:
        "Learn to build fully functional web applications. Course options include starting from the basics of coding and then learning web. Recommended course to do after data structures / foundation",
      link: "#",
    },
    {
      youtube: "https://www.youtube.com/embed/jOBmtyA28N8",
      title:
        "Arrays and 2D Arrays, Casting | JAVA SERIES | Episode 4 | Yogesh Yogendra",
      content:
        "Learn to build fully functional web applications. Course options include starting from the basics of coding and then learning web. Recommended course to do after data structures / foundation",
      link: "#",
    },
    {
      youtube: "https://www.youtube.com/embed/LQKYXnxCiU0",
      title:
        "Introduction, Datatypes, Variables, Comments in C++ | Lecture 1| C++ Programming | Yogesh Yogendra",
      content:
        "Learn to build fully functional web applications. Course options include starting from the basics of coding and then learning web. Recommended course to do after data structures / foundation",
      link: "#",
    }
  ];
  console.log(titles);
  console.log(titles[0]);
  return (
    <div>
      <header>Java Tutorials</header>
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

export default Java;
