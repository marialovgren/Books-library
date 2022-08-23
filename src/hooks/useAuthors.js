// denna hooken gör själva queryn som hämtar alla författare. Syftet är att bara ha en query-nyckel för att bara göra en request. 

import { useQuery } from 'react-query'
import BooksAPI from '../services/BooksAPI'

const useAuthors = () => {
	return useQuery('authors', BooksAPI.getAuthors)
}

export default useAuthors