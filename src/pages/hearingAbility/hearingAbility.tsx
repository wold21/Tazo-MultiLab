import { useEffect, useState } from 'react';
// import { BlockLayer } from '../../component/blockLayer/blockLayer';
import { Wrapper, MainGameBox } from './hearingAbilityStyle';
import * as Tone from 'tone';
import { Dashboard } from '../../components/hearingAbility/dashboard/dashboard';
import styled from 'styled-components';

const GaugeContainer = styled.div`
    position: relative;
    width: 45vw;
    height: 25vw;
    background: linear-gradient(to bottom right, rgba(34, 34, 34, 0.4) 1%, transparent 30%),
        linear-gradient(to bottom left, rgba(34, 34, 34, 0.4) 1%, transparent 30%), #ffa500;
    border-radius: 10px;
    border: 5px solid #ffffff;
    display: flex;
    justify-content: center;
    align-items: flex-end;
`;

const Needle = styled.div<{ $rotate: string }>`
    position: absolute;
    width: 0;
    height: 0;
    bottom: -43px;
    transform: translateY(-50%) rotate(${(props) => props.$rotate}deg);
    transform-origin: bottom;
    border-left: 3px solid transparent;
    border-right: 3px solid transparent;
    border-bottom: 180px solid #222222;
`;
const FrequencyBox = styled.div`
    position: absolute;
    bottom: 10vh;
    width: 10vw;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const FrequencyText = styled.span`
    font-size: 1rem;
    color: #ffffff;
    text-shadow: -2px 0px #222222, 0px 2px #222222, 0px -2px #222222, 2px 0px #222222;
`;

interface dashboardProps {
    minValue: number;
    maxValue: number;
    numberOfTicks: number;
}

export const HearingAbility = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [frequency, setFrequency] = useState<number | string>(8);
    const [angle, setAngle] = useState<number | string>(-90);
    const [dashboardProps] = useState<dashboardProps>({
        minValue: 8,
        maxValue: 22400,
        numberOfTicks: 10,
    });

    const calculateAngle = (freq: string) => {
        const minInput = 8;
        const maxInput = 22400;
        const minOutput = -90;
        const maxOutput = 90;
        console.log(freq);
        return ((maxOutput - minOutput) * (Number(freq) - minInput)) / (maxInput - minInput) + minOutput;
    };

    const playSineWave = () => {
        if (!isPlaying) {
            const synth = new Tone.Synth({
                oscillator: {
                    type: 'sine',
                },
            }).toDestination();
            synth.triggerAttack(frequency);

            // 시작 주파수는 8Hz, 목표 주파수는 22400Hz
            const startFrequency = 8;
            const endFrequency = 22400;
            const duration = 25; // 25초 동안
            const startTime = Tone.now(); // 시작 시간

            // 주파수 변화량 계산
            const frequencyChangePerSecond = (endFrequency - startFrequency) / duration;
            const interval = setInterval(() => {
                const currentTime = Tone.now();
                const elapsedTime = currentTime - startTime;

                const newFrequency = startFrequency + frequencyChangePerSecond * elapsedTime;

                if (newFrequency >= endFrequency) {
                    synth.triggerRelease();
                    clearInterval(interval);
                    setIsPlaying(false);
                }

                synth.frequency.value = newFrequency;

                const temp = Number(synth.frequency.value).toFixed(0).toString();

                setAngle(calculateAngle(temp));
                setFrequency(temp);
            }, 50);

            setIsPlaying(true);
        }
    };

    return (
        <Wrapper>
            <MainGameBox>
                <GaugeContainer>
                    <Needle $rotate={angle.toString()} />
                    <Dashboard
                        minValue={dashboardProps.minValue}
                        maxValue={dashboardProps.maxValue}
                        numberOfTicks={dashboardProps.numberOfTicks}
                    />
                    <FrequencyBox>
                        <FrequencyText>{frequency} Hz</FrequencyText>
                    </FrequencyBox>
                </GaugeContainer>
                <button onClick={playSineWave}>{isPlaying ? 'Stop' : 'Play'}</button>
            </MainGameBox>
        </Wrapper>
    );
};
