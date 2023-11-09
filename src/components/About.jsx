import React from "react";
import Picture1 from "../assets/team/picture-1.jpeg";
import Picture2 from "../assets/team/picture-2.jpeg";
import Picture3 from "../assets/team/picture-3.jpeg";
import Picture4 from "../assets/team/picture-4.jpeg";
import Picture5 from "../assets/team/picture-5.jpeg";
import Picture6 from "../assets/team/picture-6.jpeg";
import Picture7 from "../assets/team/picture-7.jpeg";
import Picture8 from "../assets/team/picture-8.jpeg";
import Picture9 from "../assets/team/picture-9.jpeg";

const About = () => {
  const teamMembers = [
    {
      name: "Alex Turner",
      job: "Chief Executive Officer",
      img: Picture1,
    },
    {
      name: "Mason Chen",
      job: "Senior Software Engineer",
      img: Picture2,
    },
    {
      name: "Emily Rodriguez",
      job: "Marketing Specialist",
      img: Picture3,
    },
    {
      name: "Dante Jackson",
      job: "Data Analyst",
      img: Picture4,
    },
    {
      name: "Nolan Harper",
      job: "Junior Frontend Developer",
      img: Picture5,
    },
    {
      name: "Olivia Bennett",
      job: "UX/UI Designer",
      img: Picture6,
    },
    {
      name: "Sophie Miller",
      job: "QA Tester",
      img: Picture7,
    },
    {
      name: "Elena Ramirez",
      job: "Finance Coordinator",
      img: Picture8,
    },
    {
      name: "Lila Reynolds",
      job: "Graphic Designer",
      img: Picture9,
    },
  ];

  return (
    <div className="md:p-12 p-4">
      <div className="text-gray-900 md:mb-8 mb-4">
        <h1 className="text-sky-700 md:text-4xl text-2xl font-medium uppercase mb-2">
          About the company
        </h1>
        <p className="md:text-lg text-base">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit eveniet
          dicta hic mollitia nulla ipsum, cupiditate deserunt inventore dolore
          aut aliquid quos, voluptate minima nam temporibus quis, sit deleniti
          impedit commodi! Sunt.
        </p>
      </div>
      <h1 className="text-sky-700 md:text-3xl text-2xl uppercase text-center px-4 md:mb-4 mb-2">
        Meet our team
      </h1>
      <div className="md:grid lg:grid-cols-3 md:grid-cols-2 flex flex-col text-gray-900 md:gap-4 gap-2">
        {teamMembers.map((teamMember, index) => (
          <div
            className="border border-slate-300 p-2 rounded-lg flex items-center hover:scale-105 ease-in-out duration-300 cursor-default"
            key={index}
          >
            <div className="rounded-full overflow-hidden h-fit w-fit">
              <img src={teamMember.img} className="md:h-20 h-16 w-auto" />
            </div>
            <div className="md:ml-6 ml-4">
              <p className="font-bold md:text-xl text-lg">{teamMember.name}</p>
              <p className="text-gray-700">{teamMember.job}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
