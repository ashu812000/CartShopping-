import './App.css';
import "./style.css"
import SignIn from './components/signIn';
import {Route, Routes, useNavigate} from 'react-router-dom';
import {Home} from "./components/home";
import {Cart} from "./components/cart";
import {useEffect, useState} from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import {OrderHistory} from "./components/orderHistory";
import {Box} from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import {LoaderContext} from "./utils/Context";

function App() {
    const [user, setUser] = useState()
    const [showLoader, setShowLoader] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = localStorage.getItem('email');
        if (!storedUser) {
            navigate('/'); // Redirect to the sign-in page
        }
        setUser(storedUser);
    }, [navigate]);
    return (
        <LoaderContext.Provider value={{
            showLoader: showLoader,
            setShowLoader: setShowLoader
        }}>
            <div className="App">
                <ToastContainer/>
                <Box sx={{
                    width: "100%"

                }}>
                    {user && <Header/>}
                </Box>
                {showLoader && <Box className={"showLoader"}><CircularProgress/></Box>}
                <Routes>
                    <Route path="/" element={<SignIn/>}/>
                    <Route path="/home" element={user ? <Home/> : <SignIn/>}/>
                    <Route path="/cart" element={user ? <Cart/> : <SignIn/>}/>
                    <Route path="/orderHistory" element={user ? <OrderHistory/> : <SignIn/>}/>
                </Routes>
                {/*{user && <Footer/>}*/}
            </div>
        </LoaderContext.Provider>
    );
}

export default App;
