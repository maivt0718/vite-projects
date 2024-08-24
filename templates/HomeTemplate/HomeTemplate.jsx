import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { NavLink, Outlet } from "react-router-dom";
import { path } from "../../src/common/path";
import { useSelector } from "react-redux";
const { Header, Content, Footer } = Layout;
const items = new Array(3).fill(null).map((_, index) => ({
  key: String(index + 1),
  label: `nav ${index + 1}`,
}));
const HomeTemplate = () => {
  const { userName } = useSelector((state) => {
    return state.userDlice
  })
  const arrNavLink = [
    {
      to: "/",
      content: "Home",
    },
    {
      to: "/shoe",
      content: "Shoe",
    },
    {
      to: "/glasses",
      content: "Glasses",
    },
    {
        to: "/pokemon",
        content: "Pokemon"
    },
    {
      to: `${path.demoReduxPage}`,
      content: "DemoRedux"
    },
    {
      to: `${path.DicePage}`,
      content: "Dice"
    },
    {
      to: `${path.UseEffectDemo}`,
      content: "DemoUseEffect"
    },
    {
      to: `${path.DemoFormReact}`,
      content: "DemoFormReact"
    }
  ];
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout className="">
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        <div className="nav_link_demo">
          {arrNavLink.map((item, index) => {
            return (
              <NavLink key={index}
                to={`${item.to}`}
                className={(isActive, isPending) => {
                  return `mx-2 ${isActive ? "text-white" : "text-red-600"}`;
                }}
              >
                {item.content}
              </NavLink>
            );
          })}
     
        </div>
        <div className="user bg-red-500 text-green-700 text-center" style={{width: "50px"}}>{userName}</div>
      </Header>
      <Content
        style={{
          padding: "0 48px",
        }}
      >
        <div
          style={{
            padding: 24,
            minHeight: "100%",
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};
export default HomeTemplate;
