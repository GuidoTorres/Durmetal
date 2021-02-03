import styled from 'styled-components'
import {Link} from 'react-scroll'


export const Button = styled(Link)`


    background: ${({primary}) => (primary ? 'transparent' : '#010606')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color : ${({dark}) => (dark ? 'white' : '#fff')};
    font-size : ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: 1px solid white;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    z-index: 10;
    text-decoration: none;
    &:hover{

        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#fff' : '#01BF71' )};
        color : ${({dark}) => (dark ? 'black' : '#fff')};


    }
`
