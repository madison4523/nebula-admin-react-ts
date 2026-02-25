import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { Dropdown, Button } from 'antd';
import storage from '../../utils/storage';
import type { MenuProps } from 'antd';
import styles from './index.module.less';
import { useStore } from '../../store';
export default function NavHeader() {
    const { collapsed, updateCollapsed } = useStore();
    const items: MenuProps['items'] = [
        {
            key: 'email',
            label: '邮箱：Madison@gmail.com',
        },
        {
            key: 'logout',
            label: '退出',
        },
    ];
    const onClick = ({ key }: { key: string }) => {
        if (key === 'logout') {
            // 退出登录
            storage.remove('token');
            window.location.href = '/login';
        }
    };
    const toggleCollapsed = () => {
        updateCollapsed();
    };
    return (
        <div className={styles.navHeader}>
            <div className={styles.left}>
                <Button
                    type="text"
                    icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                    onClick={toggleCollapsed}
                    style={{
                        fontSize: '16px',
                        width: 64,
                        height: 64,
                    }}
                />
            </div>
            <div className={styles.right}>
                <Dropdown menu={{ items, onClick }} trigger={['click']}>
                    <span className={styles.nickName}>Madison</span>
                </Dropdown>
            </div>
        </div>
    );
}
