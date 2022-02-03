import {useEffect, useState} from "react";
import ApiService from "../../Service/Service";
import {Outlet, useParams} from "react-router-dom";

const api = new ApiService()
export default function Girl() {
    const {image} = useParams();
    const [girlImgUrl, setGirlImgUrl] = useState(null);

    let updateGirlImage = () => {
        api.getRandomImage('girl').then(value => setGirlImgUrl(value));
    };
    useEffect(updateGirlImage, [image]);

    return (
        <div className="Car">
            <div><img className="Url" src={girlImgUrl} alt=""/>
            </div>
            <button className="Update" onClick={updateGirlImage}>UPDATE</button>

            <Outlet/>
        </div>
    );
};


