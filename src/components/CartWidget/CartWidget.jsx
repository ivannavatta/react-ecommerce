import Cart from './assets/bag.png'
import '../CartWidget/CartWidget.css'
const CartWidget = () => {
  return (
    <div>
      <img src={Cart}alt="" className='img-cart' />
      0
    </div>
  )
}

export default CartWidget