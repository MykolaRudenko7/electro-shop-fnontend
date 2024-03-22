'use client'

import { memo, useEffect, useState } from 'react'
import { AuthContext } from 'context/AuthContext'
import UserRegistrationService from 'services/userRegistrationService'

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null)

  const getProfile = async () => {
    try {
      const apiResponse = await UserRegistrationService.getUserInfo()

      if (apiResponse?.data?.success) {
        setUser(apiResponse.data.user)
      }
    } catch (error) {
      setUser()
    }
  }

  useEffect(() => {
    getProfile()
  }, [])

  return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>
}

export default memo(AuthContextProvider)
