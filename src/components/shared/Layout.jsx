import React, { useEffect } from 'react';
import Header from './Header';

const Layout = ({title, children}) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <>
    <div className="jumbotron">
        <Header title={title}/>
        <div className="container">
          {children}
        </div>
      </div>
    </>
  );
};
 
export default Layout;