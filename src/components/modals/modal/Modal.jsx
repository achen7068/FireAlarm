import React from 'react';
import style from './Modal.module.css';

export default class Modal extends React.Component {
	render() {
		return this.props.visible ? <div className={style.container}>
			<div className={style.background} onClick={this.props.onBackgroundClick}/>
			<div className={style.modal}>
				{this.props.children}
			</div>
		</div> : <></>
	}
}