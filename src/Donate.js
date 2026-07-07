import React, { useEffect, useState } from "react";
import axios from "axios"
export default function Donate() {
    let [isclicked, setisclicked] = useState(false);
    let [count, setcount] = useState(60);
    let [card, setcard] = useState("")
    let amount;
    let [en, seten] = useState(false);
    let [data, setdata] = useState(0);
    let [cur, setcur] = useState('');

    async function check() {
        try {
            if (data <= 0 || data >= 10000000) {
                alert("Enter Valid Amount !");
            }
            else {
                let dataa = await axios.post("http://localhost:8000/order", { data, cur });
                let opt = {
                    key: "rzp_test_TA7wMvsNqpS8Iz",
                    amount: data * 100,
                    description: "payment Page ",
                    recipt: "RECp01",
                    currency: cur,
                    handler: function (res) {
                        console.log(res)
                        if (res.razorpay_payment_id) {
                            alert("Payment SuccessFull!")
                            axios.post("http://localhost:8000/verify", res)

                        }
                    }
                }
                let rzx = new window.Razorpay(opt)
                rzx.open();

            }

        }

        catch (er) {
            alert("Plzz Try Again !");

        }
    }



    return (
        <>
            <h2 className="text-center my-4 " style={{ fontFamily: "cursive" }}>Donate As Per Your Ability!</h2>
            <div className=" d-flex  flex-row card h-25 w-25 border m-auto my-5">
                <select onChange={(e) => { setcur(e.target.value) }} className="w-50 my-2 mx-2 p-1 d-flex">
                    <option>select</option>
                    <option value={"USD"}>USD</option>
                    <option value={"EUR"}>EUR</option>
                    <option value={"AUD"}>AUD</option>
                    <option value={"CAD"}>CAD</option>
                    <option value={"GBP"}>GBP</option>
                    <option value={"CHF"}>CHF</option>
                    <option value={"INR"}>INR</option>




                </select>
                <input onChange={(e) => { setdata(e.target.value) }} className="input my-2 d-flex w-50 mx-2" type="number" placeholder=" Amount " />


            </div>
            <button onClick={check} className="btn d-flex btn-warning m-auto">Pay</button>
            {/* <h3 style={{ fontFamily: "cursive" }} className="text-center m-auto my-3 ">
                Pay With Card Or UPI !
            </h3>

            <div className="d-flex m-auto text-center w-100 h-100 p-1 my-2 ">
                <button onClick={(e) => { setisclicked(true) ;
                setcount(count--)
                
                }} className="btn w-auto m-auto ">card</button>
                <br />
                <button onClick={(e) => { setisclicked(false) }} className="btn w-auto m-auto btn-outline-none ">UPI</button>

            </div>

            {isclicked ? (<div className="card my-4 border w-75 h-50 border-rounded m-auto">
                <div style={{ justifyContent: "space-between" }} className=" my-1 p-2 d-flex ">
                    <span style={{ fontFamily: "cursive" }} className="my-1 p-2">_help_</span>
                    <span ></span>
                </div>
                <div className="d-flex">
                    <div>
                        <img className="mx-1 my-2" src="https://static.vecteezy.com/system/resources/thumbnails/020/975/570/small_2x/visa-logo-visa-icon-transparent-free-png.png" width={"60px"} height={"40px"} />
                    </div>
                   
                    <img className="mx-3 my-2" src="https://pngimg.com/uploads/mastercard/mastercard_PNG16.png" width={"60px"} height={"40px"} />
                    <img  className="mx-1 my-2" src="https://cdn-icons-png.flaticon.com/512/349/349228.png" width={"60px"} height={"40px"} />
                   
                    </div>
                <i className="my-1 mx-2">Enter Your 16 Digit Card Number Here!</i>
                <input onChange={(e) => { setcard(e.target.value) }} placeholder="**** **** **** ****" type="number" className="input mx-2 my-1" />
                <i className="mx-2 my-2 ">Expiry Date</i>
                <input placeholder="**" type="number" className="input mx-2 my-2 " />
                <i className="mx-2 my-2">CVV</i>
                <input placeholder="***" className="mx-2 my-1 input " />
                <button onClick={pay} className="my-2 mx-2 btn  btn-success">Pay</button>
            </div>) : (null)} */}
            {/* <div className="card my-4 border w-50 h-50 border-rounded m-auto">
                <div style={{ justifyContent: "space-between" }} className=" my-1 p-2 d-flex ">
                    <span style={{ fontFamily: "cursive" }} className="my-1 p-2">_help_</span>
                    <span >00:00</span>
                </div>
                <i className="my-1 mx-2">Enter Your 16 Digit Card Number Here!</i>
                <input placeholder="**** **** **** ****" type="number" className="input mx-2 my-1" />
                <i className="mx-2 my-2 ">Expiry Date</i>
                <input placeholder="/" type="number" className="input mx-2 my-2 " />
                <i className="mx-2 my-2">CVV</i>
                <input placeholder="***" className="mx-2 my-1 input " />
                <button className="my-2 mx-2 btn  btn-success">Pay</button>
            </div> */}
            {/* 
            {isclicked ? (null) : (<div className="w-75 h-50 border border-rounded m-auto">

                <div className="d-flex">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe0N6bjzJ89P1KNnl9g-kueY850sUinE6Hj4HQkpCGqQ8OlY1BzUoFdXk&s=10" style={{ borderRadius: '20px' }} className="mx-3 my-2 " width={"35px"} height={"35px"}></img>
                    <button className="my-2 btn mx-1" style={{ fontFamily: "cursive" }}>Phonepe</button>
                </div>
                <div className="d-flex">
                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-pay-icon.png" style={{ borderRadius: '20px' }} className="mx-3 my-2 " width={"35px"} height={"35px"}></img>
                    <button className="my-2 btn mx-14" style={{ fontFamily: "cursive" }}>Google Pay</button>
                </div>
                <div className="d-flex">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi8d5tpj_wqLNaPaGFSFwZaznul7Rn0vxh2EMfpwtZPg&s" style={{ borderRadius: '20px' }} className="mx-3 my-2 " width={"35px"} height={"35px"}></img>
                    <button className="my-2 btn mx-0" style={{ fontFamily: "cursive" }}>Paytm</button>
                </div>

            </div>)} */}
            {/* <div className="w-50 h-50 border border-rounded m-auto">
                
                <div className="d-flex">
                    <img style={{ borderRadius: '20px' }} className="mx-3 my-2 " width={"35px"} height={"35px"}></img>
                    <button className="my-2 btn mx-1" style={{ fontFamily: "cursive" }}>Phonepe</button>
                </div>
                <div className="d-flex">
                    <img style={{ borderRadius: '20px' }} className="mx-3 my-2 " width={"35px"} height={"35px"}></img>
                    <button className="my-2 btn mx-1" style={{ fontFamily: "cursive" }}>Google Pay</button>
                </div>
                <div className="d-flex">
                    <img style={{ borderRadius: '20px' }} className="mx-3 my-2 " width={"35px"} height={"35px"}></img>
                    <button className="my-2 btn mx-1" style={{ fontFamily: "cursive" }}>Paytm</button>
                </div> 
                
            </div> */}


        </>
    )
}