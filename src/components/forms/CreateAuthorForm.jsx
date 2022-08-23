import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import Form from 'react-bootstrap/Form'
import { useForm } from 'react-hook-form'
import { useMutation, useQueryClient } from 'react-query'
import BooksAPI from '../../services/BooksAPI' 

const CreateAuthorForm = () => {
	const { register, handleSubmit, formState: { errors } } = useForm()
	const queryClient = useQueryClient()
	const createAuthorMutation = useMutation(BooksAPI.createAuthor, { 
		onSuccess: () => {
			// invalidate datan så att listan över författare hämtas på nytt
			queryClient.invalidateQueries('authors')
		}
	})

	// När man klickar på Submit-knappen så ska det som står i onCreateAuthor köras. Det räcker att skicka in data, vilket är name och date_of_birth. JSON-server sätter själv id och tar nästa lediga id. 
	const onCreateAuthor = data => {
		createAuthorMutation.mutate( data )
	}

	return (
		<Form onSubmit={handleSubmit(onCreateAuthor)} noValidate >
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
				>Create
			</Button>
		</Form>
	)
}

export default CreateAuthorForm