import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useCalc } from '../hooks/useCalc';
import { useMemo, useState } from 'react';

export function Task1 () {
    const {actions, calc} = useCalc();
    const [action, setAction] = useState<string>('');
    const [val1, setVal1] = useState<number>(0);
    const [val2, setVal2] = useState<number>(0);
    const res = useMemo(() => calc(action, val1, val2), [action, calc, val1, val2]);
    
    return (
        <Form>
            <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="formBasicNum">
                        <Form.Label>Первое число</Form.Label>
                        <Form.Control 
                        type="number" 
                        placeholder="Введите число" 
                        defaultValue={0}  
                        onChange={e => setVal1(+e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicNum">
                        <Form.Label>Второе число</Form.Label>
                        <Form.Control 
                        type="number" 
                        placeholder="Введите число"
                        defaultValue={0}  
                        onChange={e => setVal2(+e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicNum">
                        <Form.Label>Результат</Form.Label>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicNum">
                        <h2>{res}</h2>
                    </Form.Group>
                </Col>
                <Col>
                    {actions.map((type) => (
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
                </Col>
            </Row>
      </Form>
    )
}