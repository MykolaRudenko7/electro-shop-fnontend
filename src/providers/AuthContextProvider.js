'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { AuthContext } from 'context/AuthContext'
import { endpointConfig } from 'data/shared/endpointConfig'
import UserRegistrationService from 'services/userRegistrationService'

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  const router = useRouter()
  const { loginUrl, profileUrl } = endpointConfig

  useEffect(() => {
    const getProfile = async () => {
      try {
        const apiResponse = await UserRegistrationService.getUserInfo()

        if (apiResponse?.data?.success) {
          setUser(apiResponse.data.user)
          router.push(profileUrl)
        }
      } catch (error) {
        router.push(loginUrl)
      }
    }
    getProfile()
  }, [])

  return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>
}
