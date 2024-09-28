import { cn } from '@renderer/utils'
import { ClassValue } from 'clsx'

export const SystemTray = () => {
  const trayButtonGeneralClassname: ClassValue =
    'rounded-full transition-all w-3.5 h-3.5 cursor-pointer'
  return (
    <header className="flex flex-row fixed h-10 w-full mt-0 pl-4 gap-1.5  justify-start items-center">
      <div
        className={cn(trayButtonGeneralClassname, `bg-red-500`, `hover:bg-red-900`)}
        onClick={() => {
          ;(window as any).context.closeWindow()
        }}
      />
      <div
        className={cn(trayButtonGeneralClassname, `bg-yellow-500`, `hover:bg-yellow-900`)}
        onClick={() => {
          ;(window as any).context.toggleMaximizeWindow()
        }}
      />
      <div
        className={cn(trayButtonGeneralClassname, `bg-green-500`, `hover:bg-green-900`)}
        onClick={() => {
          ;(window as any).context.minimizeWindow()
        }}
      />
    </header>
  )
}
