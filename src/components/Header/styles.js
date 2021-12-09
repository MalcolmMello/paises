import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 60px;
    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 0%;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    @media (max-width: 600px) {
        width: auto;
        padding: 10px 20px;
        img {
            height: 35px;
            width: 65px;
        };
    }
`

export const GetBack = styled.div`
    display: flex;
    height: 36px;
    width: 134px;
    justify-content: space-around;
    align-items: center;
    border: 1px solid #6D2080;
    cursor: pointer;
    padding: 0px 5px;

    p {
        color: #6D2080;
        font-size: 18px;
    };

    @media (max-width: 600px) {
        width: 60px;
        border: 0;
        img {
            height: 28px;
            width: 28px;
        };
        p {
            font-size: 0px
        }
    }
`