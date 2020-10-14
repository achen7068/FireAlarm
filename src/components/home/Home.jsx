import React from 'react';
import styles from './Home.module.css';
import Modal from '../modals/modal/Modal';
import { Redirect } from 'react-router';
import DeviceList from '../deviceList/DeviceList';

export default class Home extends React.Component {

	state = {
		showAcknowledgeForm: false,
		seeDevices: false,
		devices: [
			{
				name: "Device 4",
				description: "At the theater room",
				status: "Trouble",
				date: new Date().toDateString()
			},
			{
				name: "Device 5",
				description: "At the kitchen",
				status: "Trouble",
				date: new Date().toDateString()
			},
			{
				name: "Device 9",
				description: "At the west hall, second floor",
				status: "Active",
				date: new Date().toDateString()
			},
			{
				name: "Device 10",
				description: "At the east hall, second floor",
				status: "Trouble",
				date: new Date().toDateString()
			}
		]
	}

	render() {
		if(this.state.seeDevices) {
			return <Redirect to="/devices"/>
		}
		return <div className={styles.page}>
			<div className={styles.imageContainer}>
				<img src="/FMS_Logo.svg"/>
			</div>
			<button onClick={()=>{this.setState({seeDevices: true})}} className={styles.devices}>
				See Devices
			</button>
			<div className={styles.header}>
				Alert List
				<button onClick={()=>{this.setState({alertDevice: {
					name: "Device 10",
					description: "At the east hall, second floor",
					status: "Trouble",
					date: new Date().toDateString()
				}})}} className={styles.acknowledgedButton}>Acknowledged</button>
			</div>
			<DeviceList devices={this.state.devices}/>
			<Modal visible={this.state.alertDevice}>
				<div className={styles.alert}>
					<div className={styles.alertHeader}>
						WARNING!
					</div>
					<div className={styles.alertText}>
						Fire reported by {(this.state.alertDevice || {}).name} {(this.state.alertDevice || {}).description}
					</div>
					<div className={styles.alertSpacing}></div>
					<button className={styles.alertButton} onClick={()=>{
						this.setState({alertDevice: null})
					}}>OK</button>
				</div>
			</Modal>
		</div>
	}
}