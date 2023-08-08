import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

import './Collapsible.scss'

function Collapsible({title, text, equipments }) {
  const [open, setOpen] = useState(false)
  const [contentVisible, setContentVisible] = useState(false)

  const toggle = () => {
    if(!open) {
      setOpen(true)
      setTimeout(() => {
        setContentVisible(true)
      }, 10);
    } else {
      setTimeout(() => {
        setOpen(false);
      }, 10);
      setContentVisible(false)
    }
  }

  return (
    <div className='collapsible-container'>
      <div className='collapsible-wrapper' onClick={toggle}>
        <p>{title}</p>
        <FontAwesomeIcon
          icon={faChevronDown}
          className={`collapsible-arrow ${open ? 'open' : ''}`}
        />
      </div>
      {open && (
        <div
          className={`collapsible-content ${contentVisible ? 'slowdown' : ''}`}
        >
          { equipments ?
            <ul>
              { equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
            :
            <p>{text}</p>
          }
        </div>
      )}
    </div>
  )
}

export default Collapsible;
