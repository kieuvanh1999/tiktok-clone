import classNames from 'classnames/bind';
import './header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import config from '~/config';
import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Menu from '~/components/Popper/Menu';
import { InboxIcon, MessageIcon, UploadIcon, CaretUpIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';
import ava from '../../../assets/images/ava.jpg';
import { useEffect, useRef, useState } from 'react';

import { Tabs } from 'antd';

import userImg from '../../../assets/images/ava.jpg';
import blogImg from '../../../assets/images/no-image.png';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const [show, setShow] = useState(false);
    const currentUser = true;

    // Handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // Handle change language
                break;
            default:
        }
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@hoaa',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    const onChange = (key) => {
        console.log(key);
    };

    const items = [
        {
            key: '1',
            label: 'Tất cả hoạt động',
            children: (
                <>
                    <div>
                        <h2>Hôm nay</h2>
                        <div style={{ display: 'flex' }} className="MDHOCQRSJO">
                            <div style={{ width: 36, height: 36 }} className="RJTDPMNNBR">
                                <img style={{ width: '100%', height: 'auto' }} src={userImg} alt="" />
                            </div>
                            <div className="VUFNFWGRHM">
                                <div style={{ display: 'flex' }} className="HFNAYZPKUK">
                                    <h3 style={{ fontSize: 14 }}>User_name, userImg và 276 ....</h3>
                                </div>
                                <div className="IYSRZAHLMI">
                                    <span style={{ fontSize: 14 }}> đã thích video của bạn. 5h </span>
                                </div>
                            </div>
                            <img style={{ widows: 42, height: 56, marginLeft: 10 }} src={blogImg} alt="" />
                        </div>
                    </div>
                    <div>
                        <h2>Tuần này</h2>
                        <div style={{ display: 'flex' }} className="MDHOCQRSJO">
                            <div style={{ width: 36, height: 36 }} className="RJTDPMNNBR">
                                <img style={{ width: '100%', height: 'auto' }} src={userImg} alt="" />
                            </div>
                            <div className="VUFNFWGRHM">
                                <div style={{ display: 'flex' }} className="HFNAYZPKUK">
                                    <h3 style={{ fontSize: 14 }}>User_name, userImg và 276 ....</h3>
                                </div>
                                <div className="IYSRZAHLMI">
                                    <span style={{ fontSize: 14 }}> đã thích video của bạn. 5h </span>
                                </div>
                            </div>
                            <img style={{ widows: 42, height: 56, marginLeft: 10 }} src={blogImg} alt="" />
                        </div>
                    </div>
                    <div>
                        <h2>Mới</h2>
                        <div style={{ display: 'flex' }} className="MDHOCQRSJO">
                            <div style={{ width: 36, height: 36 }} className="RJTDPMNNBR">
                                <img style={{ width: '100%', height: 'auto' }} src={userImg} alt="" />
                            </div>
                            <div className="VUFNFWGRHM">
                                <div style={{ display: 'flex' }} className="HFNAYZPKUK">
                                    <h3 style={{ fontSize: 14 }}>User_name, userImg và 276 ....</h3>
                                </div>
                                <div className="IYSRZAHLMI">
                                    <span style={{ fontSize: 14 }}> đã thích video của bạn. 5h </span>
                                </div>
                            </div>
                            <img style={{ widows: 42, height: 56, marginLeft: 10 }} src={blogImg} alt="" />
                        </div>
                    </div>
                    <div>
                        <h2>Tháng này</h2>
                        <div style={{ display: 'flex' }} className="MDHOCQRSJO">
                            <div style={{ width: 36, height: 36 }} className="RJTDPMNNBR">
                                <img style={{ width: '100%', height: 'auto' }} src={userImg} alt="" />
                            </div>
                            <div className="VUFNFWGRHM">
                                <div style={{ display: 'flex' }} className="HFNAYZPKUK">
                                    <h3 style={{ fontSize: 14 }}>User_name, userImg và 276 ....</h3>
                                </div>
                                <div className="IYSRZAHLMI">
                                    <span style={{ fontSize: 14 }}> đã thích video của bạn. 5h </span>
                                </div>
                            </div>
                            <img style={{ widows: 42, height: 56, marginLeft: 10 }} src={blogImg} alt="" />
                        </div>
                    </div>
                    <div>
                        <h2>Trước đây</h2>
                        {[0, 1, 2, 3, 4, 5, 6, 8, 9].map((item, key) => {
                            return (
                                <div style={{ display: 'flex' }} className="MDHOCQRSJO" key={key}>
                                    <div style={{ width: 36, height: 36 }} className="RJTDPMNNBR">
                                        <img style={{ width: '100%', height: 'auto' }} src={userImg} alt="" />
                                    </div>
                                    <div className="VUFNFWGRHM">
                                        <div style={{ display: 'flex' }} className="HFNAYZPKUK">
                                            <h3 style={{ fontSize: 14 }}>User_name, userImg và 276 ....</h3>
                                        </div>
                                        <div className="IYSRZAHLMI">
                                            <span style={{ fontSize: 14 }}> đã thích video của bạn. 5h </span>
                                        </div>
                                    </div>
                                    <img style={{ widows: 42, height: 56, marginLeft: 10 }} src={blogImg} alt="" />
                                </div>
                            );
                        })}
                    </div>
                </>
            ),
        },
        {
            key: '2',
            label: 'Thích',
            children: 'Content of Tab Pane 2',
        },
        {
            key: '3',
            label: 'Bình luận',
            children: 'Content of Tab Pane 3',
        },
        {
            key: '4',
            label: 'Lượt nhắc đên và lượt gắn thẻ',
            children: 'Lượt nhắc đên và lượt gắn thẻ',
        },
        {
            key: '5',
            label: 'Follower',
            children: 'Follower',
        },
    ];
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="Tiktok" />
                </Link>
                <Search />
                <div className={cx('ZKAJTNCBRJ')}>
                    <div className={cx('actions')}>
                        {currentUser ? (
                            <>
                                <Tippy delay={[0, 50]} content="Upload video" placement="bottom">
                                    <button className={cx('action-btn')}>
                                        <UploadIcon />
                                    </button>
                                </Tippy>
                                <Tippy delay={[0, 50]} content="Message" placement="bottom">
                                    <button className={cx('action-btn')}>
                                        <MessageIcon />
                                    </button>
                                </Tippy>
                                <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                                    <button className={cx('action-btn')} onClick={() => setShow(!show)}>
                                        <InboxIcon />
                                        <span className={cx('badge')}>12</span>
                                    </button>
                                </Tippy>
                            </>
                        ) : (
                            <>
                                <Button text>Upload</Button>
                                <Button primary>Log in</Button>
                            </>
                        )}

                        <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                            {currentUser ? (
                                <Image className={cx('user-avatar')} src={ava} alt="Nguyen Van A" />
                            ) : (
                                <button className={cx('more-btn')}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </button>
                            )}
                        </Menu>
                    </div>
                    <div className={cx('PUNWAWGUBF')}>
                        <div className={`${cx('DBLCIGAMRJ')} ${show ? `${cx('RBBOOAIYKV')}` : ''}`}>
                            <div className={cx('WJNTCMTSFI')}>
                                <CaretUpIcon />
                            </div>
                            <div className={cx('HJFNBTDSWK')}>
                                <div className="TGZXPWMQWL"></div>
                                <h1 className="VBYBUYONNS">Thông báo</h1>
                                <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
