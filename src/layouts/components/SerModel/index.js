import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import Search from '../Search';
import { Tabs } from 'antd';
import classNames from 'classnames/bind';
import styles from './SerModel.module.scss';

import {
    BookmarkIcon,
    FaceBookIcon,
    LikeIcon,
    LinkedlntIcon,
    PinterestIcon,
    ShareIcon,
    TwitterIcon,
    WhatsappIcon,
} from '~/components/Icons';

import userImg from '../../../assets/images/ava.jpg';
import './index.scss';

const cx = classNames.bind(styles);

const SerModel = ({ props, image, dataItem }, ref) => {
    const [follow, setFollow] = useState();
    const [like, setLike] = useState();
    const [note, setNote] = useState();
    const [isPlaying, setIsPlaying] = useState(false);
    const items = [
        {
            key: '1',
            label: 'Bình luận',
            children: (
                <>
                    {[0, 1, 2, 3, 4, 5, 6, 8, 9].map((item, key) => {
                        return (
                            <div key={key}>
                                <div style={{ display: 'flex' }} className="MDHOCQRSJO">
                                    <div style={{ width: 36, height: 36 }} className="RJTDPMNNBR">
                                        <img style={{ width: '100%', height: 'auto' }} src={userImg} alt="" />
                                    </div>
                                    <div className="VUFNFWGRHM">
                                        <div style={{ display: 'flex' }} className="HFNAYZPKUK">
                                            <h3 style={{ fontSize: 14 }}>User_name</h3>
                                        </div>
                                        <div className="IYSRZAHLMI">
                                            <span style={{ fontSize: 14 }}> Comment</span>
                                        </div>
                                    </div>
                                    <div className="TXRZJYHQUH">
                                        <LikeIcon />
                                        <span> 20</span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </>
            ),
        },
        {
            key: '2',
            label: 'Video của nhà sáng tạo ',
            children: 'Content of Tab Pane 2',
        },
    ];
    const videoRef = useRef();

    useImperativeHandle(ref, () => ({
        play() {
            if (!isPlaying) {
                videoRef.current.currentTime = 0;
            }
            videoRef.current.play();
            setIsPlaying(true);
        },
        pause() {
            // console.log('pause');
            videoRef.current.pause();
            setIsPlaying(false);
        },
    }));

    return (
        <div className={cx('wrapper WIQDZWTNJL')}>
            <div className="MEVRTIFZLG">
                <div className="NBUQXNHXDC">
                    <Search />
                </div>
                <div className="XNNOASVYSK">
                    <video
                        width="336px"
                        height="600px"
                        controls
                        loop
                        preload="auto"
                        ref={videoRef}
                        src={dataItem.attributes.vids.data.attributes.url}
                        id={dataItem.id}
                    ></video>
                </div>
            </div>
            <div className="QSAICBOUFD">
                <div style={{ display: 'flex' }} className="MDHOCQRSJO">
                    <div className="RJTDPMNNBR">
                        <img style={{ width: '100%', height: 'auto' }} src={image} alt="" />
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
                    <div className="OWGTYJCPOZ" onClick={() => setFollow(!follow)}>
                        <div className={`DBLCIGAMRJ ${follow ? 'QAGRLSYAWS' : ''}`}>
                            {follow ? 'Unfollow' : 'Follow'}
                        </div>
                    </div>
                </div>
                <div className="QGHZCMCVTV">
                    <div className="NDZSKBBKNG">
                        <div className="UDVGGHLYTL" onClick={() => setLike(!like)}>
                            <LikeIcon className={`DBLCIGAMRJ ${like ? 'UDYEWWFBCY' : ''}`} />
                        </div>
                        <span>186k</span>
                    </div>
                    <div className="NDZSKBBKNG">
                        <div className="UDVGGHLYTL" onClick={() => setNote(!note)}>
                            <BookmarkIcon className={`DBLCIGAMRJ ${note ? 'TKRYPLLBPD' : ''}`} />
                        </div>
                        <span>81114</span>
                    </div>
                    <div className="NDZSKBBKNG STLDBWFCPT">
                        <div className="DIRGSYJDJS">
                            <div className="UDVGGHLYTL ">
                                <ShareIcon />
                            </div>
                            <span>276</span>
                        </div>

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

                                <li className="GIUPLKYAEM">
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
                <Tabs defaultActiveKey="1" items={items} />
            </div>
        </div>
    );
};
export default forwardRef(SerModel);
