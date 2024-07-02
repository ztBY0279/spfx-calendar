import * as React from 'react';
import styles from './Calendar.module.scss';
import type { ICalendarProps } from './ICalendarProps';
//import { escape } from '@microsoft/sp-lodash-subset';
import App from './App';
import MyCalendar from './MyCalendar';
import CalendarFull from './CalendarFull';
export default class Calendar extends React.Component<ICalendarProps, {}> {
  public render(): React.ReactElement<ICalendarProps> {
    const {
     // description,
      //isDarkTheme,
      //environmentMessage,
      hasTeamsContext,
      //userDisplayName
    } = this.props;

    return (
      <section className={`${styles.calendar} ${hasTeamsContext ? styles.teams : ''}`}>
        <h1 style={{textAlign:"center"}}>Calendars in SPFX</h1>
        {/* <div className={styles.welcome}>
          <img alt="" src={isDarkTheme ? require('../assets/welcome-dark.png') : require('../assets/welcome-light.png')} className={styles.welcomeImage} />
          <h2>Well done, {escape(userDisplayName)}!</h2>
          <div>{environmentMessage}</div>
          <div>Web part property value: <strong>{escape(description)}</strong></div>
        </div> */}
        {/* <div>
          <h3>Welcome to SharePoint Framework!</h3>
          <p>
            The SharePoint Framework (SPFx) is a extensibility model for Microsoft Viva, Microsoft Teams and SharePoint. It&#39;s the easiest way to extend Microsoft 365 with automatic Single Sign On, automatic hosting and industry standard tooling.
          </p>
          <h4>Learn more about SPFx development:</h4>
          <ul className={styles.links}>
            <li><a href="https://aka.ms/spfx" target="_blank" rel="noreferrer">SharePoint Framework Overview</a></li>
            <li><a href="https://aka.ms/spfx-yeoman-graph" target="_blank" rel="noreferrer">Use Microsoft Graph in your solution</a></li>
            <li><a href="https://aka.ms/spfx-yeoman-teams" target="_blank" rel="noreferrer">Build for Microsoft Teams using SharePoint Framework</a></li>
            <li><a href="https://aka.ms/spfx-yeoman-viva" target="_blank" rel="noreferrer">Build for Microsoft Viva Connections using SharePoint Framework</a></li>
            <li><a href="https://aka.ms/spfx-yeoman-store" target="_blank" rel="noreferrer">Publish SharePoint Framework applications to the marketplace</a></li>
            <li><a href="https://aka.ms/spfx-yeoman-api" target="_blank" rel="noreferrer">SharePoint Framework API reference</a></li>
            <li><a href="https://aka.ms/m365pnp" target="_blank" rel="noreferrer">Microsoft 365 Developer Community</a></li>
          </ul>
        </div> */}
        <p style={{color:"pink"}}>ang-desing library calendar</p>
        <App/>
        <div style={{marginTop:"200px"}}/>
        <MyCalendar/>
        <h1>calendarFull is given below</h1>
        <CalendarFull/>
      </section>
    );
  }
}
