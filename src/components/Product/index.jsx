import priceFormatter from '../../utils/priceFormatter'
import ButtonDelete from '../ButtonDelete'
import Count from '../Count'
import './style.scss'

function Product({ product, deleteProduct, increase, decrease, changeValue }) {
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
					decrease={decrease}
					increase={increase}
					changeValue={changeValue}
					id={id}
				/>
			</div>
			<div className='product__price'>
				{priceFormatter(priceTotal)} руб.
			</div>
			<div className='product__controls'>
				<ButtonDelete id={id} deleteProduct={deleteProduct} />
			</div>
		</section>
	)
}

export default Product
