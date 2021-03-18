import React, { useEffect } from 'react'
import {Link,Route} from 'react-router-dom'
import Carousels from '../Layouts/Carousels'
import Footer from '../Layouts/Footer'
import Navbar from '../Layouts/Navbar'
import Blogheadlines from '../Layouts/Blogheadlines'
import Accessories from '../Layouts/Accessories'
import Laptops from '../Layouts/Laptops'
import Pc from '../Layouts/Pc'
import Searchbar from '../Layouts/Searchbar'




import {useSelector,useDispatch} from 'react-redux'
import {getProducts} from '../../Actions/productAction'
import App from '../../App'
import Search from '../../Search'


function Home({match}) {

    const dispatch =useDispatch()
    const {loading,products,error} = useSelector(state =>state.products)

    const keyword=match.params.keyword
    useEffect(()=>{

        dispatch(getProducts(keyword));
    },[dispatch,keyword])


    
     
    
    return (
        <div>
        <Searchbar/>
        <Navbar/>
        <Carousels/>
        <Pc/>
        <Laptops/>
        <Accessories/>
        <Blogheadlines/>
        <App/>
        <Route render={({history})=> <Search history={history}/> }/>
        <Footer/>
        
        </div>
    )
}

export default Home
