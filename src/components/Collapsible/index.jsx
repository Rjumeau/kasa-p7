import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

import './Collapsible.scss'

function Collapsible({title, text, equipments }) {
  const [open, setOpen] = useState(false)
  const toggle = () => {
    setOpen(!open)
  }

  return (
    <div className='collapsible-container'>
      <div className='collapsible-wrapper' onClick={toggle}>
        <p>{title}</p>
        { open ? <FontAwesomeIcon icon={faChevronUp}/> : <FontAwesomeIcon icon={faChevronDown}/> }
      </div>
      {open && (
        <div className='collapsible-content'>
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
