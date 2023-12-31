import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
import 'aos/dist/aos.css';
import Aos from 'aos';

export default function Stocks() {
  useEffect(()=>{
    Aos.init();
  },[])
    const [product, setProduct] = useState([])
    

    useEffect(() => {
        async function getAllProduct() {
            try {
                const product = await axios.get("http://127.0.0.1:8000/backend/Product/");
                setProduct(product.data);
                console.log(product.data);
            } catch (error) {

            }
        } getAllProduct()
    }, [])

    const delProduct = (id) =>{
        // code to delete product
    }

    const refProduct = (id)=>{

    }

    const editProduct = (id)=>{

    }
    return (
        <div>


            <center>
                <form >
                    <br />
                    <h1 id="dat">Date</h1>
                    <br />
                    <table border="2" Style="margin: 5px; width: 80%">
                        <tr Style="background-color: cyan ; color:black; border:1px black;width:98%">
                            <td><center><b>ID</b></center></td>
                           {/* <td><center><b>Image</b></center></td>
                            */}
                            <td><center><b>-Product Type-</b></center></td>
                            <td><center><b>-Product Name-</b></center></td>
                            <td><center><b>-Price-</b></center></td>
                            <td><center><b>-Capacity-</b></center></td>
                            <td><center><b>-Sold-</b></center></td>
                            <td><center><b>-Refeal Date-</b></center></td>
                            <td><center><b>-Sales Percentage-</b></center></td>
                            <td><center><b>-Action-</b></center></td>
                        </tr>
                        {
                            product.map((product, i) => {
                                return (
                                    <tr key={i} Style="background-color:'.$color.';color:black; ">
                                        <td><center> {product.id} </center></td>
                                      {/*  <td><center><img src={product.img}  alt={product.img} /></center></td> */}
                                        <td><center>{product.cat}</center></td>
                                        <td><center>{product.pname}</center></td>
                                        <td><center>Rs {product.price}</center></td>
                                        <td><center>{product.cap}</center></td>
                                        <td><center>{product.sold}</center></td>
                                        <td><center>{product.rdate}</center></td>
                                        <td><center>{( product.sold / product.cap) * 100}</center></td>
                                        <td>

                                             <button type="button" name="btn" Style="margin: 1px;" className="btn btn-primary btn" onClick={editProduct(product.id)}>Edit</button>
                                             <button type="button" name="btn" Style="margin: 1px;" className="btn btn-primary btn" onClick={refProduct(product.id)}>Refeal</button>
                                             <button type="button" name="btn" Style="margin: 1px;" className="btn btn-primary btn" onClick={delProduct(product.id)}>Delete</button>

                                        </td>
                                    </tr>
                                )
                            })
                        }
                        <tr>
                            <td>
                                <center><b>-</b></center>
                            </td>
                            <td>
                                <center><b>-</b></center>
                            </td>
                            <td>
                                <center><b>-</b></center>
                            </td>
                            <td>
                                <center><b>-</b></center>
                            </td>
                            <td>
                                <center><b>-</b></center>
                            </td>
                            <td>
                                <center><b>-</b></center>
                            </td>
                            <td>
                                <center><b>-</b></center>
                            </td>
                            <td>
                                <center><b>-</b></center>
                            </td>
                            <td>
                                <center><b>-</b></center>
                            </td>
                        </tr>
                    </table>
                    <br />
                </form>
                <br />
                <Link to="/"><button className="btn btn-primary btn" Style="margin: 5px;width:20%">Home</button></Link>
                <Link to="/AddProduct"> <button type="button" name="btn" value=" Add " className="btn btn-primary btn" Style="margin: 5px;width:20%" > Add </button></Link>
                <br /><br />



            </center>

        </div>
    )
}