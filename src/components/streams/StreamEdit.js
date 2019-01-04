import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends Component {
	// in case user directly go to the link, we need to fetch the data individually
	componentDidMount() {
		this.props.fetchStream(this.props.match.params.id);
	}

	onSubmit = (formValues) => {
		this.props.editStream(this.props.match.params.id, formValues);
	}

	render() {
		if (!this.props.stream) {
			return <div>Loading...</div>
		}
		return (
			<div>
				<h3>Edit a Stream</h3>
				<StreamForm 
					// title and description are from form name property in StreamForm
					// initialValues are specific name provided by Redux Form 
					initialValues={_.pick(this.props.stream, 'title', 'description')} 
					onSubmit={this.onSubmit}/>
			</div>
		);
	}
};

// ownProps lets mapStateToProps use properties from StreamEdit
const mapStateToProps = (state, ownProps) => {
	return { stream: state.streams[ownProps.match.params.id] }
};

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);