export type Cta = {
  label: string;
  href: string;
};

export const links = {
  amazonBook:
    "https://www.amazon.com/Kingdom-Konfidence-Place-Surpasses-Table-ebook/dp/B0CCN2YGV3?ref_=ast_author_mpb",
} as const;

export const navLinks: Array<{ label: string; href: string }> = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Kingdom Konfidence", href: "/kingdom-konfidence" },
  { label: "Experiences", href: "/experiences" },
  { label: "Community & Resources", href: "/community" },
  { label: "Invite / Contact", href: "/contact" },
];

export const homeContent = {
  hero: {
    headline:
      "Step into Kingdom Konfidence—your place in the Kingdom surpasses any seat at “the table.”",
    logoSrc: "/WineWomanlarge.png",
    logoAlt: "Winepress Woman logo",
    subheadline:
      "Winepress Woman equips Christian women for spiritual growth, purposeful living, and unwavering confidence in God—refined in the winepress of improvement and released as Kingdom catalysts.",
    primaryCta: {
      label: "Get the Book – Kingdom Konfidence",
      href: links.amazonBook,
    },
    secondaryCta: {
      label: "Join the Winepress Woman Community",
      href: "/community#join",
    },
  },
  intro: {
    eyebrow: "Welcome",
    heading: "A place to grow—rooted in truth.",
    body: [
      "Welcome to Winepress Woman—a sacred sisterhood of faith-filled women, pressing through life’s seasons together. The Winepress represents the place where God prunes and presses us—producing fruit as we mature in God’s image. Rooted in Christ and led by the Spirit, we humbly embrace our Kingdom identity and boldly walk in our Kingdom assignments—all for the glory of God.",
    ],
  },
  pillars: [
    {
      title: "Spiritual Growth",
      body: "Spiritual growth means you’re not just inspired—you’re becoming. We create space for Scripture-centered renewal, prayerful clarity, and a deepened relationship with God.",
    },
    {
      title: "Purposeful Living",
      body: "Purposeful living means your gifts are not accidental. In your winepress of improvement, God refines your calling and helps you move with direction, not distraction.",
    },
    {
      title: "Unwavering Confidence in God",
      body: "Unwavering confidence in God means your boldness isn’t built on applause. It’s built on identity—who God says you are, and what He has already established over your life.",
    },
  ],
  authorIntro: {
    eyebrow: "Meet the Founder",
    heading: "Dr. Chassity Holliman‑Douglas (Dr. Chassity HD)",
    body: [
      "Dr. Chassity HD is the founder of Winepress Woman, author of Kingdom Konfidence, a higher-education executive leader, and a Christian speaker committed to helping women renew their minds and rise in identity.",
      "Her message is clear and compassionate: God can break mental strongholds, heal the places where fear has settled in, and restore your confidence for Kingdom impact.",
    ],
    cta: { label: "Invite Dr. Chassity to Speak", href: "/contact#speaking" },
    photoAlt:
      "Photo placeholder of Dr. Chassity Holliman‑Douglas (Dr. Chassity HD).",
    imageSrc: "/founder2.jpg",
  },
  bookSpotlight: {
    eyebrow: "Featured Book",
    heading: "Kingdom Konfidence",
    body: [
      "Kingdom Konfidence is an invitation to live from your Kingdom identity—not from comparison, performance, or pressure. This book guides you to confront the thoughts that shrink your faith and embrace the truth that stabilizes your life.",
      "If you’ve been striving for a seat at “the table,” this is your reminder: your place in the Kingdom surpasses any seat at “the table.”",
    ],
    bullets: [
      "Embrace your identity as a beloved daughter of God",
      "Overcome negative thought patterns and mental strongholds",
      "Cultivate a deeper relationship with God",
      "Live with purpose, impact, and Spirit-led confidence",
    ],
    primaryCta: { label: "Get the Book", href: links.amazonBook },
    secondaryCta: { label: "Get a Free Reflection Guide", href: "/community#join" },
    imageSrc: "/kingkon.jpg",
    imageAlt: "Kingdom Konfidence book cover",
  },
  testimonials: {
    heading: "What women are saying",
    items: [
      {
        quote:
          "“Winepress Woman reminded me that pressure doesn’t disqualify me—it refines me. I’m showing up with clarity and courage.”",
        name: "Jasmine R.",
        title: "Community Member",
        avatarSrc: "/avatars/jasmine.jpg",
      },
      {
        quote:
          "“The teaching on identity helped me stop performing for approval. I’m learning to lead from peace, not pressure.”",
        name: "Monique T.",
        title: "Women’s Ministry Volunteer",
        avatarSrc: "/avatars/monique.jpg",
      },
      {
        quote:
          "“This space gave me language for what I was carrying—and practical steps to renew my mind with truth.”",
        name: "Alicia M.",
        title: "Bible Study Leader",
        avatarSrc: "/avatars/alicia.jpg",
      },
    ],
  },
  emailOptIn: {
    id: "join",
    eyebrow: "Join",
    heading: "Join the Winepress Woman community",
    body: [
      "Stay connected to upcoming events, leadership workshops, resources, and book-related gatherings. If you’re ready for spiritual growth and purposeful living, this is your next step.",
      "Sign up to receive updates—and a free reflection prompt to help you identify your current winepress of improvement and the strength God is building in you.",
    ],
    submitLabel: "Join the Community",
    imageSrc: "/WWgroup.jpg",
    imageAlt: "Winepress Woman community group photo",
  },
} as const;

