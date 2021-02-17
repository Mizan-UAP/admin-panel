import React, { useEffect, useState } from 'react';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import SideBar from '../Shared/SideBar/SideBar';
import './ViewProduct.css';
import deletePhoto from '../Images/delete.png';
import updatePhoto from '../Images/update.png';

const ViewProduct = (e) => {
    const [productData, setProductData] = useState([]);


    const handleUpdate = (id) => {
        // alert('Do you want to update?');
        console.log(id)
    }

    //delete one item
    const handleDelete = (id, event) => {
        //alert('Do you want to delete?');
        console.log(typeof id);
        fetch(`/delete/${id}`, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(result => {
                if (result) {
                    event.target.parentNode.style.display = 'none';
                    console.log(result.deletedCount);
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
                                                onClick={() => handleDelete('${data._id}')}
                                                src={deletePhoto}
                                                alt="delete"
                                            />
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>

                    </table>
                </div>

            </div>
            <Footer />
        </section>
    );
};

export default ViewProduct;