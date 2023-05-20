import React from "react";
import Deye from "./assets/Deye.svg";
import three from "./assets/three.jpg";
import DJ from "./assets/DJ.svg";
import Growwat from "./assets/Growwat.svg";
import Must from "./assets/MUST.svg";
import Lumi from "./assets/Lumi.svg";
import Rambo from "./assets/RAMBO.svg";
import Orbit from "./assets/ORBIT.svg";
import Exide from "./assets/Exide.svg";
import Felicity from "./assets/FELICITY.svg";
import Rocket from "./assets/ROCKET.svg";
import Superpower from "./assets/SUPERPOWER.svg";
import Tuffbull from "./assets/TUFFBULL.svg";
import Vector from "./assets/Vector.svg";
import Inkel from "./assets/INKEL.svg";
import { styled } from "styled-components";

const StyledButton = styled.button`
  background-color: #f3f3f3; // Replace with your desired color
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  transition-property: transform;
  transition-duration: 300ms;
  transition-timing-function: ease-out;
  &:hover {
    transform: scale(1.1);
  }
`;

function Company({ showCompany, handleCompany }) {
  return (
    <div>
      {showCompany && (
        <div>
          <div className="mx-auto grid grid-rows-3 grid-flow-col border-2 rounded-md w-[1000px] ">
            <StyledButton
              className="m-2"
              data-value={three}
              onClick={handleCompany}
            >
              <img src={three} alt="" />
            </StyledButton>
            <StyledButton
              className="m-2"
              data-value={Deye}
              onClick={handleCompany}
            >
              <img src={Deye} alt="" />
            </StyledButton>
            <StyledButton
              className="m-2"
              data-value={DJ}
              onClick={handleCompany}
            >
              <img src={DJ} alt="" />
            </StyledButton>
            <StyledButton
              className="m-2"
              data-value={Growwat}
              onClick={handleCompany}
            >
              <img src={Growwat} alt="" />
            </StyledButton>
            <StyledButton
              className="m-2"
              data-value={Must}
              onClick={handleCompany}
            >
              <img src={Must} alt="" />
            </StyledButton>
            <StyledButton
              className="m-2"
              data-value="Luminuous"
              onClick={handleCompany}
            >
              <img src={Lumi} alt="" />
            </StyledButton>
            <StyledButton
              className="m-2"
              data-value={Rocket}
              onClick={handleCompany}
            >
              <img src={Rocket} alt="" />
            </StyledButton>
            <StyledButton
              className="m-2"
              data-value={Felicity}
              onClick={handleCompany}
            >
              <img src={Felicity} alt="" />
            </StyledButton>
            <StyledButton
              className="m-2"
              data-value={Superpower}
              onClick={handleCompany}
            >
              <img src={Superpower} alt="" />
            </StyledButton>
            <StyledButton
              className="m-2"
              data-value={Rambo}
              onClick={handleCompany}
            >
              <img src={Rambo} alt="" />
            </StyledButton>
            <StyledButton
              className="m-2"
              data-value={Orbit}
              onClick={handleCompany}
            >
              <img src={Orbit} alt="" />
            </StyledButton>
            <StyledButton
              className="m-2"
              data-value={Vector}
              onClick={handleCompany}
            >
              <img src={Vector} alt="" />
            </StyledButton>
            <StyledButton
              className="m-2"
              data-value={Inkel}
              onClick={handleCompany}
            >
              <img src={Inkel} alt="" />
            </StyledButton>
            <StyledButton
              className="m-2"
              data-value={Exide}
              onClick={handleCompany}
            >
              <img src={Exide} alt="" />
            </StyledButton>
            <StyledButton
              className="m-2"
              data-value={Tuffbull}
              onClick={handleCompany}
            >
              <img src={Tuffbull} alt="" />
            </StyledButton>
          </div>
        </div>
      )}
    </div>
  );
}

export default Company;
