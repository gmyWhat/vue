const routes = [{
        path: "/index",
        name: "index",
        component: () =>
            import ("@/views/index/index"),
        children: [{
                path: "home",
                name: "home",
                component: () =>
                    import ("@/views/index/home/home.vue"),
                redirect: { name: "keep" },
                children: [{
                        path: "keep",
                        name: "keep",
                        component: () =>
                            import ("@/views/index/home/keep/keep")
                    },
                    {
                        path: "cell",
                        name: "cell",
                        component: () =>
                            import ("@/views/index/home/cell/cell.vue")
                    },
                    {
                        path: "recom",
                        name: "recom",
                        component: () =>
                            import ("@/views/index/home/recom/recom.vue")
                    }

                ]
            },
            {
                path: "idea",
                name: "idea",
                component: () =>
                    import ("@/views/index/idea/idea.vue")
            },
            {
                path: "college",
                name: "college",
                component: () =>
                    import ("@/views/index/college/college.vue")
            },
            {
                path: "news",
                name: "news",
                component: () =>
                    import ("@/views/index/news/news.vue")
            },
            {
                path: "my",
                name: "my",
                component: () =>
                    import ("@/views/index/my/my.vue")
            },

        ]
    },
    {
        path: "/detail",
        name: "detail",
        component: () =>
            import ("@/views/detail/detail")
    }, {
        path: "/",
        redirect: "/index/home"
    }

]
export default routes