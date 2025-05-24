import WatchItem from './WatchItem/WatchItem';
import './WatchWatches.css';
import PropTypes from 'prop-types';

export default function WatchWatches({ watches, setWatches }) {
	return (
		<div className='watches-container'>
			{watches.map(watch => (
				<WatchItem key={watch.id} setWatches={setWatches} {...watch} />
			))}
		</div>
	);
}

WatchWatches.propTypes = {
	watches: PropTypes.array.isRequired,
	setWatches: PropTypes.func.isRequired,
};
