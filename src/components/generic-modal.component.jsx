import {Modal} from "react-bootstrap";


const GenericModalComponent = ({ title, children, onClose, show }) => {
    return (
        <Modal show={show} onHide={onClose} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center">
                {children}
            </Modal.Body>
            {/*<Modal.Footer>*/}
            {/*    <Button variant="secondary">Close</Button>*/}
            {/*    <Button variant="primary">Save changes</Button>*/}
            {/*</Modal.Footer>*/}
        </Modal>
    )
}

export default GenericModalComponent;