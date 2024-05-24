import { useContext } from "react";
import { AppContext } from "../Cart";

function ButtonDelete({id}) {
	const {deleteProduct} = useContext(AppContext)
   return (
			<button type='button' onClick={() => deleteProduct(id)}>
				<img src='./../img/icons/cross.svg' alt='Delete' />
			</button>
		)
}

export default ButtonDelete;