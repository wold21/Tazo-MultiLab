import { DashboardNeedle } from '../needle/needle';
import styled from 'styled-components';

const TickBox = styled.div<{ $rotate: number }>`
    position: absolute;
    width: auto;
    height: 100%;
    transform: rotate(${(props) => props.$rotate}deg);
    transform-origin: center;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 25%;
    left: 50;

    // @media (max-width: 600px) {
    //     height: 75vw;
    // }
`;

const TickMark = styled.div`
    position: absolute;
    width: 2px;
    height: 1.5vh;
    background-color: #222222;
    top: 0;
    left: 50%;
`;
const TickLabel = styled.span`
    position: absolute;
    top: 3vh;
    font-size: 0.8rem;
    color: #ffffff;
    text-shadow: -1px 0px #000000, 0px 1px #000000, 0px -1px #000000, 1px 0px #000000;

    @media (max-width: 1500px) {
        font-size: 0.6rem;
    }
    @media (max-width: 1250px) {
        font-size: 0.5rem;
    }
    @media (max-width: 1024px) {
        font-size: 0.7rem;
    }
    @media (max-width: 600px) {
        font-size: 0.4rem;
    }
`;

export const ClipingLight = styled.div`
    position: absolute;
    top: 10%;
    left: 90%;
    width: 20px;
    height: 20px;
    background-color: red;
    border-radius: 50%;
    box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.6), 0 0 20px rgba(255, 0, 0, 0.8);
    animation: blink 1s infinite;
    z-index: 1;

    @media (max-width: 600px) {
        width: 13px;
        height: 13px;
    }

    @keyframes blink {
        0% {
            background-color: red;
            box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.6), 0 0 5px rgba(255, 0, 0, 0.8);
        }
        25% {
            ackground-color: red;
            box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.6), 0 0 5px rgba(255, 0, 0, 0.6);
        }
        50% {
            background-color: red;
            box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.5), 0 0 5px rgba(200, 0, 0, 0.8);
        }
        75% {
            ackground-color: red;
            box-shadow: inset 0 0.5px 8px rgba(0, 0, 0, 0.6), 0 0 5px rgba(255, 0, 0, 0.6);
        }
        100% {
            background-color: red;
            box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.6), 0 0 5px rgba(255, 0, 0, 0.8);
        }
    }
`;

interface dashboardProps {
    $minValue: number;
    $maxValue: number;
    $numberOfTicks: number;
    $angle: string;
}
export const Dashboard = ({ $minValue, $maxValue, $numberOfTicks, $angle }: dashboardProps) => {
    const rangePerTick = ($maxValue - $minValue) / ($numberOfTicks - 1);
    const TickLabels = Array.from({ length: $numberOfTicks }).map((_, index) => {
        const rotate = (index / ($numberOfTicks - 1)) * 180 - 90;
        const label = Math.round($minValue + index * rangePerTick);
        const displayFrequency = label >= 1000 ? (label / 1000).toFixed(1) + 'kHz' : label.toFixed(0) + 'Hz';

        return (
            <TickBox key={index} $rotate={rotate}>
                <TickMark />
                <TickLabel>{displayFrequency}</TickLabel>
            </TickBox>
        );
    });
    return (
        <>
            {TickLabels}
            <DashboardNeedle angle={$angle} />
            <ClipingLight />
        </>
    );
};
