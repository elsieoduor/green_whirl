import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin, Home, Shield, FileText, Clock } from "lucide-react"
import { Navigation } from "@/components/nav"

export const metadata = {
  title: "Terms of Service - Green Whirl | Real Estate Terms and Conditions",
  description:
    "Read Green Whirl's terms of service and conditions for our real estate services. Learn about our policies, user responsibilities, and legal agreements.",
  keywords: "terms of service, legal terms, real estate conditions, user agreement, privacy policy, Green Whirl terms",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-muted to-card">
        <div className="container mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <FileText className="h-12 w-12 text-primary mr-4" />
              <Shield className="h-12 w-12 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Terms of <span className="text-primary">Service</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Please read these terms and conditions carefully before using Green Whirl&apos;s services.
            </p>
            <div className="flex items-center justify-center text-sm text-muted-foreground">
              <Clock className="h-4 w-4 mr-2" />
              Last updated: December 2024
            </div>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-8">
            {/* Introduction */}
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-card-foreground">1. Introduction and Acceptance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Welcome to Green Whirl. These Terms of Service (&apos;Terms&apos;) govern your use of our website, services, and
                  any related applications or services provided by Green Whirl (&apos;we,&apos; &apos;us,&apos; or &apos;our&apos;).
                </p>
                <p>
                  By accessing or using our services, you agree to be bound by these Terms. If you do not agree to these
                  Terms, please do not use our services.
                </p>
                <p>
                  Green Whirl is a real estate service company specializing in helping married couples find affordable
                  homes in desirable locations. Our services include property listings, consultation, and assistance
                  with the home buying process.
                </p>
              </CardContent>
            </Card>

            {/* Services */}
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-card-foreground">2. Our Services</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>Green Whirl provides the following services:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Property listing and search services</li>
                  <li>Real estate consultation and guidance</li>
                  <li>Home buying assistance and support</li>
                  <li>Market analysis and property valuation information</li>
                  <li>Connection with qualified real estate professionals</li>
                </ul>
                <p>
                  We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without
                  prior notice.
                </p>
              </CardContent>
            </Card>

            {/* User Responsibilities */}
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-card-foreground">3. User Responsibilities</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>When using our services, you agree to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide accurate and truthful information</li>
                  <li>Use our services only for lawful purposes</li>
                  <li>Respect the privacy and rights of other users</li>
                  <li>Not engage in any fraudulent or deceptive practices</li>
                  <li>Comply with all applicable local, state, and federal laws</li>
                </ul>
                <p>
                  You are responsible for maintaining the confidentiality of any account information and for all
                  activities that occur under your account.
                </p>
              </CardContent>
            </Card>

            {/* Property Information */}
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-card-foreground">4. Property Information and Accuracy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  While we strive to provide accurate and up-to-date property information, we cannot guarantee the
                  accuracy, completeness, or timeliness of all listings and property details.
                </p>
                <p>Property information is subject to change without notice, including:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Pricing and availability</li>
                  <li>Property features and descriptions</li>
                  <li>Market conditions and valuations</li>
                  <li>Legal status and ownership details</li>
                </ul>
                <p>
                  We recommend that all users conduct their own due diligence and verification of property information
                  before making any decisions.
                </p>
              </CardContent>
            </Card>

            {/* Limitation of Liability */}
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-card-foreground">5. Limitation of Liability</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Green Whirl acts as an intermediary service connecting buyers with properties and real estate
                  professionals. We are not responsible for:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>The condition, legality, or availability of any property</li>
                  <li>The actions or omissions of third-party real estate professionals</li>
                  <li>Any financial losses resulting from property transactions</li>
                  <li>Disputes between buyers, sellers, or other parties</li>
                </ul>
                <p>
                  Our liability is limited to the maximum extent permitted by law. In no event shall Green Whirl be
                  liable for any indirect, incidental, special, or consequential damages.
                </p>
              </CardContent>
            </Card>

            {/* Privacy and Data */}
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-card-foreground">6. Privacy and Data Protection</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  We respect your privacy and are committed to protecting your personal information. Our collection and
                  use of personal data is governed by our Privacy Policy.
                </p>
                <p>By using our services, you consent to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>The collection and processing of your personal information as described in our Privacy Policy</li>
                  <li>Communication from us regarding our services and relevant property opportunities</li>
                  <li>Sharing of necessary information with qualified real estate professionals to assist you</li>
                </ul>
                <p>
                  You have the right to access, correct, or delete your personal information at any time by contacting
                  us.
                </p>
              </CardContent>
            </Card>

            {/* Intellectual Property */}
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-card-foreground">7. Intellectual Property</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  All content on our website and services, including text, graphics, logos, images, and software, is the
                  property of Green Whirl or our licensors and is protected by copyright and other intellectual property
                  laws.
                </p>
                <p>You may not:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Copy, modify, or distribute our content without permission</li>
                  <li>Use our trademarks or logos without authorization</li>
                  <li>Reverse engineer or attempt to extract source code from our services</li>
                </ul>
              </CardContent>
            </Card>

            {/* Termination */}
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-card-foreground">8. Termination</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  We reserve the right to terminate or suspend your access to our services at any time, with or without
                  cause, and with or without notice.
                </p>
                <p>
                  You may discontinue using our services at any time. Upon termination, your right to use our services
                  will cease immediately.
                </p>
              </CardContent>
            </Card>

            {/* Changes to Terms */}
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-card-foreground">9. Changes to Terms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  We may update these Terms from time to time to reflect changes in our services or legal requirements.
                  We will notify users of significant changes by posting the updated Terms on our website.
                </p>
                <p>Your continued use of our services after any changes constitutes acceptance of the new Terms.</p>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-card-foreground">10. Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>If you have any questions about these Terms of Service, please contact us:</p>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-2 text-primary" />
                    <span>(555) 123-4567</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-2 text-primary" />
                    <span>legal@greenwhirl.com</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-primary" />
                    <span>123 Real Estate Ave, Suite 100, City, State 12345</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Agreement Section */}
          <div className="mt-12 p-6 bg-muted rounded-lg border border-border">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-foreground mb-4">Agreement Acknowledgment</h3>
              <p className="text-muted-foreground mb-6">
                By using Green Whirl&apos;s services, you acknowledge that you have read, understood, and agree to be bound
                by these Terms of Service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Shield className="h-4 w-4 mr-2" />I Accept These Terms
                </Button>
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                >
                  <FileText className="h-4 w-4 mr-2" />
                  Download PDF
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
