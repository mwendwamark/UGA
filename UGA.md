**Utumishi Girls Academy**

Website Design & Content Guide

Gilgil, Nakuru County, Kenya

Prepared by: **Nthei** | Stack: Next.js + CSS | Version 1.0

# **0\. The Pitch - Why This Website Matters**

When parents in Kenya receive a school placement for their child, the first thing they do is search for that school online. If they find nothing - or find something outdated and unprofessional - doubt sets in. They start comparing, second-guessing, and ultimately choosing elsewhere.

This is exactly what happened with Utumishi Girls Academy. A student was placed there, but because there was no credible online presence, her family had no way to verify the school's quality, facilities, or values. They transferred her elsewhere - not because UGA wasn't good enough, but because it was invisible.

This website fixes that. It gives UGA a front door that matches its real-world quality, gives parents the confidence to say yes to a placement, and gives students something to be proud of before they even walk through the gate.

**Your pitch to the school:**

"Every year, Utumishi Girls Academy loses potential students to schools with better online presence - not because those schools are better, but because parents can't find you. This website is built to change that. It will cost you nothing to hear me out."

_💡 Lead with that story when you contact them. It is specific, emotional, and true. Administrators respond to real consequences more than to design pitches._

# **1\. Brand Colors & Typography**

Based on your existing CSS variables (--blue_color, --yellow_color, --red_color), here is the official palette interpretation for UGA. These should be used consistently across every page.

**Color Palette**

| **SWATCH** | **Name**       | **Hex** | **Usage / Role**                                              |
| ---------- | -------------- | ------- | ------------------------------------------------------------- |
|            | **UGA Blue**   | #0008C0 | Primary brand - hero backgrounds, CTAs, headings, navbar      |
|            | **Light Blue** | #616CF2 | Hover states, secondary buttons, card accents, links          |
|            | **UGA Yellow** | #E7F914 | Accent - badges, highlights, stat numbers, decorative stripes |
|            | **Alert Red**  | #FA0108 | Notices, form errors, urgent announcements only               |
|            | **Near Black** | #1E1E1E | Body text, nav items, footers                                 |
|            | **Body Grey**  | #555555 | Paragraph text, captions, secondary content                   |
|            | **White**      | #FFFFFF | Page backgrounds, cards, light sections                       |
|            | **Off White**  | #FAFAF9 | Alternating section backgrounds, subtle contrast areas        |

**Typography Rules**

- Primary font: Questrial (already loaded in your CSS) - clean, geometric, modern
- Headings: Questrial Bold or Medium at large sizes with letter-spacing: 0.4px
- Body text: Questrial Regular at 16-18px, line-height 1.6-1.7
- Consider adding a serif display font (e.g., DM Serif Display or Playfair Display) for hero quotes, pull quotes, or motto text - creates an 'elite school' feel
- Keep font choices to a maximum of 2 families across the entire site

_💡 Next.js supports Google Fonts natively via next/font - no @import needed. This improves performance significantly._

# **2\. Next.js - Can I Use It With Normal CSS?**

YES - absolutely. Next.js supports plain CSS files exactly the same way React does. Here is what you need to know:

### **Global CSS (your App.css equivalent)**

In Next.js, you create a globals.css file (usually in /app or /styles) and import it once in your root layout.tsx or layout.js. All your :root variables, .container, .btn classes, everything you have - works identically.

### **CSS Modules (component-scoped CSS)**

Next.js encourages CSS Modules (ComponentName.module.css). Instead of className="btn_black" you write className={styles.btn_black}. This prevents class name collisions across pages. It is optional but recommended for larger projects like this.

### **Project Structure for This Website**

- /app - Next.js App Router pages
- /app/page.tsx - Home page
- /app/about/page.tsx - About page
- /app/academics/page.tsx - Academics page
- /app/admissions/page.tsx - Admissions page
- ... and so on per page
- /components - Reusable components (Navbar, Footer, Hero, etc.)
- /styles - globals.css, variables, utility classes
- /public - Images, logo, school photos

