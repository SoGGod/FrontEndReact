import axios from 'axios';
import {
    ALL_PRODUCT_REQUEST,
    ALL_PRODUCT_FAIL,
    ALL_PRODUCT_SUCCESS,
    CLEAR_ERRORS,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
}
    from '../Constants/productConstant'

export const getProducts = (keyword='') => async(dispatch) =>{
    try{
        dispatch({
            type: ALL_PRODUCT_REQUEST
        })
        const {data} = await axios.get(`/api/details?keyword=${keyword}`)

        dispatch({
            type: ALL_PRODUCT_SUCCESS,
            payload:data
        })
    }
    catch(error){
        dispatch({
            type: ALL_PRODUCT_FAIL,
            payload:error.response.data.message
        })
    }
}



//product details

export const getProductDetails=(id)=>async(dispatch)=>{
    try{
      dispatch({
          type:PRODUCT_DETAILS_REQUEST
      })
      const {data}=await axios.get(`/api/details/${id}`)
    
      dispatch({
          type:PRODUCT_DETAILS_SUCCESS ,
          payload:data.product
      })
    }
    catch(error){
        dispatch({
            type:PRODUCT_DETAILS_FAIL,
            payload:error.response.data.message
        })
    }
    }


export const clearErrors=()=>async(dispatch)=>{
    dispatch({
        type: CLEAR_ERRORS
    })
}