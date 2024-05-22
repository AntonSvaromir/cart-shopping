import priceFormatter from '../../utils/priceFormatter';
import './style.scss'

function CartFooter({total}) {
	const { count, price} = total
   return (
			<footer className='cart-footer'>
				<div className='cart-footer__count'>{count} ед.</div>
				<div className='cart-footer__price'>
					{priceFormatter(price)} руб.
				</div>
			</footer>
		)
}

export default CartFooter;