_💡 Your existing CSS variables and class names will copy-paste directly into Next.js globals.css with zero changes. Start there and migrate gradually to CSS Modules later if you want._

_💡 Next.js App Router uses Server Components by default. Any component with onClick, useState, useEffect must have 'use client' at the top. This will be your main learning curve._

# **3\. Full Site Map - All Pages**

| **Page**               | **Purpose**                                                 |
| ---------------------- | ----------------------------------------------------------- |
| **/ Home**             | First impression, emotional hook, school overview, key CTAs |
| **/about**             | School story, mission, vision, values, leadership team      |
| **/academics**         | Curriculum, subjects, KCSE results, learning approach       |
| **/admissions**        | How to apply, requirements, form, deadlines, fees overview  |
| **/facilities**        | Dorms, labs, library, sports, chapel - visual showcase      |
| **/student-life**      | Co-curriculars, clubs, sports, events, culture              |
| **/news**              | Announcements, achievements, events calendar                |
| **/gallery**           | Photo and video gallery organized by category               |
| **/contact**           | Location map, phone, email, inquiry form                    |
| **/portal (optional)** | Parent/student login - future phase                         |

# **4\. Page-by-Page Content Guide**

## **Page 1 - Home ( / )**

This is the most important page. Its job is to immediately communicate prestige, warmth, and trust to a parent who found the school through a Google search or a placement letter. Every section should build confidence.

**SECTION 1. Navbar**

- Logo (left) + School name text
- Nav links: Home | About | Academics | Admissions | Facilities | Student Life | News | Contact
- CTA button (right): Apply Now - filled blue button
- Sticky on scroll. Background becomes white/semi-transparent with backdrop blur after scrolling past hero
- Mobile: hamburger menu, full-screen slide-in nav

_💡 Use --blue_color for the Apply Now button background. On mobile, show just the logo and hamburger icon._

**SECTION 2. Hero Section**

