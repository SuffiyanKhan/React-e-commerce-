import React, { memo, useEffect, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes,} from 'react-router-dom'
import Login from '../Pages/Login'
import Home from '../Pages/Home'
import Detailspage from '../Componenets/DetailsPage/Detailspage'
import Fragrances from '../../src/Categorys/Fragrances/Fragrances'
import Furniture  from '../../src/Categorys/Furniture/Furniture'
import Groceries  from '../../src/Categorys/Groceries/Groceries'
import HomeDecoration  from '../../src/Categorys/HomeDecoration/HomeDecoration'
import Laptops  from '../../src/Categorys/Laptops/Laptops'
import Skincare  from '../../src/Categorys/Skincare/Skincare'
import Smartphones  from '../../src/Categorys/Smartphones/Smartphones'
import Tops  from '../../src/Categorys/Tops/Tops'
import WomensDresses  from '../../src/Categorys/WomensDresses/WomensDresses'
import WomensShoes  from '../../src/Categorys/WomensShoes/WomensShoes'
import Lighting  from '../../src/Categorys/Lighting/Lighting'
import Automotive   from '../../src/Categorys/Automotive/Automotive'
import MensShirts   from '../../src/Categorys/MensShirts/MensShirts'
import MensShoes   from '../../src/Categorys/MensShoes/MensShoes'
import MensWatches   from '../../src/Categorys/MensWatches/MensWatches'
import Motorcycle   from '../../src/Categorys/Motorcycle/Motorcycle'
import Sunglasses   from '../../src/Categorys/Sunglasses/Sunglasses'
import WomensWatches   from '../../src/Categorys/WomensWatches/WomensWatches'
import WomensBags   from '../../src/Categorys/WomensBags/WomensBags'
import WomensJewellery   from '../../src/Categorys/WomensJewellery/WomensJewellery'
import NavbarWithCondition from '../Componenets/NavbarWithCondition/NavbarWithCondition'

function Routing() {
    const [tokenExists, setTokenExists] = useState(false);
 
    // Check if token exists in local storage
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setTokenExists(true);
        } else {
            setTokenExists(false);
        }
    }, []);
    return (
        <>
        <BrowserRouter>
                <div>
                    <NavbarWithCondition/>
                </div>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/home' element={tokenExists ? <Home /> : <Navigate to={'/'}/>} />
                <Route path='/detail' element={<Detailspage /> }/>
                <Route path='/fragrances' element={<Fragrances /> }/>
                <Route path='/furniture' element={<Furniture /> }/>
                <Route path='/groceries' element={<Groceries /> }/>
                <Route path='/homeDecoration' element={<HomeDecoration /> }/>
                <Route path='/laptops' element={<Laptops /> }/>
                <Route path='/skincare' element={<Skincare /> }/>
                <Route path='/smartphones' element={<Smartphones /> }/>
                <Route path='/tops' element={<Tops /> }/>
                <Route path='/womensDresses' element={<WomensDresses /> }/>
                <Route path='/womensShoes' element={<WomensShoes /> }/>
                <Route path='/lighting' element={<Lighting /> }/>
                <Route path='/automotive' element={<Automotive /> }/>
                <Route path='/mensshirts' element={<MensShirts /> }/>
                <Route path='/menswatches' element={<MensWatches /> }/>
                <Route path='/mensshoes' element={<MensShoes /> }/>
                <Route path='/motorcycle' element={<Motorcycle /> }/>
                <Route path='/sunglasses' element={<Sunglasses /> }/>
                <Route path='/womenswatches' element={<WomensWatches /> }/>
                <Route path='/womensbags' element={<WomensBags /> }/>
                <Route path='/womensjewellery' element={<WomensJewellery /> }/>
            </Routes>
        </BrowserRouter>
        </>
    );
}

export default memo(Routing);
