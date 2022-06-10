import React from 'react'
import CardDetails from '../CardDetails';
const Cpp = () => {
    var titles=[
        {
          youtube:"https://www.youtube.com/embed/LQKYXnxCiU0",
          title:'Introduction, Datatypes, Variables, Comments in C++ | Lecture 1| C++ Programming | Yogesh Yogendra',
          content:'Learn to build fully functional web applications. Course options include starting from the basics of coding and then learning web. Recommended course to do after data structures / foundation',
          link:"#"
        },
        {
          youtube:"https://youtube.com/embed/xxGOdTJc4bY",
          title:'Principles of OOPS | Lecture 14 | OOPS in C++ | Yogesh Yogendra',
          content:'Learn to build fully functional web applications. Course options include starting from the basics of coding and then learning web. Recommended course to do after data structures / foundation',
          link:"#"
        },
        {
          youtube:"https://youtube.com/embed/iXWk26DBCvQ",
          title:'Public and Private access specifiers | Lecture 15 | OOPS in C++ | Yogesh Yogendra',
          content:'Learn to build fully functional web applications. Course options include starting from the basics of coding and then learning web. Recommended course to do after data structures / foundation',
          link:"#"
        },
        {
          youtube:"https://www.youtube.com/embed/7BXS70tbySE",
          title:'Different ways of Object Creations, Scope Resolution Operator | Lecture 16 | OOPS in C++ | Yogesh',
          content:'Learn to build fully functional web applications. Course options include starting from the basics of coding and then learning web. Recommended course to do after data structures / foundation',
          link:"#"
        }
    ];
    console.log(titles);
    console.log(titles[0]);
  return (
    <div>
        <header>C++ Tutorials</header>
        {
          titles.forEach(element=>{
            // <CardDetails data={element}  />
            console.log(element);
          })
        }
        <CardDetails data={titles[0]} />
        <CardDetails data={titles[1]} />
        <CardDetails data={titles[2]} />
        <CardDetails data={titles[3]} />
        
    </div>
  )
}

export default Cpp