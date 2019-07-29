import React from 'react';
import { Link } from 'react-router-dom';

const UserDetails = () => {
  return (
    <React.Fragment>
      <div>User Details works!</div>
      <Link to="/users">Go to User</Link>
    </React.Fragment>
  );
};

export default UserDetails;
