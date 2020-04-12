import React from 'react';
import PropTypes from 'prop-types';
import ProjectItemModel from '../models/ProjectItemModel'

function ProjectItem(props) {
  const {project, imagePath} = props;   

  return (
    <div className="project-list__item">       
      <img src={imagePath + project.image} 
           alt={project.category + ': ' + project.image} />
    </div>
  );
}

ProjectItem.propTypes = {
  project: PropTypes.instanceOf(ProjectItemModel).isRequired,
  imagePath: PropTypes.string.isRequired
}

export default ProjectItem;