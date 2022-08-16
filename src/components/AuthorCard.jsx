import React from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

const AuthorCard = ({ authors }) => {

	return (
		<Card className="mb-3" key={authors.id}>
			<Card.Header> 
				<strong>{authors.name} </strong>
            </Card.Header>

			<ListGroup>						
                Date of Birth: {authors.date_of_birth}
            </ListGroup> 

			<ul>
				{authors.books.map(book => (
					<li key={book.id}>{book.title}</li>
				))}
			</ul>
			
		</Card>
	)
}

export default AuthorCard
