import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useMemo, useState,   useRef, createRef} from 'react';
import './task2.css'

export function Task2 () {
    const [action, setAction] = useState<string>('');
    const elements = ["red", "yellow", "green"]
    const elementsRef = useRef<any>(elements.map(() => createRef()));

    useMemo(() => {
        const indexOfElement = elements.indexOf(action);
        elementsRef.current.forEach((element: any, index: number) => {
            if (element && element.current) {
                if (element && (index === indexOfElement)) {
                    element.current.classList.add('color')
                } else {
                    element.current.classList.remove('color')
                }
            }
        });
    } , [action, elements]);
    
    return (
        <Form>
            <Row>
            <Col>
                    {elements.map((type, index) => (
                    <div key={`default-${type}`} className="mb-3 display-6">
                        <Form.Check 
                        type="radio"
                        key={index}
                        name="group1"
                        id={`default-${type}`}
                        label={type}
                        value={type}
                        onChange={e => setAction(e.target.value)}
                        />
                    </div>
                    ))}
                </Col>
                <Col>
                {elements.map((item, index) => (
                    <Form.Group controlId="form">
                        <div className={`light ${item}`} ref={elementsRef.current[index]} key={index}></div>
                    </Form.Group>
                ))}
                </Col>
            </Row>
      </Form>
    )
}