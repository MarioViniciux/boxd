import Link from "next/link"
import { List, LogInIcon, LogOut, UserIcon, UserPlusIcon } from "lucide-react"
import type { ReactElement } from "react";

interface HeaderButtonsProps {
    title: string
    href?: string
    icon: ReactElement
    onclick?: () => void
}

const session: boolean = true;

const arrButtonsLogged: HeaderButtonsProps[] = session === null ? [
    {title: "List", href: "/list", icon: <List />},
    {title: "Profile", href: "/profile", icon: <UserIcon />},
    {title: "Logout", onclick: () => {console.log('Saiu com sucesso!')}, icon: <LogOut />},
] : [
    {title: "List", href: "/list", icon: <List />},
    {title: "Login", href: "/login", icon: <LogInIcon />},
    {title: "Register", href: "/register", icon: <UserPlusIcon />},
]

export default function HeaderButtons() {
    return (
        <div className="flex gap-6">
            {arrButtonsLogged.map((button) => (
                <Link key={button.href ?? button.title} href={button.href ?? "#"}>
                    <button type="button" className="flex justify-center gap-2 min-w-26 border-1 rounded-xl p-2 bg-gray-500 hover:cursor-pointer hover:bg-gray-600 hover:delay-75">{button.icon} {button.title}</button>
                </Link>
            ))}
        </div>
    )
}