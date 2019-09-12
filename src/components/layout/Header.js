import React from 'react';

const headerStyle = {
  textAlign: 'center',
  padding: '10px'
}

function Header() {
  return (
    <header style={headerStyle}>
      <h1>TodoList</h1>
    </header>
  )
}

export default Header;