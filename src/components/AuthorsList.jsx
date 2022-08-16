import React from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import Row from 'react-bootstrap/Row'

const AuthorsList = ({ authors }) => {

    if (!authors.length) {
        return <p> Can´t find any authors</p>
    }

	return (
		<Card className="mb-3">
             {authors.map(author => ( 
                <Row key={author.id}>
                    <Card.Header
                        
                        as={Link} 
                        to={`/authors/${author.id}`}
                        >{author.name}
                    </Card.Header>
            </Row>
        ))}			
		</Card>
	)
}

export default AuthorsList
