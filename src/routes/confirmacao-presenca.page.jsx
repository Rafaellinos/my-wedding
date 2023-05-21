import {Alert, Button, Container, Form} from "react-bootstrap";
import InputMask from 'react-input-mask';
import React, {useState} from "react";
import GenericModalComponent from "../components/generic-modal.component";
import LoadingComponent from "../components/loading-component";

const ConfirmacaoPresencaPage = () => {

    const formInitialState = {
        nome: '',
        phone: '',
        guests: '',
        email: '',
        quantity_adults: 0,
        quantity_children: 0,
    }
    let [loading, setLoading] = useState(false);

    const [formState, setFormState] = useState(formInitialState);
    const [showAlert, setShowAlert] = useState('d-none');
    const [alertMessage, setAlertMessage] = useState('');
    const [modalHandler, setModalHandler] = useState(false);
    const handleClose = () => setModalHandler(false);
    const handleShow = () => setModalHandler(true);

    const handleFormChange = (event, key) => {
        event.preventDefault();
        setFormState({...formState, [key]: event.target.value})
        console.log(formState);
    }

    const handleSubmit = async (event) => {
        setShowAlert('d-none');
        event.preventDefault();
        console.log(formState);
        setLoading(true);
        try {
            let res = await fetch(process.env.REACT_APP_FORM_URL || '/', {
                method: 'POST',
                body: JSON.stringify(formState),
            });
            await res.json();
            if (res.status === 200) {
                setLoading(false);
                setFormState(formInitialState);
                console.log("Formulário enviado com sucesso!");
                handleShow();
            } else {
                setLoading(false);
                console.error(res);
                setShowAlert('d-block');
                setAlertMessage('Erro ao enviar formulário! Tente novamente mais tarde.');
            }

        } catch (error) {
            setLoading(false);
            console.log(error);
            setShowAlert('d-block');
            setAlertMessage('Erro ao enviar formulário! Tente novamente mais tarde.');
        }
    }

    return (
        <Container className="d-flex justify-content-center">
            <LoadingComponent loading={loading}/>
            <GenericModalComponent
                title="Confirmação de Presença"
                onClose={handleClose}
                children={
                    <h2>Obrigado por confirmar sua presença!</h2>
                }
                show={modalHandler}
            />
            <div className="form-confirmar-presenca my-3 main-title text-center text-uppercase">
                <Alert key='danger' variant='danger' className={showAlert}>
                    {alertMessage}
                </Alert>
                <h3 className={"my-2"}>confirmação de presença</h3>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="my-2">
                        <Form.Label>Nome Completo</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Digite seu nome completo"
                            value={formState.nome}
                            onChange={(event) => handleFormChange(event, 'nome')}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="my-2">
                        <Form.Label>Quantidade de Adultos</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="0"
                            value={formState.quantity_adults}
                            onChange={(event) => handleFormChange(event, 'quantity_adults')}
                            min={0}
                            max={10}
                        />
                    </Form.Group>
                    <Form.Group className="my-2">
                        <Form.Label>Quantidade de Crianças</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="0"
                            value={formState.quantity_children}
                            onChange={(event) => handleFormChange(event, 'quantity_children')}
                            min={0}
                            max={10}
                        />
                    </Form.Group>
                    <Form.Group className="my-2">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="email@email.com"
                            value={formState.email}
                            onChange={(event) => handleFormChange(event, 'email')}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="my-2">
                        <Form.Label>Telefone</Form.Label>
                        <InputMask
                            mask="(99) 99999-9999"
                            maskChar={null}
                            className="form-control"
                            placeholder="(00) 00000-0000"
                            value={formState.phone}
                            onChange={(event) => handleFormChange(event, 'phone')}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="my-2">
                        <Form.Label>Nome dos Acompanhantes</Form.Label>
                        <textarea
                            className="form-control"
                            rows="3"
                            placeholder="Nome 1, Nome 2..."
                            value={formState.guests}
                            onChange={(event) => handleFormChange(event, 'guests')}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="mt-2">
                        Confirmar Presença
                    </Button>
                </Form>
            </div>
        </Container>
    )
}

export default ConfirmacaoPresencaPage;