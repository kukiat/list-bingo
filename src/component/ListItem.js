import React from 'react'

export default function ListItem({item}) {
  return (
    <label className="checkbox checkbox-list-disable">
      <input type="checkbox"/> {item.ep} {item.date.day}/{item.date.month}/{item.date.year}
    </label>
  )
}

