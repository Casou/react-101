import React, {Fragment} from 'react';
import PersonCard from "./components/person-card/PersonCard";

import './List.css';

const List = ({ people }) => (
	<Fragment>
		<article id={"list-people"}>
			{
				people.map(p =>
					<PersonCard key={ p.id }
								person={p}
					/>)
			}
		</article>
	</Fragment>
);

export default List;