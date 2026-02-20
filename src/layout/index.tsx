import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
const { Sider } = Layout;
import api from '../api/index';
import styles from './index.module.less';
import NavHeader from './header';
import Footer from './footer';
import SiderMenu from './menu';
import { useStore } from '../store';
import { useEffect } from 'react';
export default function LayoutCon() {
    const { collapsed, updateUserInfo } = useStore();

    useEffect(() => {
        getUserInfoData();
    }, []);
    const getUserInfoData = async () => {
        const data = await api.getUserInfo();
        updateUserInfo(data);
    };
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <SiderMenu />
            </Sider>
            <Layout>
                <NavHeader />
                <div className={styles.content}>
                    <div className={styles.wrapper}>
                        <Outlet />
                    </div>
                    <Footer></Footer>
                </div>
            </Layout>
        </Layout>
    );
}
