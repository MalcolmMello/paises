import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 980px;
    margin: auto;
    margin-top: 60px;
    padding: 20px
`
export const SelectArea = styled.div`
    
`

export const TopArea = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`

export const Filter = styled.p`
    font-size: 17px;
    color: #6D2080
`

export const Select = styled.select`
    width: 316px;
    background: none;
    outline: 0;
    font-size: 17px;        
    padding: 10px;
    border: 1px solid #FFF;
    border-bottom: 1px solid #EEE;
    font-weight: 700;
    color: #8D8D8D;

    option.options {
        font-weight: 700;
        color: #8D8D8D;
    }
`

export const Input = styled.input`
    width: 316px;
    background: none;
    outline: 0;
    font-size: 17px;        
    padding: 10px;
    border: 1px solid #FFF;
    border-bottom: 1px solid #EEE;
    font-weight: 700;
    color: #8D8D8D;
`

export const SearchInput = styled.div``

export const Button = styled.div`
    display: flex;
    border-radius: 10px;
    width: 156px;
    height: 36px;
    justify-content: center;
    align-items: center;
    background-color: #6D2080;
    color: #FFF;
    font-size: 14px;
    cursor: pointer;
`

export const FlagArea = styled.div`
    display: grid;
    margin-top: 30px;
    grid-gap: 20px;
    width: 980px;
    grid-template-columns: repeat(3, 1fr);
`

export const Flag = styled.img`
    cursor: pointer;
    width: 316px;
    height: 186px;
`

export const ButtonArea = styled.div`
    display: flex;
    height: 40px;
    align-items: center;
    justify-content: center;
    margin: auto
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
    overflow-x: hidden;

    .buttonPag {
        background-color: #FFF;
        border-radius: 2px;
        min-width: 34px;
        height: 34px;
        border: none;
        margin-left: 10px;
        cursor: pointer;
        box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
        color: #8D8D8D
    }
`
