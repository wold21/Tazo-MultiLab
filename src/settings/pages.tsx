import { SpeedChecker } from '../pages/speedChecker/speedChecker';
import { HearingAbility } from '../pages/hearingAbility/hearingAbility';
import { HearingAbilityResult } from '../pages/hearingAbilityResult/hearingAbilityResult';
import { AimAbility } from '../pages/aimAbility/aimAbility';

export const Speed = () => {
    return <SpeedChecker />;
};

export const Sound = () => {
    return <HearingAbility />;
};
export const SoundResult = () => {
    return <HearingAbilityResult />;
};

export const Aim = () => {
    return <AimAbility />;
};
