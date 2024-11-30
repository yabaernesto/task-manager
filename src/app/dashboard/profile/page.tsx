import Link from 'next/link'
import { Root, ContainerDiv, ButtonTask } from '../header'
import { MenuBar } from '../header/header'
import { Profile } from './profile'
import { ArrowLeft, User } from 'lucide-react'
import { Button } from '@/app/components/Button'

function MyProfile() {
  return (
    <>
      <Root>
        <ContainerDiv>
          <MenuBar />
          <ButtonTask />
        </ContainerDiv>
        <Profile
          className="h-14 w-14 rounded-full cursor-pointer"
          src="https://github.com/yabaernesto.png"
          name="Yaba Ernesto"
        />
      </Root>

      <main className="h-[85vh] flex justify-center items-center">
        <div className="w-[33.75rem] flex flex-col space-y-8 m-auto">
          <div className="flex items-center gap-3">
            <div className="h-14 w-14 bg-secondary flex items-center justify-center rounded-full cursor-pointer">
              <Link href="/dashboard">
                <ArrowLeft className="h-5 text-white/80" />
              </Link>
            </div>
            <div className="space-y-1">
              <h1 className="text-3xl font-bold">My Profile</h1>
              <p className="text-white/80 text-lg">Preview my informations</p>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-3">
              {/* biome-ignore lint/a11y/useAltText: <explanation> */}
              <img
                src="https://github.com/yabaernesto.png"
                className="h-20 w-20 rounded-full cursor-pointer"
              />
              <div className="flex flex-col text-center">
                <span className="text-white text-2xl font-medium">
                  Yaba Ernesto
                </span>
                <Link href="/my-account" className="mr-auto">
                  <span className="text-[#B4ACF9] text-xs font-bold cursor-pointer">
                    My account
                  </span>
                </Link>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <div>
                  <span className="text-white/80 text-xs font-bold">
                    Display name
                  </span>
                  <h3 className="text-lg font-medium">Yaba Ernesto</h3>
                </div>
                <div>
                  <span className="text-white/80 text-xs font-bold">email</span>
                  <h3 className="text-lg font-medium">yabaernesto@gmail.com</h3>
                </div>
              </div>

              <User className="h-[9.6875rem] w-36 text-white/80 font-semibold" />
            </div>

            <Link href="/" className="text-center">
              <Button
                variant="ghost"
                className="h-[3.75rem] w-[23.8125rem] font-medium text-lg mt-8"
              >
                Sign out
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}

export default MyProfile
