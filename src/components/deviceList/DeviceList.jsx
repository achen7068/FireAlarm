import React from 'react';
import styles from './DeviceList.module.css';

export default class DeviceList extends React.Component {
	
	render() {
		return <table className={styles.table}>
			<tr>
				<th scope="col">Name</th>
				<th scope="col">Description</th>
				<th scope="col">Status</th>
				<th scope="col">Date</th>
				<th scope="col">Time</th>
			</tr>
			{
				this.props.devices.map(device => {
					return <tr className={this.props.clickable ? [styles.clickable, styles.tr].join(' ') : ''} onClick={() => {
						this.props.onClick && this.props.onClick(device);
					}}>
						<td className={styles.td}>{device.name}</td>
						<td className={styles.td}>{device.description}</td>
						<td className={styles.td}>{device.status}</td>
						<td className={styles.td}>{device.date}</td>
						<td className={styles.td}>{device.time}</td>
					</tr>
				})
			}
		</table>
	}
}