export const aboutContent = {
  hero: {
    headline: "About Winepress Woman",
    subheadline:
      "Winepress Woman is a faith-based women’s empowerment movement where God turns pressure into purpose—strengthening identity in Christ and releasing women in Kingdom Konfidence.",
    primaryCta: { label: "Join the Winepress Woman Community", href: "/community#join" },
    secondaryCta: { label: "Get the Book – Kingdom Konfidence", href: links.amazonBook },
  },
  missionVision: {
    eyebrow: "Mission & Vision",
    heading: "Refined in the winepress. Released for Kingdom impact.",
    body: [
      "Winepress Woman exists to empower Christian women to grow into who God has called them to be—women marked by spiritual growth, anchored in purposeful living, and strengthened by unwavering confidence in God.",
      "Mission: To equip women to renew their minds, embrace their identity in Christ, and lead as Kingdom catalysts. Vision: Women refined in their winepress of improvement and released with Kingdom Konfidence into families, workplaces, churches, and communities.",
    ],
  },
  story: {
    eyebrow: "The Winepress",
    heading: "The story behind the winepress of improvement",
    body: [
      "A winepress is a place of pressure, but it is also a place of transformation. Grapes are not crushed to be destroyed—they are pressed so what’s inside can be released and refined.",
      "Your life may carry seasons that feel heavy. But in God’s hands, your winepress of improvement becomes a refining space—where gifts are cultivated, strength is formed, and calling becomes clear.",
    ],
  },
  transformation: {
    eyebrow: "Transformation",
    heading: "What growth looks like in the winepress",
    body: [
      "In the winepress, God doesn’t just motivate you—He matures you. He renews your thinking, heals what has been wounded, and replaces fear with faith.",
      "This is where Kingdom Konfidence grows: not as a personality trait, but as a spiritual posture—steady, submitted, and courageous because it’s rooted in God.",
    ],
  },
  impact: {
    eyebrow: "Kingdom Impact",
    heading: "Women as catalysts—in every sphere",
    body: [
      "Winepress Woman is not simply about personal development—it’s about Kingdom assignment. When a woman knows who she is in Christ, she shows up differently.",
      "She becomes a catalyst in her family, a leader in her workplace, a builder in her church, and a light in her community—moving with conviction because her identity is settled: your place in the Kingdom surpasses any seat at “the table.”",
    ],
  },
  authorIntro: homeContent.authorIntro,
} as const;

