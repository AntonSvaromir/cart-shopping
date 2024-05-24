import CartHeader from '../CartHeader'
import Product from '../Product'
import CartFooter from '../CartFooter'
import { useEffect, useState } from 'react'

function Cart() {
	// Данные по товарам
	const [cart, setCart] = useState(null)
	// Общее количество выбранных товаров
	const [total, setTotal] = useState(null)
	// Флаг для обновления запроса в базу
	const [fetchData, setFetchData] = useState(true)

	// Получение данных о товарах
	useEffect(() => {
		fetch('http://localhost:8000/products')
		.then((res) => res.json())
		.then((data) => setCart(data))
	},[fetchData])
	// Обновление количества выбранных товаров
	useEffect(() => {
		if (cart) {
		setTotal({
			price: cart.reduce((prev, curr) => prev + curr.priceTotal, 0),
			count: cart.reduce((prev, curr) => prev + curr.count, 0),
		})
	}
	}, [cart])

	// Кнопка удалить
	const deleteProduct = (id) => {
		// setCart((cart) => cart.filter((product) => id !== product.id))
		fetch('http://localhost:8000/products/' + id, {
			method: 'DELETE'
		}).then((res) => {
			res.ok && setFetchData((value) => !value)
		})
	}
	// Увеличение количества товара
	const increase = (id) => {
		// Ищем товар и изменяем 
		const product = cart.find((product) => id === product.id)
		const data = {
			...product,
			count: ++product.count,
			priceTotal: product.count * product.price,
		}
		// Передаём на сервер изменённые данные 
		fetch('http://localhost:8000/products/' + id, {
			method: 'PUT',
			headers: { 'Content-type': 'application/json' },
			body: JSON.stringify(data),
		}).then((res) => {
			res.ok && setFetchData((value) => !value)
		})
		
	}
	// Уменьшение количества товара	
	const decrease = (id) => {
		// Ищем товар и изменяем
		const product = cart.find((product) => id === product.id)
		const data = {
			...product,
			count: product.count > 1 ? --product.count : 1,
			priceTotal: product.count * product.price,
		}
		// Передаём на сервер изменённые данные
		fetch('http://localhost:8000/products/' + id, {
			method: 'PUT',
			headers: { 'Content-type': 'application/json' },
			body: JSON.stringify(data),
		}).then((res) => {
			res.ok && setFetchData((value) => !value)
		})
		
		
	}
	// Установка количества товара 
	const changeValue = (id, value) => {
		// Ищем товар и изменяем
		const product = cart.find((product) => id === product.id)
		const data = {
			...product,
			count: value,
			priceTotal: value * product.price,
		}
		// Передаём на сервер изменённые данные
		fetch('http://localhost:8000/products/' + id, {
			method: 'PUT',
			headers: { 'Content-type': 'application/json' },
			body: JSON.stringify(data),
		}).then((res) => {
			res.ok && setFetchData((value) => !value)
		})
		
	}

	return (
		<section className='cart'>
			<CartHeader />

			{cart &&
				cart.map((product) => {
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
				})}

			{total && <CartFooter total={total} />}
		</section>
	)
}

export default Cart
