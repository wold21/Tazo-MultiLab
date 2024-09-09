import { useEffect, useState, useRef } from 'react';
import { BlockLayer } from '../../components/blockLayer/blockLayer';
import { Wrapper, MainGameBox, GaugeContainer, ClipingLight, FrequencyBox, FrequencyText } from './hearingAbilityStyle';
import * as Tone from 'tone';
import { Dashboard } from '../../components/hearingAbility/dashboard/dashboard';
import { DashboardNeedle } from '../../components/hearingAbility/needle/needle';
import styled from 'styled-components';

const DescriptionBox = styled.div`
    position: absolute;
    top: 50vw
    left: 50vw;
    width: 50vw;
    z-index: 20;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 10px 0;
    font-family: 'Cafe24';
`;
const DescriptionText = styled.p`
    font-size: 1.5rem;
    color: #ffffff;
    margin-top: 20px;
    user-select: none;
    text-shadow: -4px 0px #222222, 0px 4px #222222, 0px -4px #222222, 4px 0px #222222;
`;
const DescriptionSubText = styled.p`
    font-size: 1rem;
    color: #ffffff;
    margin-left: 20px;
    margin-top: 10px;
    text-shadow: -4px 0px #222222, 0px 4px #222222, 0px -4px #222222, 4px 0px #222222;
    user-select: none;
    line-height: 1.3rem;
`;

const StartButtonBox = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    margin-top: 30px;
`;
const StartButton = styled.button`
    width: 100px;
    height: 50px;
    background-color: #ffffff;
    color: #ffffff;
    text-shadow: -2px 0px #222222, 0px 2px #222222, 0px -2px #222222, 2px 0px #222222;
    border-radius: 10px;
    font-size: 1rem;
    font-family: 'Cafe24';
    cursor: pointer;
    transition: scale 0.3s;
    $:hover {
        scale: 1.05;
    }
`;

interface dashboardProps {
    minValue: number;
    maxValue: number;
    numberOfTicks: number;
}

export const HearingAbility = () => {
    const [synth, setSynth] = useState<Tone.Synth | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [intervalRef, setintervalRef] = useState<number | null>(null);

    const [frequency, setFrequency] = useState<number | string>(8);
    const [angle, setAngle] = useState<string>('-90');
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
        const angle = ((maxOutput - minOutput) * (Number(freq) - minInput)) / (maxInput - minInput) + minOutput;
        return angle.toFixed(0).toString();
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
                    newSynth.triggerRelease();

                    setIsPlaying(false);
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
                <GaugeContainer>
                    <DashboardNeedle angle={angle} />
                    <Dashboard
                        minValue={dashboardProps.minValue}
                        maxValue={dashboardProps.maxValue}
                        numberOfTicks={dashboardProps.numberOfTicks}
                    />
                    <ClipingLight />
                    <FrequencyBox>
                        <FrequencyText>{frequency}</FrequencyText>
                        <FrequencyText>Hz</FrequencyText>
                    </FrequencyBox>
                </GaugeContainer>
                <button onClick={playSineWave}>{isPlaying ? 'Stop' : 'Play'}</button>
            </MainGameBox>
            <BlockLayer />
            <DescriptionBox>
                <DescriptionText>1. 테스트 시작하기</DescriptionText>
                <DescriptionSubText>
                    애플리케이션 화면에서 "Play" 버튼을 눌러주세요. 버튼을 클릭하면, 주파수가 점차적으로 상승하며 소리가
                    재생됩니다.
                </DescriptionSubText>
                <DescriptionText>2.주파수 상승 확인</DescriptionText>
                <DescriptionSubText>
                    소리가 점점 더 높은 주파수로 변하며, 주파수는 화면에 실시간으로 표시됩니다. 주파수가 상승하면서
                    소리의 높이가 증가합니다.
                </DescriptionSubText>
                <DescriptionText>3. 테스트 종료하기</DescriptionText>
                <DescriptionSubText>
                    소리가 더 이상 들리지 않는 지점을 확인하세요. "Stop" 버튼을 눌러 테스트를 종료합니다. 테스트가
                    완료되며, 현재까지 들은 최대 주파수가 기록됩니다.
                </DescriptionSubText>
                <DescriptionText>🔴 주의사항</DescriptionText>
                <DescriptionSubText>
                    소리가 너무 크거나 불편할 경우, 테스트를 중단하고 안전한 주파수 범위에서 다시 시도하세요.
                </DescriptionSubText>
                <DescriptionSubText>
                    이 테스트는 귀의 청력 상태를 확인하기 위한 목적으로만 사용되며, 정확한 청력 검사는 전문 기관에서
                    받는 것이 좋습니다.
                </DescriptionSubText>
                <StartButtonBox>
                    <StartButton>시작하기</StartButton>
                </StartButtonBox>
            </DescriptionBox>
        </Wrapper>
    );
};
