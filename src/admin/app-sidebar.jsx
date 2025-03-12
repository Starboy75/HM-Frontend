import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
  CreditCard ,
} from "lucide-react"

import { NavMain } from "@/admin/nav-main"
import { NavUser } from "@/admin/nav-user"
import { TeamSwitcher } from "@/admin/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "Sakeen",
    email: "sakeen@gmail",
    avatar: "/avatars/shadcn.jpg",
  },
  team: {
      name: "HOTELHUB",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
  },
  navMain: [
    {
      title: "Room Request",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
    },
    {
      title: "Manage Rooms",
      url: "#",
      icon: BookOpen,
    },
    {
      title: "Users",
      url: "#",
      icon: Settings2,
    },
    {
      title: "Billing",
      url: "#",
      icon: CreditCard,
    },
  ],
}

export function AppSidebar({
  ...props
}) {
  return (
    (<Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher team={data.team} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>)
  );
}
