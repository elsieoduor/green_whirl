import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, MapPin, Home, Heart, Users, Award, Clock, Shield, Star } from "lucide-react"
import { Navigation } from "@/components/nav"

export const metadata = {
  title: "About Green Whirl - Your Trusted Home Finding Partner",
  description:
    "Learn about Green Whirl's mission to help married couples find affordable homes in amazing locations. Discover our story, values, and commitment to comfort.",
  keywords: "about green whirl, real estate company, married couples, affordable homes, home buying experience",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-muted to-card">
        <div className="container mx-auto">
          <div className="text-center">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">Established 2020</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              About <span className="text-primary">Green Whirl</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
              We&apos;re more than just a real estate company. We&apos;re your partners in finding the perfect home where your
              love story continues to unfold.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Green Whirl was founded in 2020 with a simple yet powerful mission: to help married couples find
                  affordable homes in amazing locations where they can build their future together.
                </p>
                <p>
                  Our founders, Sarah and Michael Thompson, experienced firsthand the challenges couples face when
                  searching for their first home. The process was overwhelming, expensive, and often left them feeling
                  lost in a sea of options that didn&apos;t fit their needs or budget.
                </p>
                <p>
                  That&apos;s when they decided to create Green Whirl - a real estate company that truly understands what
                  matters most to couples starting their journey together: comfort, affordability, and locations that
                  enhance their quality of life.
                </p>
              </div>
              <div className="mt-8">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Heart className="h-4 w-4 mr-2" />
                  Start Your Journey
                </Button>
              </div>
            </div>
            <div className="relative">
              <Card className="border-border bg-card p-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-card-foreground mb-2">1000+</h3>
                  <p className="text-muted-foreground">Happy Couples Served</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do and ensure every couple receives the best possible experience.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-border bg-card">
              <CardHeader>
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-card-foreground">Comfort First</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  We prioritize your comfort throughout the entire home-buying process, ensuring you feel supported
                  every step of the way.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center border-border bg-card">
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-card-foreground">Transparency</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  No hidden fees, no surprises. We believe in honest, upfront communication about pricing and processes.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center border-border bg-card">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-card-foreground">Couple-Focused</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  We understand the unique needs of married couples and tailor our services to help you find your
                  perfect shared space.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center border-border bg-card">
              <CardHeader>
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-card-foreground">Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  We&apos;re committed to delivering exceptional service and helping you find not just a house, but your
                  dream home.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Couples Trust Green Whirl</h2>
            <p className="text-lg text-muted-foreground">Here's what sets us apart in the real estate industry.</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Amazing Locations</h3>
                  <p className="text-muted-foreground">
                    We carefully curate properties in the most desirable neighborhoods with easy access to amenities,
                    schools, and transportation.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Quick Process</h3>
                  <p className="text-muted-foreground">
                    Our streamlined approach helps couples find and secure their dream home faster than traditional
                    methods.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Personalized Service</h3>
                  <p className="text-muted-foreground">
                    Every couple is unique, and we tailor our approach to match your specific needs, preferences, and
                    budget.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <Card className="border-border bg-card p-8">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-card-foreground mb-4">Our Track Record</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-1">98%</div>
                    <p className="text-sm text-muted-foreground">Customer Satisfaction Rate</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-1">14 Days</div>
                    <p className="text-sm text-muted-foreground">Average Time to Find Perfect Home</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-1">$50K</div>
                    <p className="text-sm text-muted-foreground">Average Savings vs Market Price</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground">
              The passionate professionals dedicated to helping you find your perfect home.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center border-border bg-card">
              <CardHeader>
                <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-primary" />
                </div>
                <CardTitle className="text-card-foreground">Sarah Thompson</CardTitle>
                <CardDescription className="text-muted-foreground">Co-Founder & CEO</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  With 15 years in real estate, Sarah specializes in helping couples navigate their first home purchase
                  with confidence.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-border bg-card">
              <CardHeader>
                <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-primary" />
                </div>
                <CardTitle className="text-card-foreground">Michael Thompson</CardTitle>
                <CardDescription className="text-muted-foreground">Co-Founder & COO</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Michael brings expertise in property valuation and market analysis, ensuring couples get the best
                  value for their investment.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-border bg-card">
              <CardHeader>
                <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-primary" />
                </div>
                <CardTitle className="text-card-foreground">Jessica Martinez</CardTitle>
                <CardDescription className="text-muted-foreground">Senior Real Estate Agent</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Jessica&apos;s warm approach and attention to detail make the home-buying process smooth and enjoyable for
                  every couple.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Ready to Start Your Journey?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join the hundreds of couples who have found their perfect home with Green Whirl. Let&apos;s make your dream home
            a reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Phone className="h-5 w-5 mr-2" />
              Call (555) 123-4567
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              <Home className="h-5 w-5 mr-2" />
              Browse Properties
            </Button>
          </div>
        </div>
      </section>

    </div>
  )
}
