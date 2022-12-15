import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";

function NoPage() {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => navigate('/'), 2000)
    })
    return (
        <div>
            <h1 className="d-grid w-100 justify-content-center">404</h1>
            <h2>Page not found</h2>
            <span>Redirecting...</span>
        </div>
    );
}

export default NoPage;