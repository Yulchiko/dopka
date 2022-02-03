import {useEffect, useState} from "react";
import ApiService from "../../Service/Service";
import {Outlet, useParams} from "react-router-dom";


const api = new ApiService()
export default function Cat() {
    const {image} = useParams();
    const [catImgUrl, setCatImgUrl] = useState(null);

    let updateCatImage = () => {
        api.getRandomImage('cat').then(value => setCatImgUrl(value));
    };
    useEffect(updateCatImage, [image]);

    return (
        <div className="Car">
            <div><img className="Url" src={catImgUrl} alt=""/>
            </div>
                           <button className="Update" onClick={updateCatImage}>UPDATE</button>

           <Outlet/>
        </div>
    );
};

