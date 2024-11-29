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

      <main className="h-[525px] flex justify-center items-center">
        <div className="w-[500px] p-2 space-y-5">
          <div className="flex items-center gap-5">
            <div className="bg-secondary p-4 rounded-full cursor-pointer">
              <Link href="/dashboard">
                <ArrowLeft className="h-5 w-5" />
              </Link>
            </div>
            <div className="space-y-1">
              <h1 className="text-3xl font-bold">My Profile</h1>
              <p className="text-zinc-200 text-base">Preview my informations</p>
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
                <span className="text-white text-xl">Yaba Ernesto</span>
                <span className="mr-auto text-primaryColor text-xs font-bold cursor-pointer">
                  <Link href="/my-account">My account</Link>
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between p-2">
              <div className="space-y-1">
                <div>
                  <span className="text-zinc-400 text-xs font-semibold">
                    Display name
                  </span>
                  <h3 className="text-base">Yaba Ernesto</h3>
                </div>
                <div>
                  <span className="text-zinc-400 text-xs font-semibold">
                    email
                  </span>
                  <h3 className="text-base">yabaernesto</h3>
                </div>
              </div>

              <User className="h-40 w-44 text-zinc-400 font-semibold" />
            </div>

            <Button className="m-auto" vartiant="ghost">
              <Link href="/" className="block w-full">
                Sign out
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </>
  )
}

export default MyProfile
