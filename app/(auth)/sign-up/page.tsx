'use client'
import AuthForm from '@/components/auth-form'
import { signup } from '@/lib/actions/auth'
import { signUpSchema } from '@/lib/validations'
import React from 'react'

const SignUpPage = () => {
  return (
    <AuthForm
    type="SIGN_UP"
    schema={signUpSchema}
    defaultValues={{
      email: "",
      password: "",
      fullName: "",
      universityId: 0,
      universityCard: "",
    }}
    onSubmit={signup}
  />
  )
}

export default SignUpPage