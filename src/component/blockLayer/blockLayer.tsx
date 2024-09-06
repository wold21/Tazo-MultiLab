import styled from "styled-components";
export const BlockUI = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 8;
    background-color: rgba(0, 0, 0, 0.7);
`;

export const BlockLayer = () => {
    return <BlockUI />;
};
