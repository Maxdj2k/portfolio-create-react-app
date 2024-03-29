import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SideNavItems, SideNavlink } from 'carbon-components-react/lib/componets/UIShell';

import { StyledSideNav } from './styles';
import { SideNavLink } from 'carbon-components-react';

const items = [
    { name: 'Me', path: '/'},
    { name: 'Projects' path: '/projects' },
    { name: 'Work', path: '/work' },
    { name: 'Education', path: '/education' },
];

const Sidebar = () => {
    const location = useLocation();

    return (
        <StyledSideNav isFixedNav expanded ischildOfHeader={false} aria-label="Side navigation">
            <SideNavItems>
                {items.map(i => (
                    <SideNavLink
                        isActive={
                            location.pathname === '/' && i.path === '/' ? true :
                            location.pathname === i.path
                        }
                        element={Link}
                        to={i.path}
                        key={i.name}
                        >
                            {i.name}
                        </SideNavLink>
                ))}
            </SideNavItems>
        </StyledSideNav>
    );
};

export default Sidebar;
