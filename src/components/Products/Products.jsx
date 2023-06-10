import { useDispatch, useSelector } from 'react-redux';
import { add } from '../../store/cartSlice';
import { STATUSES } from '../../store/productSlice';

const Products = () => {
    const dispatch = useDispatch();
    const { data: products, status } = useSelector((state) => state.product);
    // const [products, setProducts] = useState([]);



    const handleAdd = (product) => {
        dispatch(add(product));
    };

    if (status === STATUSES.LOADING) {
         return <h4 style={{textAlign: 'center', padding:'2rem'}}>Loading....</h4>;
    }

    if (status === STATUSES.ERROR) {
         return <h4 style={{textAlign: 'center', padding:'2rem'}}>Something went wrong!</h4>;
    }
    return (
        <div className="productsWrapper">
            {products.map((product) => (
                <div className="card" key={product.id}>
                    <img src={product.image} alt="" />
                    <h4>{product.title}</h4>
                    <h5>{product.price}</h5>
                    <button onClick={() => handleAdd(product)} className="btn">
                        Add to cart
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Products;
