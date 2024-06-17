import { type TypingEffectProps, useTypingEffect } from '../Utility/useTypingEffect';

export const TypingEffect = (props: TypingEffectProps) => {
    const output = useTypingEffect(props);

    return (
        <>
            {output}
            <span className="Typer"></span>
        </>
    );
};
