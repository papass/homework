import Form from 'react-bootstrap/Form'
import { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export function Task14 () {
const [selected, setSelected] = useState<string>('');
const [name, setName] = useState<string>('');
const [lastName, setLastName] = useState<string>('');
const [students, setStudents] = useState<string[]>(["Николай", "Роза", "Александр", "Мария", "Михаил", "Екатерина"]);

const setStudent = (student: string) => {
  setStudents([...students, student])
}

const removeStudent = () => {
  setStudents(students.filter((e) => e !== selected))
}


    return (
        <Form>
          <Row>
            <Col>
            <Row className='mt-5' style={{ width: '18rem' }}>
            <Form.Control 
            className='mb-3'
            type="string" 
            placeholder="Фамилия" 
            onChange={e => setName(e.target.value)}/>
            <Form.Control 
            type="string" 
            placeholder="Имя" 
            onChange={e => setLastName(e.target.value)}/>
            <Button variant="outline-primary" onClick={() => setStudent(`${name} ${lastName}`)} className='mt-3'>Добавить</Button>{' '}
            <Button variant="outline-primary" onClick={removeStudent} className='mt-3'>Удалить</Button>{' '}
            <Button variant="outline-primary" onClick={() => setStudents([])} className='mt-3'>Очистить</Button>{' '}
          </Row>
            </Col>
            <Col>
            <Card>
              <Card.Header>Зачет:</Card.Header>
              <ListGroup variant="flush">
              {students.map((item) => {
                return (
                  <ListGroup.Item
                    eventKey={`itemSelect_${item}`}
                    key={`itemSelect${item}`}
                    onClick={() => setSelected(item)}
                  >
                    {item}
                  </ListGroup.Item>
                );
              })}
              </ListGroup>
            </Card>
            </Col>
          </Row>
        </Form>
    )
}