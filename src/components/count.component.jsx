import {Fragment, useState, useEffect} from "react";
import {Container} from "react-bootstrap";


const CountComponent = () => {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);
    const [days, setDays] = useState(0);

    useEffect(() => {
        const theDay = new Date("2023-10-21T18:30:00");
        const interval = setInterval(() => {
            const today = new Date();
            const diff = Math.abs(theDay - today);
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
            <Container className="my-2 main-title" id="contagem-regressiga">
                <div className="text-center my-3">
                    {/*<h1 className={"text-black"}>Contagem Regressiva</h1>*/}
                    <div id="countdown">
                        <ul>
                            <li><span id="days">{days}</span><div>Dias</div></li>
                            <li><span id="hours">{hours}</span><div>Horas</div></li>
                            <li><span id="minutes">{minutes}</span><div>Minutos</div></li>
                            <li><span id="seconds">{seconds}</span><div>Segundos</div></li>
                        </ul>
                    </div>
                </div>
            </Container>
        </Fragment>
    )
}

export default CountComponent