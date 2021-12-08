export default function () {
  // console.log('路由拦截1')
  return new Promise((resolve) => {
    setTimeout(() => {
      // console.log('路由拦截2', context)
      resolve()
    }, 2000)
  })
}
