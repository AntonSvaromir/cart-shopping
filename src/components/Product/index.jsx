import priceFormatter from '../../utils/priceFormatter'
import ButtonDelete from '../ButtonDelete'
import Count from '../Count'
import './style.scss'

function Product({ product }) {
	const { id, img, title, priceTotal, count } = product

	
	return (
		<section className='product'>
			<div className='product__img'>
				<img src={`./../img/products/${img}`} alt={title} />
			</div>
			<div className='product__title'>{title}</div>
			<div className='product__count'>
				<Count
					count={count}
					id={id}
				/>
			</div>
			<div className='product__price'>
				{priceFormatter(priceTotal)} руб.
			</div>
			<div className='product__controls'>
				<ButtonDelete id={id} />
			</div>
		</section>
	)
}

export default Product
