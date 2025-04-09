"use client"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"

export function Explore() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="outline-none cursor-pointer" >Explore</button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-32">
        <DropdownMenuItem>
          <Link href={`/this-pc`}>
            <span>This Pc</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href={`/this-pc/projects`}>
            <span>Projects</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href={`/this-pc/my-tools`}>
            <span>My Tools</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href={`/this-pc/blogs`}>
            <span>Blogs</span>
          </Link>
        </DropdownMenuItem>

      </DropdownMenuContent>
    </DropdownMenu>
  )
}
