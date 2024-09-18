import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Tone from 'tone';
import { Dashboard } from '../../components/hearingAbility/dashboard/dashboard';
import { Start } from '../../components/hearingAbility/start/start';
import { Retry } from '../../components/hearingAbility/retry/retry';
import { SubDescription } from '../../components/hearingAbility/subDescription/subDescription';
import {
    Wrapper,
    MainGameBox,
    GaugeCover,
    GaugeContainer,
    FrequencyBox,
    FrequencyText,
    StopContainer,
    StopButton,
} from './hearingAbilityStyle';

interface dashboardProps {
    minValue: number;
    maxValue: number;
    numberOfTicks: number;
}

export const HearingAbility = () => {
    const navigate = useNavigate();
    const [synth, setSynth] = useState<Tone.Synth | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isNoticeShow, setIsNoticeShow] = useState(true);
    const [intervalRef, setintervalRef] = useState<number | null>(null);
    const [isRetry, setIsRetry] = useState(false);

    const [frequency, setFrequency] = useState<number | string>(8);
    const [angle, setAngle] = useState<string>('-90');
    const [dashboardProps] = useState<dashboardProps>({
        minValue: 8,
        maxValue: 22400,
        numberOfTicks: 10,
    });

    const handleResultPage = () => {
        setIsPlaying(false);
        if (intervalRef) {
            window.clearInterval(intervalRef);
            synth?.triggerRelease();
            setSynth(null);
            navigate('result', { state: { frequency: frequency } });
        }
    };

    const handleRetry = () => {
        setIsRetry(false);
        playSineWave();
    };

    const calculateAngle = (freq: string) => {
        const minInput = 8;
        const maxInput = 22400;
        const minOutput = -90;
        const maxOutput = 90;
        const angle = ((maxOutput - minOutput) * (Number(freq) - minInput)) / (maxInput - minInput) + minOutput;
        return angle.toFixed(0).toString();
    };

    const handleStart = () => {
        setIsNoticeShow(false);
        playSineWave();
    };

    const playSineWave = () => {
        if (synth && isPlaying) {
            setIsPlaying(false);
            if (intervalRef) {
                window.clearInterval(intervalRef);
                synth.triggerRelease();
                setSynth(null);
            }
        } else {
            const newSynth = new Tone.Synth({
                oscillator: {
                    type: 'sine',
                },
                envelope: {
                    attack: 0.1,
                    decay: 0.1,
                    sustain: 0.1,
                    release: 0.1,
                },
            }).toDestination();

            setSynth(newSynth);
            newSynth.triggerAttack(frequency);

            const startFrequency = 8;
            const endFrequency = 22400;
            const duration = 25;
            const startTime = Tone.now();
            const frequencyChangePerSecond = (endFrequency - startFrequency) / duration;
            const intervalRef = window.setInterval(() => {
                const currentTime = Tone.now();
                const elapsedTime = currentTime - startTime;

                const newFrequency = startFrequency + frequencyChangePerSecond * elapsedTime;

                if (newFrequency >= endFrequency) {
                    setIsPlaying(false);
                    if (intervalRef) {
                        window.clearInterval(intervalRef);
                        newSynth.triggerRelease();
                        setSynth(null);
                        setIsRetry(true);
                    }
                }

                newSynth.frequency.value = newFrequency;

                const temp = newSynth.frequency.value.toFixed(0).toString();
                setAngle(calculateAngle(temp));
                setFrequency(temp);
            }, 50);
            setintervalRef(intervalRef);

            setIsPlaying(true);
        }
    };

    useEffect(() => {}, [synth, intervalRef]);

    return (
        <Wrapper>
            <MainGameBox>
                <GaugeCover>
                    <GaugeContainer>
                        <Dashboard
                            $minValue={dashboardProps.minValue}
                            $maxValue={dashboardProps.maxValue}
                            $numberOfTicks={dashboardProps.numberOfTicks}
                            $angle={angle}
                        />
                        <FrequencyBox>
                            <FrequencyText>{frequency}</FrequencyText>
                            <FrequencyText>Hz</FrequencyText>
                        </FrequencyBox>
                    </GaugeContainer>
                    <StopContainer>
                        <StopButton onClick={handleResultPage}>정지!</StopButton>
                    </StopContainer>
                </GaugeCover>
            </MainGameBox>
            <SubDescription />
            {isNoticeShow && <Start handleStart={handleStart} />}
            {isRetry && <Retry handleRetry={handleRetry} />}
        </Wrapper>
    );
};
