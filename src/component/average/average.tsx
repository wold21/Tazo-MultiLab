import styled from "styled-components";

interface PropsType {
    time: number;
}

const AverageBox = styled.div`
    width 200px;
    height: 25px;
    top: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    opacity: 1;
    transition: all 0.2s ease-in-out;
    @media (max-width: 900px) {
        opacity: 0;
    }
}
`;
const AverageItem = styled.span`
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
    color: #000000;
    user-select: none;
    text-shadow: -2px 0px #ffffff, 0px 2px #ffffff, 0px -2px #ffffff, 2px 0px #ffffff;
`;
const Average: React.FC<PropsType> = ({ time }) => {
    return (
        <AverageBox>
            <AverageItem>평균속도 : {time}ms</AverageItem>
        </AverageBox>
    );
};

export default Average;
