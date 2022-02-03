import {useEffect, useState} from "react";
import ApiService from "../../Service/Service";
import {Outlet, useParams} from "react-router-dom";

const api = new ApiService()
export default function Dog() {
    const {image} = useParams();
    const [dogImgUrl, setDogImgUrl] = useState(null);

    let updateDogImage = () => {
        api.getRandomImage('dog').then(value => setDogImgUrl(value));
    };
    useEffect(updateDogImage, [image]);

    return (
        <div className="Car">
            <div><img className="Url" src={dogImgUrl} alt=""/>
            </div>
            <button className="Update" onClick={updateDogImage}>UPDATE</button>

            <Outlet/>
        </div>
    );
};


