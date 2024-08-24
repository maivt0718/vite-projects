import React from 'react'
import { useRoutes } from 'react-router-dom'
import HomeTemplate from '../../../templates/HomeTemplate/HomeTemplate';
import PageNotFound from '../404/404';
import Header from '../Header';
import Body from '../Body';
import Footer from '../Footer';
import DemoState from '../StateDemo/States';
import PropsDemo from '../Props/Props';
import ShowDetails from '../shoe/ShowDetails';
import { path } from '../../common/path';
import Shoe from '../shoe/Shoe';
import ShoeList from '../shoe/ShoeList';
import DemoRedux from '../DemoRedux/DemoRedux';
import Dice from '../Dice/Dice';
import DemoUseEffect from '../DemoUseEffect/DemoUseEffect';
import DemoUseEffectDetails from '../DemoUseEffect/DemoUseEffectDetails';
import DemoFromReact from '../DemoFormReact/DemoFromReact';

function useRoute() {
    const elements = useRoutes([
        {
            path: `${path.homePage}`,
            element: <HomeTemplate/>,
            children: [
                {
                    index: true,
                    element: [
                        <Header key="heaader"/>,
                        <Body key="body"/>,
                        <Footer key="footer"/>
                    ]
                },
                {
                    path: `${path.shoePage}`,
                    element: 
                       <Shoe/>
                    
                },
                {
                    path: `${path.glassesPage}`,
                    element: 
                       <DemoState/>
                    
                },
                {
                    path: `${path.pokemonPage}`,
                    element: 
                       <PropsDemo/>
                    
                },
                {
                    path: `${path.shoeDetailsPage}/:id`,
                    element: 
                       <ShowDetails/>
                    
                },
                {
                    path: `${path.demoReduxPage}`,
                    element: 
                       <DemoRedux/>
                    
                },
                {
                    path: `${path.DicePage}`,
                    element: <Dice/>
                },
                {
                    path: `${path.UseEffectDemo}`,
                    element: <DemoUseEffect/>
                },
                {
                    path: `${path.UseEffectDemoDetail}/:id`,
                    element: <DemoUseEffectDetails />
                },
                {
                    path: `${path.DemoFormReact}`,
                    element: <DemoFromReact />
                }
            ]
        },
        {
            path: "*",
            elements: <PageNotFound />
        }
    ]);
  return elements;
}

export default useRoute