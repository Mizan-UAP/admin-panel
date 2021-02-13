import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import SideBar from '../Shared/SideBar/SideBar';
import './ViewProduct.css'
const ViewProduct = () => {
    return (
        <section>
        <Header />
        <div className="addProductBody">
            <div className="A">
                <SideBar />
            </div>
            <div className="B">
                products
            </div>

        </div>
        <Footer />
    </section>
    );
};

export default ViewProduct;