import styled from 'styled-components'

export const InfoArea = styled.div`
    display: flex;

    @media(max-width: 600px) {
        flex-direction: column;
        justify-content: center;
    }
`

export const Flag = styled.div`
    @media(max-width: 600px) {
        width: 100%;
        display: flex;
        margin: auto;
        margin-bottom: 10px;
        img {
            width: 100%
        }
    }
`

export const FlagBorder = styled.img`
    cursor: pointer;
    width: 316px;
    height: 186px;

    @media(max-width: 600px) {
        width: 300px;
    }
`

export const InfoData = styled.div`
    p {
        margin: 0;
    }
`

export const DataArea = styled.div`
    display: flex;
    margin-bottom: 4px;
    p {
        font-size: 17px;
        color: #555;
        margin-left: 20px;
        margin-top: 5px;
    }

    @media(max-width: 600px) {
        margin-bottom: 8px;
        .title {
            margin-left: 0px;
        }
    }
`

export const ButtonArea = styled.div`
    display: flex;
    height: 40px;
    align-items: center;
    justify-content: center;
    margin: auto;
    margin-top: 30px;

    @media(max-width: 600px) {
        width: 300px;
    }
`

export const SideButton = styled.div`
    display: flex;
    height: 34px;
    align-items: center;
    justify-content: center;
    background-color: #FFF;
    border-radius: 2px;
    min-width: 34px;
    height: 34px;
    border: none;
    margin-left: 10px;
    cursor: pointer;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
    color: #8D8D8D
`

export const ButtonMain = styled.div`
    display: flex;
    height: 34px;
    width: 225px;

    .buttonPag {
        background-color: #FFF;
        border-radius: 2px;
        min-width: 34px;
        height: 34px;
        border: none;
        margin-left: 10px;
        cursor: pointer;
        box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
        color: #8D8D8D;
        margin: auto;
    }
    .buttonPag.active {
        background-color: #6D2080;
        color: #FFF;
    }
`
