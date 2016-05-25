import React from 'react';
import { Router } from 'react-router';
import routes from '../routes/routes';


export default () => {
  
  return (
    
      <Router children={routes} />
  
  );
};