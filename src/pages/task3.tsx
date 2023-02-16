import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useCalc } from '../hooks/useCalc';
import { useMemo, useState } from 'react';

export function Task3 () {
    const [action, setAction] = useState<string>('');
    const [val, setVal] = useState<string>('0');
    const res = useMemo(() => action === 'Восьмеричная' ? Number(val).toString(8) : Number(val).toString(2), [action, val]);
    
    return (
        <Form>
            <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="formBasicNum">
                        <Form.Label>Первое число</Form.Label>
                        <Form.Control 
                        type="string" 
                        placeholder="Введите число" 
                        defaultValue={'0'}  
                        onChange={e => setVal(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicNum">
                        {['Двоичная', 'Восьмеричная'].map((type) => (
                        <div key={`default-${type}`} className="mb-3">
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
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicNum">
                        <Form.Label>Результат</Form.Label>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicNum">
                        <h2>{res}</h2>
                    </Form.Group>
                </Col>
                <Col>
                </Col>
            </Row>
      </Form>
    )
}