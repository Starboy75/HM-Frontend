import { Button } from "@/components/ui/button"
import { NavLink } from "react-router-dom"
import { useState } from "react"
import logo from "@/images/logo.jpg"
import { AuthDialog } from "./Auth/AuthDialog"
import { LogOut } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export default function Header({ userInfo, setUserInfo, isLogged, setIsLogged, dialogOpen, setDialogOpen }) {


    const [auth, setAuth] = useState("login")

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setUserInfo(null);
        setIsLogged(false);
        window.location.reload();

    };

    return (
        <header className="border-b">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <img className="size-8" src={logo} alt="logo icon"></img>
                    <h1 className="text-3xl text-black-500"><b>HOTELHUB</b></h1>
                </div>
                <div className="flex gap-8">
                    <NavLink
                        className="text-gray-600 hover:text-gray-900 font-bold"
                        to="/"
                    >                Home
                    </NavLink>
                    <NavLink
                        className="text-gray-600 hover:text-gray-900 font-bold"
                        to="/divisons"
                    >
                        Hotels
                    </NavLink>
                    <NavLink

                        className="text-gray-600 hover:text-gray-900 font-bold"
                        to="/about"
                    >
                        About
                    </NavLink>
                </div>

                <div className="flex gap-4">
                    {isLogged ? (
                        <ul className="flex items-center gap-8">
                            <li title='Profile'>
                                <NavLink to="/profile" className="">
                                    <Avatar className="size-8 bg-primary cursor-pointer select-none">
                                        <AvatarFallback className="bg-primary font-semibold text-xl leading-8">
                                            {userInfo?.name?.slice(0, 1).toUpperCase()}
                                        </AvatarFallback>
                                    </Avatar>
                                </NavLink>
                            </li>
                            <li>
                                <div className="hover:text-gray-300 cursor-pointer" title='Logout' onClick={logout}>
                                    <LogOut />
                                </div>
                            </li>
                        </ul>
                    ) : (
                        <ul className="flex items-center gap-8">
                            <li>
                                <Button
                                    onClick={() => {
                                        setDialogOpen(true);
                                        setAuth("login");
                                    }}
                                    variant='secondary'
                                    className="h-8 w-20 text-base"
                                >
                                    Login
                                </Button>
                            </li>
                            <li>
                                <Button
                                    onClick={() => {
                                        setDialogOpen(true);
                                        setAuth("signup");
                                    }}
                                    className="h-8 w-20 text-base"
                                >
                                    Sign up
                                </Button>
                            </li>
                        </ul>
                    )}
                </div>
            </div>
            <AuthDialog dialogOpen={dialogOpen} setDialogOpen={setDialogOpen} auth={auth} setAuth={setAuth} setUserInfo={setUserInfo} setIsLogged={setIsLogged} />
        </header>
    )
}