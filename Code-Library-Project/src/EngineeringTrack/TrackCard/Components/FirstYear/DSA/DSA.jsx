import React from "react";
import CardDetails from "../CardDetails";
const DSA = () => {
  var titles = [
    {
      youtube: "https://www.youtube.com/embed/yavaNtBhBvU",
      title:
        "Problem solving with Linkedlist in 30 mins | DSA Concepts Series | Yogesh Yogendra",
      content:
        "Learn to build fully functional web applications. Course options include starting from the basics of coding and then learning web. Recommended course to do after data structures / foundation",
      link: "#",
    },
    {
      youtube: "https://www.youtube.com/embed/Wllpi64WQjY",
      title:
        "Problem Solving- Binary Search | DSA with C++ | Episode 5 | Yogesh Yogendra",
      content:
        "Learn to build fully functional web applications. Course options include starting from the basics of coding and then learning web. Recommended course to do after data structures / foundation",
      link: "#",
    },
    {
      youtube: "https://www.youtube.com/embed/ECW0gjlf1No",
      title:
        "Strings | DSA with C++ | Episode 14 | Yogesh Yogendra",
      content:
        "Learn to build fully functional web applications. Course options include starting from the basics of coding and then learning web. Recommended course to do after data structures / foundation",
      link: "#",
    },
    {
      youtube: "https://www.youtube.com/embed/yV-e32y6plU",
      title:
        "Problem solving with Tree Part 2 | DSA PS Series | Yogesh Yogendra",
      content:
        "Learn to build fully functional web applications. Course options include starting from the basics of coding and then learning web. Recommended course to do after data structures / foundation",
      link: "#",
    }
  ];
  console.log(titles);
  console.log(titles[0]);
  return (
    <div>
      <header>Data Structures Tutorials</header>
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

export default DSA;
