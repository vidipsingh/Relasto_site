import React from "react";
import ReactDOM from "react-dom/client";
import styled from "styled-components";

const Nav1 = styled.nav`
  width: 41%;
  /* background-color: white; */
  padding: 30px;
  /* height: 10%; */
  gap: 40px;
  margin-left: 7.5rem;
  margin-top: 3.125rem;
  /* margin-bottom: 50rem; */
  height: "200px";
  /* display: grid;
    grid-template-columns: 2fr 2fr; */
  float: left;
  /* background-color: "red"; */
`;
const Nav2 = styled.nav`
  padding: 1.5rem;
  background-color: #ffffff;
  border-radius: 12px;
  height: 300px;
  /* display: flex; */
  justify-content: center;
`;
const Nav3 = styled.nav`
  margin: 20px auto;
  width:300px;
  height:400px;
  background-color:#fff;
  display:grid;
  grid-template-columns: 200px 200px;
  /* gap: 500px; */
  /* padding: "120px"; */
  grid-row: auto auto;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
`
const box = {
  backgroundColor: "#333",
  // padding: "20px",
  borderRadius: "10px",
  color: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "50px",
  width:"315px",
  height:"315px",
  fontFamily: "sans-serif"
};



function MainPage() {
  return (
    <div style={{ backgroundColor: "#fff7f0", height: "800px" }}>
      <Nav1>
        <h1
          style={{
            fontFamily: "Manrope",
            fontWeight: "800px",
            fontSize: "2.875rem",
            width: "32.8rem",
          }}
        >
          Find a perfect property <br /> Where you'll love to live
        </h1>
        <h3
          style={{
            fontFamily: "Manrope",
            fontWeight: "400px",
            fontSize: "1.25rem",
            width: "32.8rem",
          }}
        >
          We helps businesses customize, automate and scale up their ad
          production and delivery.
        </h3>

        <Nav2>
          <div style={{ gap: "2.375rem", display: "flow" }}>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <button
                style={{
                  width: "5.5rem",
                  height: "3rem",
                  borderRadius: "15px",
                  backgroundColor: "black",
                  color: "white",
                  border: "none",
                }}
              >
                Buy
              </button>
              <button
                style={{
                  width: "5.5rem",
                  height: "3rem",
                  borderRadius: "15px",
                  backgroundColor: "black",
                  color: "white",
                  border: "none",
                }}
              >
                Sell
              </button>
              <button
                style={{
                  width: "5.5rem",
                  height: "3rem",
                  borderRadius: "15px",
                  backgroundColor: "black",
                  color: "white",
                  border: "none",
                }}
              >
                Rent
              </button>
            </div>

            <div
              style={{
                display: "inline-block",
                height: "515px",
                width: "220px",
                marginTop: "38px",
              }}
            >
              <input
                type="text"
                placeholder="City/Street"
                style={{
                  paddingLeft: "16px",
                  paddingRight: "16px",
                  fontWeight: "600",
                  width: "452.261px",
                  height: "58.667px",
                  fontSize: "1.125rem",
                  lineHeight: "1.75rem",
                  borderWidth: "1px",
                  borderRadius: "10px",
                  marginBottom: "13px",
                  fontFamily: "Manrope",
                }}
              />
              <input
                type="text"
                placeholder="Property Type"
                style={{
                  paddingLeft: "16px",
                  paddingRight: "16px",
                  fontWeight: "600",
                  width: "452.261px",
                  height: "58.667px",
                  fontSize: "1.125rem",
                  lineHeight: "1.75rem",
                  borderWidth: "1px",
                  borderRadius: "10px",
                  marginBottom: "13px",
                  fontFamily: "Manrope",
                }}
              />
              <input
                type="text"
                placeholder="Price Range"
                style={{
                  paddingLeft: "16px",
                  paddingRight: "16px",
                  fontWeight: "600",
                  width: "452.261px",
                  height: "58.667px",
                  fontSize: "1.125rem",
                  lineHeight: "1.75rem",
                  borderWidth: "1px",
                  borderRadius: "10px",
                  marginBottom: "13px",
                  fontFamily: "Manrope",
                }}
              />
              <button
                style={{
                  width: "30.5rem",
                  height: "3rem",
                  borderRadius: "15px",
                  backgroundColor: "black",
                  color: "white",
                  border: "none",
                }}
              >
                Log in
              </button>
            </div>
          </div>
        </Nav2>
      </Nav1>
      <img
        src="https://dhws-production.s3.ap-south-1.amazonaws.com/60d476bc92d3a3001575d2ee/60d47a1992d5640016253693/6426c505237e74001426cac8/appSource/images/img_image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQODH4IWPSYFWYAO2%2F20240604%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240604T140012Z&X-Amz-Expires=25200&X-Amz-Signature=2647ace7d25b9c459a9351935510b2f6f2445d1070740512d648a8e25d02d5fb&X-Amz-SignedHeaders=host"
        alt="Brown House"
        style={{
          float: "right",
          width: "500px",
          height: "500px",
          marginRight: "10px",
          paddingTop: "16rem",
          paddingLeft: "8rem",
        }}
      />


<Nav1  style={{marginTop:"8rem", backgroundColor:"#FFE0CE", height:"37rem", padding:"50px",borderRadius:"20px"}}>
        <h1
          style={{
            fontFamily: "Manrope",
            fontWeight: "800px",
            fontSize: "2.8rem",
            width: "32.8rem",
          }}
        >
          Simple & easy way to find your <br /> dream Appointment
        </h1>
        <h3
          style={{
            fontFamily: "Manrope",
            fontWeight: "350px",
            fontSize: "1.25rem",
            width: "32.8rem",
          }}
        >
          We helps businesses customize, automate and scale up their ad
          production and delivery.
        </h3>
        <button style={{width:"5.5rem", height: "3rem", borderRadius: "15px", backgroundColor: "black", color: "white", border:"none", marginTop:"1rem"}}>Get Started</button>

      </Nav1>

      <Nav3 style={{ float: "right", width: "600px", height:"700px", paddingTop: "6rem", paddingLeft:"10px",marginRight:"50px"}}
      >
    <div style={box}>A</div>
    <div style={box}>B</div>
    <div style={box}>C</div>
    <div style={box}>D</div>
      </Nav3>
      

      
    </div>
  );
}

export default MainPage;
