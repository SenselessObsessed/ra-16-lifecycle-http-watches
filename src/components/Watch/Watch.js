import { useState } from 'react';
import WatchInput from '../WatchInput/WatchInput';
import WatchWatches from '../WatchWatches/WatchWatches';
import { v4 as uuidv4 } from 'uuid';

export default function Watch() {
	const [watches, setWatches] = useState([
		{ id: uuidv4(), name: 'Moscow', second: 30, minute: 59, hour: 12 },
	]);
	const [dateInput, setDateInput] = useState({ name: '', time: '' });

	return (
		<>
			<WatchInput
				date={dateInput}
				setDateInput={setDateInput}
				setWatches={setWatches}
			/>
			<WatchWatches
				dateInput={dateInput}
				watches={watches}
				setWatches={setWatches}
			/>
		</>
	);
}
