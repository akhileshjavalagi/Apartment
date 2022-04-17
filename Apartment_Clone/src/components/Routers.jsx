import { BrowserRouter,Routes,Route } from "react-router-dom";
import {Home} from "./Home"
import {Flat} from "./Flat"
import {Navbar} from "./Navbar"
import { ChakraProvider } from "@chakra-ui/provider";
import { Login } from "./Login";
export const Routers = () =>{
    return (
        <>
        <Navbar/>
        <ChakraProvider>
        <Routes>
            <Route path={"/"} element={<Home/>}></Route>
            <Route path={"/flat"} element={<Flat/>}></Route>
            <Route path={"/login"} element={<Login/>}></Route>
        </Routes>
        </ChakraProvider>
        
        </>
    )
}