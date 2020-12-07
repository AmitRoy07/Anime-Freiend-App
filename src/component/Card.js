import React from 'react';

const Card = ({ email, name, id }) =>{
return(
	<div className="tc bg-light-green dib bw2 shadow-5 br3 pa3 ma3 grow">
		<img alt="anime" src={`https://robohash.org/baby/${id}?size=200x200`}/>
		<div>
			<h3>{name}</h3>
			<p>{email}</p>
		</div>
	</div>
	);
}

export default Card;