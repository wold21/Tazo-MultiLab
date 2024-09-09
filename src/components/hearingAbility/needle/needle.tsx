import React from 'react';
import styled from 'styled-components';

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

export const DashboardNeedle = ({ angle }: any) => {
    return <Needle $rotate={angle} />;
};
