import { useEffect, useState, useRef } from 'react';
import { BlockLayer } from '../../components/blockLayer/blockLayer';
import {
    Wrapper,
    MainGameBox,
    GaugeContainer,
    FrequencyBox,
    FrequencyText,
    DescriptionBox,
    DescriptionText,
    DescriptionSubText,
    StartButtonBox,
    StartButton,
} from './hearingAbilityStyle';
import * as Tone from 'tone';
import { Dashboard } from '../../components/hearingAbility/dashboard/dashboard';
import styled from 'styled-components';

const SubWrapper = styled.div`
    width: 50vw;
    margin-bottom: 50px;
    padding: 20px;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.1);
    p {
        line-height: 1.5;
        color: #ffffff;
        text-shadow: -3px 0px #000000, 0px 3px #000000, 0px -3px #000000, 3px 0px #000000;
    }
`;
const SubDesctiptioBold = styled.p`
    margin-top: 20px;
    font-size: 1.2rem;
`;
const SubDesctiptioSub = styled.p`
    margin-top: 10px;
    margin-left: 10px;
    font-size: 1.1rem;
`;
const SubDesctiption = styled.p`
    margin-left: 25px;
    font-size: 1rem;
`;

interface dashboardProps {
    minValue: number;
    maxValue: number;
    numberOfTicks: number;
}

export const HearingAbility = () => {
    const [synth, setSynth] = useState<Tone.Synth | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isNoticeShow, setIsNoticeShow] = useState(false);
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
            </MainGameBox>
            <SubWrapper>
                <SubDesctiptioBold>청각</SubDesctiptioBold>
                <SubDesctiption>
                    후각, 미각, 시각, 촉감과 더불어 청각은 살아가는데 꼭 필요한 감각 중에 하나이며 귀를 통해 소리를
                    인식하는 감각으로, 우리가 세상을 이해하고 소통하는 데 중요한 역할을 합니다. 소리의 진동을 감지해
                    신경 신호로 변환한 후, 뇌가 이를 해석함으로써 소리를 인식하게 되는 복잡한 과정을 거칩니다.
                </SubDesctiption>
                <SubDesctiptioBold>난청</SubDesctiptioBold>
                <SubDesctiption>
                    산업혁명 이후, 남녀노소를 불문하고 심지어 동물들까지도 소음이 가득한 환경에 노출되기 시작했습니다.
                    특히 스마트폰 보급과 함께 이어폰 및 소형 전자기기의 사용이 증가하면서, 청년층에서는 소음성 난청이,
                    노년층에서는 노인성 난청의 발생 확률이 급격히 높아지고 있습니다.
                </SubDesctiption>
                <SubDesctiption>
                    난청은 서서히 진행되기 때문에 알아차리기 어렵습니다. 하지만 생활 습관을 조금만 개선하면 난청을
                    늦추거나 쉽게 예방할 수 있습니다. 다음과 같은 방법들이 도움이 됩니다
                </SubDesctiption>
                <SubDesctiptioBold>예방방법</SubDesctiptioBold>
                <SubDesctiptioSub>1. 소음피하기</SubDesctiptioSub>
                <SubDesctiption>
                    장시간 소음에 노출되면 청력이 손상될 수 있습니다. 이어폰이나 헤드폰을 사용할 때는 소리를 너무 크게
                    틀지 않도록 하고, 시끄러운 환경에서는 소음 차단 이어폰이나 귀마개를 사용하는 것을 추천드립니다. 85dB
                    이상의 소음에 지속적으로 노출되면 청력 손실 위험이 커집니다.
                </SubDesctiption>
                <SubDesctiptioSub>2. 적절한 이어폰 및 헤드폰 사용</SubDesctiptioSub>
                <SubDesctiption>
                    이어폰이나 헤드폰을 장시간 사용하면 귀에 압박이 가해질 수 있습니다. 특히 소리를 크게 들으면 귀 속의
                    섬모 세포가 손상될 수 있기때문에 볼륨은 60% 이하로 설정하고, 1시간 사용 후에는 잠시 귀를 쉬게 하는
                    것이 좋습니다.
                </SubDesctiption>
                <SubDesctiptioSub>3. 이명 증상 주의</SubDesctiptioSub>
                <SubDesctiption>
                    이명(귀에서 나는 소리)은 초기 난청의 증상일 수 있습니다. 이명이 자주 들린다면 청력 검사를 받아보는
                    것이 필요합니다. 이를 방치하면 난청으로 발전할 가능성이 있기 때문에, 이명이 느껴진다면 즉시 전문가의
                    상담을 받아보는 것이 좋습니다.
                </SubDesctiption>
            </SubWrapper>
            {isNoticeShow && (
                <>
                    <BlockLayer />
                    <DescriptionBox>
                        <DescriptionText>1. 테스트 시작하기</DescriptionText>
                        <DescriptionSubText>
                            애플리케이션 화면에서 "Play" 버튼을 눌러주세요. 버튼을 클릭하면, 주파수가 점차적으로
                            상승하며 소리가 재생됩니다.
                        </DescriptionSubText>
                        <DescriptionText>2.주파수 상승 확인</DescriptionText>
                        <DescriptionSubText>
                            소리가 점점 더 높은 주파수로 변하며, 주파수는 화면에 실시간으로 표시됩니다. 주파수가
                            상승하면서 소리의 높이가 증가합니다.
                        </DescriptionSubText>
                        <DescriptionText>3. 테스트 종료하기</DescriptionText>
                        <DescriptionSubText>
                            소리가 더 이상 들리지 않는 지점을 확인하세요. "Stop" 버튼을 눌러 테스트를 종료합니다.
                            테스트가 완료되며, 현재까지 들은 최대 주파수가 기록됩니다.
                        </DescriptionSubText>
                        <DescriptionText>🔴 주의사항</DescriptionText>
                        <DescriptionSubText>
                            소리가 너무 크거나 불편할 경우, 테스트를 중단하고 안전한 주파수 범위에서 다시 시도하세요.
                        </DescriptionSubText>
                        <DescriptionSubText>
                            이 테스트는 귀의 청력 상태를 확인하기 위한 목적으로만 사용되며, 정확한 청력 검사는 전문
                            기관에서 받는 것이 좋습니다.
                        </DescriptionSubText>
                        <StartButtonBox>
                            <StartButton onClick={handleStart}>시작하기</StartButton>
                        </StartButtonBox>
                    </DescriptionBox>
                </>
            )}
        </Wrapper>
    );
};
