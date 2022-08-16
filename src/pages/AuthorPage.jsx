import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import AuthorCard from '../components/AuthorCard';
import WarningAlert from '../components/alerts/WarningAlert';
import useAuthor from '../hooks/useAuthor';
import { useParams } from 'react-router-dom'

const AuthorPage = () => {
	const { id } = useParams()
	const { data: authors, isLoading, isError, error } = useAuthor(id)

	console.log(id)

	return (
		<Container className="py-3">

			<h1>Author</h1>

			{isLoading && (<p>Loading author...</p>)}

			{isError && <WarningAlert message={error.message} />}

			{authors && (
					<Row  className="authorCard">
						<AuthorCard authors={authors}  />
					
					</Row>
			)}


		</Container>
	)
}

export default AuthorPage

