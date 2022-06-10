import React from "react";
import CardDetails from "../CardDetails";
const Python = () => {
  var titles = [
    {
      youtube: "https://www.youtube.com/embed/QXeEoD0pB3E",
      title:
        "#0 Python for Beginners | Programming Tutorial",
      content:
        "Learn to build fully functional web applications. Course options include starting from the basics of coding and then learning web. Recommended course to do after data structures / foundation",
      link: "#",
    },
    {
      youtube: "https://www.youtube.com/embed/bfSHM-vx5lA",
      title:
        "Writing Our First Python Program | Python Tutorials For Absolute Beginners In Hindi",
      content:
        "Learn to build fully functional web applications. Course options include starting from the basics of coding and then learning web. Recommended course to do after data structures / foundation",
      link: "#",
    },
    {
      youtube: "https://www.youtube.com/embed/CDb9YzUq_VA",
      
      title: "Using Python As A Calculator | Python Tutorials For Absolute Beginners In Hindi",
      
      content:
        "Learn to build fully functional web applications. Course options include starting from the basics of coding and then learning web. Recommended course to do after data structures / foundation",
      link: "#",
    },
    
    {
      youtube: "https://www.youtube.com/embed/uhUgIT68CoU",
      title:
        "Comments, Escape Sequences & Print Statement| Python Tutorials For Absolute Beginners In Hindi",
      content:
        "Learn to build fully functional web applications. Course options include starting from the basics of coding and then learning web. Recommended course to do after data structures / foundation",
      link: "#",
    }
  ];
  console.log(titles);
  console.log(titles[0]);
  return (
    <div>
      <header>Python Tutorials</header>
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

export default Python;
