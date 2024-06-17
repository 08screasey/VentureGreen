import { type TypingEffectProps, useTypingEffect } from '../Utility/useTypingEffect';

export const TypingEffect = (props: TypingEffectProps) => {
    const output = useTypingEffect(props);

    return (
        <>
            {output}
            <span className="tw-border-transparent tw-animate-flicker tw-border-l-4 tw-border-solid tw-border-l-golden"></span>
        </>
    );
};
