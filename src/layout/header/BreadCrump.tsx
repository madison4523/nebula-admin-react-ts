import { Breadcrumb } from 'antd';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

// 与 menu/index.tsx 中的路由 key 保持一致
const menuConfig: Record<string, string[]> = {
    '/dashboard':   ['首页', 'Dashboard'],
    '/userList':    ['首页', '用户模块', '用户列表'],
    '/menuList':    ['首页', '用户模块', '菜单管理'],
    '/roleList':    ['首页', '用户模块', '角色管理'],
    '/deptList':    ['首页', '用户模块', '部门管理'],
    '/welcome':     ['首页', '欢迎页'],
};

export default function BreadCrump() {
    const { pathname } = useLocation();
    const [items, setItems] = useState<{ title: string }[]>([]);

    useEffect(() => {
        const matched = menuConfig[pathname];
        if (matched) {
            setItems(matched.map((title) => ({ title })));
        } else {
            setItems([{ title: '首页' }]);
        }
    }, [pathname]);

    return <Breadcrumb items={items} />;
}