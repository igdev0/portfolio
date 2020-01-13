import React from 'react';
import './loadingRoller.less';

const LoadingRoller = () => {

  return (
    <div className="loading-roller">
     <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  )
}

export default LoadingRoller
