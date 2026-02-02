export default defineNuxtRouteMiddleware((to, _from) => {
  const { isAuthenticated, userType } = useAuth()

  if (!isAuthenticated.value) {
    // Redirect to login based on intended path if possible, or generic login
    if (to.path.startsWith('/partner')) {
      return navigateTo('/login/partner')
    }
    return navigateTo('/login/customer')
  }

  // Role based protection
  if (to.path.startsWith('/partner') && userType.value !== 'partner') {
    return navigateTo('/login/partner')
  }

  if (to.path.startsWith('/customer') && userType.value !== 'customer') {
    return navigateTo('/login/customer')
  }
})
