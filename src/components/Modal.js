import React from 'react';
import ReactDOM from 'react-dom';

// stopPropagation prevents dismissing modal when clicking inside of the modal
const Modal = ({ title, content, actions, onDismiss }) => {
	return ReactDOM.createPortal(
		<div onClick={onDismiss} className="ui dimmer modals visible active">
			<div onClick={(event) => event.stopPropagation()} className="ui standard modal visible active">
				<div className="header">{title}</div>
				<div className="content">{content}</div>
				<div className="actions">
					{actions}
				</div>
			</div>
		</div>,
		document.querySelector('#modal')
	);
}

export default Modal;