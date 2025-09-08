import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Home, Heart, Bed, Bath, Square, Filter, Search, Star } from "lucide-react"
import { Navigation } from "@/components/nav"
import Image from "next/image"

export const metadata = {
  title: "Properties for Sale - Green Whirl | Affordable Homes for Couples",
  description:
    "Browse our curated selection of affordable homes perfect for married couples. Find your dream home in amazing locations with Green Whirl's property listings.",
  keywords:
    "properties for sale, affordable homes, real estate listings, homes for couples, property search, house hunting",
}

const properties = [
  {
    id: 1,
    title: "Cozy Garden Cottage",
    price: 285000,
    location: "Maple Heights",
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1200,
    image: "/cozy-cottage-garden.png",
    featured: true,
    description: "Charming cottage with beautiful garden views, perfect for couples who love outdoor living.",
    amenities: ["Garden", "Fireplace", "Updated Kitchen", "Hardwood Floors"],
  },
  {
    id: 2,
    title: "Modern Townhouse",
    price: 320000,
    location: "Riverside District",
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1450,
    image: "/modern-townhouse-exterior.png",
    featured: true,
    description: "Contemporary townhouse with open floor plan and modern amenities in a vibrant neighborhood.",
    amenities: ["Open Floor Plan", "Garage", "Modern Appliances", "Patio"],
  },
  {
    id: 3,
    title: "Charming Bungalow",
    price: 265000,
    location: "Oak Valley",
    bedrooms: 2,
    bathrooms: 1,
    sqft: 1100,
    image: "/charming-bungalow-home.jpg",
    featured: false,
    description: "Classic bungalow with vintage charm and modern updates in a quiet neighborhood.",
    amenities: ["Vintage Details", "Large Lot", "Updated Bathroom", "Front Porch"],
  },
  {
    id: 4,
    title: "Sunny Ranch Home",
    price: 295000,
    location: "Meadowbrook",
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1350,
    image: "/sunny-ranch-style-home-exterior.jpg",
    featured: false,
    description: "Bright ranch home with large windows and spacious backyard, ideal for entertaining.",
    amenities: ["Large Backyard", "Bright Interior", "Master Suite", "Dining Room"],
  },
  {
    id: 5,
    title: "Victorian Duplex",
    price: 340000,
    location: "Heritage Hills",
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1300,
    image: "/victorian-style-duplex-home.jpg",
    featured: false,
    description: "Beautiful Victorian duplex with period details and rental income potential.",
    amenities: ["Period Details", "Rental Income", "High Ceilings", "Original Molding"],
  },
  {
    id: 6,
    title: "Contemporary Condo",
    price: 275000,
    location: "Downtown Core",
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1000,
    image: "/modern-contemporary-condo-building.jpg",
    featured: false,
    description: "Sleek condo in the heart of downtown with city views and modern amenities.",
    amenities: ["City Views", "Gym Access", "Rooftop Deck", "Concierge"],
  },
]

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-muted to-card">
        <div className="container mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Find Your Perfect <span className="text-primary">Dream Home</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Browse our carefully curated selection of affordable homes in amazing locations, perfect for couples
              starting their journey together.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 px-4 bg-card border-b border-border">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search by location, property type, or features..." className="pl-10" />
            </div>
            <div className="flex flex-wrap gap-4">
              <Select>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="under-300k">Under $300K</SelectItem>
                  <SelectItem value="300k-350k">$300K - $350K</SelectItem>
                  <SelectItem value="over-350k">Over $350K</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-[120px]">
                  <SelectValue placeholder="Bedrooms" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2">2+ Bedrooms</SelectItem>
                  <SelectItem value="3">3+ Bedrooms</SelectItem>
                  <SelectItem value="4">4+ Bedrooms</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-[120px]">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="maple-heights">Maple Heights</SelectItem>
                  <SelectItem value="riverside">Riverside District</SelectItem>
                  <SelectItem value="oak-valley">Oak Valley</SelectItem>
                  <SelectItem value="meadowbrook">Meadowbrook</SelectItem>
                </SelectContent>
              </Select>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                <Filter className="h-4 w-4 mr-2" />
                More Filters
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Featured Properties</h2>
              <p className="text-muted-foreground">Hand-picked homes perfect for couples</p>
            </div>
            <Badge className="bg-primary/10 text-primary border-primary/20">
              <Star className="h-3 w-3 mr-1" />
              Staff Picks
            </Badge>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {properties
              .filter((p) => p.featured)
              .map((property) => (
                <Card
                  key={property.id}
                  className="overflow-hidden border-border bg-card hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="relative aspect-video bg-muted overflow-hidden">
                    <Image
                      src={property.image || "/placeholder.svg"}
                      alt={property.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">Featured</Badge>
                    <Button
                      size="sm"
                      variant="outline"
                      className="absolute top-3 right-3 bg-background/80 backdrop-blur border-border hover:bg-background"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-card-foreground group-hover:text-primary transition-colors">
                        {property.title}
                      </CardTitle>
                      <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                        ${property.price.toLocaleString()}
                      </Badge>
                    </div>
                    <CardDescription className="flex items-center text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-1" />
                      {property.location}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{property.description}</p>
                    <div className="flex justify-between text-sm text-muted-foreground mb-4">
                      <span className="flex items-center">
                        <Bed className="h-4 w-4 mr-1" />
                        {property.bedrooms} Bed
                      </span>
                      <span className="flex items-center">
                        <Bath className="h-4 w-4 mr-1" />
                        {property.bathrooms} Bath
                      </span>
                      <span className="flex items-center">
                        <Square className="h-4 w-4 mr-1" />
                        {property.sqft} sqft
                      </span>
                    </div>
                    <div className="flex gap-2 mb-4">
                      <Button className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground">
                        View Details
                      </Button>
                      <Button
                        variant="outline"
                        className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                      >
                        <Phone className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* All Properties */}
      <section className="py-12 px-4 bg-muted">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">All Properties</h2>
              <p className="text-muted-foreground">{properties.length} homes available</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((property) => (
              <Card
                key={property.id}
                className="overflow-hidden border-border bg-card hover:shadow-lg transition-all duration-300 group"
              >
                <div className="relative aspect-video bg-muted overflow-hidden">
                  <Image
                    src={property.image || "/placeholder.svg"}
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {property.featured && (
                    <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">Featured</Badge>
                  )}
                  <Button
                    size="sm"
                    variant="outline"
                    className="absolute top-3 right-3 bg-background/80 backdrop-blur border-border hover:bg-background"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-card-foreground group-hover:text-primary transition-colors">
                      {property.title}
                    </CardTitle>
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      ${property.price.toLocaleString()}
                    </Badge>
                  </div>
                  <CardDescription className="flex items-center text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-1" />
                    {property.location}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{property.description}</p>
                  <div className="flex justify-between text-sm text-muted-foreground mb-4">
                    <span className="flex items-center">
                      <Bed className="h-4 w-4 mr-1" />
                      {property.bedrooms} Bed
                    </span>
                    <span className="flex items-center">
                      <Bath className="h-4 w-4 mr-1" />
                      {property.bathrooms} Bath
                    </span>
                    <span className="flex items-center">
                      <Square className="h-4 w-4 mr-1" />
                      {property.sqft} sqft
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {property.amenities.slice(0, 2).map((amenity, index) => (
                      <Badge key={index} variant="outline" className="text-xs border-primary/30 text-muted-foreground">
                        {amenity}
                      </Badge>
                    ))}
                    {property.amenities.length > 2 && (
                      <Badge variant="outline" className="text-xs border-primary/30 text-muted-foreground">
                        +{property.amenities.length - 2} more
                      </Badge>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground">
                      View Details
                    </Button>
                    <Button
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                    >
                      <Phone className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Didn&apos;t Find What You&apos;re Looking For?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our team is constantly adding new properties. Let us know what you&apos;re looking for and we&apos;ll help you find
            your perfect home.
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
              <Mail className="h-5 w-5 mr-2" />
              Request Custom Search
            </Button>
          </div>
        </div>
      </section>

    </div>
  )
}
