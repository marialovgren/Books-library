// denna hooken gör själva queryn som hämtar en specifik författare. Syftet är att bara ha en query-nyckel för att bara göra en request. 

import { useQuery } from 'react-query'
import BooksAPI from '../services/BooksAPI'

const useAuthor = (id) => {
	return useQuery(['author', id], () => BooksAPI.getAuthor(id))
}

export default useAuthor