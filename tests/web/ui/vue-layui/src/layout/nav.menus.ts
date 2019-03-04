export interface IMenuItem {
    text: string;
    heading?: boolean;
    name?: string;
    link?: string;
    icon?: string;
    submenus?: IMenuItem[];
}

const Home: IMenuItem = {
    text: '信息汇总',
    name: 'dashboard',
    icon: 'home',
};

const Identity: IMenuItem = {
    text: '身份认证',
    icon: 'perm_contact_calendar',
    submenus: [
        { text: '用户信息管理', name: 'identity-user', icon: 'person' },
        { text: '角色信息管理', name: 'identity-role', icon: 'people' },
        { text: '用户角色管理', name: 'identity-user-role', icon: 'people_outline' }
    ]
};
const Security: IMenuItem = {
    text: '权限安全',
    icon: 'verified_user',
    submenus: [
        { text: '模块信息管理', name: 'security-module', icon: 'extension' },
        { text: '功能信息管理', name: 'security-function', icon: 'games' },
        { text: '角色功能管理', name: 'security-role-function', icon: 'assignment' },
        { text: '用户功能管理', name: 'security-user-function', icon: 'assignment_ind' },
        { text: '实体信息管理', name: 'security-entityinfo', icon: 'explicit' },
        { text: '角色数据管理', name: 'security-role-entityinfo', icon: 'speaker_group' },
        { text: '用户数据管理', name: 'security-user-entityinfo', icon: 'speaker' }
    ]
};

const Systems: IMenuItem = {
    text: '系统管理',
    icon: 'laptop_chromebook',
    submenus: [
        { text: '系统设置', name: 'system-settings', icon: 'settings' }
    ]
};

export const menuItems: IMenuItem[] = [
    Home,
    Identity,
    Security,
    Systems
];