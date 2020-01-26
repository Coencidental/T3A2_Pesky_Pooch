import React, { useState } from 'react';
import EventOptionSelector from './EventOptionSelector'
import EditEvent from './EditEvent'
import AddEvent from './AddEvent'
import DeleteEvent from './DeleteEvent'
import '../styles/eventcontrolpanel.css'



export default function EventControlPanel() {
  const [eventTypes, setEventTypes] = useState({add: false, edit: false, delete: false})
  const [selectedType, setSelectedType] = useState(null)

  const renderForm = () => {
    switch (selectedType) {
      case 'add':
        return < AddEvent />
      case 'delete':
        return <DeleteEvent />
      case 'edit':
        return < EditEvent />
      default:
        return <p>No type selected</p>
    }
  }

  const setProperType = (type) => {
    setEventTypes({add: false, edit: false, delete: false, [type.target.name]: true})
    setSelectedType(type.target.name)
  }

  return (
    <>
      <p className="admin-banner">You have been authorized.</p>

      < EventOptionSelector 
        setProperType={setProperType}
      />

      <div id="form-container">
        {selectedType && renderForm()}
      </div>
    </>
  )
}