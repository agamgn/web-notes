import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const router = new Router({
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 500 }
  },
  routes: [
    {
      path: "/slot",
      name: "slot",
      component: () => import("@/components/slot/slot")
    },
    {
      path: "/demo2",
      name: "demo2",
      component: () => import("@/components/test/demo2")
    },
    {
      path: "/grid",
      name: "grid",
      component: () => import("@/components/grid/grid")
    },
    {
      path: "/elemain",
      name: "main",
      component: () => import("@/components/element/main")
    },
    {
      path: "/demo",
      name: "demo",
      component: () => import("@/components/test/demo")
    },
    {
      path: "/sticktop",
      name: "sticktop",
      component: () => import("@/components/sticktop"),
      children: [
        {
          path: "a",
          component: () => import("@/components/sticktops/a")
        },
        {
          path: "b",
          component: () => import("@/components/sticktops/b")
        },
        {
          path: "c",
          component: () => import("@/components/sticktops/c")
        },
      ]
    },
    {
      path: "/newxick",
      name: "newxick",
      component: () => import("@/components/newxick")
    },
    {
      path: "/life",
      name: "life",
      component: () => import("@/components/life")
    },
    {
      path: "/routera",
      components: {
        defalut: () => import("@/components/namerouter/routera"),
        a: () => import("@/components/tabs/a")
      },
    },
    {
      path: "/routerb",
      component: () => import("@/components/namerouter/routerb"),
    },
    {
      path: "/aa",
      components: {
        defalut: () => import("@/components/mixins"),
        a: () => import("@/components/namerouter/routera"),
        b: () => import("@/components/namerouter/routerb")
      }
    },
    {
      path: '/minxin',
      name: 'mixins',
      component: () => import("@/components/mixins"),
      children: [
        {
          path: "aaa",
          name: "aaa",
          component: () => import("@/components/tabs/a")
        },
        {
          path: "bbb",
          name: "bbb",
          component: () => import("@/components/tabs/b")
        },
        {
          path: "ccc",
          name: "ccc",
          component: () => import("@/components/tabs/c")
        },
      ]
    },
    {
      path: "/page1",
      meta: { requiresAuth: true },
      component: () => import("@/components/mixins"),
    },
    {
      path: "/page2",
      component: () => import("@/components/mixins2"),
    }
  ]
})
router.beforeEach((to, from, next) => {
  // console.log(to);
  // console.log(from);
  next();
})
export default router;