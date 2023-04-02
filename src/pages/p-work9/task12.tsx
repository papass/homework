import { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert, ListGroup } from 'react-bootstrap';

export function Task12 () {
  type Operator = {
    name: string;
    value: string;
  };

  const [selectedOperator, setSelectedOperator] = useState<string>('');
  const [selectedName, setSelectedName] = useState<string>('');
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [alertVariant, setAlertVariant] = useState<string>('');
  const [operators, setOperators] = useState<Operator[]>(
    [
      { name: 'Точное равенство', value: '===' },
      { name: 'Не равно', value: '!==' },
      { name: 'Меньше или равно', value: '<=' },
      { name: 'Больше или равно', value: '>=' },
      { name: 'Меньше', value: '<' },
      { name: 'Больше', value: '>' },
    ]
  )

  const handleOperatorClick = (value: string) => {
    handleAlertDismiss();
    setSelectedOperator(value);
  };

  const handleNameClick = (value: string) => {
    if (value === operators.find(operator => operator.value === selectedOperator)?.name) {
      setSelectedOperator('');
      setShowAlert(true);
      setAlertVariant('success');
      setOperators(operators.filter(e => e.name !== value));
      
    } else {
      setShowAlert(true);
      setAlertVariant('danger');
    }
  };

  const handleAlertDismiss = () => {
    setShowAlert(false);
  };

  return (
    <>
    <Row>
    <h1>Тест на знание операторов</h1>
      <Col>
        <ListGroup>
          <ListGroup.Item active>Выберите оператор</ListGroup.Item>
          {operators.map(operator => (
            <ListGroup.Item
              key={operator.value}
              action
              active={operator.value === selectedOperator}
              disabled={operator.value !== selectedOperator && !!selectedName}
              onClick={() => handleOperatorClick(operator.value)}
            >
              {operator.value}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Col>
      <Col>
        <ListGroup>
          <ListGroup.Item active>Выберите название</ListGroup.Item>
          {operators
              .map(operator => (
                <ListGroup.Item
                  key={operator.value}
                  action
                  active={operator.name === selectedName}
                  onClick={() => handleNameClick(operator.name)}
                >
                  {operator.name}
                </ListGroup.Item>
              ))}
        </ListGroup>
      </Col>
    </Row>
    <Row>
      <Col className='mt-3'>
        {showAlert && (
          <Alert variant={alertVariant} onClose={handleAlertDismiss} dismissible>
            {alertVariant === 'success' ? 'Правильно!' : 'Ошибка!'}
          </Alert>
        )}
        {operators.length === 0 && <p>Вы ответили на все вопросы правильно!</p>}
      </Col>
    </Row>
    </>
  );
}