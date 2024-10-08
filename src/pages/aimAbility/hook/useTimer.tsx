import { useEffect, useRef, useState } from 'react';

interface TimerPropsType {
    duration: number;
    onComplete: () => void;
    onTick: (remainingTime: number) => void;
}

export const useTimer = ({ duration, onComplete, onTick }: TimerPropsType) => {
    const [remainingTime, setRemainingTime] = useState(0);
    const intervalRef = useRef<number | null>(null);
    const startTimeRef = useRef<number | null>(null);
    useEffect(() => {
        onTick(remainingTime);
    }, [remainingTime]);

    const startTimer = () => {
        if (intervalRef.current) return;
        startTimeRef.current = Date.now();
        setRemainingTime(duration);

        intervalRef.current = setInterval(() => {
            const elapsedTime = Date.now() - (startTimeRef.current as number);
            setRemainingTime(elapsedTime);
            if (elapsedTime > duration) {
                stopTimer();
                if (onComplete) {
                    onComplete();
                }
            }
        }, 50);
    };

    const stopTimer = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };

    return { startTimer, stopTimer, remainingTime };
};
