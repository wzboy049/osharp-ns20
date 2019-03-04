import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/dashboard.vue';

import IdentityUser from './components/identity/user.vue';
import IdentityRole from './components/identity/role.vue';
import IdentityUserRole from './components/identity/user-role.vue';

import SecurityModule from './components/security/module.vue';
import SecurityFunction from './components/security/function.vue';
import SecurityEntityInfo from './components/security/entityinfo.vue';
import SecurityRoleFunction from './components/security/role-function.vue';
import SecurityUserFunction from './components/security/user-function.vue';
import SecurityRoleEntityInfo from './components/security/role-entityinfo.vue';
import SecurityUserEntityInfo from './components/security/user-entityinfo.vue';

import SystemsSetting from './components/systems/setting.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    }, {
      path: '/identity/user',
      name: 'identity-user',
      component: IdentityUser
    }, {
      path: '/identity/role',
      name: 'identity-role',
      component: IdentityRole
    }, {
      path: '/identity/user-role',
      name: 'identity-user-role',
      component: IdentityUserRole
    }, {
      path: '/security/module',
      name: 'security-module',
      component: SecurityModule
    }, {
      path: '/security/function',
      name: 'security-function',
      component: SecurityFunction
    }, {
      path: '/security/entityinfo',
      name: 'security-entityinfo',
      component: SecurityEntityInfo
    }, {
      path: '/security/role-function',
      name: 'security-role-function',
      component: SecurityRoleFunction
    }, {
      path: '/security/user-function',
      name: 'security-user-function',
      component: SecurityUserFunction
    }, {
      path: '/security/role-entityinfo',
      name: 'security-role-entityinfo',
      component: SecurityRoleEntityInfo
    }, {
      path: '/security/user-entityinfo',
      name: 'security-user-entityinfo',
      component: SecurityUserEntityInfo
    }, {
      path: '/system/settings',
      name: 'system-settings',
      component: SystemsSetting
    },
  ],
});
