import React from "react"
import ReactDOM from "react-dom/client"
import { FaHome } from "react-icons/fa";
import styled from 'styled-components';
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoIosSearch } from "react-icons/io";



const Header1 = styled.header`
/* background-color: #f0f0f0; */
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  padding-left: 2rem;
  display: flex;
  justify-content: flex-start;
  gap: 8.75rem;
  align-items: center;
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); */
`
const Title = styled.h1`
  color: #FC650B;
  font-size: 1.5rem;
  width: 14rem;
  /* margin: 0; */
  display: inline-flex;
  align-items: center;
  gap: 1rem;
`;

const Nav = styled.nav`
  font-size: 1.25rem;
  /* margin: 0; */
  display: inline-flex;
  align-items: center;
  /* padding: 1rem; */
  height: 6rem;
  gap: 1.15rem;
  /* width: 2rem; */
  /* justify-content: center; */
`;

const Nav1 = styled.nav`
  font-size: 1.25rem;
  /* margin: 0; */
  display: inline-flex;
  align-items: center;
  /* padding: 1rem; */
  height: 6rem;
  gap: 1rem;
  /* width: 2rem; */
  /* justify-content: center; */
`;

function Header() {
    return(
            <Header1>
               
                <Title> 
                <FaHome style={{fontSize:"3rem"}}/>
                <p style={{fontSize:"2.2rem"}}>Relasto</p>
                </Title>
                <Nav>
                    <p style={{width: "6rem", height: "3.5rem"}}>Home <RiArrowDropDownLine style={{ height: "2.3rem", width: "2.3rem"}}/></p>
                    <p style={{width: "6.5rem", height: "3.5rem"}}>Listing <RiArrowDropDownLine style={{ height: "2.3rem", width: "2.3rem"}}/></p>
                    <p style={{width: "6.5rem", height: "3.5rem"}}>Agents <RiArrowDropDownLine style={{ height: "2.3rem", width: "2.3rem"}}/></p>
                    <p style={{width: "8rem", height: "3.5rem"}}>Property <RiArrowDropDownLine style={{ height: "2.3rem", width: "2.3rem"}}/></p>
                    <p style={{width: "6rem", height: "3.5rem"}}>Blog <RiArrowDropDownLine style={{ height: "2.3rem", width: "2.3rem"}}/></p>
                </Nav>

                <Nav1>
                <IoIosSearch style={{paddingRight: "0.25rem", height: "5rem", width: "2rem"}}/>
                <p>Search</p>
                <button style={{width:"5.5rem", height: "3rem", borderRadius: "15px", backgroundColor: "black", color: "white", border:"none"}}>Log in</button>
                </Nav1>
            </Header1>
            
    )
};

export default Header;