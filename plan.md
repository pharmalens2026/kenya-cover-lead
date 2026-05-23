# Implementation Plan - InsureLink Kenya

Building a modern, professional insurance agency website for the Kenyan market.

## 1. Theme & Branding
- **Primary Color**: Deep Blue (`#003366`) - representing trust and stability.
- **Accent Color**: Gold/Orange (`#F5A623`) - representing growth and confidence.
- **Typography**: Professional sans-serif (Inter/Roboto).
- **Style**: Clean, high-contrast, mobile-first, professional.

## 2. Components Structure
- `Layout`: Shared Header (with navigation and CTA) and Footer.
- `Hero`: Main banner with Kenyan lifestyle imagery and "Get a Quote" CTA.
- `ProductCard`: Reusable component for insurance categories.
- `StatsSection`: Counters for years of experience, clients served, etc.
- `PartnerStrip`: Scrolling container for insurance provider logos.
- `TestimonialCard`: For client reviews.
- `QuoteForm`: Lead generation form with type selection.
- `ContactSection`: Contact info, WhatsApp link, and Google Maps placeholder.

## 3. Pages/Sections
- **Home**: Overview of all services and trust indicators.
- **About**: Company values, mission, and "Why Trust Us".
- **Products**: Detailed breakdown of Personal, Business, and Specialized covers.
- **Claims**: Guidance on the claims process.
- **Quote**: Dedicated lead generation page.
- **Contact**: Reach out via form or WhatsApp.

## 4. Technical Implementation
- **Framework**: React 19 + Vite.
- **Styling**: Tailwind CSS v4.
- **Icons**: Lucide React.
- **Animation**: Framer Motion for smooth transitions.
- **Notifications**: Sonner for form submission feedback.
- **Responsiveness**: Mobile-first design with specific attention to Kenyan mobile users.

## 5. Assets
- High-quality images for Kenyan contexts (Families, SME businesses, modern Nairobi skyline, vehicles).
- Custom icons for different insurance types.
