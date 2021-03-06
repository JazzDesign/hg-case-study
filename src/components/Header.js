import React from 'react';
import '../assets/styles/components/Header.css';

export function Header( { title, onClick }) {
  return (
    <div className="header">
      <h1>{title}</h1>
      <button className="btn" onClick={onClick}>GO</button>
    </div>
  )
}
