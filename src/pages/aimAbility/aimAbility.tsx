import { useState, useEffect, useRef } from 'react';
import { BlockLayer } from '../../components/blockLayer/blockLayer';
import { RepeatIcon } from '../../assets/icon/icon';
import {
    Wrapper,
    MainGameBox,
    LodingBox,
    Loading,
    History,
    HistoryItem,
    Stage,
    Caption,
    Circle,
    ProgressBackground,
    ResultBox,
    HistoryBox,
    AverageBox,
    RetryBox,
} from './aimAbilityStyle';
import { useTimer } from './hook/useTimer';

interface CircleProps {
    id: number;
    left: number;
    top: number;
}

interface CircleInfoPropsType {
    size: number;
    count: number;
    offset: number;
}

interface GamePropsType {
    totalStep: number;
    duration: number;
    intervalTime: number;
    circleInfo: CircleInfoPropsType;
}

export const AimAbility = () => {
    const stageRef = useRef<HTMLDivElement | null>(null);
    const [bgColor, setBgColor] = useState('#1C5D99');
    const [progressWidth, setProgressWidth] = useState(100);
    const [progressOpacity, setProgressOpacity] = useState(1);
    const [isStart, setIsStart] = useState(false);
    const [isResultShow, setIsResultShow] = useState(false);
    const [circles, setCircles] = useState<CircleProps[]>([]);
    const [timeArray, setTimeArray] = useState<{ time: number }[]>([]);
    const [averageTime, setAverageTime] = useState<number>(0);
    const [gameProps, setGameProps] = useState<GamePropsType>({
        totalStep: 3,
        duration: 10000,
        intervalTime: 100,
        circleInfo: { count: 10, size: 50, offset: 10 },
    });
    const { startTimer, stopTimer, remainingTime } = useTimer({
        duration: gameProps.duration,
        onComplete: () => {
            setTimeArray((prev) => [...prev, { time: gameProps.duration }]);
            endGameRound();
        },
        onTick: (time: number) => {
            const width = Math.floor(100 - (time / gameProps.duration) * 100);
            if (width <= 0) return;
            setProgressWidth(width);
        },
    });

    const endGameRound = () => {
        setCircles([]);
        setBgColor('#1C5D99');
        setIsStart(false);
        setProgressWidth(100);
        setProgressOpacity(1);
        setGameProps((prev) => {
            const isLastRound = timeArray.length + 1 === prev.totalStep;
            return {
                ...prev,
                circleInfo: {
                    ...prev.circleInfo,
                    size: isLastRound ? 50 : prev.circleInfo.size - prev.circleInfo.offset,
                },
            };
        });

        if (timeArray.length + 1 === gameProps.totalStep) {
            setIsResultShow(true);
            const sum = timeArray.reduce((acc, cur) => acc + cur.time, 0);
            setAverageTime(Math.floor(sum / timeArray.length));
        }
    };

    const generateCircles = () => {
        if (!stageRef.current) return;
        const stageWidth = stageRef.current.offsetWidth;
        const stageHeight = stageRef.current.offsetHeight;
        for (let i = 0; i < gameProps.circleInfo.count; i++) {
            const x = Math.floor(
                Math.random() * (stageWidth - gameProps.circleInfo.size - gameProps.circleInfo.offset),
            );
            const y = Math.floor(
                Math.random() * (stageHeight - gameProps.circleInfo.size - gameProps.circleInfo.offset),
            );
            setCircles((prev) => [...prev, { id: i, left: x, top: y }]);
        }
    };

    const handleCircleClick = (id: number) => {
        setCircles((prev) => prev.filter((circle) => circle.id !== id));
        if (circles.length === 1) {
            setTimeArray((prev) => [...prev, { time: remainingTime }]);
            stopTimer();
            endGameRound();
        }
    };

    const handleRetry = () => {
        setTimeArray([]);
        setIsResultShow(false);
    };

    const handlePlay = () => {
        if (isStart) return;
        setIsStart(true);
        generateCircles();
        startTimer();
    };

    useEffect(() => {
        if (progressWidth < 5) {
            setProgressOpacity(0);
        }
        if (progressWidth < 25) {
            setBgColor('tomato');
        }
    }, [progressWidth]);

    return (
        <Wrapper>
            <MainGameBox>
                <LodingBox>
                    <Loading $width={timeArray.length} $totalSteps={gameProps.totalStep} />
                </LodingBox>
                <History>
                    {timeArray.map((time, index) => (
                        <HistoryItem key={index} $width={1} $totalSteps={gameProps.totalStep}>
                            {time.time}ms
                        </HistoryItem>
                    ))}
                </History>

                <Stage onClick={handlePlay} ref={stageRef}>
                    <ProgressBackground $bgColor={bgColor} $width={progressWidth} $display={progressOpacity} />
                    {!isStart ? (
                        <>
                            <Caption>클릭하면 시작합니다.</Caption>
                            <Caption>Round {timeArray.length + 1}</Caption>
                        </>
                    ) : (
                        <>
                            {circles.map((circle) => (
                                <Circle
                                    key={circle.id}
                                    $left={circle.left}
                                    $top={circle.top}
                                    $size={gameProps.circleInfo.size}
                                    onClick={() => handleCircleClick(circle.id)}
                                />
                            ))}
                        </>
                    )}
                </Stage>
                {isResultShow ? (
                    <>
                        <BlockLayer />
                        <ResultBox>
                            <AverageBox>평균속도 : {averageTime}ms</AverageBox>
                            <HistoryBox>
                                {timeArray.map((time, index) => (
                                    <span key={index}>{time.time}ms</span>
                                ))}
                            </HistoryBox>
                            <RetryBox onClick={handleRetry}>
                                <RepeatIcon />
                            </RetryBox>
                        </ResultBox>
                    </>
                ) : (
                    ''
                )}
            </MainGameBox>
        </Wrapper>
    );
};
