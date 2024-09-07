import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { DownArrowIcon } from '../../assets/icon/icon';
import { BoldText, Caption, Description, MainWrapper, Speed, Sound, Aim, DownIconBox, SubWrapper } from './homeStyle';

export const Home = () => {
    const navigate = useNavigate();
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);
    const [isHidden, setIsHidden] = useState<boolean>(false);
    const arrowRef = useRef<HTMLDivElement>(null);
    const targetRef = useRef<HTMLDivElement>(null);

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
        <>
            <MainWrapper>
                <Speed
                    onMouseEnter={() => setHoveredItem('speed')}
                    onMouseLeave={() => setHoveredItem(null)}
                    onClick={() => navigate('/speed-checker')}
                >
                    {hoveredItem === 'speed' && (
                        <>
                            <Caption>반응속도</Caption>
                            <Caption>테스트</Caption>
                        </>
                    )}
                </Speed>
                <Sound
                    onMouseEnter={() => setHoveredItem('sound')}
                    onMouseLeave={() => setHoveredItem(null)}
                    // onClick={() => navigate('/hearing-ability')}
                >
                    {hoveredItem === 'sound' && (
                        <>
                            <Caption>🔥</Caption>
                            <Caption>청력테스트 작업 중</Caption>
                            <Caption></Caption>
                            <Caption>빠른 시일 내에 </Caption>
                            <Caption>오픈 예정입니다.</Caption>
                        </>
                    )}
                </Sound>
                <Aim
                    onMouseEnter={() => setHoveredItem('aim')}
                    onMouseLeave={() => setHoveredItem(null)}
                    // onClick={() => navigate('/aim-ability')}
                >
                    {hoveredItem === 'aim' && (
                        <>
                            <Caption>🚫</Caption>
                            <Caption>정확도 테스트 작업 중</Caption>
                            <Caption></Caption>
                            <Caption>청력테스트 작업 후 </Caption>
                            <Caption>오픈 예정입니다.</Caption>
                        </>
                    )}
                </Aim>
            </MainWrapper>
            <DownIconBox ref={arrowRef} $isHidden={isHidden}>
                <DownArrowIcon />
            </DownIconBox>
            <SubWrapper>
                <Description ref={targetRef}>
                    <p>
                        <BoldText>Tazo's Lab</BoldText>는 웹 개발 실험과 도전적인 테스트들을 한곳에 모아놓은 창의적이고
                        독창적인 플랫폼입니다. 이곳에서는 사용자가 반응속도를 측정할 수 있는 반응속도 테스트, 청력의
                        범위를 확인할 수 있는 청력 테스트, 그리고 에임 정확도를 시험할 수 있는 에임 테스트 등 다양한
                        재미있고 유익한 실험들을 경험할 수 있습니다.
                    </p>
                    <p>
                        <BoldText>Tazo's Lab</BoldText>은 현재 준비 중인 실험 외에도 앞으로 다양한 기능을 추가할
                        예정입니다. 시간 변환기, 단위 변환기와 같은 실용적이고 일상에서 유용하게 사용할 수 있는 도구들이
                        추가될 계획이니, 실험을 즐기는 것 외에도 다양한 일상적인 필요를 충족할 수 있는 공간이 될
                        것입니다. 이 사이트는 끊임없이 발전하며, 사용자 피드백을 바탕으로 새로운 실험과 기능들을
                        지속적으로 업데이트할 예정입니다.
                    </p>
                    <p>
                        <BoldText>Tazo's Lab</BoldText>을 통해 새로운 도전과 학습을 즐기고, 나만의 기록을 세워보세요!
                    </p>
                    <p>*</p>
                    <p>*</p>
                    <p>*</p>
                    <p>라고 GPT가 작성해주었네요.</p>
                    <p>
                        안녕하세요, 저는 3년 차 웹 개발자입니다. 그동안 회사 중심의 개발을 하다 보니 정작 제가 좋아하는
                        개발을 잊어버리고 살아가는 모습을 발견하게 되어 이 사이트를 만들게 되었습니다.
                    </p>
                    <p>많은 관심과 피드백 부탁드리며 한번 잘 놀아보겠습니다.</p>
                </Description>
            </SubWrapper>
        </>
    );
};
