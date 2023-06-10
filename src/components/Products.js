import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/cartSlice';
import { fetchProducts } from '../store/productSlice';
import { STATUSES } from '../store/productSlice';
import Swal from 'sweetalert2';

const Products = () => {
    const dispatch = useDispatch();
    const { data: products, status } = useSelector((state) => state.product);
    // const [products, setProducts] = useState([]);
    // console.log(products);
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const handleAdd = (product) => {
        dispatch(add(product));
        Swal.fire({
            icon: 'success',
            title: 'Added to cart',
            showConfirmButton: false,
            timer: 1500,
        });
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
                    <h6 style={{fontSize:"18px",margin:"5px 0",textAlign:"left",color:"#333"}}>{product.title}</h6>
                    <p style={{fontSize:"14px",margin:"0",textAlign:"left",color:"#666"}}>Offered by <strong>{product.createdBy}</strong></p>
                    <p style={{fontSize:"14px",margin:"0",textAlign:"left",color:"#666"}}><strong>${product.price}</strong></p>
                    
                    <button onClick={() => handleAdd(product)} className="btn">
                        Add to cart
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Products;
