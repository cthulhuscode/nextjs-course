import React, { ReactNode } from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Layout, Typography, Button } from "antd";
import Link from "next/link";

import styles from "./layout.module.css";
import logo from "../../public/images/logo.png";
import Image from "next/image";

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

type Props = {
  children: ReactNode;
};

const LayoutFC: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Layout className="layout">
        <Header
          style={{
            height: "60px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background: "#fff",
          }}
        >
          <div>
            <Link href={"/"}>
              <div className={styles.layout__title}>
                <Image
                  src={logo}
                  alt="Page logo"
                  width={38}
                  quality={50}
                  priority={true}
                />
                <Title style={{ margin: 0 }} level={3}>
                  Avo Store
                </Title>
              </div>
            </Link>
          </div>
          <Button type="default" icon={<ShoppingCartOutlined />} size="large">
            Cart
          </Button>
        </Header>

        <Content style={{ padding: "50px" }}>{children}</Content>

        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </>
  );
};

export default LayoutFC;
