import React from 'react';

const Layout = ({ children }) => {
return (
    <div className="content flex-grow bg-white">
      {children}
    </div>

  );
};

export default Layout;