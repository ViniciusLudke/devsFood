import React from 'react';
import {Link, useLocation} from 'react-router-dom'//useHistory

import {LinkArea, LinkIcon} from './styled';

export default ({icon, page}) =>{
    const location = useLocation();

    //const handleLinkClick com Onclick ai eu ando um history.push(link), funciona como o Link do react-router-dom
    let isActive = location.pathname == page;
    return (
        <>
            <LinkArea active={isActive}>
                <Link to={page}><LinkIcon src={icon} /></Link>
            </LinkArea>
        </>
    );
}