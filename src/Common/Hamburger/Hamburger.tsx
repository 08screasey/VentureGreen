import { FOCUS_VISIBLE_STYLES } from '../../Utility/focusStyles';
import { merge } from '../../Utility/merge';

type HamburgerProps = { onClick: () => void; label: string };

export const Hamburger = ({ onClick, label }: HamburgerProps) => (
    <button
        className={merge('tw-group/hamburger tw-flex tw-flex-col tw-gap-1.5 tw-rounded tw-p-2', FOCUS_VISIBLE_STYLES)}
        onClick={onClick}
        aria-label={label}
    >
        <span className="tw-h-0.5 tw-w-7 tw-rounded tw-bg-black tw-transition-transform group-hover/hamburger:-tw-translate-y-px group-focus-visible/hamburger:-tw-translate-y-px" />
        <span className="tw-h-0.5 tw-w-7 tw-rounded tw-bg-black" />
        <span className="tw-h-0.5 tw-w-7 tw-rounded tw-bg-black tw-transition-transform group-hover/hamburger:tw-translate-y-px group-focus-visible/hamburger:tw-translate-y-px" />
    </button>
);
