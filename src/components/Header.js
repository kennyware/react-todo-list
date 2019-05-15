import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header style={{textAlign: 'center', padding: '10px', background: '#333', color: '#fff'}}>
        <h1>Todo</h1>
        <Link style={{color: '#fff', margin: '0 5px'}} to="/">Home</Link>
        <Link style={{color: '#fff', margin: '0 5px'}} to="/about">About</Link>
    </header>
  )
}
