import React from 'react';
import Main from '../components/Main';
import Owner from '../components/Owner';
import Content from '../components/Content';
import About from '../components/About';
import Navbar from '../components/Navbar';
import Pets from '../components/Pets';
import Search from '../components/Search';
import Footer from '../components/Footer';
import Smedia from '../components/Smedia';
import Sidebar from '../components/Sidebar';
import OwnerDelete from '../components/OwnerDelete';
import OwnerGetId from '../components/OwnerGetId';
import useGetData from '../hooks/useGetData';

const App = () => {
    const data = useGetData();
    console.log(data);
    return (
        <Main>
            <Navbar>
            </Navbar>
            <Sidebar>
                <Owner>
                    <OwnerDelete></OwnerDelete>
                    <OwnerGetId></OwnerGetId>
                </Owner>
            </Sidebar>
            <Content>
                <About></About>
                <Pets></Pets>
                <Search></Search>
            </Content>
            <Footer>
                <Smedia></Smedia>
            </Footer>
        </Main>
    );
}

export default App;