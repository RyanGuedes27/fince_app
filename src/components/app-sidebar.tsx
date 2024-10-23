'use client';

import * as React from 'react';
import { GalleryVerticalEnd, Settings2, ChartNoAxesColumn, Wallet } from 'lucide-react';

import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { TeamSwitcher } from '@/components/team-switcher';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail } from '@/components/ui/sidebar';
import { ModeToggle } from './ModeToggle';

// This is sample data.
const data = {
  user: {
    name: 'shadcn',
    email: 'm@example.com',
    avatar: '/avatars/shadcn.jpg',
  },
  teams: [
    {
      name: 'Fince Inc',
      logo: GalleryVerticalEnd,
      plan: 'Enterprise',
    },
  ],
  navMain: [
    {
      title: 'Investimentos',
      url: '#',
      icon: ChartNoAxesColumn,
      isActive: true,
      items: [
        {
          title: 'Dashboard',
          url: '/pages/home',
        },
        {
          title: 'Transações',
          url: '#',
        },
        {
          title: 'Ativos',
          url: '#',
        },
      ],
    },
    {
      title: 'Finanças',
      url: '#',
      icon: Wallet,
      items: [
        {
          title: 'Movimentações',
          url: '#',
        },
        {
          title: 'Planejamento',
          url: '#',
        },
      ],
    },
    {
      title: 'Settings',
      url: '#',
      icon: Settings2,
      items: [
        {
          title: 'General',
          url: '#',
        },
        {
          title: 'Team',
          url: '#',
        },
        {
          title: 'Billing',
          url: '#',
        },
        {
          title: 'Limits',
          url: '#',
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible='icon' {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <div className='flex items-center'>
          <NavUser user={data.user} />
          <ModeToggle />
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
