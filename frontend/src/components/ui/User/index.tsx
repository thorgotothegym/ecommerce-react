import { FC } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "../DropdownMenu";
import Link from "next/link";
import { LogOutIcon, SettingsIcon, UserIcon } from "lucide-react";

type User = {
    fullName: string
    email: string
}

export const User: FC<User> = ({ fullName, email }) => {
    return <DropdownMenu>
        <DropdownMenuTrigger>
            <div className="grid gap-0.5">
                <div className="font-medium text-left">{fullName}</div>
                <div className="text-sm text-muted-foreground text-left">
                    {email}
                </div>
            </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
            <DropdownMenuItem>
                <Link
                    href="#"
                    className="flex items-center gap-2"
                    prefetch={false}
                >
                    <UserIcon className="w-4 h-4" />
                    <span>Profile</span>
                </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
                <Link
                    href="#"
                    className="flex items-center gap-2"
                    prefetch={false}
                >
                    <SettingsIcon className="w-4 h-4" />
                    <span>Settings</span>
                </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
                <Link
                    href="#"
                    className="flex items-center gap-2"
                    prefetch={false}
                >
                    <LogOutIcon className="w-4 h-4" />
                    <span>Logout</span>
                </Link>
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
}