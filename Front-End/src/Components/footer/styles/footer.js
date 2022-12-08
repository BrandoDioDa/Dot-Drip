import styled from 'styled-components'

export const Container = styled.div`
padding: 80px 60px;
margin-top: auto;
background: radial-gradient(circle, rgba(183,193,172,1) 20%, rgba(102,51,153,1) 100%);
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justity-content: center;
    max-width: 1000px;
    margin: 0 auto;
    
    
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 100%;
    margin-left: 60px;
    
`

export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(230px, 1fr));
    grid-gap: 20px;

    @media (max-width : 1000px){
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }

    
`

export const Link = styled.div`
    color: #000000;
    margin-bottom: 20px;
    font-size: 18px;
    text-decoration: none;

    &:hover{
        color: #ff9c00;
        transition: 200ms ease-in;
    }
    cursor: pointer;
`

export const Title = styled.div`
    font-size: 24px;
    color: #000000;
    margin-bottom: 10px;
    font-weight: bold;
`