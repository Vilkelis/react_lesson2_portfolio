class ProjectItemModel {
    constructor(entity) {
      Object.assign(this, {
        image: '',
        category: ''
      }, entity);
    }   
}
  
export default ProjectItemModel;