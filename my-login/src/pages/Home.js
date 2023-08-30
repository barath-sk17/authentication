import {StyledTitle,StyledSubTitle, Avatar,StyledButton,ButtonGroup} 
from "./../components/Styles";

import Logo from "./../assest/logo1.png";
const Home =() =>{
    return (
        <div>
            <div style={{
                position:"absolute",
                top:0,
                left:0,
                backgroundColor: "transparent",
                width: "100%",
                padding:"15px",
                display: "flex",
                justifyContent:"flex-start"
            }}
            >
            <Avatar image={Logo} />
            </div>
            <StyledTitle size ={75}>
                Welcome to Project
            </StyledTitle>
            <StyledSubTitle size={25}>
                Feel free to explore our page
            </StyledSubTitle>
           
            <br></br>
            <ButtonGroup> <StyledButton to="/">Login</StyledButton>
            
            <StyledButton to= "/signup">Signup</StyledButton>
            </ButtonGroup>
        </div>
        

    );
};

export default Home;
