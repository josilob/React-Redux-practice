import React from 'react';
import { connect } from 'react-redux';

const SongList = (props) => {
	console.log(props.songs);
	return <div>Song List</div>;
};
const mapStateToProps = (state) => {
	return { songs: state.songs };
};
export default connect(mapStateToProps)(SongList);
