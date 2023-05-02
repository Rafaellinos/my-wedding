import {Fragment} from "react";
import {Container} from "react-bootstrap";


const ManualConvidadoComponent = () => {
    return (
        <Fragment>
            <Container className="">
                <h2 className="text-uppercase">Dress Code</h2>
                <section>
                    <Container className="m-2 rules-section">
                        <ul className="text-center list-unstyled">
                            <li>Azul e branco, de preferência</li>
                            <li>Branco é exclusivo da noiva</li>
                        </ul>
                    </Container>
                </section>
                <h2 className="text-uppercase">Na Cerimônia</h2>
                <section>
                    <Container className="m-2 rules-section">
                        <h3>1. Convidados</h3>
                        <p align="justify">
                            Chegar sozinha ou sozinho em uma festa de casamento não deve ser um problema para ninguém, mas sabemos que algumas pessoas se sentem deslocadas ou até com vergonha. Para as amigas e os amigos solteiros é recomendável perguntar se existe a intenção de levar alguém e averiguar se confirmam a presença do “plus 1”. Primeiro porque talvez vocês desejem uma festa mais íntima, e também porque qualquer pessoa a mais significa um aumento no orçamento da festa.
                        </p>
                        <h3>2. Celulares</h3>
                        <p align="justify">
                            Os telefones celulares podem se tornar o grande inimigo da festa para os noivos. Já pensou alguém que não para de tirar fotos e publicar nas redes sociais? Sem falar no whatsapp e as mensagens trocadas durante a cerimônia. Nesses casos, vocês podem pedir ao cerimonislista (ou a alguma pessoa mais próxima) que avise claramente aos convidados sobre o uso moderado dos aparelhos eletrônicos. O melhor seria avisar a todos os convidados quando entrarem no local da cerimônia sobre essa “gentileza”, em um sinal de respeito ao casal.
                        </p>
                        <h3>3. Crianças</h3>
                        <p>
                            Os papais e mamães merecem ter seus momentos de diversão, e para que possam participar da festa como todos os outros convidados precisam ter certeza que seus “pimpolhos” também terão conforto. As crianças precisam de um espaço para elas; por mais educadas que sejam, não se pode exigir que sigam as mesmas regras de etiqueta dos adultos. Se vocês têm muitos convidados mirins pensem em um cantinho para eles, o que evitará um estresse para pais, filhos, e também para vocês.
                        </p>
                        <h3>4. Musica</h3>
                        <p>
                            Os noivos são os encarregados da lista de músicas, já que vocês dois são os grandes protagonistas. As canções devem ser escolhidas para agradá-los, mas também para que sejam animadas e agradáveis para os convidados. Ainda assim, ninguém deve ir até o DJ e mudar a playlist preparada, ou pior, pedir a vocês que se adaptem a outros estilos que não faziam parte da lista. O bom convidado irá dançar e curtir o som que a organização colocar.
                        </p>
                    </Container>
                </section>
            </Container>
        </Fragment>
    )
}

export default ManualConvidadoComponent;