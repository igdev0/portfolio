import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSadTear } from '@fortawesome/free-solid-svg-icons';
import './notFoundComponent.less';

const NotFoundComponent = ({name, children}) => {

  return (
    <main className="data-not-found">
      <div className="data-not-found-heading">
        <h1><FontAwesomeIcon icon={faSadTear}/> Woops ... i couldn't find any <span>{name}</span>.</h1>
      </div>
      <div className="data-not-found-actions">
        {children}
      </div>
    </main>
  )
}

export default NotFoundComponent;
