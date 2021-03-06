import React from 'react';
import { BrowserRouter, Switch, Route} from "react-router-dom";
import { useSelector } from 'react-redux';
import ReactTooltip from 'react-tooltip';

import HomeScreen from './pages/HomeScreen';
import Tela2Screen from './pages/Tela2Screen';
import MenuItem from './components/MenuItem/index';
//componentes
import {Container,Menu,PageBody,} from './AppStyled';
import PrivateRoute from './components/privateRoute.js';
import Cart from './components/Cart/index';
export default () => {
    const name = useSelector(state => state.user.name);

    return (
        <BrowserRouter>

            <Container>
                <Menu>
                    <MenuItem title="Loja" icon="/assets/store.png" page={"/"} />
                    <MenuItem title="Pedidos" icon="/assets/order.png" page={"/orders"}/>
                    <MenuItem title="Meu Perfil" icon="/assets/profile.png" page={"/profile"}/>
                </Menu>
                <PageBody>
            {/*<h1>Oi, {name}</h1>*/}

            <Switch>
                <Route exact path="/">
                    <HomeScreen />
                </Route>
                <PrivateRoute path="/orders">
                    <div>Tela de pedidos..</div>
                </PrivateRoute>
                <PrivateRoute path="/profile">
                    <div>Perfil</div>
                </PrivateRoute>
                <Route path="/tela2/:nome">
                    <Tela2Screen />
                </Route>
            </Switch>
                </PageBody>
                <Cart />
                <ReactTooltip id="tip-top" place="top" effect="solid"/>
                <ReactTooltip id="tip-right" place="right" effect="solid"/>
            </Container>
  
                

        </BrowserRouter>
    );
}