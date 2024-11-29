'use client'

import { Facebook, Twitter } from 'lucide-react'
import { Logo } from '../components/Logo'
import Link from 'next/link'
import { Button } from '../components/Button'
import * as Root from '../components/Form/Input'
import * as Social from '../components/Form/Social'
import * as yup from 'yup'
import { useFormik } from 'formik'
import { useRouter } from 'next/navigation'

const SignIn = () => {
  const router = useRouter()

  const schema = yup.object().shape({
    email: yup
      .string()
      .email('O email deve ser válido')
      .required('O campo email é obrigatório'),
    password: yup
      .string()
      .min(4, 'A senha deve ter no mínimo 4 caracteres')
      .max(8, 'A senha deve ter no máximo 8 caracteres')
      .required('O campo senha é obrigatório'),
  })

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: schema,
    onSubmit: values => {
      console.log('Dados enviados:', values)
      router.push('/dashboard')
    },
  })

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="w-96 flex flex-col">
        <Logo className="h-6 -ml-6" />

        <div className="mt-8 space-y-2">
          <Social.Root>
            <Social.SpanIcon>
              <Facebook className="text-white text-xs" />
            </Social.SpanIcon>
            <Social.SpanText>
              <Link href="/aksaksa">Facebook</Link>
            </Social.SpanText>
          </Social.Root>

          <Social.Root>
            <Social.SpanIcon>
              <Twitter className="text-white text-xs" />
            </Social.SpanIcon>
            <Social.SpanText>
              <Link href="/aksaksa">Twitter</Link>
            </Social.SpanText>
          </Social.Root>
        </div>

        <form onSubmit={formik.handleSubmit} className="w-full mt-10 space-y-4">
          <Root.FormRoot>
            <Root.Label>Your email</Root.Label>
            <Root.InputFild
              type="email"
              id="email"
              name="email"
              placeholder="Please insert your e-mail address"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500 text-sm">{formik.errors.email}</div>
            ) : null}
          </Root.FormRoot>

          <Root.FormRoot>
            <Root.Label>Password</Root.Label>
            <Root.InputFild
              type="password"
              id="password"
              name="password"
              placeholder="Please insert your password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-500 text-sm">
                {formik.errors.password}
              </div>
            ) : null}
          </Root.FormRoot>

          <Button type="submit" className="w-full mt-3.5">
            Sign in
          </Button>

          <p className="text-center text-sm text-white cursor-pointer hover:underline">
            Não tens uma conta? Criar conta agora.
          </p>
        </form>
      </div>
    </div>
  )
}

export default SignIn
