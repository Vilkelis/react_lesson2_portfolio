import React from 'react';
import PropTypes from 'prop-types';
import ProjectItem from './ProjectItem';
import ProjectItemModel from '../models/ProjectItemModel'
 
function ProjectList(props) {
  const { projects, imagePath } = props;

  return (
    <div className="project-list">
      {projects.map(project => <ProjectItem key={project.image} 
                                            project={project} 
                                            imagePath={imagePath} />)}
    </div>
  );
}

ProjectList.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.instanceOf(ProjectItemModel)).isRequired,
  imagePath: PropTypes.string.isRequired
}

export default ProjectList;