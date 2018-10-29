import React from 'react';
import {Link} from 'react-router-dom';

import './breadcrumbs.less';

const BreadCrumbs = ({
	history: {
		location: {
			pathname
		}
	}
}) => {
	let location = pathname.split('/').filter((l) => l !== "");
	let href = "";
	return (
		 <div className="bread-crumbs">
		  {
		  	location.map((l, key) => {
		  		if(!href.includes(l)) {
		  			href = href.concat(`/${l}`)
		  		}
		  		return (
			  		<div key={key}>
			  		 <span className="bread-separator">/</span>
			  		 <Link to={href}>{l}</Link>
			  		</div>
		  		)
		  	})
		  }
		 </div>
	)
}
export default BreadCrumbs;