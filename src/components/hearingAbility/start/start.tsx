import { BlockLayer } from '../../../components/blockLayer/blockLayer';
import { DescriptionBox, DescriptionSubText, DescriptionText, StartButtonBox, StartButton } from './startStyle';
interface StartProps {
    handleStart: () => void;
}
export const Start = ({ handleStart }: StartProps) => {
    return (
        <>
            <BlockLayer />
            <DescriptionBox>
                <DescriptionText>1. 테스트 시작하기</DescriptionText>
                <DescriptionSubText>
                    애플리케이션 화면에서 "Play" 버튼을 눌러주세요. 버튼을 클릭하면, 주파수가 점차적으로 상승하며 소리가
                    재생됩니다.
                </DescriptionSubText>
                <DescriptionText>2.주파수 상승 확인</DescriptionText>
                <DescriptionSubText>
                    소리가 점점 더 높은 주파수로 변하며, 주파수는 화면에 실시간으로 표시됩니다. 주파수가 상승하면서
                    소리의 높이가 증가합니다.
                </DescriptionSubText>
                <DescriptionText>3. 테스트 종료하기</DescriptionText>
                <DescriptionSubText>
                    소리가 더 이상 들리지 않는 지점을 확인하세요. "Stop" 버튼을 눌러 테스트를 종료합니다. 테스트가
                    완료되며, 현재까지 들은 최대 주파수가 기록됩니다.
                </DescriptionSubText>
                <DescriptionText>🔴 주의사항</DescriptionText>
                <DescriptionSubText>
                    소리가 너무 크거나 불편할 경우, 테스트를 중단하고 안전한 주파수 범위에서 다시 시도하세요.
                </DescriptionSubText>
                <DescriptionSubText>
                    이 테스트는 귀의 청력 상태를 확인하기 위한 목적으로만 사용되며, 정확한 청력 검사는 전문 기관에서
                    받는 것이 좋습니다.
                </DescriptionSubText>
                <StartButtonBox>
                    <StartButton onClick={handleStart}>시작하기</StartButton>
                </StartButtonBox>
            </DescriptionBox>
        </>
    );
};
