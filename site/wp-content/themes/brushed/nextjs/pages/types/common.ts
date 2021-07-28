import {ReactElement} from 'react';

export type ComponentProps = {
    children:
        Array<ReactElement<any, any>> |
        ReactElement<any, any> |
        Node | string
};
