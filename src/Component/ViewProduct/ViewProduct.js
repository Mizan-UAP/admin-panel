import React, { useEffect } from 'react';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import SideBar from '../Shared/SideBar/SideBar';
import './ViewProduct.css';
import deletePhoto from '../Images/delete.png';
import updatePhoto from '../Images/update.png';

const ViewProduct = (e) => {

    const handleUpdate = () => {
        console.log('update');
    }
    const handleDelete = () => {
        console.log('delete');
    }


    useEffect(() => {

        fetch('http://localhost:5000/items')
            .then(response => response.json())
            .then(list => {
                // console.log(list[0]);
                const contain = document.getElementById('item');
                list.forEach(ListItem => {
                    const paragraph = document.createElement('tbody')
                    paragraph.innerHTML = `
                    <tr >
                        <td>${ListItem.productName}</td>
                        <td>${ListItem.manufacturerName}</td>
                        <td>${ListItem.manufacturerBrand}</td>
                        <td>${ListItem.price}</td>
                        <td>${ListItem.date}</td>
                        <td>${ListItem.category}</td> 
                        <td> <img onClick=${handleDelete} src=${updatePhoto} alt="update"/> </td>
                        <td> <img  src=${deletePhoto} alt="update"/> </td>                  
                    </tr>             
                `;
                    contain.appendChild(paragraph);
                })
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
                    </table>
                </div>

            </div>
            <Footer />
        </section>
    );
};

export default ViewProduct;