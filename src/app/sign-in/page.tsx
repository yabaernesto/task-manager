'use client'

import { Logo } from '../components/Logo'
import Link from 'next/link'
import { Button } from '../components/Button'
import * as Root from '../components/Form/Input'
import * as Social from '../components/Form/Social'
import * as yup from 'yup'
import { useFormik } from 'formik'
import { useRouter } from 'next/navigation'
import { GoogleIcon } from '../components/Google'
import { FacebookIcon } from '../components/Facebook'

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
      <div className="border border-green-600 w-full flex flex-col gap-5 px-3 lg:w-96 lg:p-2">
        <div className="space-y-6">
          <Logo className="h-6 -ml-6" />
          <div className="space-y-3">
            <Social.Root>
              <Social.SpanIcon>
                <GoogleIcon className="h-6 w-6 text-[#2E2938] font-bold" />
              </Social.SpanIcon>
              <Social.SpanText>
                <Link href="/aksaksa" className="text-base">
                  Google
                </Link>
              </Social.SpanText>
            </Social.Root>

            <Social.Root>
              <Social.SpanIcon>
                <FacebookIcon className="h-6 w-6 text-[#2E2938] font-bold fill-[#2E2938]" />
              </Social.SpanIcon>
              <Social.SpanText>
                <Link href="/aksaksa" className="text-base">
                  Facebook
                </Link>
              </Social.SpanText>
            </Social.Root>
          </div>
        </div>

        <form onSubmit={formik.handleSubmit} className="w-full space-y-5">
          <div className="mb-2 space-y-8">
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
                <div className="text-red-500 text-xs">
                  {formik.errors.email}
                </div>
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
                <div className="text-red-500 text-xs">
                  <p>{formik.errors.password}</p>
                </div>
              ) : null}
            </Root.FormRoot>
          </div>

          <div className="space-y-5">
            <Button
              type="submit"
              className="w-full h-[3.75rem] mt-4 text-[#2E2938] font-medium text-sm"
            >
              Sign in
            </Button>

            <p className="text-center text-base text-white cursor-pointer hover:underline">
              Não tens uma conta? Criar conta agora.
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignIn
