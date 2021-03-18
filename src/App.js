import './App.css';
import SignUp from './components/pages/SignUp';
import {Link} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {getProducts} from './Actions/productAction'
import Loader from './Loader';

function App() {
  const dispatch =useDispatch()
    const {loading,products,error} = useSelector(state =>state.products)


  return (
    <div className="App">
      {loading ? <Loader/> : 
        
        products && products.map(item=>(
          <div className="card">
          <div className="card-header">
            <h4>{item.product_name}</h4>
            {/* <h1>{"/public/uploads/"+item.product_image}</h1> for testing purposes */}
            <img src={item.product_image}/>
          </div>
        <div className="card-body">
          <Link to={`/details/${item._id}`}>
          <h5 className="card-title">{item.product_price}</h5>
          </Link>
          <p className="card-text">{item.product_description}</p>
        </div>
        </div>
        ))
      }

      

    </div>
  );
}

export default App;
