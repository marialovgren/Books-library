import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useForm } from 'react-hook-form'
import { useMutation } from 'react-query'
import BooksAPI from '../../services/BooksAPI'

const CreateAuthorForm = () => {
	const { register, handleSubmit, formState: { errors } } = useForm()

	const mutation = useMutation(BooksAPI.createAuthor)

	const onCreateAuthor = data => {
			mutation.mutate( data )
	}

	return (
		<Form onSubmit={handleSubmit(onCreateAuthor)} noValidate >
			<Form.Group className='mb-3' controlId='name'>
				<Form.Label>Author Name</Form.Label>
				<Form.Control
					{...register('name', { 
						required: 'Please enter the name of the author', 
						minLength: {
							value: 3,
							message: 'Please enter at least 3 characters'
						},
					})}
					type='text'
					placeholder='Astrid Lindgren'
				/>
				{errors.name && <div className="invalid">{errors.name.message}</div>}
			</Form.Group>

			<Form.Group className='mb-3' controlId='date_of_birth'>
				<Form.Label>Date of Birth</Form.Label>
				<Form.Control
					{...register('date_of_birth', { 
						required: 'Please select the authors date of birth', 
					})}
					type='date' 
				/>
				{errors.date_of_birth && <div className="invalid">{errors.date_of_birth.message}</div>}
			</Form.Group>

			<Button 
				variant='success' 
				type='submit' 
				>Create
			</Button>
		</Form>
	)
}

export default CreateAuthorForm