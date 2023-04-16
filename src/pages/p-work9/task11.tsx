import Form from 'react-bootstrap/Form'
import { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export function Task11 () {
const [selected, setSelected] = useState<string>('');
const [added, setAdded] = useState<string>('');
const [students, setStudents] = useState<string[]>(["Николай", "Роза", "Александр", "Мария", "Михаил", "Екатерина"]);
const [zachet, setZachet] = useState<string[]>([]);
const [nezachet, setNezachet] = useState<string[]>([]);

const setStudent = (val: 1 | 2) => {
  setStudents(students.filter((e) => e !== selected))
  val === 1  ? setZachet([...zachet, selected]) : setNezachet([...nezachet, selected])
}

const getStudent = (student: string, val?: 1 | 2) => {
  if(val) {
    val === 1  ? setZachet(zachet.filter((e) => e !== student)) : setNezachet(nezachet.filter((e) => e !== student))
  }
  setStudents([...students, student])
}



    return (
        <Form>
          <Row>
            <Col>
            <Card>
              <Card.Header>Студенты:</Card.Header>
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
            <Col>
            <Card>
              <Card.Header>Зачет:</Card.Header>
              <ListGroup variant="flush">
              {zachet.map((item) => {
                return (
                  <ListGroup.Item
                    eventKey={`itemSelect_${item}`}
                    key={`itemSelect${item}`}
                    onClick={() => getStudent(item, 1)}
                  >
                    {item}
                  </ListGroup.Item>
                );
              })}
              </ListGroup>
            </Card>
            </Col>
            <Col>
            <Card>
              <Card.Header>Не аттестован:</Card.Header>
              <ListGroup variant="flush">
              {nezachet.map((item) => {
                return (
                  <ListGroup.Item
                    eventKey={`itemSelect_${item}`}
                    key={`itemSelect${item}`}
                    onClick={() => getStudent(item, 2)}
                  >
                    {item}
                  </ListGroup.Item>
                );
              })}
              </ListGroup>
            </Card>
            </Col>
          </Row>
          <Row>
          <div className="mt-3">
            <Button variant="outline-success" onClick={() => setStudent(1)}>Зачет</Button>{' '}
            <Button variant="outline-danger" onClick={() => setStudent(2)}>Не аттестован</Button>{' '}
          </div>
          </Row>
          <Row className='mt-5' style={{ width: '18rem' }}>
            <Form.Control 
            type="string" 
            placeholder="Введите фамилию студента" 
            onChange={e => setAdded(e.target.value)}/>
            <Button variant="outline-primary" onClick={() => getStudent(added)} className='mt-3'>Добавить</Button>{' '}
          </Row>
        </Form>
    )
}