import { SiteConfig, NavItem, ActionButton, FooterLink } from "@/types"

export const siteConfig: SiteConfig = {
  name: "Relevants",
  description: "Relevants — знакомства по делу",
  url: "https://relevants.com",
  ogImage: "https://relevants.com/og.jpg",
  links: {
    twitter: "https://twitter.com/relevants",
    github: "https://github.com/relevants",
  },
}

export const navItems: NavItem[] = [
  {
    title: "Relevants в цифрах",
    href: "https://relevants.space/",
  },
  {
    title: "Инструкция",
    href: "https://relevants.space/",
  },
  {
    title: "Преимущества",
    href: "https://relevants.space/",
  },
  {
    title: "Отзывы",
    href: "https://relevants.space/",
  },
  {
    title: "Вопросы и ответы",
    href: "https://relevants.space/",
  },
]

export const actionButtons: ActionButton[] = [
  {
    title: "Я нанимаю",
    href: "https://relevants.space/",
    external: true,
  },
  {
    title: "Я ищу проект",
    href: "https://relevants.space/",
    external: true,
  },
]

export const footerLinks: FooterLink[] = [
  {
    title: "Условия использования Relevants",
    href: "https://relevants.space/",
    external: true,
  },
  {
    title: "Политика обработки данных",
    href: "https://relevants.space/",
    external: true,
  },
  {
    title: "Связаться с нами",
    href: "https://relevants.space/",
    external: true,
  },
  {
    title: "Я исполнитель",
    href: "https://relevants.space/",
    external: true,
    special: true,
  },
] 