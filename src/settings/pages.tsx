import { SpeedChecker } from '../pages/speedChecker/speedChecker';
import { HearingAbility } from '../pages/hearingAbility/hearingAbility';
import { AimAbility } from '../pages/aimAbility/aimAbility';

export const Speed = () => {
    return <SpeedChecker />;
};

export const Sound = () => {
    return <HearingAbility />;
};

export const Aim = () => {
    return <AimAbility />;
};
