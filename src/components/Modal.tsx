import { Image, Modal, Button } from 'react-bootstrap';

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
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}