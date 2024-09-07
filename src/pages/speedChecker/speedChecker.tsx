import { useEffect, useState } from 'react';
import Average from '../../component/average/average';
import RetryIcon from '../../assets/images/retry';
import { BlockLayer } from '../../component/blockLayer/blockLayer';
import {
	Wrapper,
	MainGameBox,
	Stage,
	Caption,
	LodingBox,
	Loading,
	HistoryBox,
	HistoryItem,
	History,
	ResultBox,
	RetryBox,
	AverageBox,
} from './speedCheckerStyle';

interface timeType {
	id: number;
	time: number;
}

export const SpeedChecker = () => {
	const [ready, setReady] = useState(false);
	const [bgColor, setBgColor] = useState('#1C5D99');
	const [text, setText] = useState("Let's Start!");
	const [startTime, setStartTime] = useState(0);
	const [exitCount, setExitCount] = useState(0);
	const [timeArray, setTimeArray] = useState<timeType[]>([]);
	const [average, setAverage] = useState(0);
	const [isShow, setIsShow] = useState(false);

	const measurementStart = () => {
		const randomTime = Math.floor(Math.random() * 5) + 1;
		const timer = setTimeout(() => {
			setStartTime(Date.now());
			setText('Click!');
			setBgColor('#EDAD3F');
		}, randomTime * 1000);
		return () => clearTimeout(timer);
	};
	const scoreCollector = () => {
		const elapsedTime = Math.floor(Date.now() - startTime);
		if (exitCount === 0) {
			setAverage(elapsedTime);
		}
		setTimeArray([...timeArray, { id: timeArray.length, time: elapsedTime }]);
		setText('Keep Going!');
		setBgColor('#1C5D99');
		setReady(false);
		setExitCount(exitCount + 1);
	};
	const handleReset = () => {
		setTimeArray([]);
		setAverage(0);
		setExitCount(0);
		setReady(false);
		setBgColor('#1C5D99');
		setText("Let's Start!");
		setIsShow(false);
	};
	const handleReady = () => {
		if (!ready) {
			setReady(true);
			setText('Wait...');
			measurementStart();
		} else {
			if (bgColor === '#1C5D99') return;
			scoreCollector();
		}
	};
	useEffect(() => {
		if (timeArray.length < 5 && timeArray.length > 0) {
			const sum = timeArray.reduce((acc, cur) => acc + cur.time, 0);
			setAverage(Math.floor(sum / timeArray.length));
		} else if (timeArray.length === 5) {
			setTimeout(() => {
				setIsShow(true);
			}, 500);
		}
	}, [timeArray]);
	return (
		<Wrapper>
			<MainGameBox>
				<Average time={average} />
				<LodingBox>
					<Loading $width={timeArray.length} $totalSteps={5} />
				</LodingBox>
				<History>
					{timeArray.map((time) => (
						<HistoryItem key={time.id} $width={1} $totalSteps={5}>
							{time.time}ms
						</HistoryItem>
					))}
				</History>
				<Stage onClick={handleReady} $bgColor={bgColor}>
					<Caption>{text}</Caption>
					{timeArray.length != 0 && !ready ? <Caption>{timeArray[timeArray.length - 1].time}ms</Caption> : ''}
				</Stage>
			</MainGameBox>
			{isShow ? (
				<>
					<BlockLayer />
					<ResultBox>
						<AverageBox>평균속도 : {average}ms</AverageBox>
						<HistoryBox>
							{timeArray.map((time) => (
								<span key={time.id}>{time.time}ms</span>
							))}
						</HistoryBox>
						<RetryBox onClick={handleReset}>
							<RetryIcon />
						</RetryBox>
					</ResultBox>
				</>
			) : (
				''
			)}
		</Wrapper>
	);
};
