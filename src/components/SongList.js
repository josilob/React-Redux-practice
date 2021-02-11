import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

const SongList = (props) => {
	const renderList = () => {
		return props.songs.map((song) => {
			return (
				<div className='item' key={song.title}>
					<div className='right floated content'>
						<div
							className='ui button primary'
							onClick={() => {
								props.selectSong(song);
							}}>
							Select
						</div>
					</div>
					<div className='content'>
						{song.title}
						<div>
							<b>{song.title === props.favoriteTitle && 'Favorite!'}</b>
						</div>
					</div>
				</div>
			);
		});
	};

	return <div className='ui divided list'>{renderList()}</div>;
};

const mapStateToProps = (state) => {
	return { songs: state.songs, favoriteTitle: state.favoriteTitle };
};

export default connect(mapStateToProps, { selectSong })(SongList);
