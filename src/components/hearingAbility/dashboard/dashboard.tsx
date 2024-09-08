import React from 'react';
import styled from 'styled-components';

const TickBox = styled.div<{ $angle: number }>`
    position: absolute;
    width: auto;
    height: 35vw;
    transform: rotate(${(props) => props.$angle}deg);
    transform-origin: center;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 40px;
    left: 50;
`;

const TickMark = styled.div`
    position: absolute;
    width: 2px;
    height: 15px;
    background-color: #222222;
    top: 0;
    left: 50%;
`;
const TickLabel = styled.span`
    position: absolute;
    top: 30px;
    font-size: 0.7rem;
    color: #ffffff;
    text-shadow: -1px 0px #000000, 0px 1px #000000, 0px -1px #000000, 1px 0px #000000;
`;

interface dashboardProps {
    minValue: number;
    maxValue: number;
    numberOfTicks: number;
}
export const Dashboard = ({ minValue, maxValue, numberOfTicks }: dashboardProps) => {
    const rangePerTick = (maxValue - minValue) / (numberOfTicks - 1);
    const TickLabels = Array.from({ length: numberOfTicks }).map((_, index) => {
        const angle = (index / (numberOfTicks - 1)) * 180 - 90;
        const label = Math.round(minValue + index * rangePerTick);
        const displayFrequency = label >= 1000 ? (label / 1000).toFixed(1) + 'kHz' : label.toFixed(0) + 'Hz';

        return (
            <TickBox key={index} $angle={angle}>
                <TickMark />
                <TickLabel>{displayFrequency}</TickLabel>
            </TickBox>
        );
    });
    return <>{TickLabels}</>;
};
