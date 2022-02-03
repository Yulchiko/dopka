import {useEffect, useState} from "react";

import ApiService from "../../Service/Service";
import "./Car.css"
import {Outlet, useParams} from "react-router-dom";

const api = new ApiService()
export default function Car() {
    const {image} = useParams();
    const [carImgUrl, setCarImgUrl] = useState(null);

    let updateCarImage = () => {
        api.getRandomImage('car').then(value => setCarImgUrl(value));
    };
    useEffect(updateCarImage, [image]);

    return (
        <div className="Car">
            <div><img className="Url" src={carImgUrl} alt=""/>
            </div>
            <button className="Update" onClick={updateCarImage}>UPDATE</button>

            <Outlet/>
        </div>
    );
};


