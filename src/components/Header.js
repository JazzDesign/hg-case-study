import React from 'react';
import '../assets/styles/components/Header.css';

export function Header( { title }) {
  return (
    <div className="header">
      <h1>{title}</h1>
      <button>Go</button>
    </div>
  )
}
