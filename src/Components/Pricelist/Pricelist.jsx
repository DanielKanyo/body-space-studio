import React, { useEffect } from "react";

import "./Pricelist.css";

const Pricelist = () => {
    const tableContent = [
        {
            name: "BODY SPACE PAKET",
            time: "5x30 min",
            price: "5500 din"
        },
        {
            name: "BODY SPACE PAKET",
            time: "10x30 min",
            price: "10000 din"
        },
        {
            name: "BODY SPACE PAKET",
            time: "12x30 min",
            price: "11500 din"
        },
        {
            name: "BODY SPACE PAKET",
            time: "5x45 min",
            price: "6500 din"
        },
        {
            name: "BODY SPACE PAKET",
            time: "10x45 min",
            price: "12000 din"
        },
        {
            name: "BODY SPACE PAKET",
            time: "12x45 min",
            price: "13500 din"
        },
        {
            name: "BODY SPACE PROBNI TRENING",
            time: "30 min",
            price: "800 din"
        },
        {
            name: "BODY SPACE TRENING",
            time: "30 min",
            price: "1200 din"
        },
        {
            name: "BODY SPACE TRENING",
            time: "45 min",
            price: "1400 din"
        },
        {
            name: "BODY ROLL",
            time: "1x15 min",
            price: "700 din"
        },
        {
            name: "BODY ROLL",
            time: "1x30 min",
            price: "900 din"
        },
        {
            name: "BODY ROLL PAKET",
            time: "5x15 min",
            price: "3000 din"
        },
        {
            name: "BODY ROLL PAKET",
            time: "8x15 min",
            price: "4500 din"
        },
        {
            name: "BODY ROLL PAKET",
            time: "10x15 min",
            price: "6000 din"
        },
        {
            name: "BODY ROLL PAKET",
            time: "5x30 min",
            price: "4000 din"
        },
        {
            name: "BODY ROLL PAKET",
            time: "8x30 min",
            price: "5500 din"
        },
        {
            name: "BODY ROLL PAKET",
            time: "10x30 min",
            price: "7000 din"
        }
    ];
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="Pricelist">
            <div className="pricelist-table">
                <table>
                    <tbody>
                        {
                            tableContent.map((content, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{content.name}</td>
                                        <td>{content.time}</td>
                                        <td>{content.price}</td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Pricelist;
