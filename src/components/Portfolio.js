import React from 'react';
import PropTypes from 'prop-types';
import Toolbar from './Toolbar';
import ProjectList from './ProjectList';
import ProjectItemModel from '../models/ProjectItemModel'
 
function Portfolio(props) {
  const { defaultFilter } = props;
  const filters = ['All', 'Websites', 'Flayers', 'Business Cards'];
  const allFilter = filters[0];
  const imagePath = '/portfolio_images/';
  const projects = [new ProjectItemModel({image: '200.jpg', category: filters[1]}), 
                    new ProjectItemModel({image: 'dia.jpg', category: filters[2]}),
                    new ProjectItemModel({image: 'mon.jpg', category: filters[3]}), 
                    new ProjectItemModel({image: 'place200x290_2.png', category: filters[1]}), 
                    new ProjectItemModel({image: 'place200x290.png', category: filters[2]}), 
                    new ProjectItemModel({image: 'transmission.jpg', category: filters[3]}), 
                    new ProjectItemModel({image: 'Triangle_350x197_1.jpg', category: filters[1]}),
                    new ProjectItemModel({image: 'codystretch.jpg', category: filters[2]}),
                    new ProjectItemModel({image: 'emi_haze.jpg', category: filters[3]}),
                    new ProjectItemModel({image: 'place200x290_1.png', category: filters[1]}),
                    new ProjectItemModel({image: 'place200x290_3.png', category: filters[2]}),  
                    new ProjectItemModel({image: 'the_ninetys_brand.jpg', category: filters[3]}),
                    new ProjectItemModel({image: 'Triangle_003.jpg', category: filters[1]}),
                    new ProjectItemModel({image: 'Triangle_350x197.jpg', category: filters[2]})];   
  
  const [currentFilter, setState] = React.useState(defaultFilter || allFilter);
  const onSelectFilter = (filter) => { setState(filter) };
  const getFilteredProjects = (filter) => {
    return projects.filter( 
        (project) => { return allFilter === filter || project.category === filter } 
      )
  };

  return (
    <div className="portfolio">
      <div className="portfolio__toolbar">  
        <Toolbar
         filters={filters}
         selected={currentFilter}
         onSelectFilter={onSelectFilter} /> 
      </div>
      <div className="portfolio__content">
        <ProjectList projects={getFilteredProjects(currentFilter)} imagePath={imagePath} />        
      </div>
    </div>
  );
}

Portfolio.propTypes = {
  defaultFilter: PropTypes.string    
}

export default Portfolio;