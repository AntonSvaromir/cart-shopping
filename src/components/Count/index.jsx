import { useContext } from 'react';
import './style.scss'
import { AppContext } from '../Cart';

function Count({count, id}) {
	const {increase, decrease, changeValue} = useContext(AppContext)
   return (
			<div className='count'>
				<div className='count__box'>
					<input
						onChange={(evt) => changeValue(id, +evt.target.value)}
						type='number'
						className='count__input'
						min='1'
						max='100'
						value={count}
					/>
				</div>
				<div className='count__controls'>
					<button type='button' className='count__up' onClick={() => increase(id)}>
						<img src='./../img/icons/icon-up.svg' alt='Increase' />
					</button>
					<button type='button' className='count__down' onClick={() => decrease(id)}>
						<img src='./../img/icons/icon-down.svg' alt='Decrease' />
					</button>
				</div>
			</div>
		)
}

export default Count;