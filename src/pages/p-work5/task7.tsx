import Form from 'react-bootstrap/Form'
import { useState, useMemo } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { MyTestModal } from '../../components/Modal';
import { AccordionEventKey } from 'react-bootstrap/esm/AccordionContext';
import { Button } from 'react-bootstrap';

export function Task7 () {
    const [action, setAction] = useState<string>('');
    const [eventKey, setEventKey] = useState<AccordionEventKey>('0');
    const [modalShow, setModalShow] = useState(false);
    const [results] = useState<[boolean, boolean, boolean]>([false, false, false]);

    useMemo(() => {
        switch (eventKey) {
            case '0':
                results[eventKey] = action === '3'
                break;
            case '1':
                results[eventKey] = action === '3'
                break;
            case '2':
                results[eventKey] = action === '3'
                break;    
        }
    }, [action, eventKey, results]);


    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicNum">
                <Accordion onSelect={(eventKey) => {setEventKey(eventKey)}}>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><div className="mx-2">Вопрос 1:</div>   <b>2 + 1 = ?</b></Accordion.Header>
                        <Accordion.Body>
                        {['3', '13', '33'].map((type) => (
                            <div key={`0-${type}`}>
                                <Form.Check 
                                type="radio"
                                name="group0"
                                id={`0-${type}`}
                                label={type}
                                value={type}
                                onChange={e => setAction(e.target.value)}
                                />
                            </div>
                        ))}
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header><div className="mx-2">Вопрос 1:</div>   <b>-4 + 7 = ?</b></Accordion.Header>
                        <Accordion.Body>
                        {['11', '3', '-3'].map((type) => (
                            <div key={`1-${type}`} className="mb-3">
                                <Form.Check 
                                type="radio"
                                name="group1"
                                id={`1-${type}`}
                                label={type}
                                value={type}
                                onChange={e => setAction(e.target.value)}
                                />
                            </div>
                        ))}
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                    <Accordion.Header><div className="mx-2">Вопрос 1:</div>   <b>4 - 1 = ?</b></Accordion.Header>
                        <Accordion.Body>
                        {['15', '7', '3'].map((type) => (
                            <div key={`2-${type}`} className="mb-3">
                                <Form.Check 
                                type="radio"
                                name="group2"
                                id={`2-${type}`}
                                label={type}
                                value={type}
                                onChange={e => setAction(e.target.value)}
                                />
                            </div>
                        ))}
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <Button className='mt-5'  onClick={() => setModalShow(true)}>Смотреть результаты</Button>
            </Form.Group>
            <MyTestModal
                show={modalShow}
                rez={results}
                onHide={() => setModalShow(false)}
            />
      </Form>
    )
}