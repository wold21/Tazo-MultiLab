import { useEffect, useState } from 'react';
// import { BlockLayer } from '../../component/blockLayer/blockLayer';
import { Wrapper, MainGameBox } from './hearingAbilityStyle';
import * as Tone from 'tone';
import styled from 'styled-components';

const GaugeContainer = styled.div`
    position: relative;
    width: 500px;
    height: 400px;
    background-color: #fff;
    border-radius: 400px 400px 0 0;
    border: 5px solid #ddd;
    border-bottom: 0;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: flex-end;
`;

const Needle = styled.div<{ $rotate: string }>`
    position: absolute;
    width: 0;
    height: 0;
    top: 50%;
    transform: translateY(-50%) rotate(${(props) => props.$rotate}deg);
    transform-origin: bottom;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 100px solid red;
`;

const Label = styled.div`
    position: absolute;
    top: 50px;
    font-size: 16px;
    color: #333;
`;

const TickMark = styled.div`
    position: absolute;
    width: 2px;
    height: 15px;
    background-color: #333;
    top: 0;
    left: 50%;
    transform-origin: bottom;
`;

export const HearingAbility = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [frequency, setFrequency] = useState<number | string>(8);
    const [angle, setAngle] = useState<number | string>(-90);

    const minValue = 8;
    const maxValue = 22400;
    const numberOfTicks = 12;
    const rangePerTick = (maxValue - minValue) / (numberOfTicks - 1);
    const TickLabels = Array.from({ length: numberOfTicks }).map((_, index) => {
        const angle = (index / (numberOfTicks - 1)) * 180 - 90; // 180도를 반원에 나누고 -90도로 회전
        const label = Math.round(minValue + index * rangePerTick); // 각 눈금의 값을 계산

        return (
            <div
                key={index}
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '500px',
                    transform: `rotate(${angle}deg)`,
                    transformOrigin: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    top: '0',
                    left: '0',
                    // marginTop: '-10px', // 숫자 위치 조정
                    // marginLeft: '10px', // 숫자 위치 조정
                }}
            >
                <TickMark />
                <span style={{ position: 'absolute', top: '20px', fontSize: '8px', color: '#333' }}>{label}</span>
            </div>
        );
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
                // 주파수 증가: 일정한 속도로 증가시키기 위해 시간에 따른 계산
                const currentTime = Tone.now(); // 현재 시간
                const elapsedTime = currentTime - startTime; // 경과 시간

                const newFrequency = startFrequency + frequencyChangePerSecond * elapsedTime;

                if (newFrequency >= endFrequency) {
                    clearInterval(interval); // 목표 주파수에 도달하면 타이머 종료
                }

                synth.frequency.value = newFrequency;

                const temp = Number(synth.frequency.value).toFixed(0).toString();
                setAngle(calculateAngle(temp));
                setFrequency(temp);
            }, 50);

            setIsPlaying(true);

            setTimeout(() => {
                synth.triggerRelease();
                clearInterval(interval);
                setIsPlaying(false);
            }, duration * 1000);
        }
    };

    useEffect(() => {
        // playSineWave();
    }, []);
    return (
        <Wrapper>
            <MainGameBox>
                <GaugeContainer>
                    <Needle $rotate={angle.toString()} />
                    {TickLabels}
                    <Label>Frequency</Label>
                </GaugeContainer>
            </MainGameBox>
        </Wrapper>
    );
};
