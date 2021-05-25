import React from 'react';
import '../assets/styles/components/Header.css';

export function Header( { title, onClick }) {
  return (
    <div className="header">
      <h1>{title}</h1>
      <button onClick={onClick}>Go</button>
    </div>
  )
}
