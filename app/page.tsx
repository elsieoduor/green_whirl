import { Navigation } from "@/components/nav"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Home, Heart, Star, Shield, ArrowRight, Users, Award, Clock } from "lucide-react"


export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/30 to-accent/10" />
        <div className="relative container mx-auto px-4 py-16 sm:py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
              <div className="space-y-4 lg:space-y-6">
                <Badge className="inline-flex items-center gap-2 bg-accent/10 text-accent border-accent/20 font-medium text-sm">
                  <Award className="h-4 w-4" />
                  Trusted by 1,200+ Happy Couples
                </Badge>
                <h1 className="font-heading text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground leading-tight">
                  Your Dream Home
                  <span className="block text-primary">Awaits</span>
                </h1>
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0">
                  Discover thoughtfully curated homes in exceptional locations, designed for couples who value comfort,
                  elegance, and lasting quality.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium group">
                  Explore Properties
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground font-medium bg-transparent"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  <span className="hidden sm:inline">Schedule Consultation</span>
                  <span className="sm:hidden">Call Us</span>
                </Button>
              </div>
            </div>
            <div className="relative order-first lg:order-last">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/elegant-modern-home-exterior-with-couple-standing-.jpg"
                  alt="Elegant home with happy couple"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-card border border-border rounded-xl p-4 sm:p-6 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="bg-accent/10 p-2 rounded-lg">
                    <Users className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-card-foreground text-sm sm:text-base">1,200+</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Happy Families</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 lg:mb-16 space-y-4">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Why Couples Choose <span className="text-primary">Green Whirl</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We understand the unique needs of couples embarking on their homeownership journey together.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 bg-card">
              <CardHeader className="text-center pb-4">
                <div className="bg-primary/10 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-primary/20 transition-colors">
                  <Heart className="h-7 w-7 sm:h-8 sm:w-8 text-primary" />
                </div>
                <CardTitle className="font-heading text-xl sm:text-2xl text-card-foreground">
                  Comfort & Elegance
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                  Every home is meticulously selected for its comfort, style, and potential to become your perfect
                  sanctuary together.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-accent/20 bg-card">
              <CardHeader className="text-center pb-4">
                <div className="bg-accent/10 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-accent/20 transition-colors">
                  <MapPin className="h-7 w-7 sm:h-8 sm:w-8 text-accent" />
                </div>
                <CardTitle className="font-heading text-xl sm:text-2xl text-card-foreground">Prime Locations</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                  Discover homes in the most desirable neighborhoods with excellent schools, amenities, and community
                  connections.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 bg-card sm:col-span-2 lg:col-span-1">
              <CardHeader className="text-center pb-4">
                <div className="bg-primary/10 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-primary/20 transition-colors">
                  <Shield className="h-7 w-7 sm:h-8 sm:w-8 text-primary" />
                </div>
                <CardTitle className="font-heading text-xl sm:text-2xl text-card-foreground">
                  Trusted Partnership
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                  Transparent pricing, expert guidance, and unwavering support throughout your entire home-buying
                  journey.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-12 lg:mb-16 space-y-4">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Curated <span className="text-accent">Properties</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Handpicked homes that perfectly blend comfort, style, and location for discerning couples.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8 lg:mb-12">
            {[
              {
                title: "Garden Sanctuary Cottage",
                price: "$285,000",
                location: "Maple Heights",
                bedrooms: 2,
                bathrooms: 2,
                sqft: "1,450",
                image: "/cozy-cottage-garden.png",
                featured: true,
              },
              {
                title: "Modern Riverside Townhouse",
                price: "$320,000",
                location: "Riverside District",
                bedrooms: 3,
                bathrooms: 2,
                sqft: "1,680",
                image: "/modern-townhouse-exterior.png",
                featured: false,
              },
              {
                title: "Charming Oak Valley Bungalow",
                price: "$265,000",
                location: "Oak Valley",
                bedrooms: 2,
                bathrooms: 1,
                sqft: "1,200",
                image: "/charming-bungalow-home.jpg",
                featured: false,
              },
            ].map((property, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary/20 bg-card"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={property.image || "/placeholder.svg"}
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {property.featured && (
                    <Badge className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-accent text-accent-foreground font-medium text-xs sm:text-sm">
                      Featured
                    </Badge>
                  )}
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-card/90 backdrop-blur-sm rounded-lg px-2 py-1 sm:px-3 sm:py-1">
                    <span className="font-heading font-bold text-primary text-sm sm:text-lg">{property.price}</span>
                  </div>
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="font-heading text-lg sm:text-xl text-card-foreground group-hover:text-primary transition-colors">
                    {property.title}
                  </CardTitle>
                  <CardDescription className="flex items-center text-muted-foreground text-sm sm:text-base">
                    <MapPin className="h-4 w-4 mr-2 text-accent" />
                    {property.location}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-3 gap-4 text-xs sm:text-sm">
                    <div className="text-center">
                      <p className="font-heading font-semibold text-card-foreground">{property.bedrooms}</p>
                      <p className="text-muted-foreground">Bedrooms</p>
                    </div>
                    <div className="text-center">
                      <p className="font-heading font-semibold text-card-foreground">{property.bathrooms}</p>
                      <p className="text-muted-foreground">Bathrooms</p>
                    </div>
                    <div className="text-center">
                      <p className="font-heading font-semibold text-card-foreground">{property.sqft}</p>
                      <p className="text-muted-foreground">Sq Ft</p>
                    </div>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium group">
                    View Details
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground font-medium bg-transparent"
            >
              Explore All Properties
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 lg:mb-16 space-y-4">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Stories of <span className="text-primary">Joy</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Hear from the couples who found their perfect home and happiness with Green Whirl.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            <Card className="border-2 border-border hover:border-primary/20 transition-colors bg-card p-6 sm:p-8">
              <CardContent className="space-y-4 sm:space-y-6">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="text-base sm:text-lg text-muted-foreground leading-relaxed italic">
                  &apos;Green Whirl transformed our home-buying experience into something truly magical. Their attention to
                  detail and understanding of what couples need made all the difference.&apos;
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-card-foreground text-sm sm:text-base">
                      Sarah & Mike Johnson
                    </p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Maple Heights • Garden Sanctuary Cottage</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-2 border-border hover:border-accent/20 transition-colors bg-card p-6 sm:p-8">
              <CardContent className="space-y-4 sm:space-y-6">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="text-base sm:text-lg text-muted-foreground leading-relaxed italic">
                  &apos;From our first consultation to moving day, the Green Whirl team exceeded every expectation. Our
                  townhouse is everything we dreamed of and more.&apos;
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <Users className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-card-foreground text-sm sm:text-base">
                      Emma & David Chen
                    </p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Riverside District • Modern Townhouse</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 sm:py-20 px-4 bg-gradient-to-br from-secondary/20 to-accent/5">
        <div className="container mx-auto">
          <div className="text-center mb-12 lg:mb-16 space-y-4 lg:space-y-6">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Begin Your <span className="text-primary">Journey</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to discover your dream home? Our dedicated team is here to guide you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium group">
                <Phone className="h-5 w-5 mr-2" />
                <span className="hidden sm:inline">Call (555) 123-4567</span>
                <span className="sm:hidden">Call Now</span>
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground font-medium bg-transparent"
              >
                <Mail className="h-5 w-5 mr-2" />
                <span className="hidden sm:inline">Schedule Meeting</span>
                <span className="sm:hidden">Email Us</span>
              </Button>
            </div>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="border-2 border-border bg-card shadow-xl">
              <CardHeader className="text-center pb-6">
                <CardTitle className="font-heading text-xl sm:text-2xl text-card-foreground">Get In Touch</CardTitle>
                <CardDescription className="text-muted-foreground text-base sm:text-lg">
                  Share your vision with us and we&apos;ll help make it a reality.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6 p-6 sm:p-8">
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-card-foreground font-heading">First Name</label>
                    <Input placeholder="Enter your first name" className="h-11 sm:h-12" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-card-foreground font-heading">Last Name</label>
                    <Input placeholder="Enter your last name" className="h-11 sm:h-12" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-card-foreground font-heading">Email Address</label>
                  <Input type="email" placeholder="Enter your email address" className="h-11 sm:h-12" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-card-foreground font-heading">Phone Number</label>
                  <Input type="tel" placeholder="Enter your phone number" className="h-11 sm:h-12" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-card-foreground font-heading">
                    Tell Us About Your Dream Home
                  </label>
                  <Textarea
                    placeholder="Share your preferences, timeline, and any questions you have..."
                    className="min-h-[100px] sm:min-h-[120px] resize-none"
                  />
                </div>
                <Button className="w-full h-11 sm:h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-base sm:text-lg group">
                  Send Message
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

    </div>
  )
}
