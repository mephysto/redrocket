import React from 'react';
// import './Header.css';


const Header = (props) => {
  return (
    <div className="header-container">
      <header className="wrapper clearfix"><a href="./">
        <h1 className="title">Taste Buds</h1></a>
        <nav>
          <a href="/Detail">Detail</a>
        </nav>
      </header>
    </div>
  );
}

export default Header;