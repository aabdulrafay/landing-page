export interface NavItem {
  title: string
  href: string
  external?: boolean
}

export interface ActionButton {
  title: string
  href: string
  external?: boolean
}

export interface FooterLink {
  title: string
  href: string
  external?: boolean
  download?: boolean
  special?: boolean
}

export interface SiteConfig {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    twitter: string
    github: string
  }
}

export interface ComponentProps {
  className?: string
  children?: React.ReactNode
}

export interface ButtonProps extends ComponentProps {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  disabled?: boolean
  onClick?: () => void
} 