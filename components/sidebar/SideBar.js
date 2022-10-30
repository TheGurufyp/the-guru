import React,{useRef,useState,useEffect} from 'react'
import { Box, Button, Icon, ScaleFade,useDisclosure } from '@chakra-ui/react'
import ChatBox from './ChatBox'
// import css from "../../styles/SideBar.module.css"
import { BiSearchAlt } from "react-icons/bi";
import MyChats from './MyChats';
function SideBar() {

 const initialRender  = useRef(true)
    const [openSidebar, setopenSidebar] = useState(false)
    const [openChatbox, setopenChatbox] = useState(false)
    const [selectedChat, setselectedChat] = useState()
    const { isOpen, onToggle } = useDisclosure()
let styles={
    position: "fixed",
    right: "0px",
    top:"0px",
    backgroundColor: "white",
    width: "300px",
    height: "100vh",
    transition: "all 0.3s",
    transform:openSidebar? "translateX(0px)" :"translateX(100%)"
}

useEffect(() => {

  if (initialRender.current) {
    initialRender.current = false;
  } else {
    if(openChatbox)
   { onToggle();
    // setopenSidebar(false)
  }
  }
 

}, [openChatbox])




// const showSidebar=()=>{
//     console.log("d")
//     console.log(css.tanslate-0)
// if( ref.current.classList.contains(css.tanslate-0)){
//     ref.current.classList.remove(css.tanslate-0)
//     console.log("s")
//  }
//  else{
//     ref.current.classList.add(css.tanslate-0)
//  }
// }

  return (
    <>
   <Box style={styles} >
        <Box mt="100px">
           <Button colorScheme={"guru"} display="block" mx="auto" w="180px" ><Icon as={BiSearchAlt} position="absolute" left={"10px"} boxSize="23px" top="8px"/> Find Users</Button>
           </Box>

<Box pt="20px">
  <MyChats setopenChatbox={setopenChatbox} setselectedChat={setselectedChat} />
 
  <MyChats  setopenChatbox={setopenChatbox} setselectedChat={setselectedChat}/>
  <MyChats  setopenChatbox={setopenChatbox} setselectedChat={setselectedChat}/>
</Box>




    <Button position={"fixed"} colorScheme="guru" borderRadius={"full"} px="5" height={"34px"} left="-84px" bottom={"100px"} onClick={()=>{setopenSidebar(!openSidebar)}} >Chats</Button>
        

<Box position={"absolute"} bottom="0px" left={"-450px"}>
<ScaleFade in={isOpen} initialScale={0.9} unmountOnExit={true}>
    <ChatBox onToggle={onToggle} setopenChatbox={setopenChatbox} openChatbox={openChatbox}/>
    </ScaleFade>
    </Box>


   </Box>
    
    </>
  )
}

export default SideBar