import styled from 'styled-components';

const Needle = styled.div<{ $rotate: string }>`
    position: absolute;
    bottom: 7%;
    transform: translateY(-50%) rotate(${(props) => props.$rotate}deg);
    transform-origin: bottom;
    border-left: 0.3vh solid transparent;
    border-right: 0.3vh solid transparent;
    border-bottom: 9vw solid #222222;

    @media (max-width: 1024px) {
        bottom: 8%;
        border-bottom: 20vw solid #222222;
    }

    @media (max-width: 600px) {
        border-left: 0.2vh solid transparent;
        border-right: 0.2vh solid transparent;
        border-bottom: 20vw solid #222222;
    }
`;

export const DashboardNeedle = ({ angle }: any) => {
    return <Needle $rotate={angle} />;
};
