"use client";

import { type LucideIcon, ChevronsUpDown, LayoutDashboard, Shield, Globe } from "lucide-react";
import { Link, usePathname } from "@/core/i18n/navigation";
import { useTranslations, useLocale } from "next-intl";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export interface NavItem {
  href: string;
  label: string;
  icon: LucideIcon;
  group?: string;
}

const SYSTEMS = [
  { key: "admin", href: "/admin", icon: Shield },
  { key: "dashboard", href: "/dashboard", icon: LayoutDashboard },
  { key: "landing", href: "/", icon: Globe },
] as const;

export function AppSidebar({
  brand,
  brandHref = "/",
  navItems,
  footerNavItems,
  footer,
}: {
  brand: React.ReactNode;
  brandHref?: string;
  navItems: NavItem[];
  footerNavItems?: NavItem[];
  footer?: React.ReactNode;
}) {
  const pathname = usePathname();
  const t = useTranslations("common");
  const locale = useLocale();

  // Group nav items
  const groups: { label?: string; items: NavItem[] }[] = [];
  let currentGroup: string | undefined = '__initial__';
  for (const item of navItems) {
    if (item.group !== currentGroup) {
      groups.push({ label: item.group, items: [item] });
      currentGroup = item.group;
    } else {
      groups[groups.length - 1].items.push(item);
    }
  }

  // Detect current system
  const currentSystem = SYSTEMS.find(
    (s) => s.key !== "landing" && pathname.startsWith(s.href)
  ) || SYSTEMS[2]; // fallback to landing

  return (
    <Sidebar variant="inset">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger
                className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm hover:bg-sidebar-accent hover:text-sidebar-accent-foreground cursor-pointer outline-none"
              >
                <span className="flex-1 font-serif italic text-lg leading-none">
                  {brand}
                </span>
                <ChevronsUpDown className="size-4 text-muted-foreground" />
              </DropdownMenuTrigger>
              <DropdownMenuContent side="right" align="start">
                <DropdownMenuGroup>
                  <DropdownMenuLabel>{t("systems.label")}</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {SYSTEMS.map((sys) => {
                    const Icon = sys.icon;
                    const isCurrent = sys.key === currentSystem.key;
                    return (
                      <DropdownMenuItem
                        key={sys.key}
                        disabled={isCurrent}
                        onClick={() => {
                          if (!isCurrent) {
                            window.open(`/${locale}${sys.href}`, "_blank");
                          }
                        }}
                      >
                        <Icon className="size-4" />
                        {t(`systems.${sys.key}`)}
                      </DropdownMenuItem>
                    );
                  })}
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        {groups.map((group, gi) => (
          <SidebarGroup key={gi}>
            {group.label && <SidebarGroupLabel>{group.label}</SidebarGroupLabel>}
            <SidebarGroupContent className="flex flex-col gap-2">
              <SidebarMenu>
                {group.items.map((item) => {
                  const Icon = item.icon;
                  const isActive =
                    item.href === navItems[0]?.href
                      ? pathname === item.href
                      : pathname.startsWith(item.href);
                  return (
                    <SidebarMenuItem key={item.href}>
                      <Link href={item.href}>
                        <SidebarMenuButton tooltip={item.label} isActive={isActive}>
                          <Icon />
                          <span>{item.label}</span>
                        </SidebarMenuButton>
                      </Link>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarFooter>
        {footerNavItems && footerNavItems.length > 0 && (
          <SidebarMenu>
            {footerNavItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname.startsWith(item.href);
              return (
                <SidebarMenuItem key={item.href}>
                  <Link href={item.href}>
                    <SidebarMenuButton tooltip={item.label} isActive={isActive}>
                      <Icon />
                      <span>{item.label}</span>
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        )}
        {footer}
      </SidebarFooter>
    </Sidebar>
  );
}
