"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { AuthGuard } from "@/components/auth-guard"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Plus, Edit, Trash2, Home, MapPin, Bed, Bath, Square, Search, Filter, MoreHorizontal } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

// Mock data for properties
const initialProperties = [
  {
    id: 1,
    title: "Garden Sanctuary Cottage",
    price: 285000,
    location: "Maple Heights",
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1450,
    description: "A charming cottage with beautiful garden views and modern amenities.",
    image: "/cozy-cottage-garden.png",
    status: "available",
    featured: true,
  },
  {
    id: 2,
    title: "Modern Riverside Townhouse",
    price: 320000,
    location: "Riverside District",
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1680,
    description: "Contemporary townhouse with river views and premium finishes.",
    image: "/modern-townhouse-exterior.png",
    status: "available",
    featured: false,
  },
  {
    id: 3,
    title: "Charming Oak Valley Bungalow",
    price: 265000,
    location: "Oak Valley",
    bedrooms: 2,
    bathrooms: 1,
    sqft: 1200,
    description: "Cozy bungalow in a quiet neighborhood with mature trees.",
    image: "/charming-bungalow-home.jpg",
    status: "sold",
    featured: false,
  },
]

export default function AdminDashboard() {
  const [properties, setProperties] = useState(initialProperties)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [editingProperty, setEditingProperty] = useState(null)
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    location: "",
    bedrooms: "",
    bathrooms: "",
    sqft: "",
    description: "",
    image: "",
    status: "available",
    featured: false,
  })

  const filteredProperties = properties.filter((property) => {
    const matchesSearch =
      property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.location.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || property.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const handleAddProperty = () => {
    const newProperty = {
      id: Date.now(),
      ...formData,
      price: Number.parseInt(formData.price),
      bedrooms: Number.parseInt(formData.bedrooms),
      bathrooms: Number.parseInt(formData.bathrooms),
      sqft: Number.parseInt(formData.sqft),
    }
    setProperties([...properties, newProperty])
    setFormData({
      title: "",
      price: "",
      location: "",
      bedrooms: "",
      bathrooms: "",
      sqft: "",
      description: "",
      image: "",
      status: "available",
      featured: false,
    })
    setIsAddDialogOpen(false)
  }

  const handleEditProperty = () => {
    const updatedProperties = properties.map((property) =>
      property.id === editingProperty.id
        ? {
            ...editingProperty,
            ...formData,
            price: Number.parseInt(formData.price),
            bedrooms: Number.parseInt(formData.bedrooms),
            bathrooms: Number.parseInt(formData.bathrooms),
            sqft: Number.parseInt(formData.sqft),
          }
        : property,
    )
    setProperties(updatedProperties)
    setIsEditDialogOpen(false)
    setEditingProperty(null)
  }

  const handleDeleteProperty = (id) => {
    setProperties(properties.filter((property) => property.id !== id))
  }

  const openEditDialog = (property) => {
    setEditingProperty(property)
    setFormData({
      title: property.title,
      price: property.price.toString(),
      location: property.location,
      bedrooms: property.bedrooms.toString(),
      bathrooms: property.bathrooms.toString(),
      sqft: property.sqft.toString(),
      description: property.description,
      image: property.image,
      status: property.status,
      featured: property.featured,
    })
    setIsEditDialogOpen(true)
  }

  return (
    <AuthGuard requireAdmin={true}>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="border-b border-border bg-card">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="bg-primary/10 p-2 rounded-xl">
                  <Home className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h1 className="font-heading text-3xl font-bold text-card-foreground">Admin Dashboard</h1>
                  <p className="text-muted-foreground">Manage your property listings</p>
                </div>
              </div>
              <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium">
                    <Plus className="h-5 w-5 mr-2" />
                    Add Property
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="font-heading text-2xl">Add New Property</DialogTitle>
                    <DialogDescription>Fill in the details below to add a new property listing.</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-6 py-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="title" className="font-heading">
                          Property Title
                        </Label>
                        <Input
                          id="title"
                          value={formData.title}
                          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                          placeholder="Enter property title"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="price" className="font-heading">
                          Price ($)
                        </Label>
                        <Input
                          id="price"
                          type="number"
                          value={formData.price}
                          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                          placeholder="285000"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location" className="font-heading">
                        Location
                      </Label>
                      <Input
                        id="location"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        placeholder="Enter location"
                      />
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="bedrooms" className="font-heading">
                          Bedrooms
                        </Label>
                        <Input
                          id="bedrooms"
                          type="number"
                          value={formData.bedrooms}
                          onChange={(e) => setFormData({ ...formData, bedrooms: e.target.value })}
                          placeholder="2"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="bathrooms" className="font-heading">
                          Bathrooms
                        </Label>
                        <Input
                          id="bathrooms"
                          type="number"
                          value={formData.bathrooms}
                          onChange={(e) => setFormData({ ...formData, bathrooms: e.target.value })}
                          placeholder="2"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="sqft" className="font-heading">
                          Square Feet
                        </Label>
                        <Input
                          id="sqft"
                          type="number"
                          value={formData.sqft}
                          onChange={(e) => setFormData({ ...formData, sqft: e.target.value })}
                          placeholder="1450"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="description" className="font-heading">
                        Description
                      </Label>
                      <Textarea
                        id="description"
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        placeholder="Enter property description"
                        className="min-h-[100px]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="image" className="font-heading">
                        Image URL
                      </Label>
                      <Input
                        id="image"
                        value={formData.image}
                        onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                        placeholder="/property-image.jpg"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="status" className="font-heading">
                          Status
                        </Label>
                        <Select
                          value={formData.status}
                          onValueChange={(value) => setFormData({ ...formData, status: value })}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="available">Available</SelectItem>
                            <SelectItem value="pending">Pending</SelectItem>
                            <SelectItem value="sold">Sold</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label className="font-heading">Featured Property</Label>
                        <div className="flex items-center space-x-2 pt-2">
                          <input
                            type="checkbox"
                            id="featured"
                            checked={formData.featured}
                            onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                            className="rounded border-border"
                          />
                          <Label htmlFor="featured" className="text-sm">
                            Mark as featured
                          </Label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end space-x-4">
                    <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                      Cancel
                    </Button>
                    <Button
                      onClick={handleAddProperty}
                      className="bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      Add Property
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <Card className="border-2 border-border bg-card">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">Total Properties</CardTitle>
                <div className="text-3xl font-bold text-card-foreground">{properties.length}</div>
              </CardHeader>
            </Card>
            <Card className="border-2 border-border bg-card">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">Available</CardTitle>
                <div className="text-3xl font-bold text-accent">
                  {properties.filter((p) => p.status === "available").length}
                </div>
              </CardHeader>
            </Card>
            <Card className="border-2 border-border bg-card">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">Sold</CardTitle>
                <div className="text-3xl font-bold text-primary">
                  {properties.filter((p) => p.status === "sold").length}
                </div>
              </CardHeader>
            </Card>
            <Card className="border-2 border-border bg-card">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">Featured</CardTitle>
                <div className="text-3xl font-bold text-card-foreground">
                  {properties.filter((p) => p.featured).length}
                </div>
              </CardHeader>
            </Card>
          </div>

          {/* Filters */}
          <Card className="mb-8 border-2 border-border bg-card">
            <CardHeader>
              <CardTitle className="font-heading text-xl">Property Management</CardTitle>
              <CardDescription>Search and filter your property listings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search properties..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-full md:w-48">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="available">Available</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="sold">Sold</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Properties Grid */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredProperties.map((property) => (
              <Card
                key={property.id}
                className="border-2 border-border hover:border-primary/20 transition-colors bg-card"
              >
                <div className="relative aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={property.image || "/placeholder.svg"}
                    alt={property.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge
                      className={`${
                        property.status === "available"
                          ? "bg-accent text-accent-foreground"
                          : property.status === "pending"
                            ? "bg-yellow-500 text-white"
                            : "bg-red-500 text-white"
                      }`}
                    >
                      {property.status}
                    </Badge>
                    {property.featured && <Badge className="bg-primary text-primary-foreground">Featured</Badge>}
                  </div>
                  <div className="absolute top-4 right-4">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button size="sm" variant="secondary" className="bg-card/90 backdrop-blur-sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => openEditDialog(property)}>
                          <Edit className="h-4 w-4 mr-2" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleDeleteProperty(property.id)} className="text-red-600">
                          <Trash2 className="h-4 w-4 mr-2" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start">
                    <CardTitle className="font-heading text-xl text-card-foreground">{property.title}</CardTitle>
                    <div className="text-right">
                      <div className="font-heading font-bold text-primary text-lg">
                        ${property.price.toLocaleString()}
                      </div>
                    </div>
                  </div>
                  <CardDescription className="flex items-center text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2 text-accent" />
                    {property.location}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Bed className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">{property.bedrooms}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bath className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">{property.bathrooms}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Square className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">{property.sqft}</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">{property.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProperties.length === 0 && (
            <Card className="text-center py-12 border-2 border-dashed border-border bg-card">
              <CardContent>
                <Home className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <CardTitle className="font-heading text-xl text-card-foreground mb-2">No Properties Found</CardTitle>
                <CardDescription>
                  {searchTerm || statusFilter !== "all"
                    ? "Try adjusting your search or filter criteria."
                    : "Get started by adding your first property listing."}
                </CardDescription>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Edit Dialog */}
        <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="font-heading text-2xl">Edit Property</DialogTitle>
              <DialogDescription>Update the property details below.</DialogDescription>
            </DialogHeader>
            <div className="space-y-6 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="edit-title" className="font-heading">
                    Property Title
                  </Label>
                  <Input
                    id="edit-title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="Enter property title"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="edit-price" className="font-heading">
                    Price ($)
                  </Label>
                  <Input
                    id="edit-price"
                    type="number"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    placeholder="285000"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-location" className="font-heading">
                  Location
                </Label>
                <Input
                  id="edit-location"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  placeholder="Enter location"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="edit-bedrooms" className="font-heading">
                    Bedrooms
                  </Label>
                  <Input
                    id="edit-bedrooms"
                    type="number"
                    value={formData.bedrooms}
                    onChange={(e) => setFormData({ ...formData, bedrooms: e.target.value })}
                    placeholder="2"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="edit-bathrooms" className="font-heading">
                    Bathrooms
                  </Label>
                  <Input
                    id="edit-bathrooms"
                    type="number"
                    value={formData.bathrooms}
                    onChange={(e) => setFormData({ ...formData, bathrooms: e.target.value })}
                    placeholder="2"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="edit-sqft" className="font-heading">
                    Square Feet
                  </Label>
                  <Input
                    id="edit-sqft"
                    type="number"
                    value={formData.sqft}
                    onChange={(e) => setFormData({ ...formData, sqft: e.target.value })}
                    placeholder="1450"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-description" className="font-heading">
                  Description
                </Label>
                <Textarea
                  id="edit-description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Enter property description"
                  className="min-h-[100px]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-image" className="font-heading">
                  Image URL
                </Label>
                <Input
                  id="edit-image"
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  placeholder="/property-image.jpg"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="edit-status" className="font-heading">
                    Status
                  </Label>
                  <Select
                    value={formData.status}
                    onValueChange={(value) => setFormData({ ...formData, status: value })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="available">Available</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="sold">Sold</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label className="font-heading">Featured Property</Label>
                  <div className="flex items-center space-x-2 pt-2">
                    <input
                      type="checkbox"
                      id="edit-featured"
                      checked={formData.featured}
                      onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                      className="rounded border-border"
                    />
                    <Label htmlFor="edit-featured" className="text-sm">
                      Mark as featured
                    </Label>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end space-x-4">
              <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleEditProperty} className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Update Property
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </AuthGuard>
  )
}
