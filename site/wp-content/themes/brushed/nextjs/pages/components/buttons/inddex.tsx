import styles from './buttons.module.scss';
import {MouseEventHandler} from 'react';

export enum ButtonTypes {
    mini = 'mimi',
    small = 'small',
    medium = 'medium',
    large = 'large',
}

export const Button = ({
    type = ButtonTypes.medium,
    onClick,
    title
}: {
    type?: ButtonTypes
    title: string,
    onClick: MouseEventHandler
}) => (
    <button
        onClick={onClick}
        className={[
            styles.btn,
            styles[`btn--${type}`]
        ].join(' ')}
    >{title}</button>
);
