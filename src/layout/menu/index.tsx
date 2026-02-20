import { Menu } from 'antd';
import {
    UserOutlined,
    LaptopOutlined,
    SolutionOutlined,
    MailOutlined,
    UsergroupDeleteOutlined,
    HomeOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { useStore } from '../../store';
import styles from './index.module.less';
import { useNavigate } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
    { key: '/dashboard', icon: <HomeOutlined />, label: 'Dashboard' },
    {
        key: '/user',
        label: '用户模块',
        icon: <UsergroupDeleteOutlined />,
        children: [
            { key: '/userList', label: '用户列表', icon: <UserOutlined /> },
            { key: '/menuList', label: '菜单管理', icon: <MailOutlined /> },
            { key: '/roleList', label: '角色管理', icon: <SolutionOutlined /> },
            { key: '/deptList', label: '部门管理', icon: <LaptopOutlined /> },
        ],
    },
];

const SiderMenu = () => {
    const navigate = useNavigate();
    const { collapsed, currentMenu, setCurrentMenu } = useStore();
    const menuClick = ({ key }: { key: string }) => {
        navigate(key);
        setCurrentMenu(key);
    };
    return (
        <div className={styles.navHeader}>
            <div className={styles.logo}>
                <img src="/imgs/logo.png" className={styles.logo} alt="" />
                {collapsed ? '' : <span>企业中台</span>}
            </div>
            <Menu
                defaultSelectedKeys={[currentMenu]}
                defaultOpenKeys={['/user']}
                mode="inline"
                theme="dark"
                onClick={menuClick}
                inlineCollapsed={collapsed}
                items={items}
            />
        </div>
    );
};

export default SiderMenu;
