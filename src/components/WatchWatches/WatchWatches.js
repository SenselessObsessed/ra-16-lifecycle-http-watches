import WatchItem from './WatchItem/WatchItem';
import './WatchWatches.css';

export default function WatchWatches({ watches, setWatches }) {
	return (
		<div className='watches-container'>
			{watches.map(watch => (
				<WatchItem key={watch.id} setWatches={setWatches} {...watch} />
			))}
		</div>
	);
}
