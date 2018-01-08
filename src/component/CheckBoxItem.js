import React from 'react'

export default function CheckBoxItem({item}) {
  return (
    <div>
      <label className="checkbox checkbox-list-disable">
      <input type="checkbox" class="mgc mgc-primary" /> {item.ep} {item.date.day}/{item.date.month}/{item.date.year}
    </label>
    </div>

  )
}

