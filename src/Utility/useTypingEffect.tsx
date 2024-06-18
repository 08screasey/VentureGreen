import { cloneElement, useEffect, useRef, useState } from 'react';

import { getRandomInterval } from './getRandomInterval';

type TypingEffectNode = { text: string; className?: string };

export type TypingEffectProps = {
    content: TypingEffectNode[];
    enabled: boolean;
    minSpeed?: number;
    maxSpeed?: number;
};

export const convertNodesToSpanElements = (content: TypingEffectNode[]) =>
    content.map(({ text, className }) => (
        <span key={className + text} className={className}>
            {text}
        </span>
    ));

export const useTypingEffect = ({ content, enabled, minSpeed = 30, maxSpeed = 80 }: TypingEffectProps) => {
    const [output, setOutput] = useState<JSX.Element[]>([]);
    const contentIndexRef = useRef({ itemIndex: 0, charIndex: 0 });

    useEffect(() => {
        if (enabled) {
            const typeNextChar = () => {
                const { itemIndex, charIndex } = contentIndexRef.current;
                if (itemIndex < content.length) {
                    const currentItem = content[itemIndex];
                    const currentText = currentItem.text;
                    const currentClass = currentItem.className || '';

                    if (charIndex < currentText.length) {
                        const newOutput = [...output];
                        if (charIndex === 0) {
                            newOutput.push(
                                <span key={`${itemIndex}-${charIndex}`} className={currentClass}>
                                    {currentText[charIndex]}
                                </span>,
                            );
                        } else {
                            const lastElement = newOutput[newOutput.length - 1];
                            newOutput[newOutput.length - 1] = cloneElement(
                                lastElement,
                                {},
                                lastElement.props.children + currentText[charIndex],
                            );
                        }
                        setOutput(newOutput);
                        contentIndexRef.current.charIndex += 1;
                    } else {
                        contentIndexRef.current.itemIndex += 1;
                        contentIndexRef.current.charIndex = 0;
                    }
                }
            };

            const interval = setInterval(
                () => {
                    typeNextChar();
                },
                getRandomInterval(minSpeed, maxSpeed),
            );

            return () => clearInterval(interval);
        }
    }, [enabled, output, content, minSpeed, maxSpeed]);

    return output;
};
