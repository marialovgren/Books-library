import { ReactQueryDevtools } from 'react-query/devtools'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Navigation from './components/Navigation'
import BooksPage from './pages/BooksPage'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import './assets/scss/App.scss'
import AuthorsPage from './pages/AuthorsPage'
import AuthorPage from './pages/AuthorPage'

function App() {
	return (
		<div id="App">
			<Navigation />

			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/books" element={<BooksPage />} />
				<Route path="/authors" element={<AuthorsPage />} />
				<Route path="/authors/:id" element={<AuthorPage />} />
				<Route path="*" element={<NotFound />} />
			</Routes>

			<ReactQueryDevtools position='bottom-right' />
			<ToastContainer />
		</div>
	)
}

export default App
