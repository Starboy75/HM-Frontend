import BookingList from "./booking-list"
import { Home, Calendar, Users, ShoppingBag, Settings, LayoutDashboard, LogOut } from "lucide-react"

export default function Request() {
  return (
    <div className="flex h-screen bg-slate-100">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-16 bg-white border-r">
        <div className="flex flex-col items-center justify-between h-full py-4">
          <div className="flex flex-col items-center gap-6">
            <div className="p-2 rounded-lg bg-indigo-100 text-indigo-600">
              <LayoutDashboard className="h-5 w-5" />
            </div>
            <nav className="flex flex-col items-center gap-4">
              <button className="p-2 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-600">
                <Home className="h-5 w-5" />
              </button>
              <button className="p-2 rounded-lg bg-indigo-500 text-white">
                <Calendar className="h-5 w-5" />
              </button>
              <button className="p-2 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-600">
                <Users className="h-5 w-5" />
              </button>
              <button className="p-2 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-600">
                <ShoppingBag className="h-5 w-5" />
              </button>
              <button className="p-2 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-600">
                <Settings className="h-5 w-5" />
              </button>
            </nav>
          </div>
          <button className="p-2 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-600">
            <LogOut className="h-5 w-5" />
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-4">
        <BookingList />
      </main>
    </div>
  )
}

