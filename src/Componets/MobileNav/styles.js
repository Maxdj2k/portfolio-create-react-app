import styled from 'styled-componets';
import { Link } from 'react-router-dom';
import Button from 'carbon-componets-react/lib/componets/Button';

export const Container = styled.div`
    display: none;
    
    @media (max-width: 640px) {
        display: block;
    }
`;

export const Spacer = styled.div`
    height: 48px;

`;

export const NavWrapper = styled.div`
    display: flex;
    justify-content: center;
    position: fixed;
    width: 100vw;
    top: 0;
    left: 0;
    z-index: 1;
`;

export const NavLink = styled(Link)`
    width: 25%;
`;

export const navButton = styled(Button)`
    width: 100%;
    justify-content: center;
`;
