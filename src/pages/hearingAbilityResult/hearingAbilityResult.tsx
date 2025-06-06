import { useEffect, useState, useRef } from 'react';
import { RepeatIcon, DownArrowIcon } from '../../assets/icon/icon';
import { useNavigate, useLocation } from 'react-router-dom';
import {
    Wrapper,
    MainWrapper,
    DownIconBox,
    ResultBox,
    ResultAgeBox,
    ResultCaption,
    ResultCaptionSub,
    ResultAgeCaption,
    RepeatIconBox,
    GuideBox,
    AgeWrapper,
    AgeTableBox,
    SubWrapper,
    SubDesctiptioBold,
    SubDesctiption,
    SubDesctiptioSub,
} from './hearingAbilityResultStyle';

const AnimationDuration = 1000;
const EmoticonList = ['🌱', '🍄', '🐳', '🍭', '🫵', '✨', '🔥', '🥗'];
export const HearingAbilityResult = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { frequency } = location.state || { frequency: 10000 };
    const [isResultFrequency, setIsResultFrequency] = useState<number>(0);
    const [isResultAge, setIsResultAge] = useState<string>('0');
    const [isHidden, setIsHidden] = useState<boolean>(false);
    const arrowRef = useRef<HTMLDivElement>(null);
    const targetRef = useRef<HTMLDivElement>(null);

    const frequencyInterval = () => {
        const startTime = performance.now();

        const easeInOutQuad = (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

        const updateFrequency = () => {
            const elapsedTime = performance.now() - startTime; // 시작 시간부터 경과된 시간
            const progress = Math.min(elapsedTime / AnimationDuration, 1); // 경과된 시간을 길이로 나누어 진행률 계산
            const easingProgress = easeInOutQuad(progress); // 진행률 값에 따라 가중치를 부여하여 증가량을 조절
            const resultFrequency = Math.floor(frequency * easingProgress); // 주파수와 가중치를 곱하여 현재 상승중인 주파수 계산
            setIsResultFrequency(resultFrequency);
            if (elapsedTime < AnimationDuration) {
                requestAnimationFrame(updateFrequency);
            }
        };
        requestAnimationFrame(updateFrequency);
    };

    useEffect(() => {
        frequencyInterval();
        let age;
        if (frequency <= 8000) {
            age = '보청기고려';
        } else if (frequency < 10000) {
            age = '50대이후';
        } else if (frequency < 12000) {
            age = '40대';
        } else if (frequency < 14100) {
            age = '30대';
        } else if (frequency < 14900) {
            age = '20대후반';
        } else if (frequency < 15800) {
            age = '20대중반';
        } else if (frequency < 16700) {
            age = '20대초반';
        } else if (frequency < 17700) {
            age = '10대후반';
        } else if (frequency < 18800) {
            age = '10대중반';
        } else if (frequency < 19900) {
            age = '10대이하';
        } else {
            age = '동물의영역';
        }
        let randomEmoticon = Math.floor(Math.random() * EmoticonList.length);
        setIsResultAge(`${age}${EmoticonList[randomEmoticon]}`);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (arrowRef.current && targetRef.current) {
                const scrollPosition = window.scrollY + window.innerHeight;
                const targetPosition = targetRef.current.offsetTop;

                if (scrollPosition >= targetPosition) {
                    setIsHidden(true);
                } else {
                    setIsHidden(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Wrapper>
            <MainWrapper>
                <RepeatIconBox onClick={() => navigate('/hearing-ability')}>
                    <span>다시하기</span>
                    <RepeatIcon />
                </RepeatIconBox>
                <ResultBox>
                    <ResultCaption top={'8vh'} left={'7vw'} fs={'5vw'}>
                        당신의
                    </ResultCaption>
                    <ResultCaption top={'29vh'} left={'15vw'} fs={'3vw'}>
                        결과는...
                    </ResultCaption>
                    <ResultCaption top={'14vh'} left={'25vw'} fs={'5vw'}>
                        <span>{isResultFrequency}</span>Hz<ResultCaptionSub>입니다.</ResultCaptionSub>
                    </ResultCaption>
                    <ResultAgeBox>
                        <ResultAgeCaption top={'15vh'} left={'60vw'} fs={'6vw'}>
                            {isResultAge}
                        </ResultAgeCaption>
                    </ResultAgeBox>
                </ResultBox>
            </MainWrapper>
            <DownIconBox ref={arrowRef} $isHidden={isHidden}>
                <DownArrowIcon />
            </DownIconBox>
            <GuideBox ref={targetRef}>
                <AgeWrapper>
                    <AgeTableBox>
                        <p>🫨 연령별 평균 가청 주파수 대역</p>
                        <table>
                            <tbody>
                                <tr>
                                    <td>8,000Hz</td>
                                    <td>보청기 착용 고려</td>
                                </tr>
                                <tr>
                                    <td>10,000Hz</td>
                                    <td>50대 이후</td>
                                </tr>
                                <tr>
                                    <td>12,000Hz</td>
                                    <td>40대 정도</td>
                                </tr>
                                <tr>
                                    <td>14,100Hz</td>
                                    <td>30대 정도</td>
                                </tr>
                                <tr>
                                    <td>14,900Hz</td>
                                    <td>20대 후반</td>
                                </tr>
                                <tr>
                                    <td>15,800Hz</td>
                                    <td>20대 중반</td>
                                </tr>
                                <tr>
                                    <td>16,700Hz</td>
                                    <td>20대 초반</td>
                                </tr>
                                <tr>
                                    <td>17,700Hz</td>
                                    <td>10대 후반</td>
                                </tr>
                                <tr>
                                    <td>18,800Hz</td>
                                    <td>10대 중반</td>
                                </tr>
                                <tr>
                                    <td>19,900Hz</td>
                                    <td>10대 이하</td>
                                </tr>
                                <tr>
                                    <td>20,000Hz</td>
                                    <td>동물의 영역</td>
                                </tr>
                            </tbody>
                        </table>
                    </AgeTableBox>
                </AgeWrapper>
                <SubWrapper>
                    <SubDesctiptioBold>👂 청각</SubDesctiptioBold>
                    <SubDesctiption>
                        후각, 미각, 시각, 촉감과 더불어 청각은 살아가는데 꼭 필요한 감각 중에 하나이며 귀를 통해 소리를
                        인식하는 감각으로, 우리가 세상을 이해하고 소통하는 데 중요한 역할을 합니다. 소리의 진동을 감지해
                        신경 신호로 변환한 후, 뇌가 이를 해석함으로써 소리를 인식하게 되는 복잡한 과정을 거칩니다.
                    </SubDesctiption>
                    <SubDesctiptioBold>👂 난청</SubDesctiptioBold>
                    <SubDesctiption>
                        산업혁명 이후, 남녀노소를 불문하고 심지어 동물들까지도 소음이 가득한 환경에 노출되기
                        시작했습니다. 특히 스마트폰 보급과 함께 이어폰 및 소형 전자기기의 사용이 증가하면서,
                        청년층에서는 소음성 난청이, 노년층에서는 노인성 난청의 발생 확률이 급격히 높아지고 있습니다.
                    </SubDesctiption>
                    <SubDesctiption>
                        난청은 서서히 진행되기 때문에 알아차리기 어렵습니다. 하지만 생활 습관을 조금만 개선하면 난청을
                        늦추거나 쉽게 예방할 수 있습니다. 다음과 같은 방법들이 도움이 됩니다
                    </SubDesctiption>
                </SubWrapper>
                <SubWrapper>
                    <SubDesctiptioBold>🚨 예방방법</SubDesctiptioBold>
                    <SubDesctiptioSub>1. 소음피하기</SubDesctiptioSub>
                    <SubDesctiption>
                        장시간 소음에 노출되면 청력이 손상될 수 있습니다. 이어폰이나 헤드폰을 사용할 때는 소리를 너무
                        크게 틀지 않도록 하고, 시끄러운 환경에서는 소음 차단 이어폰이나 귀마개를 사용하는 것을
                        추천드립니다. 85dB 이상의 소음에 지속적으로 노출되면 청력 손실 위험이 커집니다.
                    </SubDesctiption>
                    <SubDesctiptioSub>2. 적절한 이어폰 및 헤드폰 사용</SubDesctiptioSub>
                    <SubDesctiption>
                        이어폰이나 헤드폰을 장시간 사용하면 귀에 압박이 가해질 수 있습니다. 특히 소리를 크게 들으면 귀
                        속의 섬모 세포가 손상될 수 있기때문에 볼륨은 60% 이하로 설정하고, 1시간 사용 후에는 잠시 귀를
                        쉬게 하는 것이 좋습니다.
                    </SubDesctiption>
                    <SubDesctiptioSub>3. 이명 증상 주의</SubDesctiptioSub>
                    <SubDesctiption>
                        이명(귀에서 나는 소리)은 초기 난청의 증상일 수 있습니다. 이명이 자주 들린다면 청력 검사를
                        받아보는 것이 필요합니다. 이를 방치하면 난청으로 발전할 가능성이 있기 때문에, 이명이 느껴진다면
                        즉시 전문가의 상담을 받아보는 것이 좋습니다.
                    </SubDesctiption>
                </SubWrapper>
            </GuideBox>
        </Wrapper>
    );
};
