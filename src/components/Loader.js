import React from "react";
import styled from "styled-components";

const Loader = ({show}) => {
    return (
        <div class="d-flex justify-content-center w-100 col-3">
        <div class="snippet" data-title="dot-pulse">
          <div class="stage">
            <StyledDotPulse show={show}></StyledDotPulse>
          </div>
        </div>
      </div>
    );
}

export default Loader;

const StyledDotPulse = styled.div`
    position: relative;
    left: -9999px;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #000;
    color: #000;
    box-shadow: 9999px 0 0 -5px;
    animation: dot-pulse 1.5s infinite linear;
    animation-delay: 0.25s;
    visibility: ${props => props.show ? 'visible' : 'hidden'};
    &::before, &::after {
        content: "";
        display: inline-block;
        position: absolute;
        top: 0;
        width: 10px;
        height: 10px;
        border-radius: 5px;
        background-color: #000;
        color: #000;
    }
    &::before {
        box-shadow: 9984px 0 0 -5px;
        animation: dot-pulse-before 1.5s infinite linear;
        animation-delay: 0s;
    }
    &::after {
        box-shadow: 10014px 0 0 -5px;
        animation: dot-pulse-after 1.5s infinite linear;
        animation-delay: 0.5s;
    }
    @keyframes dot-pulse-before {
        0% {
            box-shadow: 9984px 0 0 -5px;
        }
        30% {
            box-shadow: 9984px 0 0 2px;
        }
        60%, 100% {
            box-shadow: 9984px 0 0 -5px;
        }
    }
    @keyframes dot-pulse {
        0% {
            box-shadow: 9999px 0 0 -5px;
        }
        30% {
            box-shadow: 9999px 0 0 2px;
        }
        60%, 100% {
            box-shadow: 9999px 0 0 -5px;
        }
    }
    @keyframes dot-pulse-after {
        0% {
            box-shadow: 10014px 0 0 -5px;
        }
        30% {
            box-shadow: 10014px 0 0 2px;
        }
        60%, 100% {
            box-shadow: 10014px 0 0 -5px;
        }
    }
`