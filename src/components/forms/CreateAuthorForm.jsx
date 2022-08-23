import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import Form from 'react-bootstrap/Form'
import { useForm } from 'react-hook-form'
import useCreateAuthor from '../../hooks/useCreateAuthor'

const CreateAuthorForm = () => {
	const { register, handleSubmit, formState: { errors } } = useForm()
	
	// useCreateAuthor kommer från hooken useCreateAuthor som i sin tur invaliderar 'authors' när man klickar på Submit så att listan över författarna uppdateras
	const createAuthorMutation = useCreateAuthor()

	return (
		// När man klickar på Submit-knappen så ska createAuthorMutation.mutate köras. Som default är den första parametern data, vilket innebär att datan som är ifylld skickas till databasen. 
		<Form onSubmit={handleSubmit( createAuthorMutation.mutate )} noValidate >
			{createAuthorMutation.isSuccess && <Alert variant="success">Author created!</Alert>}
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
				disabled={createAuthorMutation.isLoading}
				>Create
			</Button>
		</Form>
	)
}

export default CreateAuthorForm