import Link from "next/link";
import { Root, ContainerDiv, ButtonTask } from "../header";
import { MenuBar } from "../header/header";
import { Profile } from "./profile";
import { ArrowLeft, User } from "lucide-react";
import { Button } from "@/app/components/Button";

function MyProfile() {
  return (
    <>
      <Root>
        <ContainerDiv>
          <MenuBar />
          <ButtonTask />
        </ContainerDiv>
        <Profile
          className="h-14 w-14 cursor-pointer rounded-full"
          src="https://github.com/yabaernesto.png"
          name="Yaba Ernesto"
        />
      </Root>

      <main className="flex h-[85vh] items-center justify-center px-8">
        <div className="m-auto flex w-[33.75rem] flex-col space-y-8">
          <div className="flex items-center gap-3">
            <div className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-secondary">
              <Link href="/dashboard">
                <ArrowLeft className="h-5 text-white/80" />
              </Link>
            </div>
            <div className="space-y-1">
              <h1 className="text-3xl font-bold">My Profile</h1>
              <p className="text-lg text-white/80">Preview my informations</p>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-3">
              {/* biome-ignore lint/a11y/useAltText: <explanation> */}
              <img
                src="https://github.com/yabaernesto.png"
                className="h-20 w-20 cursor-pointer rounded-full"
              />
              <div className="flex flex-col text-center">
                <span className="text-2xl font-medium text-white">
                  Yaba Ernesto
                </span>
                <Link href="/my-account" className="mr-auto">
                  <span className="cursor-pointer text-xs font-bold text-[#B4ACF9]">
                    My account
                  </span>
                </Link>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <div className="hidden lg:block">
                  <span className="text-xs font-bold text-white/80">
                    Display name
                  </span>
                  <h3 className="text-lg font-medium">Yaba Ernesto</h3>
                </div>
                <div className="hidden lg:block">
                  <span className="text-xs font-bold text-white/80">email</span>
                  <h3 className="text-lg font-medium">yabaernesto@gmail.com</h3>
                </div>
              </div>

              <User className="h-[9.6875rem] w-36 font-semibold text-white/80" />
            </div>

            <Link href="/" className="text-center">
              <Button
                variant="ghost"
                className="mt-8 h-[3.75rem] w-[23.8125rem] text-lg font-medium"
              >
                Sign out
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

export default MyProfile;
