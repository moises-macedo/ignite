
import { Header, Layout } from "@/components";
import { Outlet } from "react-router-dom";


export const Root = () => (
  <Layout>
    <Header />
    <Outlet />
  </Layout>
);
