import React from 'react';
import Card from './Card';

const Cardlist = ({ Animename }) => {
	return(
		<div>
			{
				Animename.map((user, i) => {
					return (
						<Card key={i} id={Animename[i].id} 
						name={Animename[i].name} 
						email={Animename[i].email}/>
					);
				})
			}
		</div>
	);
}

export default Cardlist;