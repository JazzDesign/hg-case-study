import React from 'react'

export function Results( { data }) {
  return (
    <div>
      {data.map(item => (
        <p key={item.geonameId}>{item.continent}</p>
      ))}
    </div>
  )
}
