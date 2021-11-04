import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import styles from '../styles/Temporizador.module.css'

interface TemporizadorProps {
    key: number
    duracao: number
    tempoEsgotado: () => void
}

export default function Temporizador(props: TemporizadorProps){
    return (
        <div className={styles.temporizador}>
            <CountdownCircleTimer
                size={120}
                duration={props.duracao}
                isPlaying
                onComplete={props.tempoEsgotado}
                colors={[
                    ['#BCE596', 0.33],
                    ['#F7B801', 0.33],
                    ['#ED827A', 0.33]
                ]}
            >
                {({ remainingTime }) => remainingTime}
            </CountdownCircleTimer>
        </div>
    )
}