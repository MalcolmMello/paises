import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    margin-top: 35px;
    grid-gap: 20px;
    width: 980px;
    grid-template-columns: repeat(3, 1fr);

    @media(max-width: 600px) {
        width: auto;
        flex-direction: column;
        grid-template-columns: repeat(1, 1fr);
        margin: auto;
        margin-top: 35px;

        article, a {
            display: flex;
            justify-content: center;
            width: auto;
        }

        .flags {
            @media(max-width: 600px) {
                margin-bottom: 10px;
                img {
                    width: 300px;
                }
            }
        }
    }
`