import React from 'react';
import "./AdminStyles.css"

const Admin = () => {
    return (
        <>
            <div className="add-stock-section">
                <form action="">
                    <input type="text" placeholder='title'/>
                    <br /><br />
                    <input accept='image' type="file"/>
                    <br /><br />
                    <input type="text" placeholder='price'/>
                    <br /><br />
                    <input type="text" placeholder='descripion'/>
                    <button type='submit'>Add data</button>
                </form>
            </div>
        </>
    );
}

export default Admin;
