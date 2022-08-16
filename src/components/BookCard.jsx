import React from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

const BookCard = ({ book }) => {

	return (
		<Card className="mb-3" key={book.id}>
			<Card.Header>{book.title}</Card.Header>
			<Card.Body>
				<ListGroup lg={3} variant="flush">
                    <ListGroup.Item>
                        <strong>Book: </strong> {book.title}
                    </ListGroup.Item>

                    <ListGroup.Item>						
                        <strong>Published</strong> {book.published}
                    </ListGroup.Item>   

                    <ListGroup.Item>
                        <strong>Pages: </strong> {book.pages} 
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <strong>Author: </strong> {book.author.name} 
				    </ListGroup.Item>
				</ListGroup>
			</Card.Body>
		</Card>
	)
}

export default BookCard
