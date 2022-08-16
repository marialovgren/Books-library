import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import WarningAlert from '../components/alerts/WarningAlert';
import useAuthors from '../hooks/useAuthors';
import AuthorsList from '../components/AuthorsList';

const AuthorsPage = () => {
	const { isLoading, isError, error, data: authors } = useAuthors()

	return (
		<Container className="py-3">

			<h1>Authors</h1>

			{isLoading && (<p>Loading authors...</p>)}

			{isError && <WarningAlert message={error.message} />}

			{authors && (
					<Row  className="authorlist">
						<AuthorsList authors={authors}  />
					</Row>
			)}


		</Container>
	)
}

export default AuthorsPage

