import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { toast } from 'react-toastify'

const HomePage = () => {
	return (
		<Container className="py-3">
			<h1>Welcome to our library!</h1>

			<Button variant='primary' onClick={() => {
				toast('Surprise!')
			}}>Click for a surprise</Button>
		</Container>
	)
}

export default HomePage
