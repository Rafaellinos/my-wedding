import {Button, Container, Form} from "react-bootstrap";
import InputMask from 'react-input-mask';


const ConfirmacaoPresencaPage = () => {
    return (
        <Container className="d-flex justify-content-center">
            <div className="form-confirmar-presenca my-3">
                <Form>
                    <Form.Group className="my-2">
                        <Form.Label>Nome Completo</Form.Label>
                        <Form.Control type="text" placeholder="Digite seu nome completo"/>
                    </Form.Group>
                    <Form.Group className="my-2">
                        <Form.Label>Quantidade de Adultos</Form.Label>
                        <Form.Control type="number" placeholder="0"/>
                    </Form.Group>
                    <Form.Group className="my-2">
                        <Form.Label>Quantidade de Crianças</Form.Label>
                        <Form.Control type="number" placeholder="0"/>
                    </Form.Group>
                    <Form.Group className="my-2">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="email@email.com"/>
                    </Form.Group>
                    <Form.Group className="my-2">
                        <Form.Label>Telefone</Form.Label>
                        <InputMask
                            mask="(99) 99999-9999"
                            maskChar={null}
                            className="form-control"
                            placeholder="(00) 00000-0000"
                        />
                    </Form.Group>
                    <Form.Group className="my-2">
                        <Form.Label>Nome dos Acompanhantes</Form.Label>
                        <textarea className="form-control" rows="3" placeholder="Nome 1, Nome 2..."/>
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