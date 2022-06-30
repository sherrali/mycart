import React from "react";

class Cartitem extends React.Component {
    render() {
        return ( 
            <div className="cart-item">
                <div className="left-block">
                    <img />
                </div>
                <div className="right-block">
                    <div>Phone</div>
                    <div>Rs 999</div>
                    <div>Qty: 1</div>
                    <div className="cart-item-action">
                        {/* Buttons */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Cartitem;