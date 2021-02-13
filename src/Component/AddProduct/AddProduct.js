import React, { useState } from 'react';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import SideBar from '../Shared/SideBar/SideBar';
import './AddProduct.css'

const AddProduct = () => {
    const [productList, setProductList] = useState({
        productName: '',
        manufacturerName: '',
        manufacturerBrand: '',
        price: '',
        date: '',
        category: ''

    })

    const handleSubmit = (event) => {
        const data = { ...productList };

        fetch('http://localhost:5000/addItem', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(success => {
                alert('added successfully');
            })

        console.log(data);
        event.preventDefault();
    }
    const handleInput = (e) => {
        let newProductList = { ...productList };
        newProductList[e.target.name] = e.target.value;
        setProductList(newProductList);
        // console.log(newProductList);
        // console.log(e);

    }

    return (
        <section>
            <Header />
            <div className="addProductBody">
                <div className="A">
                    <SideBar />
                </div>
                <div className="B">
                    <form onSubmit={handleSubmit}>
                        <h3>Add Product</h3>
                        <label> Product Name</label>
                        <input type="text" onBlur={handleInput} name="productName" required />
                        <label> Manufacturer Name</label>
                        <input type="text" onBlur={handleInput} name="manufacturerName" required />
                        <label> Manufacturer Brand</label>
                        <input type="text" onBlur={handleInput} name="manufacturerBrand" required />
                        <label>Price</label>
                        <input type="text" onBlur={handleInput} name="price" required />
                        <label> M. date</label>
                        <input type="date" onBlur={handleInput} name="date" />
                        <label>Category</label>
                        <select id="category" onBlur={handleInput} name="category">
                            <option value="cat1">category1</option>
                            <option value="cat2">category2</option>
                            <option value="cat3">category3</option>
                            <option value="cat4">category4</option>
                        </select>
                        <input type="submit" value="Submit" />
                    </form>
                </div>

            </div>
            <Footer />
        </section>
    );
};

export default AddProduct;