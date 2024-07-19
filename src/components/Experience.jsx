import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import sanitizeHtml from "sanitize-html";
import { experiences } from "../constants";

function Experience() {
  return (
    <div
      className="experience bg-black w-screen text-white pt-4 pt-16 overflow-y-auto h-screen"
      id="experience"
    >
      <div className="pt-12 sm:px-16">
        <p className="font-light">MY JOURNEY SO FAR.</p>
        <h2 className="text-4xl sm:text-5xl font-extrabold mt-2">
          Work Experience.
        </h2>
      </div>
      <VerticalTimeline className="mt-9 overflow-y-auto">
        {experiences.map((experience) => (
          <VerticalTimelineElement
            key={experience.role} // Added a key for each element
            className="relative vertical-timeline-element--work"
            contentStyle={{ background: "#1d1836", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #232631" }}
            date={experience.duration}
            iconStyle={{ background: "#fff" }}
            icon={
              <a
                className="flex justify-center items-center w-full h-full"
                href={sanitizeHtml(experience.url)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={sanitizeHtml(experience.logo)}
                  alt={experience.company}
                  className="w-[60%] h-[60%] object-contain"
                />
              </a>
            }
          >
            <div>
              <h3 className="text-white text-[24px] font-bold">
                {experience.role}
              </h3>
              <p
                className="text-secondary text-[16px] font-semibold"
                style={{ margin: 0 }}
              >
                {experience.company}
              </p>
            </div>
            <ul className="mt-5 list-disc ml-5 space-y-2">
              {experience.points.map((point) => (
                <li
                  key={point}
                  className="text-white-100 text-[14px] pl-1 tracking-wider"
                >
                  {point}{" "}
                </li>
              ))}
            </ul>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
