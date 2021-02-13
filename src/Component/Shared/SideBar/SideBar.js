import React from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css'

const SideBar = () => {
    return (
        <section className="products">

            <Link to='/viewproduct'>
                View Product
            </Link>

            <h3>Products</h3>
            <li>
                <Link to='/addproduct'>
                    Add Product
               </Link>
            </li>
        </section>
    );
};

export default SideBar;