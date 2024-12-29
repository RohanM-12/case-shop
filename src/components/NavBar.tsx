import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { buttonVariants } from "./ui/button";
import { Smartphone } from "lucide-react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";


const NavBar = async () => {
    const { getUser } = getKindeServerSession()
    const user = await getUser();
    const isAdmin = user?.email === process.env.ADMIN_EMAIL;
    return (
        <nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/80  backdrop-blur-md transition-all">
            <MaxWidthWrapper>
                <div className="flex h-14 items-center justify-between border-b border-zinc-200">
                    <Link href={"/"} className="flex z-14 font-bold text-xl">
                        Case <span className="text-orange-600 ">Shop</span>
                    </Link>
                    <div className="h-full flex items-center space-x-4">
                        {user ? (<>
                            <Link href={"/api/auth/logout"} className={buttonVariants({
                                size: "sm",
                                variant: "ghost"
                            })}>
                                Sign out
                            </Link>
                            {isAdmin ? <Link href={"/api/auth/logout"} className={buttonVariants({
                                size: "sm",
                                variant: "ghost"
                            })}>
                                Dashboard✨
                            </Link> : null}
                            <Link href={"/api/configure/upload"} className={buttonVariants({
                                size: "sm",
                                className: "hidden sm:flex items-center gap-1"
                            })}>
                                Create case
                                <Smartphone />
                            </Link>
                        </>) : (
                            <>
                                {/* // no user */}
                                <Link href={"/api/auth/register"} className={buttonVariants({
                                    size: "sm",
                                    variant: "ghost"
                                })}>
                                    Sign up
                                </Link>

                                <Link href={"/api/auth/login"} className={buttonVariants({
                                    size: "sm",
                                    variant: "ghost"
                                })}>
                                    Login
                                </Link>
                                <div className="h-8 w-px bg-zinc-200 hidden sm:block" />
                                <Link href={"/api/configure/upload"} className={buttonVariants({
                                    size: "sm",
                                    className: "hidden sm:flex items-center gap-1"
                                })}>
                                    Create case
                                    <Smartphone />
                                </Link>
                            </>)
                        }

                    </div>
                </div>
            </MaxWidthWrapper>

        </nav>
    )
}

export default NavBar