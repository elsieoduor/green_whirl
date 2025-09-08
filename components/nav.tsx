"use client"

import { useState } from "react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger,} from "@/components/ui/dropdown-menu"
import { Phone, Home, Menu, User, LogOut, Settings, Shield } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/lib/auth-context"
import Link from "next/link"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const { user, logout } = useAuth()

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/listings", label: "Properties" },
    { href: "/terms", label: "Terms" },
  ]

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

  const handleLogout = () => {
    logout()
    router.push("/")
  }

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-primary/10 p-1.5 rounded-lg">
              <Home className="h-6 w-6 text-primary" />
            </div>
            <span className="text-xl lg:text-2xl font-heading font-bold text-foreground">Green Whirl</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-medium transition-colors ${
                  isActive(item.href) ? "text-primary" : "text-foreground hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            ))}

            <div className="flex items-center space-x-4">
              {user ? (
                <>
                  {user.role === "admin" && (
                    <Link
                      href="/admin"
                      className={`font-medium transition-colors ${
                        isActive("/admin") ? "text-primary" : "text-foreground hover:text-primary"
                      }`}
                    >
                      <Shield className="h-4 w-4 inline mr-1" />
                      Admin
                    </Link>
                  )}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="flex items-center space-x-2">
                        <div className="bg-primary/10 p-1.5 rounded-full">
                          <User className="h-4 w-4 text-primary" />
                        </div>
                        <span className="font-medium">{user.name}</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-48">
                      <DropdownMenuItem className="font-medium">
                        <User className="h-4 w-4 mr-2" />
                        {user.email}
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      {user.role === "admin" && (
                        <DropdownMenuItem asChild>
                          <Link href="/admin">
                            <Settings className="h-4 w-4 mr-2" />
                            Dashboard
                          </Link>
                        </DropdownMenuItem>
                      )}
                      <DropdownMenuItem onClick={handleLogout} className="text-red-600">
                        <LogOut className="h-4 w-4 mr-2" />
                        Sign Out
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </>
              ) : (
                <div className="flex items-center space-x-3">
                  <Link href="/auth/signup">
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium">
                      Sign Up
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="p-2">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[350px]">
                <div className="flex flex-col space-y-6 mt-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <Home className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-xl font-heading font-bold text-foreground">Green Whirl</span>
                  </div>

                  {user && (
                    <div className="bg-secondary/30 p-4 rounded-lg mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="bg-primary/10 p-2 rounded-full">
                          <User className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-heading font-semibold text-card-foreground">{user.name}</p>
                          <p className="text-sm text-muted-foreground">{user.email}</p>
                          {user.role === "admin" && (
                            <div className="flex items-center mt-1">
                              <Shield className="h-3 w-3 text-primary mr-1" />
                              <span className="text-xs text-primary font-medium">Admin</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="space-y-4">
                    {navItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`block text-lg font-medium transition-colors py-2 ${
                          isActive(item.href) ? "text-primary" : "text-foreground hover:text-primary"
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}

                    {user?.role === "admin" && (
                      <Link
                        href="/admin"
                        onClick={() => setIsOpen(false)}
                        className={`block text-lg font-medium transition-colors py-2 ${
                          isActive("/admin") ? "text-primary" : "text-foreground hover:text-primary"
                        }`}
                      >
                        <Shield className="h-4 w-4 inline mr-2" />
                        Admin Dashboard
                      </Link>
                    )}
                  </div>

                  <div className="space-y-3 pt-4 border-t border-border">
                    {user ? (
                      <Button
                        onClick={handleLogout}
                        variant="outline"
                        className="w-full justify-start text-red-600 border-red-200 hover:bg-red-50 bg-transparent"
                      >
                        <LogOut className="h-4 w-4 mr-2" />
                        Sign Out
                      </Button>
                    ) : (
                      <div className="space-y-3">
                        <Link href="/auth/login" onClick={() => setIsOpen(false)}>
                          <Button variant="outline" className="w-full bg-transparent">
                            Sign In
                          </Button>
                        </Link>
                        <Link href="/auth/signup" onClick={() => setIsOpen(false)}>
                          <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                            Sign Up
                          </Button>
                        </Link>
                      </div>
                    )}
                    <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                      <Phone className="h-4 w-4 mr-2" />
                      Call (555) 123-4567
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
