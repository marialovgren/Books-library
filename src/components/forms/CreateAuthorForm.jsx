import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useForm } from 'react-hook-form'

const CreateAuthorForm = () => {
	const { register, handleSubmit } = useForm()

	const onCreateAuthor = data => {
		console.log("would create author with data:", data)
	}

	return (
		<Form onSubmit={handleSubmit(onCreateAuthor)}>
			<Form.Group className='mb-3' controlId='name'>
				<Form.Label>Author Name</Form.Label>
				<Form.Control
					{...register('name')}
					type='text'
					placeholder='Astrid Lindgren'
				/>
			</Form.Group>

			<Form.Group className='mb-3' controlId='date_of_birth'>
				<Form.Label>Date of Birth</Form.Label>
				<Form.Control
					{...register('date_of_birth')}
					type='date'
				/>
			</Form.Group>

			<Button variant='success' type='submit'>Create</Button>
		</Form>
	)
}

export default CreateAuthorForm