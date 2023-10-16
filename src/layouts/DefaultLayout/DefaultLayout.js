import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Header from '~/layouts/components/Header';
import Sidebar from '~/layouts/components/Sidebar';
import styles from './DefaultLayout.module.scss';
import { useEffect, useState } from 'react';
import { BackToTop } from '~/components/Icons';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    const [scrollY, setScrollY] = useState(0);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScrollY(window.scrollY);
        });
    }, []);

    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content ZFBNXEFLPF')}>{children}</div>
            </div>
            {scrollY >= 200 ? (
                <button className={cx('RBQNBZUJVG')} onClick={() => window.scrollTo(0, 0, { behavior: 'smooth' })}>
                    <BackToTop />
                </button>
            ) : null}
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
