import React from 'react';
import PropTypes from 'prop-types';
import './panel.scss';

const Panel = ({ noPadding, toogle, children, style, className }) => {
  return (
    <div style={style} className={`panel ${noPadding} ${className}`}>
      {toogle && <div className="panel-toogle" />}
      {children}
    </div>
  );
};

Panel.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
    PropTypes.element,
  ]).isRequired,
  toogle: PropTypes.bool,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  noPadding: PropTypes.string,
  className: PropTypes.string,
};

Panel.defaultProps = {
  noPadding: '',
  style: {},
  toogle: false,
  className: '',
};

export default Panel;
