export const useAuth = () => {
  const user = useState('user', () => null)
  const isAuthenticated = useState('isAuthenticated', () => false)
  const userType = useState('userType', () => null) // 'customer' | 'partner'

  const loginCustomer = (email: string) => {
    user.value = { email, name: 'Customer Demo' }
    isAuthenticated.value = true
    userType.value = 'customer'
    return navigateTo('/customer/dashboard')
  }

  const loginPartner = (email: string) => {
    user.value = { email, name: 'Partner Demo' }
    isAuthenticated.value = true
    userType.value = 'partner'
    return navigateTo('/partner/dashboard')
  }

  const logout = () => {
    user.value = null
    isAuthenticated.value = false
    userType.value = null
    return navigateTo('/')
  }

  return {
    user,
    isAuthenticated,
    userType,
    loginCustomer,
    loginPartner,
    logout,
  }
}
