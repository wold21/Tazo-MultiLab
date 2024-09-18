import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100vw;
    height: calc(100vh - 100px);
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;
    overflow-y: auto;

    @media (max-width: 600px) {
        height: calc(100vh - 70px);
    }
`;
