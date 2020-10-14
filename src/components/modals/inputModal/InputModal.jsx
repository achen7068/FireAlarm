import React from 'react';
import Modal from '../modal/Modal';
import styles from './InputModal.module.css';

export default class InputModal extends React.Component {
	
	state = {
		value: ""
	}
	
	render() {
		return <Modal visible={this.props.visible}>
			<div className={styles.container}>
				<p>
					{this.props.prompt}
				</p>
				<input onChange={(e)=>{this.setState({value: e.target.value})}}/>
				<button onClick={()=>{this.props.onSubmit(this.state.value)}}>Submit</button>
				<button onClick={this.props.onCancel}>Cancel</button>
			</div>
		</Modal>
	}
}