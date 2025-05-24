import './WatchInput.css';
import { v4 as uuidv4 } from 'uuid';

export default function WatchInput({ date, setDateInput, setWatches }) {
	const inputHandler = ({ target }) => {
		const { name, value } = target;
		setDateInput(prevInput => ({ ...prevInput, [name]: value }));
	};

	const clickHandler = () => {
		const fakeDate = new Date();
		const utcDate = new Date(
			fakeDate.getTime() + fakeDate.getTimezoneOffset() * 60000
		);
		const resultDate = new Date(utcDate.getTime() + Number(date.time) * 60000);

		const seconds = resultDate.getSeconds();
		const minutes = resultDate.getSeconds();
		let hours = resultDate.getHours();
		hours > 12 ? (hours = hours - 12) : (hours = hours);

		setWatches(prevWatches => [
			...prevWatches,
			{
				id: uuidv4(),
				name: date.name,
				second: seconds,
				minute: minutes,
				hour: hours,
			},
		]);
		setDateInput({ name: '', time: '' });
	};

	return (
		<div className='watch-input'>
			<div className='name'>
				<label className='watch-name' htmlFor='name'>
					Название
				</label>
				<input
					className='watch-input'
					type='text'
					name='name'
					value={date.name}
					onChange={inputHandler}
				/>
			</div>
			<div className='time-zone'>
				<label className='watch-name' htmlFor='time'>
					Временная зона
				</label>
				<input
					className='watch-input'
					type='text'
					name='time'
					value={date.time}
					onChange={inputHandler}
				/>
			</div>
			<button className='watch-btn' type='button' onClick={clickHandler}>
				Добавить
			</button>
		</div>
	);
}
