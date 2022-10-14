
# Route lifecycle hooks
```js
router.beforeEach((to, from, ... /*?*/)) => {...})
-> beforeEnter((to, from, ... /*?*/)) => {...})
-> beforeRouteEnter((to, from, ... /*?*/)) => {...})
-> router.beforeResolve((to, from, ... /*?*/)) => {...})
-> router.afterEach((to, from, ... /*?*/)) => {...})

-> Vue app lifecyle hooks
beforeCreate()
created()
...
```
(!) Where is `beforeRouteLeave()`  ?


## Check if there is a previous page in history
```js
router.beforeEach((to, from)) => {
if(from.href) return true
})
```
