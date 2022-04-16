import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import './CustomLink.css';

const CustomLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        style={{ backgroundColor: match ? 'orange' : '#20242c', textDecoration: match ? "underline" : "none" }}
        to={to}
        {...props}
      >
        {children}
      </Link>
      {/* {match && " (active)"} */}
    </div>
  );
};

export default CustomLink;