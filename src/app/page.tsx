"use client";
import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import TextAbout from '@/components/sections/about/TextAbout';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Zap } from 'lucide-react';

const assetMap = [
  { "id": "heroImage", "url": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_346q1PwyWBLFgxn5R5gWYFVRO0Y/tmp/cozy-pizzeria-1760911502710-a8e692d7.jpg", "alt": "cozy pizzeria" },
  { "id": "aboutImage", "url": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_346q1PwyWBLFgxn5R5gWYFVRO0Y/tmp/pizza-making-1760911506810-784065ae.jpg", "alt": "pizza making" },
  { "id": "featureImage1", "url": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_346q1PwyWBLFgxn5R5gWYFVRO0Y/tmp/delicious-pizza-1760911509940-94b6ed20.jpg", "alt": "delicious pizza" },
  { "id": "featureImage2", "url": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_346q1PwyWBLFgxn5R5gWYFVRO0Y/tmp/gourmet-pizza-1760911512988-224de759.jpg", "alt": "gourmet pizza" },
  { "id": "featureImage3", "url": "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_346q1PwyWBLFgxn5R5gWYFVRO0Y/tmp/pizza-slice-closeup-1760911516682-da7e4c73.jpg", "alt": "pizza slice closeup" }
];

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant={"hover-magnetic"}
      defaultTextAnimation={"background-highlight"}
      borderRadius={"pill"}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Home", id: "hero" },
            { name: "Menu", id: "features" },
            { name: "About Us", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="qwfqwfqwf"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroSplit
            title="Welcome to Our Pizzeria"
            description="Discover the taste of authentic Italian pizza crafted with love."
            imageSrc={assetMap.find(a => a.id === "heroImage")?.url ?? "/public/images/placeholder.webp"}
            buttons={[
              { text: "qwfqwfqwf", href: "contact" },
              { text: "See Menu", href: "features" }
            ]}
          />
        </div>
      </div>
      <div id="features" data-section="features" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FeatureCardTwo
            title="Our Menu"
            features={[
              { title: "Margherita", description: "weqffqfqwf", icon: Zap, button: { text: "Learn More", href: "#" } },
              { title: "Pepperoni", description: "Spicy salami and mozzarella.", icon: Zap, button: { text: "Learn More", href: "#" } },
              { title: "qwfqwfqwf", description: "Loaded with fresh vegetables.", icon: Zap, button: { text: "Learn More", href: "#" } }
            ]}
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TextAbout
            title="Passion for Pizza and Quality"
            buttons={[
              { text: "Our Story", href: "about" }
            ]}
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ContactCenter
            tag="Newsletter"
            title="Stay in Touch"
            description="Join our newsletter for updates and exclusive offers."
            inputPlaceholder="Your email address"
            buttonText="Subscribe"
            termsText="We respect your privacy. Unsubscribe at any time."
            onSubmit={(email) => console.log(email)}
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterBase
            columns={[
              { title: "Product", items: [ { label: "Menu", href: "features" }, { label: "Order", href: "contact" } ] },
              { title: "Company", items: [ { label: "About Us", href: "about" }, { label: "Contact", href: "contact" } ] }
            ]}
            copyrightText="© 2025 | Pizzeria"
            onPrivacyClick={() => console.log('Privacy clicked')}
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
