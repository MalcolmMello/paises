import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    padding: 20px 60px;
    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 0%;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const GetBack = styled.div`
    display: flex;
    height: 36px;
    width: 134px;
    justify-content: space-around;
    align-items: center;
    border: 1px solid #6D2080;
    cursor: pointer;

    p {
        color: #6D2080;
        font-size: 18px
    }
`