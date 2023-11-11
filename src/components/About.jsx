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
    <div className="p-4 md:p-12">
      <div className="mb-4 text-gray-900 md:mb-8">
        <h1 className="mb-2 text-2xl font-medium uppercase text-sky-700 md:text-4xl">
          About the company
        </h1>
        <p className="text-base md:text-lg">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit eveniet
          dicta hic mollitia nulla ipsum, cupiditate deserunt inventore dolore
          aut aliquid quos, voluptate minima nam temporibus quis, sit deleniti
          impedit commodi! Sunt.
        </p>
      </div>
      <h1 className="mb-2 px-4 text-center text-2xl uppercase text-sky-700 md:mb-4 md:text-3xl">
        Meet our team
      </h1>
      <div className="flex flex-col gap-2 text-gray-900 md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-3">
        {teamMembers.map((teamMember, index) => (
          <div
            className="flex cursor-default items-center rounded-lg border border-slate-300 p-2 duration-300 ease-in-out hover:scale-105"
            key={index}
          >
            <div className="h-fit w-fit overflow-hidden rounded-full">
              <img src={teamMember.img} className="h-16 w-auto md:h-20" />
            </div>
            <div className="ml-4 md:ml-6">
              <p className="text-lg font-bold md:text-xl">{teamMember.name}</p>
              <p className="text-gray-700">{teamMember.job}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
