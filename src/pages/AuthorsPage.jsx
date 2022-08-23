import { useMemo } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'
import WarningAlert from '../components/alerts/WarningAlert'
import CreateAuthorForm from '../components/forms/CreateAuthorForm'
import LoadingSpinner from '../components/LoadingSpinner'
import SortableTable from '../components/SortableTable'
import useAuthors from '../hooks/useAuthors'

const AuthorsPage = () => {
	const { data: authors, error, isError, isLoading } = useAuthors()

	const columns = useMemo(() => {
		return [
			{
				Header: 'Name',
				accessor: 'name',
			},
			{
				Header: 'Date of Birth',
				accessor: 'date_of_birth',
			},
			{
				Header: 'Actions',
				Cell: ({ row: { original: author } }) => (
					<Button
						variant="primary"
						size="sm"
						as={Link}
						to={`/authors/${author.id}`}
					>
						Show
					</Button>
				)
			},
		]
	}, [])

	return (
		<Container className="py-3">
			<h1>Authors</h1>

			{isLoading && <LoadingSpinner />}

			{isError && <WarningAlert message={error.message} />}

			{authors && <SortableTable columns={columns} data={authors} />}

			<hr className='my-5' />

			<Card>
				<Card.Body>
					<Card.Title>Create Author</Card.Title>
					<CreateAuthorForm />
				</Card.Body>
			</Card>
		</Container>
	)
}

export default AuthorsPage