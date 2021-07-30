import styles from './buttons.module.scss';
import {MouseEventHandler} from 'react';
import {ComponentProps} from '../../types/common';

export enum ButtonTypes {
    mini = 'mimi',
    small = 'small',
    medium = 'medium',
    large = 'large',
}

export const Button = ({
    type = ButtonTypes.medium,
    onClick,
    title = '',
    children
}: ComponentProps & {
    type?: ButtonTypes
    title?: string,
    onClick: MouseEventHandler
}) => (
    <button
        onClick={onClick}
        title={title}
        className={[
            styles.btn,
            styles[`btn--${type}`]
        ].join(' ')}
    >{children || title}</button>
);
