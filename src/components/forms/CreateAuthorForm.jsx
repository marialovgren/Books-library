import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const CreateAuthorForm = () => {
	const onSubmit = e => {
		e.preventDefault()
		console.log("would create author")
	}

	return (
		<Form onSubmit={onSubmit}>
			<Form.Group className='mb-3' controlId='name'>
				<Form.Label>Author Name</Form.Label>
				<Form.Control type='text' placeholder='Astrid Lindgren' />
			</Form.Group>

			<Form.Group className='mb-3' controlId='date_of_birth'>
				<Form.Label>Date of Birth</Form.Label>
				<Form.Control type='date' />
			</Form.Group>

			<Button variant='success' type='submit'>Create</Button>
		</Form>
	)
}

export default CreateAuthorForm