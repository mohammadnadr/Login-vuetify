const PublicRoutes = {
  path: '/',
  component: () => import('@/layouts/default.vue'),
  meta: {
    requiresAuth: false
  },
  children: [
    // {
    //   name: 'landing',
    //   path: '/',
    //   component: () => import('@/views/authentication/LoginPage.vue')
    // },
    // {
    //   name: 'Authentication',
    //   path: '/login',
    //   component: () => import('@/views/authentication/LoginPage.vue')
    // },
    {
      name: 'Login',
      path: '/login',
      component: () => import('@/pages/auth/LoginPage.vue')
    },

    {
      name: 'Register',
      path: '/register',
      component: () => import('@/pages/auth/RegisterPage.vue')
    },
    {
      name: 'Forgot Password',
      path: '/forgot-password',
      component: () => import('@/pages/auth/ForgotPwd.vue')
    },

    {
      name: 'Reset Password',
      path: '/reset-pwd',
      component: () => import('@/pages/auth/ResetPwd.vue')
    },
    // {
    //   name: 'Check Mail',
    //   path: '/check-mail',
    //   component: () => import('@/views/authentication/auth/CheckMail.vue')
    // },
    {
      name: 'Reset Password',
      path: '/reset-pwd',
      component: () => import('@/pages/auth/ResetPwd.vue')
    },
    {
      name: 'Code Verification',
      path: '/code-verify',
      component: () => import('@/pages/auth/CodeVerification.vue')
    },

    {
      name: 'Error 404',
      path: '/error',
      component: () => import('@/pages/error/Error404Page.vue')
    },
    {
      name: 'Error 500',
      path: '/error500',
      component: () => import('@/pages/error/Error500Page.vue')
    }
  ]
};

export default PublicRoutes;
