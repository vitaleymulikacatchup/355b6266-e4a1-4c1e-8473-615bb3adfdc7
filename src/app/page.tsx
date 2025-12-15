"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboardSplit from '@/components/sections/hero/HeroBillboardSplit';
import AboutFeature from '@/components/sections/about/AboutFeature';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactFaq from '@/components/sections/contact/ContactFaq';
import FooterSplit from '@/components/sections/footer/FooterSplit';
import { Sparkles, Zap, Palette, Truck, Shield, TrendingUp, Mail, Phone, MapPin } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
      contentWidth="large"
      sizing="largeSizeExtraLargeSpacing"
      background="plain"
      cardStyle="gradient-radial"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="bold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="Fanatastika"
          logoAlt="Fanatastika T-Shirt Store"
          navItems={[
            { name: "Shop", id: "products" },
            { name: "About", id: "about" },
            { name: "Testimonials", id: "testimonials" },
            { name: "FAQ", id: "faq" },
            { name: "Contact", id: "contact" }
          ]}
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroBillboardSplit
          title="Express Your Style with Fanatastika"
          description="Discover unique, high-quality t-shirts that showcase your personality. From bold graphics to minimalist designs, find your perfect fit."
          tag="Summer Collection 2024"
          tagIcon={Sparkles}
          buttons={[
            { text: "Shop Now", href: "products" },
            { text: "Explore Collections", href: "products" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765793197079-g3krowh7.jpg"
          imageAlt="Stylish t-shirt collection display"
          frameStyle="browser"
          ariaLabel="Fanatastika t-shirt hero section"
        />
      </div>
      
      <div id="about" data-section="about">
        <AboutFeature
          title="Why Fanatastika is your go-to t-shirt destination. We believe in creating wearable art that makes you feel confident and comfortable every single day."
          useInvertedBackground="noInvert"
          features={[
            {
              icon: Zap,
              title: "Premium Quality",
              description: "100% organic cotton and sustainable materials crafted for comfort and durability that lasts through countless washes."
            },
            {
              icon: Palette,
              title: "Unique Designs",
              description: "Collaborate with independent artists to bring exclusive graphics and patterns you won't find anywhere else."
            },
            {
              icon: Truck,
              title: "Fast Shipping",
              description: "Orders ship within 24 hours with free delivery on purchases over 50 dollars. Track your order in real-time."
            },
            {
              icon: Shield,
              title: "Customer First",
              description: "30-day money-back guarantee and lifetime support. Your satisfaction is our top priority, always."
            }
          ]}
        />
      </div>
      
      <div id="products" data-section="products">
        <ProductCardThree
          title="Featured Collection"
          description="Discover our handpicked selection of trending t-shirts. Each piece is carefully designed for style and comfort."
          tag="Best Sellers"
          tagIcon={TrendingUp}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          products={[
            {
              id: "1",
              name: "Classic Crew Neck Black",
              price: "$24.99",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765793198371-7cnrdq1g.jpg",
              imageAlt: "Classic black crew neck t-shirt",
              initialQuantity: 1
            },
            {
              id: "2",
              name: "Vintage Graphic White",
              price: "$29.99",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765793199437-1w0w3bz6.jpg",
              imageAlt: "Vintage graphic design white t-shirt",
              initialQuantity: 1
            },
            {
              id: "3",
              name: "Premium Comfort Blue",
              price: "$32.99",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765793200852-wwpohsdh.jpg",
              imageAlt: "Premium comfort blue t-shirt",
              initialQuantity: 1
            },
            {
              id: "4",
              name: "Minimalist Grey",
              price: "$26.99",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765793202053-now6k75w.jpg",
              imageAlt: "Minimalist grey design t-shirt",
              initialQuantity: 1
            },
            {
              id: "5",
              name: "Bold Red Statement",
              price: "$31.99",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765793203104-hu8103uo.jpg",
              imageAlt: "Bold red statement t-shirt",
              initialQuantity: 1
            },
            {
              id: "6",
              name: "Oversized Fit Cream",
              price: "$28.99",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765793203905-xp217c5y.jpg",
              imageAlt: "Oversized cream colored t-shirt",
              initialQuantity: 1
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          containerStyle="default"
          ariaLabel="Featured t-shirt products"
        />
      </div>
      
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFive
          title="What Our Customers Love"
          description="Real feedback from real customers who wear Fanatastika every day"
          tag="Customer Stories"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell, Fashion Designer",
              date: "Date: 15 November 2024",
              title: "The quality exceeded my expectations!",
              quote: "I have been shopping with Fanatastika for over a year now. The t-shirts are incredibly comfortable, the designs are unique, and the customer service is outstanding. Worth every penny!",
              tag: "Premium Member",
              avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765793204851-vmbpm042.jpg",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765793216402-mw4ia638.jpg"
            },
            {
              id: "2",
              name: "Marcus Johnson, Creative Director",
              date: "Date: 10 November 2024",
              title: "Perfect for my creative team",
              quote: "We ordered bulk t-shirts for our design team and everyone loved them. The fit is perfect, colors are vibrant, and the delivery was faster than expected. Will definitely order again!",
              tag: "Business Partner",
              avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765793205870-k80lnvep.jpg",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765793217637-zn42lma9.jpg"
            },
            {
              id: "3",
              name: "Emma Rodriguez, Student",
              date: "Date: 08 November 2024",
              title: "Amazing designs at great prices",
              quote: "As a college student, I appreciate the affordable pricing without sacrificing quality. The unique designs make me stand out, and I get compliments every time I wear them!",
              tag: "Regular Customer",
              avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765793206860-fv80730m.jpg",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765793218793-0g1hx5cu.jpg"
            },
            {
              id: "4",
              name: "David Chen, Marketing Manager",
              date: "Date: 05 November 2024",
              title: "Exceptional customer support",
              quote: "Had a sizing issue with my first order. Fanatastika's support team resolved it within 24 hours and sent a replacement immediately. That kind of service keeps me coming back!",
              tag: "VIP Customer",
              avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765793208147-8ewbwpdz.jpg",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765793219936-ejwycar9.jpg"
            },
            {
              id: "5",
              name: "Jessica Williams, Lifestyle Blogger",
              date: "Date: 01 November 2024",
              title: "Perfect for content creation",
              quote: "I feature Fanatastika t-shirts in my fashion blog constantly. The quality photos look amazing, the fit is flattering, and my followers always ask where I get them!",
              tag: "Content Creator",
              avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765793209388-b5jf57xe.jpg",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765793198371-7cnrdq1g.jpg"
            },
            {
              id: "6",
              name: "Robert Thompson, Fitness Enthusiast",
              date: "Date: 28 October 2024",
              title: "Perfect gym and casual wear",
              quote: "These t-shirts are my go-to for everything - gym sessions, casual outings, traveling. The breathable material and comfortable fit make them my everyday favorite!",
              tag: "Loyal Customer",
              avatarSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765793210442-7stfby3g.jpg",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34my1kGeblbsCcwUUCcjBY9WFkg/uploaded-1765793199437-1w0w3bz6.jpg"
            }
          ]}
        />
      </div>
      
      <div id="faq" data-section="faq">
        <FaqDouble
          title="Common Questions"
          description="Everything you need to know about Fanatastika t-shirts and your order"
          tag="Help Center"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "What is your return policy?",
              content: "We offer a 30-day money-back guarantee on all t-shirts. If you're not completely satisfied with your purchase, simply contact our support team with your order number and we'll process a full refund. No questions asked!"
            },
            {
              id: "2",
              title: "How long does shipping take?",
              content: "Most orders ship within 24 hours of purchase. Standard shipping typically takes 5-7 business days within the continental US. We also offer expedited 2-3 day shipping for an additional fee. International orders may take 10-14 business days."
            },
            {
              id: "3",
              title: "Do you ship internationally?",
              content: "Yes! We ship to over 100 countries worldwide. International shipping costs vary by location, and import duties may apply depending on your country. You can calculate exact shipping costs at checkout."
            },
            {
              id: "4",
              title: "What materials do you use?",
              content: "All Fanatastika t-shirts are made from 100% organic cotton or premium cotton blends. We partner with sustainable suppliers and use eco-friendly dyeing processes. Each shirt is pre-shrunk to ensure longevity."
            },
            {
              id: "5",
              title: "How do I care for my t-shirt?",
              content: "Wash in cold water with similar colors. Gentle cycle or hand wash recommended for graphic prints. Tumble dry on low or air dry for maximum longevity. Avoid bleach and fabric softener. With proper care, your t-shirt will last for years!"
            },
            {
              id: "6",
              title: "Do you offer bulk orders?",
              content: "Absolutely! We offer special pricing for bulk orders of 10+ t-shirts. Perfect for teams, events, or businesses. Contact our sales team at bulk@fanatastika.com for custom quotes and options."
            }
          ]}
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactFaq
          ctaTitle="Get In Touch"
          ctaDescription="Have questions about our t-shirts? Our friendly team is here to help within 24 hours."
          ctaIcon={Mail}
          ctaButton={{ text: "Contact Us Now", href: "mailto:support@fanatastika.com" }}
          useInvertedBackground="noInvert"
          animationType="slide-up"
          accordionAnimationType="smooth"
          faqs={[
            {
              id: "1",
              title: "What is your typical response time?",
              content: "We respond to all inquiries within 24 hours, Monday through Friday. During weekends, we typically respond within 48 hours. For urgent matters, you can call our hotline."
            },
            {
              id: "2",
              title: "Can I change my order after placing it?",
              content: "If your order hasn't shipped yet, we can modify or cancel it free of charge. Contact us immediately with your order number and we'll help you out. Orders typically ship within 24 hours, so time is important!"
            },
            {
              id: "3",
              title: "Do you offer gift cards?",
              content: "Yes! We offer digital and physical gift cards in any amount. They never expire and can be used for any purchase. Perfect for gift-giving! Order through our website or contact our support team."
            }
          ]}
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterSplit
          logoText="Fanatastika"
          logoAlt="Fanatastika Logo"
          title="Premium t-shirts for those who dare to express themselves boldly. Wear your passion, wear Fanatastika."
          columns={[
            {
              title: "Shop",
              items: [
                { label: "All T-Shirts", href: "#products" },
                { label: "New Arrivals", href: "#products" },
                { label: "Best Sellers", href: "#products" },
                { label: "Sale Items", href: "#products" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "#about" },
                { label: "Our Story", href: "#about" },
                { label: "Sustainability", href: "#" },
                { label: "Careers", href: "#" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "FAQ", href: "#faq" },
                { label: "Contact Us", href: "#contact" },
                { label: "Shipping Info", href: "#" },
                { label: "Returns", href: "#" }
              ]
            },
            {
              title: "Legal",
              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Cookie Policy", href: "#" },
                { label: "Sitemap", href: "#" }
              ]
            }
          ]}
          contactItems={[
            { icon: Mail, text: "support@fanatastika.com" },
            { icon: Phone, text: "+1 (555) 123-4567" },
            { icon: MapPin, text: "123 Fashion Street, New York, NY 10001" }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}