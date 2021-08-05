import React, {Component, ReactNode} from 'react';
import styles from './alerts.module.scss';

export enum AlertTypes {
  none = 'none',
  danger = 'danger',
  warning = 'warning',
  success = 'success',
  info = 'info',
}

type AlertState = {
  isDeleted: boolean,
  isOpen: boolean,
}
type AlertProps = {
  type?: AlertTypes;
  title?: ReactNode;
  content: ReactNode;
}

export class Alert extends Component<AlertProps, AlertState> {
  state = {
    isOpen: true,
    isDeleted: false
  }

  onClose = () => {
    this.setState({isOpen: false});
    setTimeout(() => this.setState({isDeleted: true}), 1000);
  }

  render() {
    const {title, content, type = AlertTypes.warning} = this.props;
    const {isOpen} = this.state;

    return (
      <div
        className={[
          styles.alert,
          styles[`alert--${type}`],
          !isOpen && styles[`alert--closed`]
        ].join(' ')}
      >
        <button className={styles.alert__close} onClick={this.onClose}>×</button>
        {title && <div className={styles.alert__title}>{title}</div>}
        <div className={styles.alert__content}>{content}</div>
      </div>
    );
  }

}
