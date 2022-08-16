import Container from 'react-bootstrap/Container'
import { useQuery } from 'react-query'
import BooksAPI from '../services/BooksAPI'
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

const BooksPage = () => {
	const { isLoading, isError, error, data } = useQuery(['books'], BooksAPI.getBooks)

	console.log(data)

	return (
		<Container className="py-3">

		<h1>Welcome to our library!</h1>

		{isLoading && (<p>Loading books...</p>)}

		{isError && (<p>An error occurred: {error.message}</p>)}

		{data && (
				<Row  className="bookslist">
					{data.map(book => 
					<Col lg={4} md={6} sm={12}>
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
										<strong>Pages: </strong>
										{book.pages} 
									</ListGroup.Item>
									<ListGroup.Item>
										<strong>Author: </strong>
										{book.author.name} 
									</ListGroup.Item>
								</ListGroup>
							</Card.Body>
						</Card>
					</Col>
					)}

				</Row>
		)}
		</Container>
	)
}

export default BooksPage

