import {Fragment, useState, useEffect} from "react";
import {Container} from "react-bootstrap";


const CountComponent = () => {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);
    const [days, setDays] = useState(0);

    useEffect(() => {
        const theDay = new Date("2023-10-21T18:00:00");
        const interval = setInterval(() => {
            const today = new Date();
            const diff = theDay - today;
            const days = Math.floor(diff / 1000 / 60 / 60 / 24);
            const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
            const minutes = Math.floor(diff / 1000 / 60) % 60;
            const seconds = Math.floor(diff / 1000) % 60;

            setDays(days);
            setHours(hours);
            setMinutes(minutes);
            setSeconds(seconds);
        });
        return () => clearInterval(interval);
    }, [])

    return (
        <Fragment>
            <Container className="my-5" id="contagem-regressiga">
                <div className="text-center my-3">
                    <h1>Contagem Regressiva</h1>
                    <div id="countdown">
                        <ul>
                            <li><span id="days">{days}</span>Dias</li>
                            <li><span id="hours">{hours}</span>Horas</li>
                            <li><span id="minutes">{minutes}</span>Minutos</li>
                            <li><span id="seconds">{seconds}</span>Segundos</li>
                        </ul>
                    </div>
                </div>
            </Container>
        </Fragment>
    )
}

export default CountComponent