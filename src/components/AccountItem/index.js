import React from 'react';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://xuanchinh97.cf/favicon.jpg" alt="avatar" />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Trịnh Xuân Chinh</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>xuanchinh97</span>
            </div>
        </div>
    );
}

export default AccountItem;
