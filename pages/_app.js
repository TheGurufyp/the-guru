import Navbar from "../components/Navbar";
import "../styles/globals.css";
import theme from "../theme.js";
import { Box, ChakraProvider } from "@chakra-ui/react";
import SideBar from "../components/sidebar/SideBar";
import React,{useEffect} from "react";


function MyApp({ Component, pageProps }) {


  return (
    <>
      <ChakraProvider theme={theme}>
        <Navbar />
      <SideBar/>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
