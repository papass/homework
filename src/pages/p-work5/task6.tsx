import Form from 'react-bootstrap/Form'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export function Task6 () {
    const [action, setAction] = useState<string>('');

    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicNum">
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Выбери покемона</Card.Title>
                        <Card.Text>
                        {['Слоупок', 'Бидрил', 'Джигглипуф'].map((type) => (
                            <div key={`default-${type}`}>
                                <Form.Check 
                                type="radio"
                                name="group1"
                                id={`default-${type}`}
                                label={type}
                                value={type}
                                onChange={e => setAction(e.target.value)}
                                />
                            </div>
                        ))}
                        </Card.Text>
                        <Button variant="primary"> {action && action + ',' } я выбираю тебя</Button>
                    </Card.Body>
                </Card>
            </Form.Group>
      </Form>
    )
}