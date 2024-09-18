import { BlockLayer } from '../../../components/blockLayer/blockLayer';
import { ReTryBox, ReTryCaption, ReTrySubCaption, RetryButton } from './retryStyle';

interface RetryProps {
    handleRetry: () => void;
}
export const Retry = ({ handleRetry }: RetryProps) => {
    const retryCaptionArr = [
        '정말 마지막까지 들리신건 아니죠?',
        '마지막까지 들리셨다면 NASA에 지원해보세요🚀',
        '다시 한번 시도해보세요!',
    ];
    return (
        <>
            <BlockLayer />
            <ReTryBox>
                <ReTryCaption>Stop을 누르지 않으셨네요 🤔</ReTryCaption>
                <ReTrySubCaption>{retryCaptionArr[Math.floor(Math.random() * 3)]}</ReTrySubCaption>
                <RetryButton onClick={handleRetry}>다시 시도하기</RetryButton>
            </ReTryBox>
        </>
    );
};
