import { create } from 'zustand';
import { IUser } from '../types/api';
export const useStore = create<{
    collapsed: boolean;
    userInfo: IUser;
    currentMenu: string;
    updateCollapsed: () => void;
    updateUserInfo: (userInfo: IUser) => void;
}>((set) => ({
    collapsed: false,
    userInfo: {
        _id: '',
        userId: 0,
        userName: '',
        userEmail: '',
        deptId: '',
        state: 0,
        mobile: '',
        job: '',
        role: 0,
        roleList: '',
        createId: 0,
        deptName: '',
        userImg: '',
    },
    currentMenu: '/dashboard',
    setCurrentMenu: (menu: string) => set({ currentMenu: menu }),
    updateUserInfo: (userInfo: IUser) => set({ userInfo }),
    updateCollapsed: () => set((state) => ({ collapsed: !state.collapsed })),
}));
