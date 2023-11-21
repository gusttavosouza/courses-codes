import { BarChart, CheckSquare, Flag, Home, Search, SquareStack, Users } from 'lucide-react'

import { Logo } from '@/components/Sidebar/Logo'
import { UsedSpaceWidget } from './UsedSpaceWidget'
import { NavItem } from './NavItem'
import { Profile } from './Profile'
import { Control, Prefix, Root } from '../Input'

export function Sidebar() {
  return (
    <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
      <Logo />

      <Root>
        <Prefix>
          <Search className='h-5 w-5 text-zinc-500' />
        </Prefix>
        <Control placeholder='Search' />
      </Root>

      <nav className='space-y-0.5'>
        <NavItem title='Home' icon={Home}/>
        <NavItem title='Dashboard' icon={BarChart}/>
        <NavItem title='Projects' icon={SquareStack}/>
        <NavItem title='Tasks' icon={CheckSquare}/>
        <NavItem title='Reporting' icon={Flag}/>
        <NavItem title='Users' icon={Users}/>
      </nav>

      <UsedSpaceWidget />

      <div className='h-px bg-zinc-200' />

      <Profile />

    </aside>
  )
}