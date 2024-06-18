import { FooterLink } from './FooterLink/FooterLink';

export const Footer = () => (
    <footer className="tw-w-100 tw-hidden tw-flex-none tw-py-3 lg:tw-flex">
        <div className="tw-m-auto tw-flex tw-w-[95%] tw-max-w-[1000px] tw-items-center tw-justify-around">
            <FooterLink to="/">Home</FooterLink>
            <FooterLink to="/development">Development</FooterLink>
            <FooterLink to="/photography">Photography</FooterLink>
            <FooterLink to="/about">About me</FooterLink>
        </div>
    </footer>
);
