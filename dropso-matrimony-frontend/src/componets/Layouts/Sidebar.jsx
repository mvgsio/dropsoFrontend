import { BarChart3, LayoutDashboard, Users, Zap } from 'lucide-react'
import React from 'react'
const menuItem = [
  {
    id: "dashboard",
    icon: LayoutDashboard,
    label: "Dashboard",
    active: true,
    badge: 'New'
  }, {
    id: "analytics",
    icon: BarChart3,
    label: "Analytics",
    submenu: [
      { id: 'overView', label: "Overview" },
      { id: "reports", label: "Reports" },
      { id: 'insights', label: "Insights" }
    ]
  },
  , {
    id: "users",
    icon: Users,
    label: "Users",
    count: "2.4k",
    submenu: [
      { id: 'all-users', label: "All Users" },
      { id: "roles", label: "Roles & Permission" },

    ]
  }
]
const Sidebar = () => {
  return (
    <div className=' w-72 transition duration-300 ease-in-out bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-r border-slate-200/50 dark:border-slate-700/50 flex flex-col relative z-10'>
      <div className='p-6 border-b border-slate-200/50 dark:border-slate-700/50'>
        <div className='flex items-center space-x-3'>
          <div className='w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg'>
            <Zap className='w-6 h-6 text-white' />
          </div>
          {/* conditional rendering */}
          <div>
            <h1 className='text-xl font-bold text-slate-800 dark:text-white'>Nexus</h1>
            <p className='text-xs text-slate-500 dark:text-slate-400'>Admin Panel</p>

          </div>
        </div>
      </div>
      {/* Navigation will display dynamically */}
      <nav className='flex-1 p-4 space-y-2 overflow-y-auto'>

        {menuItem.map((item)=>{
       return(
            <div key={item.id} className="">
            <button className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-200`}>
              <div className='flex items-center space-x-3'>
                <item.icon className={`w-5 h-5`}/>
{/* cndition rendering */}
<span className='font-medium ml-2'>{item.label}</span>
<span px-2 py-1 text-xs bg-red-500 rounded-full>{item.badge}</span>
              </div>
            </button>
          </div>
       )
       
})}
      </nav>

      {/* UserProfile */}
      <div className='p-4 border-t border-slate-200/50 dark:border-slate-700/50'>
        <div className='flex items-center space-x-3 p-3 rounded-xl bg-slate-50 dar:bg-slate-800/50'>
          <img
            src="https://static.vecteezy.com/system/resources/previews/049/174/246/non_2x/a-smiling-young-indian-man-with-formal-shirts-outdoors-photo.jpg"
            alt="User"
            className='w-10 h-10 rounded-full ring-2 ring-blue-500'
          />
          <div className='flex-1 min-w-0'>
            <div className='flex-1 mind-w-0'>
              <p className='text-sm font-medium text-slate-800 dark:text-white truncate'>Alex John</p>
              <p className='text-xs text-slate-500 dark:text-slate-400 truncate'>Administator</p>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
