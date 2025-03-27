import React, { useEffect, useState } from 'react';
import { assets, projectsData } from '../assets/assets';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToshow] = useState(1);
  const [selectedType, setSelectedType] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(5000000);

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
    setSelectedType(event.target.value);
    setCurrentIndex(0);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  // Function to parse price by removing "Rs" and commas
  const parsePrice = (price) => {
    return parseInt(price.replace('Rs', '').replace(/,/g, '').trim());
  };

  // Filter projects based on selected type, price range, and search query
  const filteredProjects = projectsData.filter((project) => {
    const price = parsePrice(project.price);
    const matchesType = selectedType ? project.type === selectedType : true;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery) ||
      project.location.toLowerCase().includes(searchQuery);
    const matchesPrice = price >= minPrice && price <= maxPrice;

    return matchesType && matchesSearch && matchesPrice;
  });

  return (
    <div className='container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden' id='Projects'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>
        Projects <span className='underline underline-offset-4 decoration-1 under font-light'>Completed</span>
      </h1>
      <p className='text-center text-gray-500 mb-8 max-w-80 mx-auto'>
        Crafting Spaces, Building Legacies - Explore Our Portfolio
      </p>

      {/* Search input */}
      <div className='mb-6 text-center'>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search by title or location"
          className='p-2 border rounded w-full sm:w-1/3 mx-auto'
        />
      </div>

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

      {/* Dropdown to filter by price range */}
      <div className="mb-6 text-center">
        <h3 className="text-lg font-semibold">Filter by Price Range</h3>
        <div className="flex justify-center items-center mb-2">
          <select
            value={minPrice}
            onChange={(e) => setMinPrice(Number(e.target.value))}
            className="mx-2 p-2 border rounded"
          >
            <option value={0}>Rs 0</option>
            <option value={100000}>Rs 1,00,000</option>
            <option value={200000}>Rs 2,00,000</option>
            <option value={300000}>Rs 3,00,000</option>
            <option value={400000}>Rs 4,00,000</option>
            <option value={500000}>Rs 5,00,000</option>
          </select>
          <span>to</span>
          <select
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="mx-2 p-2 border rounded"
          >
            <option value={100000}>Rs 1,00,000</option>
            <option value={200000}>Rs 2,00,000</option>
            <option value={300000}>Rs 3,00,000</option>
            <option value={400000}>Rs 4,00,000</option>
            <option value={500000}>Rs 5,00,000</option>
          </select>
        </div>
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
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <div key={index} className='relative flex-shrink-0 w-full sm:w-1/4  hover:scale-110  transition-transform duration-300 '>
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
            ))
          ) : (
            <div className='w-full text-center text-gray-500'>
              No properties match your search criteria.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
