import React, { useRef } from 'react';
import PropTypes from 'prop-types';

const AccordionItem = (handleToggle, active, subNavList) => {
  const contentEl = useRef();

  const {
    header,
    id,
    icon,
    subNav,
  } = subNavList;

  return (
    <div className="rc-accordion-card">
      <div className="rc-accordion-header">
        <div
          className={`rc-accordion-toggle p-3 ${active === id ? 'active' : ''}`}
          onClick={() => handleToggle(id)}
          aria-hidden="true"
        >
          { /* subNav.length > 0 */}
          <h5 className="rc-accordion-title"><i className={icon} /> &nbsp; {header}</h5>
          <i className="ri-arrow-down-s-line arrow" />
        </div>
      </div>
      <div
        ref={contentEl}
        className={`rc-collapse ${active === id ? 'show' : ''}`}
        style={
          active === id
            ? { height: contentEl.current.scrollHeight }
            : { height: '0px' }
        }
      >
        <div className="rc-accordion-body">
          <p className="mb-0">{subNav}</p>
        </div>
      </div>
    </div>
  );
};

AccordionItem.propTypes = {
  active: PropTypes.string,
  handleToggle: PropTypes.func,
  subNavList: PropTypes.shape({
    header: PropTypes.string,
    id: PropTypes.string,
    icon: PropTypes.string,
    subNav: PropTypes.arrayOf(PropTypes.string),
  }),
};

export default AccordionItem;
