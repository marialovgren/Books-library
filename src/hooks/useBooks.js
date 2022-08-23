// denna hooken gör själva queryn som hämtar böckerna. Syftet är att bara ha en query-nyckel för att bara göra en request. 

import { useQuery } from 'react-query'
import BooksAPI from '../services/BooksAPI'

const useBooks = () => {
	return useQuery('books', BooksAPI.getBooks)
}

export default useBooks