export const bookContent = {
  hero: {
    headline: "Your place in the Kingdom surpasses any seat at “the table.”",
    subheadline:
      "Kingdom Konfidence is an inspiring, practical guide to overcoming mental strongholds and embracing your identity as a beloved child of God—so you can live with Spirit-led confidence and purpose.",
    primaryCta: { label: "Buy on Amazon", href: links.amazonBook },
    secondaryCta: { label: "Get a Free Reflection Guide", href: "/community#join" },
  },
  overview: {
    eyebrow: "Overview",
    heading: "A transformative journey from strongholds to Kingdom confidence",
    body: [
      "In Kingdom Konfidence, Dr. Chassity Holliman‑Douglas shares her personal journey of overcoming mental strongholds and learning to live from her true identity in Christ.",
      "With biblical wisdom, relatable insights, and practical next steps, the book invites you to see yourself differently—through the lens of God’s truth and love.",
      "If insecurity, fear, comparison, or self-doubt has been holding you back, this is a pathway to break free and walk boldly as the woman God created you to be.",
    ],
  },
  insideTheBook: {
    eyebrow: "Inside the Book",
    heading: "Stories, Scripture, and practical exercises you can apply",
    body: [
      "You’ll find captivating stories, clear teaching, and practical exercises designed to help you renew your mind and strengthen your relationship with God.",
      "This isn’t about hype—it’s about becoming steady: submitting to God’s authority, living aligned with His purposes, and letting the Holy Spirit shape how you think, lead, and love.",
    ],
  },
  outcomes: {
    eyebrow: "What You’ll Learn",
    heading: "Six confidence-building shifts",
    bullets: [
      "Embrace your identity as an heir of God’s Kingdom",
      "Replace negative thought patterns with God’s truth",
      "Cultivate a deeper relationship with God and trust His love and provision",
      "Tap into the power of the Holy Spirit to live with purpose and impact",
      "Walk in the fruit of the Spirit—love, joy, peace, and more",
      "Release the need for validation from others and find your worth in God alone",
    ],
  },
  whoItsFor: {
    eyebrow: "Who It’s For",
    heading: "If you’re ready to rise above insecurity and self-doubt",
    body: [
      "This book is for the woman who is tired of shrinking back—tired of comparison, fear, and second-guessing her calling.",
      "Whether the struggle shows up as low self-esteem, people-pleasing, self-sabotage, or the pressure to prove yourself, Kingdom Konfidence equips you with tools and insight to break free and live boldly.",
    ],
  },
  author: {
    eyebrow: "About the Author",
    heading: "Meet Dr. Chassity Holliman‑Douglas",
    body: [
      "Dr. Chassity Holliman‑Douglas is a visionary leader, author, and Founder/CEO of Winepress Woman, LLC—a God-centered ministry and business dedicated to empowering women leaders and unlocking their full potential in Christ.",
      "With 15+ years of higher education experience and executive leadership service, she understands the unique mental hurdles women face in leadership. Her passion is shaped by her own healing journey—overcoming low self-esteem, insecurity, and a self-sabotaging mindset.",
      "She curates a safe and empowering space where women leaders find support, guidance, and biblical tools for personal and spiritual transformation—because effective leadership begins with a deep relationship with God and alignment with His purposes.",
      "Born and raised in South Fulton, Tennessee, she earned a B.A. in Advertising (Western Kentucky University), an M.S. in Human Development and Leadership (Murray State University), and an Ed.D. in Educational Leadership and Policy Studies (Eastern Kentucky University).",
    ],
    cta: { label: "Invite Dr. Chassity to Speak", href: "/contact#speaking" },
    photoAlt: "Photo of Dr. Chassity Holliman‑Douglas.",
    imageSrc: "/founder2.jpg",
  },
  endorsements: {
    eyebrow: "Endorsements",
    heading: "What readers are saying",
    body: [
      "The message of Kingdom Konfidence is already strengthening women to think differently and lead boldly.",
    ],
    quotes: [
      {
        quote:
          "“Kingdom Konfidence helped me separate my worth from my performance. I’m choosing alignment over anxiety.”",
        name: "Tiffany S.",
        title: "Reader",
        avatarSrc: "/avatars/tiffany.jpg",
      },
      {
        quote:
          "“Scripture-centered, clear, and encouraging. I underlined so much and immediately started applying it.”",
        name: "Brianna K.",
        title: "Reader",
        avatarSrc: "/avatars/brianna.jpg",
      },
      {
        quote:
          "“A powerful invitation to renew your mind and live steady. This book met me right where I was.”",
        name: "Denise L.",
        title: "Book Club Member",
        avatarSrc: "/avatars/denise.jpg",
      },
    ],
  },
  purchase: {
    id: "purchase",
    eyebrow: "Purchase",
    heading: "Purchase options",
    body: [
      "Choose your preferred retailer and start your journey today. Links are placeholders and can be replaced with your official retailer URLs.",
    ],
    buttons: [
      { label: "Buy on Amazon", href: links.amazonBook },
      { label: "Other Retailers", href: "[BOOK_RETAILER_OTHER_URL]" },
      { label: "Bulk Orders / Book Club Requests", href: "/contact" },
    ],
  },
  optIn: {
    eyebrow: "Start Now",
    heading: "Get a free reflection guide",
    body: [
      "Receive a free reflection guide designed to help you name your current winepress of improvement, renew your mind with Scripture, and take one clear step toward Kingdom confidence.",
    ],
    submitLabel: "Send Me the Guide",
  },
} as const;

