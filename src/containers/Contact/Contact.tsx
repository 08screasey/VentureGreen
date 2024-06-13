import { faInstagram, faFacebook, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';

import './Contact.css';

export const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="Contact">
            <div className="Content px-2 mt-3">
                <h1 className="F-Bodini PaleGreen mb-4">Contact Me</h1>
                <div className="ContactImg mx-auto mb-4"></div>
                <p className="F-OldStandard">
                    Whether you're looking to hire a new web developer, needing to update your product images or even
                    just reaching out because you think there's something I could do better, I'd love to hear from you!
                </p>
                <p className="F-OldStandard">
                    If you're interested in what I do I'm always excited to collaborate or share whatever knowledge I've
                    picked up on my travels.
                </p>
                <p className="F-OldStandard">
                    Get in contact by sending me an email. Or, alternatively feel free to get in touch through any of my
                    social media links.
                </p>
                <p className="F-OldStandard">~ Sam</p>
                <div className="SocialContainer position-relative">
                    <div className="d-flex w-100 justify-content-around mt-4">
                        <a rel="noopener noreferrer" href="mailto:test@test.com" target="_blank">
                            <div className="blob green">
                                <FontAwesomeIcon icon={faEnvelope} size="3x" className="Social" />
                            </div>
                        </a>
                        <a
                            rel="noopener noreferrer"
                            href="https://www.instagram.com/venturegreenphotography/"
                            target="_blank"
                        >
                            <div className="blob green">
                                <FontAwesomeIcon icon={faInstagram} size="3x" className="Social" />
                            </div>
                        </a>
                        <a rel="noopener noreferrer" href="https://www.facebook.com/sam.creasey1" target="_blank">
                            <div className="blob green">
                                <FontAwesomeIcon icon={faFacebook} size="3x" className="Social" />
                            </div>
                        </a>
                        <a
                            rel="noopener noreferrer"
                            href="https://www.linkedin.com/in/sam-creasey-056b371b7/"
                            target="_blank"
                        >
                            <div className="blob green">
                                <FontAwesomeIcon icon={faLinkedinIn} size="3x" className="Social" />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
