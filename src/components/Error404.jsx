import React from 'react';
import { useNavigate } from 'react-router-dom';

const Error404 = () => {
    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate('/');
    };

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <img
                src="https://t4.ftcdn.net/jpg/03/88/63/83/360_F_388638369_wSBADhKfhiTx6Q5Pz1xfdpy6zotku1Sg.jpg"
                alt="404 Not Found"
                className="w-96 h-72 object-cover mb-4 rounded-md"
            />
            <h1 className="text-5xl font-bold mb-2">404</h1>
            <p className="text-lg mb-6">Oops! The page you are looking for does not exist.</p>
            <button
                onClick={handleRedirect}
                className="px-6 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
            >
                Go to Homepage
            </button>
        </div>
    );
};

export default Error404;
