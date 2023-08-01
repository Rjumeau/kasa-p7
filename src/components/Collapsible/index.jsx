import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronDown} from '@fortawesome/free-solid-svg-icons'
import { faCircleChevronUp} from '@fortawesome/free-solid-svg-icons'
import './Collapsible.scss'

function Collapsible({title, text}) {
  const [open, setOpen] = useState(false)
  const toggle = () => {
    setOpen(!open)
  }
  return (
    <div className='collapsible-container'>
      <div className='collapsible-wrapper' onClick={toggle}>
        <p>{title}</p>
        { open ? <FontAwesomeIcon icon={faCircleChevronUp}/> : <FontAwesomeIcon icon={faCircleChevronDown}/> }
      </div>
      {open && (
        <div className='collapsible-content'>
          <p>{text}</p>
        </div>
      )}
    </div>
  )
}

export default Collapsible;
