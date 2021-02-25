import React, { useEffect, useState } from 'react';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import SideBar from '../Shared/SideBar/SideBar';
import './ViewProduct.css';
import deletePhoto from '../Images/delete.png';
import updatePhoto from '../Images/update.png';

const ViewProduct = (e) => {
    const [productData, setProductData] = useState([]);

    //Update one item
    const handleUpdate = (id) => {
        // alert('Do you want to update?');
        fetch(`http://localhost:5000/update/${id}`)
            .then(response => response.json())
            .then(result => {
                // console.log(result);
                const update = document.getElementById('update');
                update.innerHTML = `
                    <h3>Updating: ${result._id} </h3>
                    Product Name: <input type="text" value = "${result.productName}" id="productName"> <br>
                    Manufacturer Name: <input type="text" value = "${result.manufacturerName}" id="manufacturerName"><br>
                    Manufacturer Brand: <input type="text" value = "${result.manufacturerBrand}" id="manufacturerBrand"><br>
                    Price: <input type="text" value = "${result.price}" id="price"><br>                   
                    Date: <input type="date" value = "${result.date}" id="date"><br>
                    Category: <input type="text" value = "${result.category}" id="category"><br>
                    <button onClick = "${() => UpdateSubmit(result._id)}">Submit</button>
                    `
            })
        // console.log(id)

    }


    //Update Submittion
    const UpdateSubmit = (id) => {

        const productName = document.getElementById('productName').value;
        const manufacturerName = document.getElementById('manufacturerName').value;
        const manufacturerBrand = document.getElementById('manufacturerBrand').value;
        const price = document.getElementById('price').value;
        const date = document.getElementById('date').value;
        const category = document.getElementById('category').value;
        const user = { id, productName, manufacturerName, manufacturerBrand, price, date, category }
        console.log(user);

        // fetch(`/update/${id}`, {
        //     method: 'PATCH',
        //     headers: { 'content-type': 'application/json' },
        //     body: JSON.stringify(user)
        // })
        //     .then(response => response.json())
        //     .then(result => {
        //         console.log(result);
        //     })

    }

    //delete one item
    const handleDelete = (id) => {
        //alert('Do you want to delete?');
        // console.log(id);
        fetch(`http://localhost:5000/delete/${id}`, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(result => {
                // console.log(result);
                if (result) {
                    let newData = productData.filter(item => item._id !== id);
                    // console.log(newData);
                    setProductData(newData);
                }
            })

    }



    useEffect(() => {
        fetch('http://localhost:5000/items')
            .then(response => response.json())
            .then(list => {
                setProductData(list);
                // console.log(list[0]);
                // const contain = document.getElementById('item');
                // list.forEach(ListItem => {
                //     const paragraph = document.createElement('tbody')
                //     paragraph.innerHTML = `
                //     <tr >
                //         <td>${ListItem.productName}</td>
                //         <td>${ListItem.manufacturerName}</td>
                //         <td>${ListItem.manufacturerBrand}</td>
                //         <td>${ListItem.price}</td>
                //         <td>${ListItem.date}</td>
                //         <td>${ListItem.category}</td> 
                //         <td> <img  src=${updatePhoto} alt="update"/> </td>
                //         <td> <img  src=${deletePhoto} alt="update"/> </td>                  
                //     </tr>             
                // `;
                //     contain.appendChild(paragraph);
                // })
            })
    }, [])


    return (
        <section>
            <Header />

            <div className="addProductBody">
                <div className="A">
                    <SideBar />
                </div>
                <div className="B">
                    <table className="table" id="item">
                        <thead>
                            <tr>

                                <th>Product Name</th>
                                <th>M. Name</th>
                                <th>Brand</th>
                                <th>Price</th>
                                <th>Date</th>
                                <th>Category</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                productData.map((data) => (
                                    <tr>
                                        <td>{data.productName}</td>
                                        <td>{data.manufacturerName}</td>
                                        <td>{data.manufacturerBrand}</td>
                                        <td>{data.price}</td>
                                        <td>{data.date}</td>
                                        <td>{data.category}</td>
                                        <td>
                                            <img
                                                onClick={() => handleUpdate(`${data._id}`)}
                                                src={updatePhoto}
                                                alt="update"
                                            />
                                        </td>
                                        <td>
                                            <img
                                                onClick={() => handleDelete(`${data._id}`)}
                                                src={deletePhoto}
                                                alt="delete"
                                            />
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>

                    </table>
                    <div id="update">
                    </div>

                </div>

            </div>
            <Footer />
        </section>
    );
};

export default ViewProduct;