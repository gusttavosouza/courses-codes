import { LogOut } from "lucide-react";

export function Profile() {
  return (
    <div className="grid grid-cols-profile items-center gap-3">
      <img src="https://github.com/gusttavosouza.png" alt="" className="w-10 h-10 rounded-full" />

      <div className="flex flex-1 flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">Gustavo Roberto</span>
        <span className="text-sm text-zinc-500 truncate">gustavo@portobello.com.br</span>
      </div>

      <button type="button" className="ml-auto p-2 hover:bg-zinc-50 rounded-md">
        <LogOut className="h-5 y-5 text-zinc-500" />
      </button>
    </div>
  )
}