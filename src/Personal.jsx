import React from 'react'

function Personal() {
  return (
    <div>
      <h1> Personal education </h1>
      <div className="inputs">
        <input placeholder='First name' type="text" />
        <input placeholder='Last name' type="text" />
        <input placeholder='Title' type="text" />
        <input placeholder='' type="text" />
        <input placeholder='Phone number' type="text" />
        <input placeholder='Email' type="email" />
        <input placeholder='Description' type="text" />
      </div>
    </div>
  )
}

export default Personal