import type { SVGProps } from "react";

/**
 * Line-icon set (1.5–2 stroke) matching the SVGs used across design/index.html.
 * All icons inherit `currentColor` and default to a 24x24 viewBox.
 */
type IconProps = SVGProps<SVGSVGElement>;

function base(props: IconProps) {
  return {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    width: 20,
    height: 20,
    ...props,
  };
}

export function ChatIcon(p: IconProps) {
  return <svg {...base(p)}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>;
}
export function BookIcon(p: IconProps) {
  return <svg {...base(p)}><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5z" /></svg>;
}
export function SearchIcon(p: IconProps) {
  return <svg {...base(p)}><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></svg>;
}
export function MicIcon(p: IconProps) {
  return <svg {...base(p)}><rect x="9" y="3" width="6" height="11" rx="3" /><path d="M5 11a7 7 0 0 0 14 0M12 18v3" /></svg>;
}
export function ShieldCheckIcon(p: IconProps) {
  return <svg {...base(p)}><path d="M12 3l7 4v5c0 4.5-3 7.7-7 9-4-1.3-7-4.5-7-9V7z" /><path d="M9 12l2 2 4-4" /></svg>;
}
export function ShieldIcon(p: IconProps) {
  return <svg {...base(p)}><path d="M12 3l7 4v5c0 4.5-3 7.7-7 9-4-1.3-7-4.5-7-9V7z" /></svg>;
}
export function CheckIcon(p: IconProps) {
  return <svg {...base({ strokeWidth: 2.4, ...p })}><path d="M20 6L9 17l-5-5" /></svg>;
}
export function InfoIcon(p: IconProps) {
  return <svg {...base(p)}><circle cx="12" cy="12" r="9" /><path d="M12 8v5M12 16h.01" /></svg>;
}
export function AlertTriangleIcon(p: IconProps) {
  return <svg {...base(p)}><path d="M12 9v4M12 17h.01" /><path d="M10.3 3.9 2 18a2 2 0 0 0 1.7 3h16.6a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" /></svg>;
}
export function UserIcon(p: IconProps) {
  return <svg {...base(p)}><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></svg>;
}
export function UsersIcon(p: IconProps) {
  return <svg {...base(p)}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>;
}
export function SendIcon(p: IconProps) {
  return <svg {...base(p)}><path d="M22 2 11 13M22 2l-7 20-4-9-9-4z" /></svg>;
}
export function PlusIcon(p: IconProps) {
  return <svg {...base(p)}><path d="M12 5v14M5 12h14" /></svg>;
}
export function StarIcon(p: IconProps) {
  return <svg {...base({ fill: "currentColor", stroke: "none", ...p })}><path d="m12 2 3 6.5 7 .6-5.3 4.6L18.2 21 12 17.3 5.8 21l1.5-7.3L2 9.1l7-.6z" /></svg>;
}
export function ChevronRightIcon(p: IconProps) {
  return <svg {...base(p)}><path d="M9 6l6 6-6 6" /></svg>;
}
export function ChevronLeftIcon(p: IconProps) {
  return <svg {...base(p)}><path d="M15 18l-6-6 6-6" /></svg>;
}
export function SunIcon(p: IconProps) {
  return <svg {...base(p)}><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>;
}
export function MoonIcon(p: IconProps) {
  return <svg {...base(p)}><path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z" /></svg>;
}
export function GlobeIcon(p: IconProps) {
  return <svg {...base(p)}><circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z" /></svg>;
}
export function BellIcon(p: IconProps) {
  return <svg {...base(p)}><path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.7 21a2 2 0 0 1-3.4 0" /></svg>;
}
export function HomeIcon(p: IconProps) {
  return <svg {...base(p)}><path d="M3 11l9-8 9 8M5 10v10h14V10" /></svg>;
}
export function ScaleIcon(p: IconProps) {
  return <svg {...base(p)}><path d="M12 3v18M7 21h10M5 7h14M5 7l-3 6a4 4 0 0 0 6 0zM19 7l3 6a4 4 0 0 1-6 0z" /></svg>;
}
export function CopyIcon(p: IconProps) {
  return <svg {...base(p)}><rect x="9" y="9" width="12" height="12" rx="2" /><path d="M5 15V5a2 2 0 0 1 2-2h10" /></svg>;
}
export function ShareIcon(p: IconProps) {
  return <svg {...base(p)}><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4" /></svg>;
}
export function BookmarkIcon(p: IconProps) {
  return <svg {...base(p)}><path d="M6 3h12a1 1 0 0 1 1 1v17l-7-4-7 4V4a1 1 0 0 1 1-1z" /></svg>;
}
export function SettingsIcon(p: IconProps) {
  return <svg {...base(p)}><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>;
}
export function GridIcon(p: IconProps) {
  return <svg {...base(p)}><rect x="3" y="3" width="7" height="9" /><rect x="14" y="3" width="7" height="5" /><rect x="14" y="12" width="7" height="9" /><rect x="3" y="16" width="7" height="5" /></svg>;
}
export function BarChartIcon(p: IconProps) {
  return <svg {...base(p)}><path d="M3 3v18h18" /><path d="M7 14l4-4 3 3 5-6" /></svg>;
}
export function ThumbsUpIcon(p: IconProps) {
  return <svg {...base(p)}><path d="M7 11v9H4a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1zM7 11l4-8a2 2 0 0 1 2 2v4h5a2 2 0 0 1 2 2.3l-1.3 6A2 2 0 0 1 17 20H7" /></svg>;
}
export function ThumbsDownIcon(p: IconProps) {
  return <svg {...base(p)}><path d="M17 13V4h3a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1zM17 13l-4 8a2 2 0 0 1-2-2v-4H6a2 2 0 0 1-2-2.3l1.3-6A2 2 0 0 1 7 4h10" /></svg>;
}
export function FlagIcon(p: IconProps) {
  return <svg {...base(p)}><path d="M4 22V4h13l-2 4 2 4H4" /></svg>;
}
export function BuildingIcon(p: IconProps) {
  return <svg {...base(p)}><path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" /></svg>;
}
export function CreditCardIcon(p: IconProps) {
  return <svg {...base(p)}><rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20" /></svg>;
}
export function MoreVerticalIcon(p: IconProps) {
  return <svg {...base(p)}><circle cx="12" cy="5" r="1.6" /><circle cx="12" cy="12" r="1.6" /><circle cx="12" cy="19" r="1.6" /></svg>;
}
export function ClockIcon(p: IconProps) {
  return <svg {...base(p)}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>;
}
export function XIcon(p: IconProps) {
  return <svg {...base(p)}><path d="M18 6 6 18M6 6l12 12" /></svg>;
}
export function LockIcon(p: IconProps) {
  return <svg {...base(p)}><rect x="4" y="11" width="16" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></svg>;
}
export function MailIcon(p: IconProps) {
  return <svg {...base(p)}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>;
}
export function LogOutIcon(p: IconProps) {
  return <svg {...base(p)}><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9" /></svg>;
}
export function FilterIcon(p: IconProps) {
  return <svg {...base(p)}><path d="M3 4h18M6 12h12M10 20h4" /></svg>;
}
export function WifiOffIcon(p: IconProps) {
  return <svg {...base(p)}><path d="M2 8a15 15 0 0 1 20 0M5 12a9 9 0 0 1 14 0M8.5 15.5a4 4 0 0 1 7 0M12 20h.01" /><path d="M2 2l20 20" /></svg>;
}
export function LightbulbIcon(p: IconProps) {
  return <svg {...base(p)}><path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.1h6c0-.8.4-1.6 1-2.1A7 7 0 0 0 12 2z" /></svg>;
}
export function TrashIcon(p: IconProps) {
  return <svg {...base(p)}><path d="M3 6h18M8 6V4h8v2M6 6l1 14h10l1-14" /></svg>;
}
export function EditIcon(p: IconProps) {
  return <svg {...base(p)}><path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z" /></svg>;
}
export function DownloadIcon(p: IconProps) {
  return <svg {...base(p)}><path d="M12 3v12M7 10l5 5 5-5M5 21h14" /></svg>;
}
export function CheckCircleIcon(p: IconProps) {
  return <svg {...base(p)}><circle cx="12" cy="12" r="9" /><path d="m8.5 12 2.5 2.5 5-5" /></svg>;
}
export function GoogleIcon(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={20} height={20} {...p}>
      <path fill="#4285F4" d="M22.5 12.2c0-.7-.06-1.4-.18-2.06H12v3.9h5.9a5.05 5.05 0 0 1-2.19 3.32v2.75h3.54c2.07-1.9 3.25-4.72 3.25-7.9z" />
      <path fill="#34A853" d="M12 23c2.95 0 5.43-.98 7.24-2.65l-3.54-2.75c-.98.66-2.24 1.05-3.7 1.05-2.84 0-5.25-1.92-6.11-4.5H2.24v2.84A11 11 0 0 0 12 23z" />
      <path fill="#FBBC05" d="M5.89 14.15a6.6 6.6 0 0 1 0-4.3V7.01H2.24a11 11 0 0 0 0 9.98z" />
      <path fill="#EA4335" d="M12 5.2c1.6 0 3.04.55 4.17 1.63l3.13-3.13A11 11 0 0 0 12 1 11 11 0 0 0 2.24 7.01L5.9 9.85C6.75 7.27 9.16 5.2 12 5.2z" />
    </svg>
  );
}
export function MapPinIcon(p: IconProps) {
  return <svg {...base(p)}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" /></svg>;
}
export function ChevronDownIcon(p: IconProps) {
  return <svg {...base(p)}><path d="M6 9l6 6 6-6" /></svg>;
}
export function NavigationIcon(p: IconProps) {
  return <svg {...base(p)}><path d="M3 11l19-9-9 19-2-8-8-2z" /></svg>;
}
export function SlidersIcon(p: IconProps) {
  return <svg {...base(p)}><path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6" /></svg>;
}
export function SignalIcon(p: IconProps) {
  return <svg viewBox="0 0 24 18" fill="currentColor" width={16} height={12} {...p}><rect x="0" y="10" width="4" height="8" rx="1" /><rect x="6" y="6" width="4" height="12" rx="1" /><rect x="12" y="2" width="4" height="16" rx="1" opacity=".5" /></svg>;
}
export function BatteryIcon(p: IconProps) {
  return <svg viewBox="0 0 24 12" fill="currentColor" width={22} height={12} {...p}><rect x="1" y="1" width="20" height="10" rx="2.5" opacity=".4" /><rect x="2.5" y="2.5" width="14" height="7" rx="1.4" /></svg>;
}
