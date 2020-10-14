import React from 'react';
import DeviceList from '../deviceList/DeviceList';
import styles from './Devices.module.css';
import Modal from '../modals/modal/Modal';
import InputModal from '../modals/inputModal/InputModal';
import {Redirect} from 'react-router';

export default class Devices extends React.Component {

	state = {
		showAcknowledgeForm: false,
		seeDevices: false,
		seeHome: false,
		devices: [
			{
				name: "Device 1",
				description: "At the left hall, second floor",
				status: "Active",
				date: new Date().toDateString()
			},
			{
				name: "Device 2",
				description: "At the right hall, second floor",
				status: "Trouble",
				date: new Date().toDateString()
			},
			{
				name: "Device 3",
				description: "At the garden",
				status: "Trouble",
				date: new Date().toDateString()
			},
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
				name: "Device 6",
				description: "At the rooftop",
				status: "Trouble",
				date: new Date().toDateString()
			},
			{
				name: "Device 7",
				description: "At the bathroom",
				status: "Active",
				date: new Date().toDateString()
			},
			{
				name: "Device 8",
				description: "At the guest room",
				status: "Active",
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
		if(this.state.seeHome) {
			return <Redirect to="/home"/>
		}
		return <div className={styles.page}>
			<div>
			<button onClick={()=>{this.setState({seeHome: true})}} className={styles.devices}>
				Home
			</button>
			</div>

			<div className={styles.header}>
				<h2>Search Device</h2>
			</div>

			<Modal visible={this.state.popupDevice} onBackgroundClick={() => {
				this.setState({popupDevice: null})
			}}>
				<div className={styles.controlPanel}>
					<div className={styles.text}>
						{(this.state.popupDevice || {}).name || ''}
					</div>
					<div className={styles.spliter}>
						<button className={styles.devices} onClick={()=>{this.setState({enterDescriptionPassword: true})}}>Edit Description</button>
						<button className={styles.devices} onClick={()=>{this.setState({enterTestAlarmPassword: true})}}>Test Alarm</button>
					</div>
				</div>
			</Modal>
			<InputModal visible={this.state.enterDescriptionPassword} prompt={"Enter your password:"} onCancel={()=>{
				this.setState({enterDescriptionPassword: false})
			}} onSubmit={(password)=>{
				// TODO Validate password and set the description
				this.setState({enterDescriptionPassword: false})
			}}/>
			<InputModal visible={this.state.enterTestAlarmPassword} prompt={"Enter your password:"} onCancel={()=>{
				this.setState({enterTestAlarmPassword: false})
			}} onSubmit={(password)=>{
				// TODO Validate password and test the alarm
				this.setState({enterTestAlarmPassword: false})
			}}/>
			<input onChange={(e)=>{this.setState({filter: e.target.value})}} className={styles.search} placeholder="Search Device"/>
			<DeviceList clickable devices={this.state.devices.filter(d => d.name.startsWith(this.state.filter))} onClick={(d) => {
				this.setState({popupDevice: d})
			}}/>
		</div>
	}
}