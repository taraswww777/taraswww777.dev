import React, {Component, ReactNode} from 'react';
import styles from './tabs.module.scss';
import {Button, ButtonSizes} from '../buttons';

type Tab = {
  title: string,
  code: string,
  content: ReactNode
}

type TabsProps = {
  tabs: Array<Tab>,
  defaultActiveTab?: string
};
type TabsState = {
  activeTab: string
};

export class Tabs extends Component<TabsProps, TabsState> {
  constructor(props: TabsProps) {
    super(props);
    const {defaultActiveTab, tabs} = props;

    this.state = {
      activeTab: defaultActiveTab || tabs[0].code
    }
  }

  isActive = (tabName: string) => (
    this.state.activeTab === tabName
  )

  changeTab = (activeTab: string) => {
    this.setState({activeTab})
  }

  getActiveTab = (): Tab => (
    this.props.tabs.filter(({code}) => this.isActive(code))[0]
  )

  render() {
    const activeTab = this.getActiveTab() || {};
    const {tabs} = this.props;

    return (
      <div className={styles.tabs}>
        <div className={styles.tabs__categories}>
          {tabs.map(({code, title}) => (
            <div
              key={code}
              className={[
                styles.tabs__category,
                this.isActive(code) && styles['tabs__category--active'],
              ].join(' ')}
            >
              <Button
                title={title + this.isActive(code)}
                isActive={this.isActive(code)}
                size={ButtonSizes.medium}
                onClick={() => this.changeTab(code)}
              />
            </div>
          ))}
        </div>

        <div key={activeTab.code} className={styles.tabs__content}>
          {activeTab.content}
        </div>
      </div>
    );
  }
}
