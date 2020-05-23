import React, { useEffect } from "react";

import img1 from "../../Images/IMG_11.png";
import img2 from "../../Images/IMG_12.png";
import img3 from "../../Images/IMG_13.png";
import "./Devices.css";

const Devices = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="Devices">
            <div className="content">
                <div className="img-and-text-container first">
                    <div className="img-and-text-section">
                        <div className="image-container">
                            <div className="device-img img1">
                                <img src={img1} alt="device" width="100%" />
                            </div>
                        </div>
                        <div className="device-text">
                            Body Space VakuTherm ležeći bicikl je inovativno sredstvo fitnesa koji genijalno kombinuje vakum tehnologiju sa infra tehnologijom.
                            Korišćenje bicikla potpomaže proces gubljenja kilograma, postizanje i zadržavanje željene figure, povećava izdržljivost, zateže kožu,
                            redovnim korišćenjem uklanja celulit, sve ovo je ujedno trening za sagorevanje masti i ciljani tretman vakumom.
                            Ovaj moderan fitnes ležeći bicikl se posebno preporučuje onima koji pate od bolova u kičmi i leđima.
                            Pogodan je ljudima sa viškom kilograma kojima tradicionli uspravni bicikl predstavlja preveliko opterećenje.
                            Preporučuje se ženama, muškarcima, mladima, starima i svima koji vole udobnost i efikasnost u sklopu jednog treninga.
                        </div>
                    </div>
                </div>

                <div className="img-and-text-container second">
                    <div className="img-and-text-section">
                        <div className="device-text">
                            Body Space VacuTherm traka za trčanje je profesionalna oprema velike snage za oblikovanje tela.
                            Dok se u ležećem biciklu nalaze infracrvene lampe snage 4x100 W, dotle u traci za trčanje su 6x150 W snage!!
                            Ova traka nije namenjena za trčanje već samo za tempirano hodanje. Od struka na dole se nalaziš u kapsuli,
                            gde se putem vakuma i infracrvenog zraka ubrzava metabolizam i znojenje.
                            Količina sagorenih masti je čak 40% veća nego kod tradicionalne trake za trčanje.
                            Ako ne voliš grupne treninge ili želiš sam da rasporediš svoje vreme za kardio trening, to možeš da učiniš kod nas,
                            u profesionalnom okruženju i da izabereš za tebe odgovarajući aparat.
                        </div>
                        <div className="image-container">
                            <div className="device-img img1">
                                <img src={img2} alt="device" width="100%" />
                            </div>
                        </div>
                    </div>
                    <div className="background-img"></div>
                </div>

                <div className="img-and-text-container third">
                    <div className="img-and-text-section">
                        <div className="image-container">
                            <div className="device-img img1">
                                <img src={img3} alt="device" width="100%" />
                            </div>
                        </div>
                        <div className="device-text">
                            Aparat Body Roll je odličan za zatezanje kože, za tretiranje i prevenciju nastanka celulita,
                            za oblikovanje tela, kao i za sportiste radi zagrevanja i opuštanja mišića,
                            za tretiranje problema u zglobovima i za sagorevanje masti. Samo njegovim korišćenjem
                            ili kao deo programa treninga  možemo postići vidljive  rezultate, a može se koristiti  i za kompletnu masažu tela.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Devices