export const experiencesContent = {
  hero: {
    headline: "Experiences & Services",
    subheadline:
      "Winepress Woman creates Scripture-centered experiences that strengthen women for real life and real leadership—so you don’t just feel inspired, you live transformed.",
    primaryCta: { label: "Request More Info", href: "/contact" },
    secondaryCta: { label: "Get on the Interest List", href: "/community#join" },
  },
  overview: {
    eyebrow: "What We Offer",
    heading: "High-impact gatherings and workshops",
    body: [
      "Whether you’re looking for a one-time event or an ongoing development experience, each offering is anchored in Scripture and focused on practical Kingdom impact.",
    ],
  },
  services: [
    {
      title: "Events",
      description:
        "Book launch gatherings, retreats, and special sessions that create space for spiritual growth, sisterhood, and renewed clarity.",
      ctas: [
        { label: "Request More Info", href: "/contact" },
        { label: "Get on the Interest List", href: "/community#join" },
      ],
    },
    {
      title: "Leadership Workshops",
      description:
        "Workshops for faith, identity, purpose, calling, and confidence—equipping women to lead as Kingdom catalysts.",
      ctas: [
        { label: "Join the Next Workshop", href: "/community#join" },
        { label: "Bring This Workshop to My Organization", href: "/contact#speaking" },
      ],
    },
    {
      title: "Coaching / Group Programs",
      description:
        "Flexible offering that can be turned on/off: structured support for renewing the mind, building rhythms, and moving forward with clarity.",
      ctas: [
        { label: "Join the Interest List", href: "/community#join" },
        { label: "Request More Info", href: "/contact" },
      ],
    },
  ],
} as const;

export const communityContent = {
  hero: {
    headline: "Community & Resources",
    subheadline:
      "The Winepress Woman community exists for women committed to spiritual growth, purposeful living, and unwavering confidence in God—refined in the winepress of improvement and released in Kingdom Konfidence.",
    primaryCta: { label: "Join the Community", href: "#join" },
    secondaryCta: { label: "Get the Book – Kingdom Konfidence", href: links.amazonBook },
  },
  community: {
    eyebrow: "Community",
    heading: "Support, accountability, and growth",
    body: [
      "This is a space for encouragement and consistency—where women resist comparison, renew their minds, and live as Kingdom catalysts.",
      "Together, we stay grounded in truth and take real steps forward—because unwavering confidence in God grows through spiritual growth and purposeful living.",
    ],
  },
  resources: {
    eyebrow: "Resources",
    heading: "Articles & downloads (placeholders)",
    blogIntro:
      "Articles will cover identity in Christ, Kingdom Konfidence, overcoming comparison, breaking mental strongholds, and living on purpose.",
    downloadsIntro:
      "Downloadable resources like worksheets, reflection questions, and Scripture guides will be available here to support your winepress of improvement.",
    blogItems: [
      "Identity in Christ: a steady foundation",
      "Kingdom Konfidence: living from truth",
      "Overcoming comparison with Scripture",
    ],
    downloadItems: [
      "Reflection Guide (placeholder)",
      "Scripture Guide (placeholder)",
      "Worksheet: Naming Your Winepress (placeholder)",
    ],
  },
  join: {
    id: "join",
    eyebrow: "Join",
    heading: "Stay updated on events, workshops, and new resources",
    body: [
      "Sign up to receive encouragement, updates, and a free reflection guide designed to help you grow with clarity in this season.",
    ],
    submitLabel: "Join the Email List",
    imageSrc: "/WWgroup.jpg",
    imageAlt: "Winepress Woman community group photo",
  },
} as const;

export const contactContent = {
  hero: {
    headline: "Invite / Contact",
    subheadline:
      "Reach out for general questions, partnerships, or to invite Dr. Chassity HD to speak. We’re honored to connect and support your Kingdom impact goals.",
    primaryCta: { label: "General Contact", href: "#contact" },
    secondaryCta: { label: "Speaking Request", href: "#speaking" },
  },
} as const;

