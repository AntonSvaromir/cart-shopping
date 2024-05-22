import CartHeader from '../CartHeader'
import Product from '../Product'
import CartFooter from '../CartFooter'
import data from '../../data'
import { useEffect, useState } from 'react'

function Cart() {
	// Данные по товарам
	const [cart, setCart] = useState(data)
	// Общее количество выбранных товаров
	const [total, setTotal] = useState({})
	// Обновление количества выбранных товаров
	useEffect(() => {
		setTotal({
			price: cart.reduce((prev, curr) => prev + curr.priceTotal, 0),
			count: cart.reduce((prev, curr) => prev + curr.count, 0),
		})
	}, [cart])
	// Кнопка удалить
	const deleteProduct = (id) => {
		setCart((cart) => cart.filter((product) => id !== product.id))
	}
	// Увеличение количества товара
	const increase = (id) => {
		setCart((cart) => {
			return cart.map((product) => {
				if (product.id === id) {
					return {
						...product,
						count: ++product.count,
						priceTotal: product.count * product.price,
					}
				} else {
					return product
				}
			})
		})
	}
	// Уменьшение количества товара
	const changeValue = (id, value) => {
		setCart((cart) => {
			return cart.map((product) => {
				if (product.id === id) {
					return {
						...product,
						count: value,
						priceTotal: value * product.price,
					}
				} else {
					return product
				}
			})
		})
	}
	const decrease = (id) => {
		setCart((cart) => {
			return cart.map((product) => {
				if (product.id === id) {
					return {
						...product,
						count: product.count > 1 ? --product.count : 1,
						priceTotal: product.count * product.price,
					}
				} else {
					return product
				}
			})
		})
	}

	// Отрисовка карточек товара
	const products = cart.map((product) => {
		return (
			<Product
				key={product.id}
				product={product}
				deleteProduct={deleteProduct}
				increase={increase}
				decrease={decrease}
				changeValue={changeValue}
			/>
		)
	})

	return (
		<section className='cart'>
			<CartHeader />

			{products}

			<CartFooter total={total} />
		</section>
	)
}

export default Cart
