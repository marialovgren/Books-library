import Container from 'react-bootstrap/Container'
import { useQuery } from 'react-query'
import BooksAPI from '../services/BooksAPI'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import BookCard from '../components/BookCard';
import WarningAlert from '../components/alerts/WarningAlert';

const BooksPage = () => {
	const { isLoading, isError, error, data } = useQuery('books', BooksAPI.getBooks)

	console.log(data)

	return (
		<Container className="py-3">

		<h1>Books</h1>

		{isLoading && (<p>Loading books...</p>)}

		{isError && <WarningAlert message={error.message} />}

		{data && (
				<Row  className="bookslist">
					{data.map((book, i) => ( 
						<Col lg={4} md={6} sm={12} key={i}>
							<BookCard book={book} />
						</Col>
					))}

				</Row>
		)}
		</Container>
	)
}

export default BooksPage

