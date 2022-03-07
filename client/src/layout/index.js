import { Layout, Menu } from "antd";
import React from "react";
import "./style.css";
import { observer } from "mobx-react";
import { MyRouter } from "../route";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import {
  SolutionOutlined,
  UserOutlined,
  DotChartOutlined,
  PlaySquareOutlined,
  NumberOutlined,
} from "@ant-design/icons";
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      window.sessionStorage.getItem("token") ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

export const MyLayout = observer(() => {
  return (
    <Router>
      <Layout hasSider>
        <Sider
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0,
            top: 0,
            bottom: 0,
          }}
          // breakpoint="lg"
          // collapsedWidth="0"
          // onBreakpoint={(broken) => {
          //   console.log(broken);
          // }}
          // onCollapse={(collapsed, type) => {
          //   console.log(collapsed, type);
          // }}
        >
          <Link to="/">
            <div className="logo" />
          </Link>

          <Menu theme="dark" mode="inline">
            <Menu.Item key="nav1" icon={<DotChartOutlined />}>
              <Link to="/">Thống kê</Link>
            </Menu.Item>
            <Menu.Item key="nav2" icon={<SolutionOutlined />}>
              <Link to="/phieuThue">Phiếu thuê</Link>
            </Menu.Item>
            <Menu.Item key="nav3" icon={<UserOutlined />}>
              <Link to="/thanhVien">Thành viên</Link>
            </Menu.Item>
            <Menu.Item key="nav4" icon={<PlaySquareOutlined />}>
              <Link to="/bangDia">Băng đĩa</Link>
            </Menu.Item>
            <SubMenu key="sub1" icon={<NumberOutlined />} title="More">
              <Menu.Item key="nav5">
                <Link to="/theLoai">Thể Loại</Link>
              </Menu.Item>
              <Menu.Item key="nav6">
                <Link to="/nhaSanXuat">Nhà Sản Xuất</Link>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ marginLeft: 200 }}>
          <Content
            style={{
              margin: "14px 16px 0",
              minHeight: "80vh",
              overflow: "initial",
            }}
          >
            <div
              className="site-layout-background"
              style={{ padding: 14, minHeight: "80vh", textAlign: "start" }}
            >
              <Switch>
                {MyRouter.map((e, index) => (
                  <PrivateRoute
                    key={index}
                    path={e.path}
                    exact
                    component={e.component}
                  />
                ))}
              </Switch>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Hệ thống quản lý cho thuê băng đĩa - thành viên thực hiện : Kim +
            Nam
          </Footer>
        </Layout>
      </Layout>
    </Router>
  );
});
