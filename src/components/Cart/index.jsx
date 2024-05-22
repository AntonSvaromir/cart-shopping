import CartHeader from '../CartHeader';
import Product from '../Product';
import CartFooter from '../CartFooter';

function Cart() {
   return (
			<section className='cart'>
				<CartHeader />

				<Product />

				<CartFooter />
			</section>
		)
}

export default Cart;