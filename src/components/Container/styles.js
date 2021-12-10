import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 980px;
    margin: auto;
    margin-top: 60px;
    padding: 20px;

    .neighborTitle {
        font-size: 18px;
    }

    @media(max-width: 600px) {
        width: auto;
        padding: 10px;
        .neighborTitle {
            margin: 25px 0px;
        }
    }
`