import React, { useRef } from 'react';
import PropTypes from 'prop-types';

const AccordionItem = ({
  active,
  handleToggle,
  subNavList,
}) => {
  const contentEl = useRef();

  const {
    header,
    id,
    icon,
    subNav,
  } = subNavList;
  const activeClass = (active === id) ? 'active' : '';

  return (
    <div className="rc-accordion-card">
      <div className="rc-accordion-header">
        <div
          className={`rc-accordion-toggle p-3 ${activeClass}`}
          onClick={() => handleToggle(id)}
          aria-hidden="true"
        >
          { /* subNav.length > 0 */}
          <h5 className="rc-accordion-title"><i className={icon} /> &nbsp; {header}</h5>
          {(subNav.length > 0) ? (<i className="ri-arrow-down-s-line arrow" />) : '' }
        </div>
      </div>
      <div
        ref={contentEl}
        className={`rc-collapse ${activeClass}`}
        style={
          active === id
            ? { height: contentEl.current.scrollHeight }
            : { height: '0px' }
        }
      >
        {
          (subNav.length > 0)
            ? (
              <div className="rc-accordion-body">
                { subNav.map((item) => (
                  <a href="#!">{item}</a>
                ))}
              </div>
            )
            : ''
        }
      </div>
    </div>
  );
};

AccordionItem.propTypes = {
  active: PropTypes.number.isRequired,
  handleToggle: PropTypes.func.isRequired,
  subNavList: PropTypes.shape({
    header: PropTypes.string,
    id: PropTypes.number,
    icon: PropTypes.string,
    subNav: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default AccordionItem;
