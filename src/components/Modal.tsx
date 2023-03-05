import { Image, Modal } from 'react-bootstrap';

export function MyVerticallyCenteredModal(props: any) {
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.action}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Image fluid src={props.getImage}></Image>
      </Modal.Body>
    </Modal>
  );
}

export function MyTestModal(props: any) {
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Ваши результаты
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      {props.rez
        .map((type: boolean, index: number) => (
            <div key={index} className="mb-3">
              Вопрос №{index + 1}: {type ? 'Верно!' : 'Неверно!'}
            </div>
      ))}
      </Modal.Body>
    </Modal>
  );
}