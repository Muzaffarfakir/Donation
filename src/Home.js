import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function App() {
    let nav = useNavigate();
    let [amount, setamounmt] = useState(10);
   
      
    return (
        <>
            <div style={{ border: "1px solid black", }} className=" text-center  p-2 d-flex my-4 p=1  flex-wrap w-auto h-auto border-rounded ">
                <div className="w-auto my-3 h-auto border  mx-3">
                    <img className="border-rounded w-75 my-3 mx-2 p-1 border-rounded" src="https://t4.ftcdn.net/jpg/03/10/67/11/360_F_310671112_7uHR8suAFu64j11zSV6RE1Fss116EDrB.jpg" alt="Img" />
                    <p style={{ fontFamily: 'cursive' }} className="mx-2 p-1 my-4 ">
                        Donation is one of the purest expressions of humanity. It is not about giving from abundance but about sharing with kindness and compassion. A small gift can become someone's greatest hope, turning tears into smiles and despair into confidence. True generosity expects nothing in return. It reflects the belief that every human being deserves love, dignity, and support. When we donate, we do more than offer material help—we spread hope, inspire kindness, and strengthen the bond between people. A caring heart is the greatest wealth, and every act of giving makes the world brighter and more beautiful.
                    </p>
                </div>
                <div className="w-auto my-3 h-auto border mx-3 ">
                    <img className="border-rounded w-75 my-3 mx-2 p-1" src="https://www.pariharaonline.com/cdn/shop/files/fooddonation1_1ebcdcd1-40b7-41a9-9ef1-c085bc9054ec.jpg?v=1726434470" alt="Img" />
                    <p style={{ fontFamily: 'cursive' }} className="mx-2 p-1 my-4 ">
                        Donation has the power to transform lives. It helps provide food to the hungry, education to children, medicine to the sick, and shelter to the homeless. Every contribution, whether large or small, carries the ability to create positive change. It reminds us that we are all connected and responsible for one another. A society that values generosity becomes stronger, more peaceful, and more compassionate. By donating, we become a source of hope for those facing difficulties and inspire others to follow the same path of kindness.
                    </p>
                </div>
                <div className="w-auto my-3 h-auto border mx-3 ">

                    <img className="border-rounded w-50 my-3 mx-2 p-1" src="https://www.henryford.com/-/media/project/hfhs/henryford/henry-ford-blog/images/mobile-interior-banner-images/2020/06/food-bank-what-to-give.jpg?h=600&iar=0&w=640&hash=82575AABA57B2229A9030A24CAB6748C" alt="Img" />
                    <p style={{ fontFamily: 'cursive' }} className="mx-2 p-1 my-4 ">
                        The greatest reward of donation is the happiness it brings to both the giver and the receiver. Material possessions may fade with time, but the joy of helping someone remains forever. A single act of kindness can restore faith, build confidence, and inspire new beginnings. Giving teaches humility, gratitude, and empathy. It reminds us that true success is measured not by what we own but by the positive difference we make in the lives of others. The heart grows richer every time it chooses to give.
                    </p>

                </div>
                <div className="w-auto my-3 h-auto border  mx-3">
                    <img className="border-rounded w-50 my-3 mx-2 p-1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx2nFphkCpbZO1VQ9Af496orPcddxkuQpr2e7xKHYkHg&s=10" alt="Img" />
                    <p style={{ fontFamily: 'cursive' }} className="mx-2 p-1 my-4 ">

                        Humanity flourishes when people care for each other. Donation is a beautiful bridge that connects fortunate individuals with those in need. It reduces suffering, promotes equality, and strengthens communities. Whether we donate money, blood, books, clothes, food, or our valuable time, every contribution carries the message that no one should face hardship alone. Compassion is the foundation of a better world, and donation is one of its strongest expressions. Together, our small efforts can create lasting change and build a future filled with hope.                    </p>
                </div>
                <div className="w-auto my-3 h-auto border mx-3 ">
                    <img className="border-rounded w-50 my-3 mx-2 p-1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ05ax_OBTo2wAA-B_ROATa0OUV3n3Evb8f5saHRATtA&s=10" alt="Img" />
                    <p style={{ fontFamily: 'cursive' }} className="mx-2 p-1 my-4 ">
                        Donation is the language of love that everyone understands. It teaches us that real wealth lies in sharing rather than keeping everything for ourselves. Every act of giving, no matter how small, leaves a lasting mark on someone's life. It builds hope, spreads compassion, and strengthens humanity. A world where people help one another is a world filled with peace and happiness. Therefore, let us make donation a part of our daily lives and remember that the greatest gift we can offer is a kind and generous heart.
                    </p>
                </div>


            </div>
            <button onClick={()=>{nav("/donate")}} style={{ fontSize: "30px", fontFamily: "cursive" }} className="btn btn-primary my-4 p-1 d-flex m-auto ">Donate</button>


        </>
    )
}