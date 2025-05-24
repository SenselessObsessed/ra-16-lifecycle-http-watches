import { useEffect } from 'react';
import PropTypes from 'prop-types';

export default function WatchItem({
	id,
	name,
	second,
	minute,
	hour,
	setWatches,
}) {
	let timeout;
	useEffect(() => {
		timeout = setTimeout(() => {
			setWatches(prevWatches => {
				const watchId = prevWatches.findIndex(watch => watch.id === id);
				if (prevWatches[watchId].second === 59) {
					prevWatches[watchId].second = 0;
					if (prevWatches[watchId].minute === 59) {
						prevWatches[watchId].minute = 0;
						if (prevWatches[watchId].hour === 12) {
							prevWatches[watchId].hour = 0;
						} else {
							prevWatches[watchId].hour = prevWatches[watchId].hour + 1;
						}
					} else {
						prevWatches[watchId].minute = prevWatches[watchId].minute + 1;
					}
				} else {
					prevWatches[watchId].second = prevWatches[watchId].second + 1;
				}
				return [...prevWatches];
			});
		}, 1000);

		return () => {
			clearTimeout(timeout);
		};
	}, [second]);

	const clickHandler = () => {
		setWatches(prevWatches => prevWatches.filter(watch => watch.id !== id));
	};

	return (
		<div className='watch-item'>
			<h3 className='watch-name-clock'>{name}</h3>
			<div
				className='watch-item-seconds'
				style={{ transform: `rotate(${second * 6 - 90}deg)` }}
			></div>
			<div
				className='watch-item-minutes'
				style={{ transform: `rotate(${minute * 6 - 90}deg)` }}
			>
				<span className='watch-item-arrow-minutes'>➤</span>
			</div>
			<div
				className='watch-item-hours'
				style={{ transform: `rotate(${hour * 30 - 90}deg)` }}
			>
				<span className='watch-item-arrow-hours'>➤</span>
			</div>
			<button className='watch-remove' type='button' onClick={clickHandler}>
				✖
			</button>
		</div>
	);
}

WatchItem.propTypes = {
	setWatches: PropTypes.func.isRequired,
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	second: PropTypes.number.isRequired,
	minute: PropTypes.number.isRequired,
	hour: PropTypes.number.isRequired,
};
