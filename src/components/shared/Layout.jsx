import React, { useEffect } from 'react';
import Header from './Header';
import './stylesheet.css';

const Layout = ({title, children}) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <>
      
        <Header title={title}/>
        <div className="container">
          {children}
        </div>
        <footer className="fixed-bottom bg-dark">
          <p className="text-center">Made by Nikolas Brennan Stu Id: 1109583</p>
        </footer>
      
    </>
  );
};
 
export default Layout;