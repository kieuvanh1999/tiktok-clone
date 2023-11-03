import React, { useRef, useState } from 'react';
import {
    BookmarkIcon,
    FaceBookIcon,
    LikeIcon,
    LinkedlntIcon,
    NoteIcon,
    PinterestIcon,
    RemoveIcon,
    ShareIcon,
    TwitterIcon,
    WhatsappIcon,
} from '~/components/Icons';
import userImg from '../../../assets/images/no-image.png';
import SerModel from '../SerModel';

import '../../../pages/Home/home.scss';

export default function VidsModel({ home, items }) {
    const [note, setNote] = useState();
    const [follow, setFollow] = useState();
    const [like, setLike] = useState();
    const videoRef = useRef();

    const handleActiveFollow = () => {
        setFollow(!follow);
    };

    const handleModel = () => {
        const e = document.getElementById(`${items.id + '3668609'}`);

        e.classList.add('openModel');
        handlePlay();
    };

    const handleRemoveModel = () => {
        const e = document.getElementById(`${items.id + '3668609'}`);
        e.classList.remove('openModel');
        handlePause();
    };
    const handlePlay = () => {
        videoRef.current.play();
    };
    const handlePause = () => {
        videoRef.current.pause();
    };
    return (
        <div className="PTQFNQXNNJ" id="1DORJBYMLNT">
            <div className="QCLUGLKKCD">
                <div style={{ display: 'flex' }} className="MDHOCQRSJO">
                    <div className="RJTDPMNNBR">
                        <img style={{ width: '100%', height: 'auto' }} src={userImg} alt="" />
                    </div>
                    <div className="VUFNFWGRHM">
                        <div style={{ display: 'flex' }} className="HFNAYZPKUK">
                            <h3>User_name</h3>
                            <h4>anonymous</h4>
                        </div>
                        <div className="IYSRZAHLMI">
                            <span> おｃトプｓ 者部 者部 Octopus Shabu Shabu </span>
                            <a href="tag">#Tag</a>
                            <a href="tag">#Tag</a>
                            <span type="submit">Thêm</span>
                        </div>
                    </div>
                    <div className={`OWGTYJCPOZ ${follow ? 'MNWUVUMLON' : ''}`} onClick={handleActiveFollow}>
                        <div className="DBLCIGAMRJ" id={items.id + '3554807'}>
                            {follow ? 'Unfollow' : 'Follow'}
                        </div>
                    </div>
                </div>
            </div>
            <div className="QNEKPNAJCW" style={{ display: 'flex' }}>
                <div className="XNNOASVYSK">
                    <div className="HWMIIVUTJQ" onClick={handleModel}></div>
                    <video
                        width="336px"
                        height="600px"
                        controls
                        loop
                        preload="auto"
                        ref={home.videoRef}
                        src={items.attributes.vids.data.attributes.url}
                    ></video>
                </div>
                <div className="NASZLCEIIT">
                    <div className="VYTINYZQFZ">
                        <div className="NDZSKBBKNG">
                            <div className="UDVGGHLYTL" onClick={() => setLike(!like)} id={items.id}>
                                <LikeIcon className={`DBLCIGAMRJ ${like ? 'UDYEWWFBCY' : ''}`} />
                            </div>
                            <span>186k</span>
                        </div>
                        <div className="NDZSKBBKNG">
                            <div className="UDVGGHLYTL" onClick={handleModel}>
                                <NoteIcon className="DBLCIGAMRJ" />
                            </div>
                            <span>825</span>
                        </div>
                        <div className="NDZSKBBKNG">
                            <div className="UDVGGHLYTL" onClick={() => setNote(!note)}>
                                <BookmarkIcon className={`DBLCIGAMRJ ${note ? 'TKRYPLLBPD' : ''}`} />
                            </div>
                            <span>81114</span>
                        </div>
                        <div className="NDZSKBBKNG STLDBWFCPT">
                            <div className="UDVGGHLYTL ">
                                <ShareIcon />
                            </div>
                            <span>276</span>
                            <div className="SSAOCMVGZY">
                                <div className="PBXPEOBXJF">
                                    <svg
                                        width="2.4rem"
                                        height="0.8rem"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 320 512"
                                    >
                                        <path d="M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"></path>
                                    </svg>
                                </div>
                                <ul className="WDFHUOVTHD">
                                    <li className="GIUPLKYAEM">
                                        <a href="/">
                                            <FaceBookIcon />
                                        </a>
                                        <span className="XKTCCIHOHA">Share to facebook</span>
                                    </li>
                                    <li className="GIUPLKYAEM">
                                        <a href="/">
                                            <PinterestIcon />
                                        </a>
                                        <span className="XKTCCIHOHA">Share to pinterest</span>
                                    </li>
                                    <li className="GIUPLKYAEM">
                                        <a href="/">
                                            <TwitterIcon />
                                        </a>
                                        <span className="XKTCCIHOHA">Share to twitter</span>
                                    </li>

                                    <li class Name="GIUPLKYAEM">
                                        <a href="/">
                                            <WhatsappIcon />
                                        </a>
                                        <span className="XKTCCIHOHA">Share to whatsapp</span>
                                    </li>
                                    <li className="GIUPLKYAEM">
                                        <a href="/">
                                            <LinkedlntIcon />
                                        </a>
                                        <span className="XKTCCIHOHA">Share to Linked</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="QOCQSZNRTR" id={`${items.id + '3668609'}`}>
                <div className="FHOCKYYPJY" onClick={handleRemoveModel}>
                    <RemoveIcon />
                </div>
                <SerModel ref={videoRef} dataItem={items} image={userImg} home={VidsModel} />
            </div>
        </div>
    );
}
