import {useEffect, useState} from "react";
import ApiService from "../../Service/Service";
import {Outlet, useParams} from "react-router-dom";

const api = new ApiService()
export default function Notebook() {
        const {image} = useParams();
        const [notebookImgUrl, setNotebookImgUrl] = useState(null);

        let updateNotebookImage = () => {
            api.getRandomImage('notebook').then(value => setNotebookImgUrl(value));
        };
        useEffect(updateNotebookImage, [image]);

        return (
            <div className="Car">
                <div><img className="Url" src={notebookImgUrl} alt=""/>
                </div>
                <button className="Update" onClick={updateNotebookImage}>UPDATE</button>

                <Outlet/>
            </div>
        );
    };


