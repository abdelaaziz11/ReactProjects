import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useReducer, useState } from 'react';
import Product from './Product';
import {INITIAL_VALUES, productReducer} from './productReducer';

const ProductList = () => {

    const [productList, setProductList] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [categories, setCategoryList] = useState([]);
    const [currentCategory, setCurrentCategory] = useState();
    const [productValue, dispatch] = useReducer(productReducer, INITIAL_VALUES);

    const displayCategories = () => {
        return categories.map((category, key) => 
        <button key={key}
            // style={{}}bg-secondary text-white-50 w-100 border-0
            className="btn"
            // {'btn' + (currentCategory === category ? 'bg-dark' : 'bg-secondary') + 'w-100'} 
            onClick={(e) => {
                e.preventDefault()
                setCurrentCategory(category)
            }}>
            {category}
        </button>
        )
    }

    const displayProducts = () => {
        let productTemp = productValue.productList
        if (searchInput !== undefined) {
            productTemp = productList.filter(product => {
                return product.title.includes(searchInput) 
                || product.id.toString().includes(searchInput)
                || product.description.toString().includes(searchInput)
                
            })
        }
        if (currentCategory !== undefined) {
            productTemp = productTemp.filter(product => {
                return product.category === currentCategory
            })
        }
        if (productTemp.length > 0) {

            
            return productTemp.map((product, key) => {
                    return <Product product={product} key={key} />
                })
        }
        return <tr><td colSpan={7} >No Items</td></tr>
    }
        
    const getProducts = () => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(res => setProductList(res))
    }
    const getCategory = () => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(res => res.json())
            .then(res => setCategoryList(res))
    }

    useEffect(() => {
        getProducts()
        getCategory()
    }, [])

    const handleSearch = (e) => {
        e.preventDefault()
        const searchValue = document.querySelector('#search').value
        setSearchInput(searchValue)
    }


    return (
        <>
            <div className="container-fluix mx-auto w-75 my-3">
                <h3>Search</h3>
                <form>
                    <div className="form-group">
                    <div className="col-auto">
                        <input type="text" id="search" className="form-control" placeholder="Search..." />
                    </div>
                      
                    <div className="col-auto">
                        <input className="btn btn-primary" type="submit" value="search" onClick={handleSearch} />
                    </div>
                    </div>
                    <hr/>
                    <h5>Categories</h5>
                    <div className="row g-3 align-items-center">
                        <div className="btn-group bg-secondary">
                            {displayCategories()}
                        </div>
                    </div>
                </form>
                <hr/>
                <h1>Products</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>Category</th>
                            <th>Image</th>
                            <th>Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayProducts()}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ProductList;