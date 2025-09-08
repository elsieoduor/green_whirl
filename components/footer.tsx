import React from 'react'
import { Button } from './ui/button'
import { Award, Clock, Home, Mail, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-card border-t-2 border-border py-12 sm:py-16 px-4">
        <div className="container mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-8 lg:mb-12">
            <div className="sm:col-span-2 lg:col-span-2 space-y-4 lg:space-y-6">
              <div className="flex items-center space-x-3">
                <div className="bg-primary/10 p-2 rounded-xl">
                  <Home className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                </div>
                <span className="font-heading text-xl sm:text-2xl font-bold text-card-foreground">Green Whirl</span>
              </div>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-md">
                Creating beautiful beginnings for couples through exceptional homes in extraordinary locations since
                2020.
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>Mon-Sat 9AM-7PM</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4" />
                  <span>Licensed & Insured</span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-heading font-semibold text-base sm:text-lg text-card-foreground">Quick Links</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <Link
                    href="/about"
                    className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors"
                  >
                    About Green Whirl
                  </Link>
                </li>
                <li>
                  <Link
                    href="/listings"
                    className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors"
                  >
                    Browse Properties
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-heading font-semibold text-base sm:text-lg text-card-foreground">Get In Touch</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-center gap-3 text-muted-foreground text-sm sm:text-base">
                  <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                  <span>(555) 123-4567</span>
                </li>
                <li className="flex items-center gap-3 text-muted-foreground text-sm sm:text-base">
                  <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                  <span>hello@greenwhirl.com</span>
                </li>
                <li className="flex items-start gap-3 text-muted-foreground text-sm sm:text-base">
                  <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                  <span>
                    123 Real Estate Avenue
                    <br />
                    Suite 200, City, State 12345
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-6 sm:pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
                © 2025 Green Whirl. All rights reserved. | Licensed Real Estate Brokerage
              </p>
              <div className="flex gap-3 sm:gap-4">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground bg-transparent text-xs sm:text-sm"
                >
                  Facebook
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-accent/20 text-accent hover:bg-accent hover:text-accent-foreground bg-transparent text-xs sm:text-sm"
                >
                  Instagram
                </Button>
              </div>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer