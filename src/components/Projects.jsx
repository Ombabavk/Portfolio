import React from "react";
import PropTypes from "prop-types";

function ProjectCard(props) {
  const { title, description, url } = props;
  return (
    <div className="max-w-sm sm:max-w-sm md:max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="p-4 sm:p-6">
        {url ? (
          <a href={url}>
            <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">
              {title}
            </h5>
          </a>
        ) : (
          <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">
            {title}
          </h5>
        )}
        <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">
          {description}
        </p>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  // eslint-disable-next-line react/require-default-props
  url: PropTypes.string,
};

const project = [
  {
    title: "Coming Soon",
    description: "Exciting projects are on the way! Stay tuned for updates",
    url: "https://example.com/project1",
  },
  {
    title: "Coming Soon",
    description: "Exciting projects are on the way! Stay tuned for updates",
    url: "https://example.com/project2",
  },
];

function Projects() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <div className="flex-grow flex flex-wrap gap-7 justify-center items-center m-12 p-12">
        {project.map((item) => (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <ProjectCard key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
