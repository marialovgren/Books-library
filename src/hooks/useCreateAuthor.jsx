import { useMutation, useQueryClient } from 'react-query'
import BooksAPI from '../services/BooksAPI' 

const useCreateAuthor = () => {
    const queryClient = useQueryClient()

    return useMutation(BooksAPI.createAuthor, { 
		onSuccess: () => {
			// invalidate datan så att listan över författare hämtas på nytt
			queryClient.invalidateQueries('authors')
		}
	})

}

export default useCreateAuthor