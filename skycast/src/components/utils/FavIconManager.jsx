import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function FavIconManager (){

    const location = useLocation();

    useEffect(() => {
        const favIcon = document.getElementById("favicon");
        if (favIcon) {
            favIcon.href = `/public/cloud-sun.svg`;
        }
    }, [location.pathname])

    return null;

}

export default FavIconManager;