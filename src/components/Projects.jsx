import React, { useEffect, useState } from 'react';
import { assets, projectsData } from '../assets/assets';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToshow] = useState(1);
  const [selectedType, setSelectedType] = useState(''); // Track selected type

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardsToshow(projectsData.length);
      } else {
        setCardsToshow(1);
      }
    };
    updateCardsToShow();

    window.addEventListener('resize', updateCardsToShow);
    return () => window.removeEventListener('resize', updateCardsToShow);
  }, []);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredProjects.length);
  };
  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? filteredProjects.length - 1 : prevIndex - 1));
  };

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value); // Update selected type
    setCurrentIndex(0); // Reset to the first project when the type changes
  };

  // Filter projects based on the selected type
  const filteredProjects = selectedType
    ? projectsData.filter((project) => project.type === selectedType)
    : projectsData;

  return (
    <div className='container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden' id='Projects'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>
        Projects <span className='underline underline-offset-4 decoration-1 under font-light'>Completed</span>
      </h1>
      <p className='text-center text-gray-500 mb-8 max-w-80 mx-auto'>
        Crafting Spaces, Building Legacies - Explore Our Portfolio
      </p>

      {/* Dropdown to filter by property type */}
      <div className='mb-6 text-center'>
        <label htmlFor="typeFilter" className='mr-2'>Filter by Type:</label>
        <select
          id="typeFilter"
          value={selectedType}
          onChange={handleTypeChange}
          className='p-2 border rounded'
        >
          <option value="">All</option>
          <option value="studio">Studio</option>
          <option value="villa">Villa</option>
          <option value="house">House</option>
          <option value="cottage">Cottage</option>
          <option value="penthouse">Penthouse</option>
          <option value="farmhouse">Farmhouse</option>
        </select>
      </div>

      {/* Slider buttons */}
      <div className='flex justify-end items-center mb-8'>
        <button onClick={prevProject} className='p-3 bg-gray-200 rounded mr-2' aria-label='Previous project'>
          <img src={assets.left_arrow} alt="Previous" />
        </button>
        <button onClick={nextProject} className='p-3 bg-gray-200 rounded mr-2' aria-label='Next project'>
          <img src={assets.right_arrow} alt="Next" />
        </button>
      </div>

      {/* Project slider container */}
      <div className='overflow-hidden'>
        <div className='flex gap-8 transition-transform duration-500 ease-in-out'
          style={{ transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)` }}
        >
          {filteredProjects.map((project, index) => (
            <div key={index} className='relative flex-shrink-0 w-full sm:w-1/4'>
              <img src={project.image} alt={project.title} className='w-full h-auto mb-14' />
              <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
                <div className='inline-block bg-white w-3/4 px-4 py-2 shadow-md'>
                  <h2 className='text-xl font-semibold text-gray-800'>
                    {project.title}
                  </h2>
                  <p className='text-gray-500 text-sm'>
                    {project.price} <span className='px-1'>|</span> {project.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
