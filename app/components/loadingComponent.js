import React from "react";
import './loadingComponent.less'

const LoadingComponent = (props) => {

  return (
    <div className="loading">
     <div className="lds-ellipsis"><div></div><div></div><div></div></div>
    </div>
  )
}

export default LoadingComponent;
