import React, { useEffect } from 'react';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import SideBar from '../Shared/SideBar/SideBar';
import './ViewProduct.css'


const ViewProduct = (e) => {

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