- Full-viewport height. Blue (#0008C0) background with a large, faded school crest or pattern overlay
- Left-aligned content:
  - Pre-heading tag: 'Nakuru County | Est. \[Year\]' in small caps with yellow underline
  - Main headline: 'Shaping Kenya's Future Leaders' (large, bold, white)
  - Sub-headline: 'A centre of academic excellence and character formation for girls in the heart of the Rift Valley.' (white, 18px)
  - Two CTA buttons: 'Explore the School' (white solid) + 'Apply for Admission' (yellow outlined)
- Right side: Full-bleed image of students in uniform (if photo available) OR animated geometric pattern
- Bottom strip: 3-4 key stats with yellow numbers - e.g., '400+ Students | 98% KCSE Pass Rate | 30+ Clubs | Est. \[Year\]'

_💡 This stat strip is critical for building trust at first glance. Even approximate numbers work. Coordinate with the school for accurate figures._

**SECTION 3. Welcome / Introduction Strip**

- White background, centered text
- Short paragraph from the Principal - 2-3 sentences maximum
- Principal's name, title, and a small circular photo
- Purpose: humanizes the school, gives it a voice

**SECTION 4. Why Utumishi Girls? (Value Proposition)**

- Headline: 'What Makes Us Different'
- 3-column grid of feature cards, each with:
  - Icon (SVG) + Short title + 2-sentence description
- Example cards: Academic Excellence | Character Formation | Safe & Supportive Environment | National Exam Results | Modern Facilities | Holistic Development

_💡 This section answers the parent's main question: 'Is this school worth it?' Keep language simple and benefit-focused._

**SECTION 5. About Snapshot**

- Two-column: image left, text right (or vice versa)
- Headline: 'Rooted in Values. Driven by Excellence.'
- 3-4 sentences about the school's founding, ethos, and location
- Link: 'Read our full story →'

**SECTION 6. Academic Highlights**

- Background: light grey or off-white
- Headline: 'Academic Performance'
- KCSE result summary - e.g., 'Class of 2023: XX students achieved A or A-'
- Subject strength callouts: Sciences, Languages, Arts
- Link to Academics page

**SECTION 7. Student Life Teaser**

- Masonry photo grid OR horizontal scroll strip of 6-8 activity photos
- Short paragraph: 'Life at Utumishi Girls goes beyond the classroom.'
- 3 pill-style labels: Sports | Clubs | Arts | Leadership | Community Service
- Link to Student Life page

**SECTION 8. News & Announcements**

- Latest 3 news cards in a horizontal row
- Each card: category tag + date + headline + short excerpt + read more link
- Link: 'See all news →'

**SECTION 9. Testimonials**

- Headline: 'Voices from Our Community'
- 3 quote cards - one from a parent, one from an alum, one from a student
- Each: large opening quote mark (yellow), quote text, name + year

_💡 If real quotes aren't available, use placeholder-style quotes that reflect authentic values. Replace when the school provides real ones._

**SECTION 10. Admissions CTA Banner**

- Full-width blue (#0008C0) banner
- Headline: 'Join the Utumishi Family'
- Subtext: 'Admissions for \[Year\] are open. Secure your place today.'
- Two buttons: Apply Now (yellow filled) | Contact Us (white outlined)

**SECTION 11. Footer**

- 4-column layout: School Info | Quick Links | Academics | Contact
- Column 1: Logo + tagline + social media icons
- Column 2: Home, About, Academics, Admissions, Student Life, Contact
- Column 3: Curriculum, KCSE Results, Clubs, Gallery
- Column 4: Address (Gilgil, Nakuru County), Phone, Email, Google Maps mini-embed
- Bottom bar: © 2025 Utumishi Girls Academy | Designed by \[Your Name\]

## **Page 2 - About ( /about )**

This page builds the school's story and earns deeper trust. Parents who click here are seriously considering enrollment.

**SECTION 1. Page Hero**

- Blue background hero (shorter than home hero - about 50vh)
- Page title: 'About Utumishi Girls Academy'
- Breadcrumb: Home > About

**SECTION 2. Our Story**

- Two-column: text left, photo right
- 3-4 paragraphs covering: when the school was founded, the vision behind it, growth over the years, link to Utumishi Boys as the sister school

_💡 Mention that UGA is a sister school of Utumishi Boys Academy - this immediately anchors it to an established institution with a track record._

**SECTION 3. Mission, Vision & Motto**

- 3-card grid with blue borders or left accent lines:
  - Mission: What the school does day to day
  - Vision: What the school is building toward
  - Motto / Core Values: The guiding phrase (e.g., 'Excellence in All Things')
- Design: Large pull-quote style text, minimal card styling

**SECTION 4. Our Values**

- 6 values in a 2×3 grid, each with:
  - Blue icon + value name + one-line description
- Examples: Integrity | Discipline | Excellence | Faith | Service | Leadership

**SECTION 5. Leadership Team**

- Headline: 'Meet Our Leadership'
- Cards for: Principal, Deputy Principal (Academics), Deputy Principal (Pastoral), Bursar, Head of Departments
- Each card: professional photo + name + title + short 2-sentence bio
- Design: minimal cards, 3-column grid on desktop, 1 column on mobile

**SECTION 6. Sister School Reference**

- Small banner or callout: 'UGA is a sister school of Utumishi Boys Academy'
- Brief context: shares ethos, standards, and values
- Optional external link to UBA's website if it exists

## **Page 3 - Academics ( /academics )**

This page should reassure parents that the school takes learning seriously. It's where you demonstrate results and structure.

**SECTION 1. Page Hero**

- Headline: 'Academic Excellence, Every Year'
- KCSE result headline stat front and center - e.g., 'XX% of students score C+ or above'

**SECTION 2. Curriculum Overview**

- Explain the 8-4-4 / CBC transition context
- List of subject clusters: Sciences, Humanities, Languages, Technical
- Note any special strengths or highly qualified teachers

**SECTION 3. KCSE Results**

- Year-by-year results table or bar chart (last 3-5 years)
- Top performer spotlights - name, grade, year (with permission)
- National ranking if applicable

**SECTION 4. Teaching Approach**

- Philosophy: discipline, structured learning, individualized attention
- Class sizes, teacher-student ratio
- Use of technology in the classroom

**SECTION 5. Departments**

- Tab or accordion layout - one per department
- Sciences | Mathematics | Languages | Social Studies | Technical
- Each: HOD name, subjects offered, brief description

**SECTION 6. Library & Learning Resources**

- Description of the school library
- Computer lab / ICT resources
- Study hours and academic support programs

## **Page 4 - Admissions ( /admissions )**

This is the conversion page. A parent should be able to complete the full admissions inquiry from this page. Keep it simple, clear, and actionable.

**SECTION 1. Page Hero**

- Headline: 'Start Your Journey at Utumishi Girls'
- Simple step indicator: 1. Inquire → 2. Apply → 3. Interview → 4. Enroll

**SECTION 2. Admission Requirements**

- KCPE score threshold (if any)
- Required documents: birth certificate, KCPE certificate, school leaving certificate, passport photos, medical records
- Age requirements

**SECTION 3. Fees Structure**

- Breakdown: Tuition | Boarding | Activity fees | Uniform
- Payment schedule (Terms 1, 2, 3)
- HELB / bursary / scholarship options if available

_💡 If exact fee figures are not yet confirmed by the school, use placeholder ranges or say 'Contact us for the current fee structure.'_

**SECTION 4. How to Apply**

- Step-by-step: numbered list, clear actions
- Step 1: Fill the inquiry form below
- Step 2: Submit documents to school office or email
- Step 3: Admission interview or placement confirmation
- Step 4: Pay fees and receive reporting date

**SECTION 5. Inquiry / Application Form**

- Fields: Student Full Name | Parent/Guardian Name | Phone | Email | KCPE Index No. | KCPE Marks | Current School | How did you hear about us? | Message
- Submit button: blue, full-width on mobile
- On submission: success message + email confirmation

_💡 Use EmailJS (which you already know) for the form - no backend needed. This makes it easy to deploy on Vercel._

**SECTION 6. Deadlines & Intake Calendar**

- Current admission cycle dates
- Reporting dates per term
- Open day / school tour dates

**SECTION 7. FAQs**

- Accordion-style, 6-8 questions
- Examples: 'Is UGA a boarding school?', 'What uniform is required?', 'Are there scholarships available?', 'Can I visit before enrolling?'

## **Page 5 - Facilities ( /facilities )**

A visual-heavy page. Photos do the selling here. Parents want to see where their daughter will sleep, eat, study, and play.

**SECTION 1. Page Hero**

- Headline: 'A Campus Built for Growth'
- Large panoramic campus photo or aerial shot if available

**SECTION 2. Facility Categories**

- Tab navigation OR vertical scroll sections: Classrooms | Dormitories | Dining | Library | Science Labs | Computer Lab | Sports Grounds | Chapel / Spiritual Centre | Medical Bay

**SECTION 3. Per Facility Block**

- 3-4 photos in a masonry or 2-column grid
- Facility name as heading
- 2-3 sentences describing capacity, equipment, and what students use it for

**SECTION 4. Campus Map**

- Illustrated or simplified map of the school compound
- OR embed a Google Maps satellite view of the campus

## **Page 6 - Student Life ( /student-life )**

This page speaks directly to the student, not just the parent. Show that life at UGA is full, joyful, and purposeful.

**SECTION 1. Hero**

- Headline: 'More Than Academics - A Life Well Lived'
- Energetic photo of students in activity (sports, drama, club meetings)

**SECTION 2. Co-Curricular Activities**

- Grid of 12-16 clubs and societies, each with:
  - Icon/photo + club name + one-line description
- Examples: Drama Club | Debate Society | Environmental Club | Science Club | Christian Union | Journalism Club | Basketball | Netball | Athletics | Choir | Art Club | Community Service

**SECTION 3. Sports**

- Sports offered: netball, basketball, volleyball, athletics, cross-country, swimming (if applicable)
- National / county competition achievements
- Sports facilities description

**SECTION 4. Spiritual Life**

- Christian ethos of the school (if applicable - verify with school)
- Chapel services, Christian Union, inter-school fellowships

**SECTION 5. Leadership Development**

- Student council structure
- Prefect system
- Leadership camps or programs

**SECTION 6. Events Calendar Teaser**

- 3-4 upcoming or annual events: Prize Giving Day | Sports Day | Drama Festival | Parents' Open Day
- Link to News page for full calendar

## **Page 7 - News & Events ( /news )**

Keeps the website feeling alive and updated. Even a few posts per term makes a huge difference.

**SECTION 1. Hero**

- Headline: 'News, Events & Achievements'
- Featured post (latest, largest) at the top

**SECTION 2. Filter Tags**

- Category pills: All | Announcements | Achievements | Events | Sports | Academic

**SECTION 3. News Grid**

- 3-column grid of news cards
- Each card: cover image | category tag | date | headline | short excerpt | Read More link

**SECTION 4. Events Calendar**

- Simple list or table: Date | Event | Location
- OR embed Google Calendar if school uses G Suite

## **Page 8 - Gallery ( /gallery )**

Visual proof that the school is a real, active, thriving community. This is especially important for parents who cannot visit in person.

**SECTION 1. Filter Tabs**

- Categories: All | Campus Life | Events | Sports | Academics | Graduations

**SECTION 2. Photo Grid**

- Masonry layout (Pinterest-style) - works beautifully with CSS columns
- Hover: slight zoom + blue overlay with expand icon
- Click: lightbox with arrow navigation

**SECTION 3. Video Section (optional)**

- 2-3 embedded YouTube videos: school tour, prize giving, speech day
- Thumbnail grid, click to play

## **Page 9 - Contact ( /contact )**

Clean, functional, and complete. Parents should be able to reach the school in under 30 seconds.

**SECTION 1. Contact Cards**

- 3 cards in a row:
  - 📍 Address: Utumishi Girls Academy, Gilgil, Nakuru County, Kenya
  - 📞 Phone: \[School number\]
  - ✉ Email: \[School email\]

**SECTION 2. Contact Form**

- Fields: Name | Email | Phone | Subject (dropdown) | Message
- Subject options: Admissions Inquiry | General Question | Partnership | Other
- EmailJS integration (no backend needed)

**SECTION 3. Google Maps Embed**

- Full-width embedded map with the school pin
- Direction link: 'Get Directions →'

**SECTION 4. Office Hours**

- Monday-Friday: 8:00 AM - 5:00 PM
- Saturday: 9:00 AM - 1:00 PM (or as applicable)
- Closed on public holidays

# **5\. Design Direction & Layout Inspiration**

The goal is 'elite Kenyan school' - not corporate, not playful, not generic. Think clean editorial with confidence. Here are the principles that should guide every page:

### **Layout Philosophy**

- Generous white space - let content breathe, never cramped
- Strong typographic hierarchy - headlines should feel BIG, body text calm and legible
- Section alternation - white, off-white, white, blue (full-width CTA) creates rhythm
- Left-aligned text blocks feel more editorial and serious than center-aligned
- Grid-based cards - 3 column on desktop, 2 on tablet, 1 on mobile

### **Hero Design Approach**

- Option A (Recommended): Blue full-width background, large serif headline on left, school photo overlapping right side with a slight clip or angle cut
- Option B: Split-screen - blue left half with text, image right half
- Option C: Full-bleed photo of campus with blue gradient overlay and white text
- Bottom of hero: a yellow (#E7F914) thin stripe or bar - acts as a visual separator and brand anchor

### **Component Patterns**

- Cards: white background, 1px light grey border, subtle shadow (0 4px 20px rgba(0,0,0,0.06)), 12px border-radius
- Buttons: pill-shaped (border-radius 50px) - already in your CSS
- Section titles: large, medium weight, with a short blue underline accent (2px, 40px wide)
- Stats: large yellow number + small grey label below - very impactful
- Blockquotes / testimonials: large yellow opening quote mark (font-size: 120px, opacity 0.15) behind text

### **Color Usage Rules**

- Blue (#0008C0): Hero backgrounds, primary buttons, active nav links, section accents
- Yellow (#E7F914): Numbers, badges, active indicators, hover underlines - NEVER as a background for large areas
- Black (#1E1E1E): Headings on white backgrounds
- Grey (#555555): Body paragraphs
- White: Card backgrounds, hero text on dark backgrounds
- Red (#FA0108): Only for error states and urgent notices - never decoratively

### **Photo Strategy**

- Request real photos from the school - this is your biggest visual asset
- Categories needed: campus exterior, classrooms in session, labs, dormitories, dining hall, sports, chapel, clubs, students in uniform, graduation
- If real photos aren't yet available: use Unsplash photos of African students/schools as placeholders
- Photo treatment: slightly desaturate and add subtle blue overlay on hero images for brand consistency

# **6\. Content to Request from the School**

Before you can fill in real content, you need specific information from the school. Here is a checklist to send or bring to your first meeting:

### **Basic Information**

- Official school name (confirm spelling and acronym)
- Year of establishment
- School motto
- KNEC school code
- County / sub-county of registration
- Type: National | Extra-County | County | District
- Capacity (number of students enrolled)

### **Leadership & Staff**

- Principal's full name and short bio (3-4 sentences)
- Deputy Principal names and roles
- Professional photos of key staff

### **Academic Data**

- KCSE results for the last 3-5 years (mean scores, pass rates)
- Subjects offered
- Outstanding academic achievements or awards

### **Media**

- School logo (high resolution, SVG or PNG with transparent background)
- Photos of every major facility
- Photos of student activities
- Any existing video content

### **Contact Details**

- Official phone number(s)
- Official email address
- P.O. Box
- Google Maps pin or coordinates

### **Admissions**

- Current fee structure (per term)
- KCPE cut-off if applicable
- Application process and documents required
- Next intake dates

# **7\. Development Checklist**

A quick reference for when you sit down to build. Tick these off as you go:

### **Setup**

- npx create-next-app@latest uga - select App Router, TypeScript optional, no Tailwind
- Copy globals.css (your current App.css) into /app/globals.css or /styles/globals.css
- Import it once in /app/layout.tsx: import '../styles/globals.css'
- Install: npm install next/font (built-in, no install needed)
- Set up next/font for Questrial in layout.tsx

### **Components to Build First**

- Navbar - sticky, responsive, with mobile menu
- Footer - 4-column, logo, links, contact
- Hero - reusable with props for title, subtitle, background, image
- SectionHeader - reusable title + description combo
- Card - generic card with image, title, text, link
- Button - matching your existing .btn classes

### **Performance**

- Use next/image for all images - automatic optimization
- Use next/link for all internal links - automatic prefetching
- Add metadata (title, description, og:image) to each page for SEO
- Add /public/favicon.ico - school logo
- Add sitemap.xml and robots.txt (Next.js can generate these)

### **SEO Content for Each Page (meta description)**

- Home: 'Utumishi Girls Academy - a leading girls boarding school in Gilgil, Nakuru County, Kenya. Enrolling Form 1 students. Inquiry open.'
- Admissions: 'Apply to Utumishi Girls Academy. Learn about requirements, fees, and how to secure your daughter's place for the next intake.'
- About: 'Learn about Utumishi Girls Academy's history, mission, and leadership team. A sister school of Utumishi Boys Academy.'

_💡 Good meta descriptions dramatically improve click-through from Google search results - exactly what this website needs to solve the visibility problem._

### **Deployment**

- Push to GitHub
- Import into Vercel (same as your current projects)
- Set custom domain if school has one: <www.utumishigirlsacademy.ac.ke>
- If no domain: Vercel provides a free uga.vercel.app subdomain

# **8\. Final Notes**

This guide covers everything you need to go from the current placeholder site to a complete, professional school website. The technical stack is deliberately simple - Next.js with plain CSS - so you can move fast and learn as you go.

The most important thing you can do right now is contact the school, share this vision, and get access to real content. A beautiful website with real photos and real data is ten times more powerful than a polished design with placeholders.

Your personal story - your sister's lost placement - is your strongest pitch. Use it.

_Built with ❤ for Utumishi Girls Academy, Gilgil - by Nthei._