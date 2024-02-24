import React, { useState } from 'react';
import "./AdminStyles.css"
import axios from 'axios';

const Admin = () => {
    const [Tiledata, setTiledata] = useState({
        title: '',
        price: '',
        desc: '',
    });
    const [StockImage, setStockImage] = useState();

    // const adddata = (event) => {
    //     setTiledata(() => ({
    //         ...Tiledata, [event.target.name] : event.target.value
    //     }))
    // }

    const sendData = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("imagedata", StockImage)
        try {
            await axios.post('/stock', formData, {headers: {"Content-Type": "multipart/form-data"},})
            alert("data added")
        } catch (error) {
            alert("something went wrong "+error)
        }
    }
    return (
        <>
            <div className="add-stock-section">
                <form action="" onSubmit={sendData}>
                    {/* <input type="text" placeholder='title' name='title' onChange={adddata}/>
                    <br /><br /> */}
                    <input accept='image' type="file" onChange={e => setStockImage(e.target.files[0])}/>
                    {/* <br /><br />
                    <input type="text" placeholder='price' name='price' onChange={adddata}/>
                    <br /><br />
                    <input type="text" placeholder='descripion' name='desc' onChange={adddata}/> */}
                    <button type='submit'>Add data</button>
                </form>
            </div>
        </>
    );
}

export default Admin;
