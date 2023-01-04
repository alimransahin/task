import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Details from '../Components/Pages/Display/Details';
import Home from '../Components/Pages/Home/Home';

const Router = () => {
    return (
        <Suspense fallback={<progress className="progress progress-accent w-56"></progress>}>
            <Routes>
                <Route index element={<Home />} />
                <Route path=":name" element={<Details />} />
            </Routes>
        </Suspense>
    );
};

export default Router;