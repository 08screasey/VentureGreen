import { faLevelUpAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Waypoint } from 'react-waypoint';

import './Home.css';
import LeftBrain from '../../assets/brainLeft.svg';
import RightBrain from '../../assets/brainRight.svg';

export const Home = () => {
    const navigate = useNavigate();

    const [photoView, setPhotoView] = useState(false);
    const [devView, setDevView] = useState(false);
    const content = [
        <span className="Cyan">{'<'}</span>,
        <span className="Red">a</span>,
        <span className="Cyan">{'>'}</span>,
        'D',
        'e',
        'v',
        'e',
        'l',
        'o',
        'p',
        'm',
        'e',
        'n',
        't',
        <span className="Cyan">{'<'}</span>,
        <span className="Cyan">{'/'}</span>,
        <span className="Red">a</span>,
        <span className="Cyan">{'>'}</span>,
    ];
    const [devContent, setDevContent] = useState<(string | JSX.Element)[]>([]);
    const startTyping = () => {
        if (devContent.length < 1) {
            content.forEach((_el, i) => {
                setTimeout(
                    () => {
                        setDevContent(content.slice(0, i + 1));
                    },
                    110 * i + Math.floor(Math.random() * 90),
                );
            });
        }
    };

    return (
        <div className="Home pt-3">
            <h1
                className="F-Lora PaleGreen mx-auto"
                style={{
                    fontSize: '30px',
                    borderTop: '1px solid #CCC',
                    paddingTop: '30px',
                    textShadow: '1px 1px #eee',
                }}
            >
                Welcome to the Mind of Sam Creasey
            </h1>
            <p
                className="F-Code mx-auto"
                style={{
                    fontSize: '14px',
                    marginBottom: '30px',
                    marginTop: '20px',
                    color: '#888',
                    width: '80%',
                }}
            >
                For web development projects select the left side of his brain. To view photography gallery select the
                right side.
            </p>
            <h2
                className="mx-auto pt-2 my-0 px-3 F-Code text-left"
                style={{
                    fontSize: '25px',
                    width: '80%',
                    textShadow: '1px 1px #ccc',
                    borderBottom: '1px solid #CCC',
                }}
            ></h2>
            <div className="Flex">
                <Waypoint
                    onEnter={() => {
                        setDevView(true);
                        startTyping();
                    }}
                    topOffset={'200px'}
                    onLeave={() => setDevView(false)}
                >
                    <div className={'HomeDev'} onClick={() => navigate('/development')}>
                        <h2 className="F-Code" style={{ color: 'white' }}>
                            {devContent.map((x, i) => (
                                <React.Fragment key={i}>{x}</React.Fragment>
                            ))}
                            <span className="Typer"></span>
                        </h2>
                        <div className="LaptopScreen">
                            <div className="InnerScreen">
                                <img alt="" src="/home/website.jpg" />
                            </div>
                        </div>
                    </div>
                </Waypoint>
                <div className="HomeBreak">
                    <div className="Brain d-flex justify-content-center mb-5">
                        <div
                            className={devView ? 'LeftBrain Active' : 'LeftBrain'}
                            onClick={() => navigate('/development')}
                        >
                            <img alt="" src="/home/brainLeftOverLay.png" className="BrainOverlay" />
                            <img alt="" src="/home/brainLeftText1.png" className="Text Text1" />
                            <img alt="" src="/home/brainLeftText2.png" className="Text Text2" />
                            <FontAwesomeIcon icon={faLevelUpAlt} className="Arrow PaleGreen" />
                            <LeftBrain />
                        </div>

                        <div
                            className={photoView ? 'RightBrain Active' : 'RightBrain'}
                            onClick={() => navigate('/photography')}
                        >
                            <RightBrain />
                            <img alt="" src="/home/brainRightOverLay.png" className="BrainOverlay" />
                            <img alt="" src="/home/brainRightText1.png" className="Text Text1" />
                            <img alt="" src="/home/brainRightText2.png" className="Text Text2" />
                            <FontAwesomeIcon icon={faLevelUpAlt} className="Arrow Cyan" />
                        </div>
                    </div>
                </div>
                <Waypoint
                    onEnter={() => setPhotoView(true)}
                    onLeave={() => setPhotoView(false)}
                    topOffset={'650px'}
                    bottomOffset={'500px'}
                >
                    <div
                        className={photoView ? 'Active HomePhoto' : 'HomePhoto'}
                        onClick={() => navigate('/photography')}
                    >
                        <img alt="" src="/home/Home Image.jpg" />
                        <img alt="" src="/home/Home Image 2.jpg" />
                        <img alt="" src="/home/Home Image 3.jpg" />
                        <img alt="" src="/home/Home Image 4.jpg" />
                        <img alt="" src="/home/Home Image 5.jpg" />
                    </div>
                </Waypoint>
            </div>
        </div>
    );
};
