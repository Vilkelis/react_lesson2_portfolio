import React from 'react';
import PropTypes from 'prop-types';

function Toolbar(props) {
  const {filters, selected, onSelectFilter} = props;
  const handleClick = evt => { evt.preventDefault(); 
                               onSelectFilter(evt.currentTarget.dataset.key) }

  function buttonClass(filter) {     
    let class_selected = filter === selected ? ' selected' : '';
    return 'toolbar__button' + class_selected;
  }
  
  return (
    <div className="toolbar">
      {filters.map(filter => <a href="/"
                                onClick={handleClick} 
                                className={buttonClass(filter)}
                                data-key={filter}
                                key={filter}>{filter}</a>)}
    </div>
  );
}

Toolbar.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.string).isRequired,
  selected: PropTypes.string.isRequired,
  onSelectFilter: PropTypes.func.isRequired
}

export default Toolbar;