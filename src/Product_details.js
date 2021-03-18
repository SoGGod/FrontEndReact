import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {getProductDetails,clearErrors} from './Actions/productAction'
import Loader from './Loader'


const ProductDetail = ({match}) =>{
    const dispatch = useDispatch();
    const{loading,product,error} = useSelector(state=>state.productDetails)

    useEffect(()=>{
        dispatch(getProductDetails(match.params.id));
    },[dispatch,match.params.id])

        return(
            <div>
                {loading ? <Loader/>:(

                    product && ( <div className="row row-cols-1 row-cols-md-3 g-4 mt-2">
                    
                    <div className="col">
                        <div className="card" style={{border:'none'}}>
                            <div className="card-body" data-aos="fade-up" data-aos-delay='100'>
                            <img src={`/${product.product_image}`}/>
                                <h5 className="text-primary">{product.product_name}</h5>
                                <p className="card-text">{product.product_description}</p>
                                </div>
                                </div>
                        </div>
                    </div>)
                   
                )}
            </div>
        )}


export default ProductDetail
