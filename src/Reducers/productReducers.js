import{ 
    ALL_PRODUCT_FAIL,
    ALL_PRODUCT_SUCCESS,
    ALL_PRODUCT_REQUEST,
    CLEAR_ERRORS,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
}
    from '../Constants/productConstant'

export const productReducers = (state = {products:[]},action) =>{
    switch(action.type){
        case ALL_PRODUCT_REQUEST:
            return {
                loading: true,
                products:[]
            }

        case ALL_PRODUCT_SUCCESS:
            return {
                loading: false,
                products:action.payload.products   //yaha ko products chein .then paxi ko ho hai controller ko
            }
        
        case ALL_PRODUCT_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        
        case CLEAR_ERRORS:
            return {
                ...state,    // ... means split operator like concatination
                error:null
            }
        
        default:
            return{
                state
            }
    }
}

//to show product detail
export const productDetailsReducer= (state = {product :{} },action)=>{
    switch(action.type){
        case PRODUCT_DETAILS_REQUEST:
            return{
               loading:true,
               product:{}
            }
            case PRODUCT_DETAILS_SUCCESS:
            return{
                loading:false,
                product:action.payload
            }
            case PRODUCT_DETAILS_FAIL:
                return{
                    loading:false,
                    error:action.payload
                }
            case CLEAR_ERRORS:
                return{
                    error:null
                }
              default:
              return{
                state
          }
    }
}
