import React from "react";
import one from "./assets/img/one.jpg";
import two from "./assets/img/2.png";
import tree from "./assets/img/3.png";
import four from "./assets/img/4.png";
import five from "./assets/img/5.png";
import six from "./assets/img/6.png";
import seven from "./assets/img/7.png";
import eight from "./assets/img/8.png";
import nine from "./assets/img/9.png";
import ten from "./assets/img/10.png";
import styled from "styled-components";

const PhotoButton = styled.button`
  background-color: white; // Replace with your desired color
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

function Designation({ showDesignation, handleDesignation }) {
  return (
    <div>
      {showDesignation && (
        <div className="border-2 rounded-md m-2 grid grid-rows-2 grid-flow-col gap-3 max-w-[1000px] mx-auto">
          <PhotoButton className="m-2">
            <img
              src={one}
              alt=""
              data-value={one}
              onClick={handleDesignation}
            />
          </PhotoButton>
          <PhotoButton className="m-2">
            <img
              src={two}
              alt=""
              data-value={two}
              onClick={handleDesignation}
            />
          </PhotoButton>
          <PhotoButton className="m-2">
            <img
              src={tree}
              alt=""
              data-value={tree}
              onClick={handleDesignation}
            />
          </PhotoButton>
          <PhotoButton className="m-2">
            <img
              src={four}
              alt=""
              data-value={four}
              onClick={handleDesignation}
            />
          </PhotoButton>
          <PhotoButton className="m-2">
            <img
              src={five}
              alt=""
              data-value={five}
              onClick={handleDesignation}
            />
          </PhotoButton>
          <PhotoButton className="m-2">
            <img
              src={six}
              alt=""
              data-value={six}
              onClick={handleDesignation}
            />
          </PhotoButton>
          <PhotoButton className="m-2">
            <img
              src={seven}
              alt=""
              data-value={seven}
              onClick={handleDesignation}
            />
          </PhotoButton>
          <PhotoButton className="m-2">
            <img
              src={eight}
              alt=""
              data-value={eight}
              onClick={handleDesignation}
            />
          </PhotoButton>
          <PhotoButton
            className="m-2"
            data-value={nine}
            onClick={handleDesignation}
          >
            <img
              src={nine}
              alt=""
              data-value={nine}
              onClick={handleDesignation}
            />
          </PhotoButton>
          <PhotoButton
            className="m-2"
            data-value={ten}
            onClick={handleDesignation}
          >
            <img
              src={ten}
              alt=""
              data-value={ten}
              onClick={handleDesignation}
            />
          </PhotoButton>
        </div>
      )}
    </div>
  );
}

export default Designation;
