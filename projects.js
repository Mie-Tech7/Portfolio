/*
  Portfolio content. Add a case study by adding an object to `projects`.
  Screenshot paths are relative to index.html. Fields marked optional can be left out.
  Writing rule for this site: no dashes in prose; use commas or periods.
*/
window.PORTFOLIO = {
  person: {
    name: "Josh Sutton",
    headline: "I take a business's real workflow from the first discovery call to a live product, and direct AI coding agents to build it.",
    sub: "Founder of Revanta Product Studio in Houston. I run discovery, write the specs, data models and acceptance criteria, and direct Claude Code to build, test and ship AI native products and client systems: integrations, admin tools, testing and launch.",
    // Optional: fill these in before you publish. Empty values are hidden.
    email: "josh.sutton7@gmail.com",
    linkedin: "https://www.linkedin.com/in/joshua-sutton17/",
    github: "https://github.com/Mie-Tech7"
  },

  method: "Each case study says how its claims were checked: against the project's code where I had the repository, or against the live public site where I did not. Each one also says what is built, what is partly built and what is still planned. Screenshots come from public pages or from local copies running fictional demo data. I have left out usage and revenue numbers I have not verified.",

  capabilities: [
    { key: "discovery", label: "Discovery to go live" },
    { key: "workflow", label: "Workflow translation" },
    { key: "integrations", label: "Configuration and integrations" },
    { key: "data", label: "Data modeling and SQL" },
    { key: "crm", label: "CRM and ERP style workflows" },
    { key: "testing", label: "Testing" },
    { key: "ai", label: "AI native features" },
    { key: "admin", label: "Admin and config consoles" }
  ],

  projects: [
    {
      slug: "conference-buddy",
      name: "Conference Buddy",
      tagline: "An AI assisted event guide for conference week",
      kind: "My product, live",
      live: "https://conferencebuddy.ai",
      liveLabel: "conferencebuddy.ai",
      role: "Founder and product lead. I designed the product and data model, wrote the specs and acceptance criteria, and directed the build with Claude Code: ingestion pipeline, moderation, recommendations, the attendee app and the admin console.",
      client: "My own product, operated by Revanta Product Studio",
      stack: ["Next.js 15", "React", "Clerk", "Supabase Postgres", "Row level security", "Anthropic Claude", "Firecrawl", "Vercel cron", "Web push", "Vitest"],
      facts: [
        { value: "116", label: "AfroTech 2026 events tracked on the live site, Nov 8, 2026" },
        { value: "53", label: "database migrations" },
        { value: "189", label: "automated test files" }
      ],
      problem: "At a conference like AfroTech, the official agenda is a fraction of the week. Most of the value is in side events: mixers, dinners, company hosted sessions and invite only gatherings. They are scattered across Eventbrite, Luma, Instagram flyers and group chats, they change or sell out without notice, and attendees end up double booked or walking to a venue they cannot get into. I created Conference Buddy to put the whole week in one place, tell people which events fit them, and say plainly what access each one needs.",
      built: [
        ["Event discovery", "Official and Side events tabs, search and filters. An event is listed only when it has been approved, has not been removed, and has not ended in the conference's local time."],
        ["My Schedule", "Save events, a day by day timeline, overlapping events flagged rather than silently blocked, and export to a calendar file."],
        ["Recommendations with a reason", "Events are ranked by rules over the attendee's role, goals, stage, industries and school, plus signals from what they save. Each pick shows a \"Why this\" line, and sold out events sort last."],
        ["Access labels", "Every event shows one clear label: conference pass, RSVP required, invitation only, or access to be confirmed. An unknown access type is never shown as open, and private invite only events never show an address or map pin."],
        ["AI assisted ingestion", "A pipeline pulls candidate events from Firecrawl, Eventbrite and Luma. Claude extracts event rows from pasted text, flyers and fetched pages, fills missing addresses through web search, suggests categories and tags, and reads ticket status from event pages."],
        ["Moderation queue", "Every submitted or ingested event lands as pending. An admin approves, rejects or holds it with the source evidence beside it, so nothing is listed without review."],
        ["Shareable plans", "Public, non indexed pages for an attendee's week or a single day, showing first name only."],
        ["Power Lunches", "Attendees opt in, and an admin generates lunch groups of four to six with Claude. Only group members and admins can load a group; everyone else gets \"not found\"."],
        ["Day of event tools", "Installable web app, a push reminder an hour before a saved event starts, and quick check ins (in line, inside, skipped, left) with a rating and no location tracking."],
        ["Multi conference", "One page per conference, an editions import script and an admin conference editor. The public site lists 53 conferences, and AfroTech 2026 has the deepest coverage."],
        ["Admin console", "Moderation, conference editor, users, settings, logs, issues, an RSVP link export and a service health page."]
      ],
      architecture: [
        "Supabase Postgres with 53 forward migrations and about 33 tables: events, conferences, sources, ingestion records, duplicate candidates, status checks, schedules, Power Lunch groups, push subscriptions, rate limits and audit tables.",
        "Clerk for sign in, with private data served through server routes that check who is asking.",
        "Vercel scheduled jobs for reminders and event status checks.",
        "189 automated test files, including tests against a real Postgres database, privacy tests and an access test pack. CI runs lint, type checks, tests and a build, and release branches add a migration readiness gate."
      ],
      ai: [
        "Claude handles extraction, address lookup, tagging, ticket status reading, single field reads from flyer images and Power Lunch grouping.",
        "Grounding rules: any extracted value that is not in the source text is dropped, and a looked up address is kept only if the cited page contains it.",
        "People decide what is published. AI output feeds the moderation queue and never lists an event by itself.",
        "Recommendations are deliberately rules based, so every ranking can be explained in one line."
      ],
      status: [
        ["built", "Everything listed under What shipped, verified in code."],
        ["partial", "The reminder system supports more reminder types, but only the one hour reminder is switched on. Ticket status badges (waitlist, sold out) are built with admin review of each change; not yet confirmed on the live site."],
        ["partial", "Organizers can submit events through a rate limited form that lands in moderation. The organizer partnership form is an email link."],
        ["planned", "Paid tickets and checkout, SMS, and organizer analytics. The admin revenue screen exists but has no data source yet."]
      ],
      outcome: "Conference Buddy is live, and on November 8, 2026 the public site showed 116 AfroTech 2026 events tracked for the week of November 2 to 6 in Houston. User and engagement numbers are not included because I have not verified them.",
      fde: {
        discovery: "Took a scattered, fast changing problem to a live product that ran through AfroTech 2026 week.",
        workflow: "Turned \"which side events can I actually get into\" into access labels, private address handling and a moderation workflow.",
        integrations: "Firecrawl, Eventbrite, Luma, Anthropic, Clerk, Supabase, Vercel scheduled jobs and web push.",
        data: "53 migrations covering ingestion, deduplication, status history and privacy sensitive data.",
        testing: "189 test files, real database tests, privacy and access tests in CI.",
        ai: "Grounded extraction, cited lookups, human review before publishing and explainable rules based ranking.",
        admin: "Moderation with evidence, a conference editor, users, settings, logs and health."
      },
      screensNote: "Public pages on the live site, signed out, Nov 8, 2026.",
      screens: [
        ["images/conference-buddy/site-home.jpg", "Homepage"],
        ["images/conference-buddy/site-afrotech-2026.jpg", "AfroTech 2026 conference page with the independence disclaimer"],
        ["images/conference-buddy/site-conferences.jpg", "Conference directory"]
      ]
    },

    {
      slug: "ttde",
      name: "TTDE",
      tagline: "Design for an agentic pre call research assistant",
      kind: "Client engagement, design phase",
      design: true,
      designNote: "Design and specs. No code reviewed. This case study covers product and system design only.",
      role: "Discovery, product definition and system design, written as a build brief for Claude Code.",
      client: "A transformation strategist and consultant, built around her own diagnostic methodology. June 2026.",
      stack: ["Next.js 14 (planned)", "Supabase (planned)", "Vercel (planned)", "Claude Sonnet and Haiku (planned)", "Inngest (planned)", "Google Calendar OAuth (planned)"],
      problem: "The client sells transformation engagements to organizations, and her view is that the truth about an organization lives in the room, not in a dashboard. Before every sales call she needed a fast, honest picture of the prospect: what public filings, job posts and news say about how the organization actually works. That research took hours per prospect and was easy to skip when the calendar filled up.",
      built: [
        ["Discovery decisions", "I locked the four decisions that change the architecture before writing the spec: who uses it on day one (the client only, as an internal pre call instrument), where data comes from (annual reports and 10-K filings, job postings, news, employee reviews), what it produces (a tiered prospect brief in a four layer matrix through her transformation lens, plus a diagnostic chat), and build intent (a Claude Code build brief)."],
        ["Agentic research workflow", "For each prospect, gather sources, extract signals and assemble the brief, run as durable background jobs so long research survives retries and timeouts."],
        ["Dual model routing", "Sonnet for synthesis and the brief; Haiku for cheaper auxiliary steps such as classification and extraction."],
        ["Re-research before known calls", "With opt in Google Calendar access, the agent refreshes a prospect's brief before a scheduled call. Without calendar access, a manual refresh button does the same job, so the tool never depends on her granting access."],
        ["Cost guardrails", "Background research spends API credits while she is not using the tool, so the design includes a daily cost ceiling and a kill switch in the runbook."],
        ["Honest uncertainty", "The agent flags thin or conflicting evidence and offers to regenerate a brief when she is testing it skeptically."]
      ],
      principle: "The agent anticipates her work, never her conclusions. It researches in the background, adapts depth to how much signal exists and surfaces patterns across her prospect history. It never decides which prospects matter, never sends notifications outside the app and never hides its reasoning behind a recommendation.",
      status: [
        ["design", "Product spec and build brief (v1), then a v2 rewrite around the agentic architecture, background jobs and the calendar integration pattern."],
        ["planned", "Not built as far as I can verify: the project repository has no application code."]
      ],
      outcome: "A complete product and system design, ready to build from. Nothing is claimed as built.",
      fde: {
        discovery: "Turned an expert's methodology and sales process into four architecture decisions and a buildable spec.",
        workflow: "Mapped her pre call research routine into an agent that prepares the brief before she needs it.",
        integrations: "Designed web data ingest, Google Calendar OAuth with a manual fallback, and durable workflows.",
        ai: "Agent design with clear limits, model routing by task, cost ceilings, a kill switch and explicit uncertainty."
      },
      screens: []
    },

    {
      slug: "prismart",
      name: "PrismArt",
      tagline: "An AI art marketplace for film, TV and commercial set designers",
      kind: "Venture build, cofounded",
      live: "https://www.prismart.app",
      liveLabel: "prismart.app",
      role: "As CTO I architected the platform and directed its build with Claude Code: architecture, data model, AI search and tagging, payments and licensing workflows. Cofounder and CEO: Joshua Washington Pierre.",
      client: "PrismArt",
      stack: ["Next.js 14", "Supabase Postgres", "Row level security", "Genkit", "Gemini 2.5 Pro", "Langfuse", "Stripe", "Resend", "Sentry", "PostHog", "React Three Fiber", "WebXR", "Vercel"],
      facts: [
        { value: "5", label: "user roles, each with its own dashboard" },
        { value: "23", label: "tables across 7 migrations" },
        { value: "~70", label: "row level security policies" }
      ],
      problem: "Set designers need the right artwork for a scene quickly, with rights cleared, and they think in descriptions (\"moody blue abstract for a detective's apartment\") rather than catalog filters. Independent artists and galleries have no direct channel to productions. PrismArt is a two sided marketplace that connects them, starting with galleries in Texas and Louisiana.",
      built: [
        ["Five roles with their own dashboards", "Artist, gallery, manager (representing several artists), set designer and admin, with separate CEO and CTO admin views."],
        ["Artist supply side", "A multistep application with admin review, artwork upload with metadata and pricing, plus portfolio, pricing, analytics and agreements pages."],
        ["Natural language and voice search", "A set designer types or speaks a description. Gemini extracts structured attributes (style, mood, subject, color palette, era, medium), the app searches the catalog on those attributes, then Gemini scores and explains each match, showing which attributes matched. If the AI step fails, search falls back to keyword search."],
        ["AI auto tagging", "Uploaded artwork is tagged by Gemini vision, single or in batches, with a correction endpoint so people can fix tags and the corrections are stored."],
        ["Set designer workflow", "Projects, filming locations, artwork selections, side by side compare, team members, an activity feed and budget tracking."],
        ["Licensing as a state machine", "Draft, negotiation (with proposed changes and counter offers), approved, active, expired. A scheduled job expires agreements and triggers notifications."],
        ["Payments and notifications", "Stripe payment intents and a checkout webhook; in app notifications plus email through Resend."],
        ["Gallery cooperative portal", "Cooperatives, member galleries, a roster and a revenue dashboard for a group of galleries selling together."],
        ["AR preview", "A QR code deep link opens an artwork in an augmented reality preview page. The public site still labels AR preview as coming soon."]
      ],
      architecture: [
        "Supabase Postgres with 23 tables across 7 migrations and about 70 row level security policies, with one role enum shared by every policy.",
        "AI flows built with Genkit. Every search and tagging run is traced in Langfuse as one trace with spans for extract, search and score, so latency and failures show per step.",
        "Sentry for errors and PostHog for product analytics."
      ],
      ai: [
        "A three step search pipeline: extract attributes, structured database search, then AI relevance scoring with reasoning.",
        "Graceful degradation: any AI failure falls back to keyword search.",
        "Vision tagging with human corrections stored for later review.",
        "Langfuse tracing on every AI call."
      ],
      status: [
        ["built", "Everything listed under What shipped, verified in code."],
        ["built", "Live on prismart.app (checked Nov 8, 2026): the public site, the artist application and the Discover page with natural language and voice search. The public catalog showed no artworks when I checked."],
        ["partial", "Manager revenue shows a placeholder value; CSV export of revenue is marked coming soon."],
        ["planned", "ArtInFilms.com, the consumer \"as seen on\" storefront, is labeled coming soon."],
        ["planned", "Automated tests and a CI pipeline were not found in the repository."]
      ],
      outcome: "A full marketplace platform covering supply onboarding, AI search, licensing, payments and a gallery cooperative portal, live at prismart.app. Catalog, usage and revenue numbers are not included because I have not verified them.",
      fde: {
        workflow: "Turned rights clearance into an explicit agreement state machine with negotiation and expiry.",
        integrations: "Stripe, Resend, Sentry, PostHog, Gemini through Genkit and Supabase.",
        data: "Five role marketplace schema with row level security on every table.",
        ai: "Natural language and voice search with structured extraction, explained AI scoring, a deterministic fallback and per step tracing.",
        admin: "CEO and CTO admin views, gallery and cooperative management, and artist application review."
      },
      screensNote: "Public pages on the live site, signed out, Nov 8, 2026.",
      screens: [
        ["images/prismart/site-discover-ai-search.jpg", "Discover: natural language and voice search with attribute filters"],
        ["images/prismart/site-home-hero.jpg", "Homepage hero"],
        ["images/prismart/site-artist-application.jpg", "Artist application, step one"]
      ]
    },

    {
      slug: "cb-medical-supply",
      name: "C&B Medical Supply",
      tagline: "A physician facing site and a sales CRM on one customer record",
      kind: "Client build delivered to a business owner",
      role: "Architect and product lead, from spec to working build. I wrote the spec and data model and directed the build with Claude Code.",
      client: "C&B Medical Supply, a distributor of amniotic membrane allografts (AlexiGraft, AlexiFuse).",
      stack: ["Next.js 16", "React 19", "Supabase Postgres", "Row level security", "Tailwind v4", "shadcn", "TanStack Table", "Vercel"],
      facts: [
        { value: "4", label: "roles: admin, manager, rep, physician" },
        { value: "37", label: "row level security policies" },
        { value: "9", label: "lead statuses in the sales workflow" }
      ],
      problem: "C&B sells surgical biologics to surgeons, ASCs and hospitals through a small team of reps. Leads came in from many places, follow up lived in people's heads, and the owner had no single view of which rep had which account, who had been contacted, and which accounts were cleared to buy. Surgeons also needed a credible, specialty specific site with clinical evidence before they would talk to a rep.",
      built: [
        ["Physician facing site", "Product pages for AlexiGraft and AlexiFuse, ten surgical application pages by specialty, five surgical technique pages, a clinical evidence library with case studies, pages for physicians and for reps, and a quote request form."],
        ["Lead capture", "The contact form posts through a server action with a honeypot field and writes straight into the CRM's leads table, so a website inquiry becomes a lead with no copy and paste."],
        ["Sales CRM", "Dashboard (total leads, active accounts, open opportunities, activities logged today, recent leads, today's tasks), leads, accounts, contacts, opportunities and activities."],
        ["Lead assignment and handoffs", "Leads are assigned to reps, filtered as Unassigned, Mine, Converted or All, and moved through new, assigned, open, contacted, second contact, nurturing, qualified, disqualified and converted. A rep can update only the leads assigned to them."],
        ["Lead conversion", "Admins and managers convert a qualified lead into a new or existing account."],
        ["Account approval workflow", "Pending efficacy review, approved, denied, active customer and inactive, mirroring how a facility gets cleared to order a biologic."],
        ["Activity tracking", "Calls and touchpoints logged against a lead or an account, so anyone can see when a customer was last contacted and by whom."],
        ["Owner visibility", "Admins and managers see the whole organization's pipeline; reps see their own work. This is enforced in the database, not just hidden in the UI."]
      ],
      architecture: [
        "Multitenant from day one: every table carries an organization id, and security definer helper functions resolve the caller's organization and role, so the same codebase can serve another distributor under its own brand.",
        "37 row level security policies and 8 forward only migrations.",
        "A pre push git hook blocks accidental pushes unless explicitly confirmed."
      ],
      ai: [
        "Automation in this build is workflow automation: form to lead, assignment, status transitions, conversion and activity logging.",
        "The Anthropic SDK is installed and an AI interactions table exists in the schema, but no AI feature is wired up yet. No AI features are claimed for this build."
      ],
      status: [
        ["built", "Marketing site, lead capture, CRM dashboard, leads, accounts, assignment, status workflows, conversion and activity tracking, verified in code."],
        ["planned", "Associate training: an 8 week rep training program. The tables exist and a PRD was written; there is no training UI yet."],
        ["planned", "Surgery scheduling and order tracking: orders carry a surgery date and order items carry lot and expiration, but there is no UI for them yet."],
        ["partial", "The physician portal (recent orders, quick reorder, upcoming surgeries) is a placeholder screen."]
      ],
      outcome: "A working website and CRM that put C&B's leads, accounts and rep activity on one customer record, with the owner able to see the full pipeline. Revenue and usage numbers are not included because I have not verified them.",
      fde: {
        discovery: "Translated a distributor's real sales motion into a site, a lead pipeline and an approval workflow.",
        workflow: "Account statuses model how a facility actually gets cleared to buy a biologic: efficacy review, approval, active customer.",
        integrations: "White label ready (organization branding and tenant isolation in the data model); website form to CRM.",
        data: "Multitenant schema, enum driven workflows, row level security by role and forward migrations.",
        crm: "Lead routing, assignment, rep handoffs, conversion, account status and activity history.",
        admin: "Role based CRM console for the owner, managers and reps."
      },
      screensNote: "Local copy seeded with fictional data. Accounts and physicians renamed to clearly fake names, so no real facility or person appears.",
      screens: [
        ["images/cb-medical/crm-dashboard.jpg", "CRM dashboard"],
        ["images/cb-medical/crm-leads.jpg", "Leads with assignment filters"],
        ["images/cb-medical/crm-lead-detail.jpg", "Lead detail with status and activity"],
        ["images/cb-medical/crm-account-detail.jpg", "Account detail with approval status"],
        ["images/cb-medical/crm-accounts.jpg", "Accounts"],
        ["images/cb-medical/site-home.jpg", "Physician facing homepage"],
        ["images/cb-medical/site-surgical-applications.jpg", "Surgical applications by specialty"],
        ["images/cb-medical/site-product.jpg", "Product page"],
        ["images/cb-medical/site-for-physicians.jpg", "For physicians"],
        ["images/cb-medical/site-contact.jpg", "Quote request form that feeds the CRM"]
      ]
    },

    {
      slug: "savvy-social-work",
      name: "Savvy Social Work",
      tagline: "ASWB exam prep with an AI assisted question pipeline",
      kind: "Client build delivered to a business owner",
      role: "Architect and product lead. I owned the architecture, data model and AI pipeline and directed the build of both apps with Claude Code; the instructor owns the content and curates the question sets.",
      client: "A licensed social work exam instructor (Savvy Social Work)",
      stack: ["pnpm monorepo", "Next.js 14", "Expo", "React Native", "Supabase Postgres", "pgvector", "Row level security", "Anthropic Claude", "OpenAI embeddings", "Supabase Edge Functions", "zod", "Vitest", "GitHub Actions", "Vercel"],
      facts: [
        { value: "126", label: "row level security test cases" },
        { value: "30", label: "forward migrations" },
        { value: "2", label: "apps on one database: admin console and student app" }
      ],
      problem: "The instructor teaches social workers how to reason through ASWB licensing exam questions. Her question bank lived in an older quiz tool (ClassMarker), and every year she revises questions as the ASWB blueprint changes. In 2026 the blueprint itself changed: on August 3, 2026 the exam consolidated from four content areas to three. Editing hundreds of questions by hand, then moving them into a new testing environment, was slow and error prone, and she had no mobile app for students.",
      built: [
        ["Admin console", "Question bank, question editor, question sets, teaching notes, content areas, users and settings."],
        ["ClassMarker import wizard", "Five steps: upload, preview, AI tagging, confirm with a duplicate check, summary. Extraction from the CSV export is deterministic code that validates the required columns, and questions land as drafts, never straight to students."],
        ["Session import", "The instructor pastes the text of a teaching session email, an edge function parses it into a structured question set with zod validation and a retry, she previews it, and one database function commits the whole set atomically."],
        ["Question editor with an AI co-pilot", "Drafts a question in the instructor's voice and drafts the three distractor rationales on request. Everything the AI writes is editable and saved as a draft before the instructor publishes."],
        ["Retrieval grounded in the instructor's writing", "pgvector search pulls the closest rationales the instructor authored and gives them to Claude as examples, so drafts follow her teaching style."],
        ["Blueprint versioning", "Content areas are versioned by blueprint year, so 2024 to 2026 questions can be mapped to the new three area structure instead of rewritten from scratch."],
        ["Student app", "Expo and React Native for iOS, Android and web: home with study stats, a free question of the day, browse topical sets, timed drills, progress and awards."],
        ["Guardrails and cost control", "An AI generation log with per call cost accounting, daily rate limits on AI parsing, and row level security on every table."]
      ],
      architecture: [
        "One Supabase Postgres database shared by the admin console, the student app and the edge functions, with 30 forward migrations.",
        "Row level security is the security boundary, with 126 Vitest cases testing the policies by role.",
        "AI calls run server side only through a thin client that records model, tokens and cost for every call.",
        "GitHub Actions runs lint and type checks and deploys the admin console to Vercel."
      ],
      ai: [
        "Claude drafts questions and distractor rationales, grounded by retrieval over the instructor's own rationales.",
        "Claude parses pasted session emails into structured question sets; zod validates the output and retries on a bad shape.",
        "ClassMarker extraction is deliberately not AI, so a file either maps cleanly or fails loudly.",
        "Human in the loop throughout: AI output is always a draft that the instructor reviews and publishes."
      ],
      status: [
        ["built", "Everything listed under What shipped, verified in code."],
        ["partial", "Admin Dashboard, Analytics and Flags pages are placeholder screens."],
        ["planned", "Payments (Stripe on web, RevenueCat on mobile) are a later phase in the project plan."]
      ],
      outcome: "A working platform that turns the instructor's yearly revision from manual editing into an import, review and publish workflow, with AI drafts grounded in her own teaching voice. Usage and pass rate numbers are not included because I have not verified them.",
      fde: {
        discovery: "Started from the instructor's real workflow, a yearly revision and a migration off ClassMarker, and delivered an admin console plus a student app.",
        workflow: "Turned \"redo my questions every year\" into import, AI assisted revision, review and publish, with blueprint year versioning.",
        integrations: "ClassMarker CSV import, Anthropic, OpenAI embeddings, Supabase Edge Functions and Vercel deploys from CI.",
        data: "30 migrations, an atomic commit function and row level security as the only access boundary.",
        testing: "126 row level security test cases and schema validation with retries on AI output.",
        ai: "Retrieval grounded generation, structured output parsing, cost logging and rate limits, and human review before anything reaches students.",
        admin: "The instructor manages content areas, sets, teaching notes and AI settings herself, without engineering help."
      },
      screensNote: "Local copy running fictional demo data and the repository's sample seed questions. No real student or client data.",
      screens: [
        ["images/savvy/questions.jpg", "Question bank"],
        ["images/savvy/set-editor.jpg", "Question set editor"],
        ["images/savvy/content-areas.jpg", "Content areas by blueprint year"],
        ["images/savvy/teaching-notes.jpg", "Teaching notes"],
        ["images/savvy/sets.jpg", "Question sets"],
        ["images/savvy/mobile-home.jpg", "Student app: home", "phone"],
        ["images/savvy/mobile-daily.jpg", "Student app: question of the day", "phone"],
        ["images/savvy/mobile-set.jpg", "Student app: set detail", "phone"]
      ]
    },
    {
      slug: "apparel-flow",
      name: "Apparel Flow",
      tagline: "Shop management software for screen printers and apparel decorators",
      kind: "Product lead, live",
      live: "https://apparel-flow.com",
      liveLabel: "apparel-flow.com",
      design: true,
      designNote: "Product and design case study. I led the product from discovery to go live; I did not write the code. Features below are what the live public site shows, checked signed out on Nov 8, 2026.",
      role: "Product lead. I took Apparel Flow from discovery to go live with Brandon Watson, and designed the user flow and features from information he gave me and my own screen printing experience. I did not write the code.",
      client: "Apparel Flow, sold to screen printing and embroidery shops",
      stack: [],
      facts: [
        { value: "$150", label: "a month for the Founder Plan, after a 14 day free trial" },
        { value: "5", label: "production stages on the job board, from Needs Attention to Complete" }
      ],
      problem: "Screen printing and embroidery shops run on a long chain of steps: a customer asks for a quote, artwork goes back and forth until it is approved, the job moves through production, and then someone has to invoice and collect. In small shops that information lives across emails, text messages, spreadsheets and separate apps, so jobs stall on a missing approval or a missing size, and nobody has one view of what is due. I had worked in screen printing myself, and I combined that with information Brandon Watson gave me to lay out the user flow and the feature set.",
      builtLabel: "What I designed and took live, as shown on the live site",
      built: [
        ["Customer management", "Customer details, order history, notes and files in one place."],
        ["Quotes and orders", "Create quotes, convert approved quotes to orders, and track deadlines and status."],
        ["Artwork and approvals", "Upload artwork, share mockups, collect customer approvals and track revisions, tied to the job."],
        ["Production workflow", "Jobs move through Needs Attention, Ready, In Production, Quality Check and Complete, with team assignment and production sheets for the floor."],
        ["Invoices and payments", "Invoices connected to customers and orders, with payment tracking."],
        ["Inventory, reorders, staff and reports", "Inventory management, customer reorders from order history, staff accounts and reports."],
        ["Pricing and onboarding", "A Founder Plan at $150 a month for the first 50 shops, a 14 day free trial and personal onboarding assistance."]
      ],
      status: [
        ["design", "My work, from discovery to go live: the user flow and the feature set. The live public site shows them, with self serve signup and published pricing."],
        ["unclaimed", "Not claimed: writing the code and the stack, how each feature works inside the app, and any AI features. The public site does not mention AI."]
      ],
      outcome: "The product went live, with a Founder Plan offered to apparel decorators. Customer and revenue numbers are not included because I have not verified them.",
      fde: {
        discovery: "Led the product with Brandon Watson from discovery through go live, starting from how shops actually run their jobs.",
        workflow: "Designed a shop's real job flow (quote, artwork approval, production stages, invoice) as one connected product.",
        crm: "Designed customers, quotes, orders, production, inventory, invoicing and payments to work as one system."
      },
      screensNote: "Public pages on the live site, signed out, Nov 8, 2026. The dashboard and production board are the site's own marketing images with sample shop names.",
      screens: [
        ["images/apparel-flow/site-features.jpg", "Features page with the production board"],
        ["images/apparel-flow/site-home.jpg", "Homepage"],
        ["images/apparel-flow/site-pricing.jpg", "Founder Plan pricing and what it includes"]
      ]
    }
  ]
};

/* Added in the November 2026 rework: ValidData case study, case study order, and a neutral "What shipped" label. */
window.PORTFOLIO.projects.push({
  slug: "validdata",
  name: "ValidData",
  tagline: "Evidence verified startup qualification, with no scores",
  kind: "Co developed venture, in private testing",
  live: "https://validdata.app",
  liveLabel: "validdata.app",
  builtLabel: "What shipped",
  role: "CTO and product lead. With the methodology author, I turned a due diligence method into a deterministic product, wrote the specs, data model and acceptance criteria, and directed the build with Claude Code.",
  client: "Co developed with Paul O'Brien of MediaTech Ventures, who stewards the methodology",
  stack: ["Next.js", "Supabase Postgres", "Row level security", "MFA in the database", "PGlite test runner", "Anthropic Claude (advisory only)", "Vercel"],
  facts: [
    { value: "G0 to G4", label: "deterministic gate ladder, no model in the decision path" },
    { value: "47", label: "forward migrations checked against a checksum manifest" },
    { value: "171", label: "automated test files, including a golden evaluation harness" }
  ],
  problem: "Accelerators, investors and lenders spend hours on startup diligence, and most of what they read is self reported. Scores and rankings hide how a decision was made. ValidData replaces claims with verified evidence and places each company on a gate ladder that anyone can audit, so the same evidence always produces the same result.",
  built: [
    ["Gate Engine", "Verified evidence against the Standard's criteria produces a gate placement from G0 to G4. Deterministic, with no model in the path and no numeric score."],
    ["Eligibility Engine", "Versioned requirement objects produce a plain determination, from Eligible to Ineligible, with the reason for each."],
    ["Four personas", "Founder, program operator, investor and platform operator, each with its own views. Public profiles show achievements only; gaps stay private to the founder as paths to unlock."],
    ["Consent and security in the database", "Row level security is the only consent boundary, MFA is enforced in the database, and every policy change ships with proofs."],
    ["Evidence connectors", "A specified connector contract for founder initiated GitHub OAuth, traction data and link verification, with idempotent, retry safe pulls mapped to evidence records."],
    ["AI coaching, advisory only", "The coaching layer reads the verified record and drafts guidance. It can never write a gate or eligibility decision."]
  ],
  architecture: [
    "Supabase Postgres with 47 forward only migrations, verified against a checksum manifest so an applied migration can never be edited silently.",
    "171 automated test files, including a golden evaluation harness and determinism tests that prove repeat runs give the same placement.",
    "Security definer functions pin their search path, checked by an automated sweep."
  ],
  ai: [
    "AI never places a gate or decides eligibility. Those are compute over verified evidence.",
    "Raw observation, verified evidence, derived interpretation and advice are kept in separate fields, so advice can never be mistaken for evidence."
  ],
  status: [
    ["built", "Gate Engine, Eligibility Engine, the four persona data model, row level security, MFA and the evaluation harness, verified in code."],
    ["partial", "Evidence connectors are specified, with the queue and token handling in place."],
    ["planned", "Public beta targeted for January 2027."]
  ],
  outcome: "ValidData has not launched publicly. It is in private testing with three founders who are giving feedback, ahead of a public beta targeted for January 2027. In October 2026 I led a privacy fix for private research notes, verified in production with negative access tests for anonymous, founder, program operator and investor roles.",
  fde: {
    discovery: "Turned an expert's diligence method into a deterministic, auditable product with the methodology author.",
    workflow: "Mapped how programs and investors qualify startups into gates and eligibility rules with stated reasons.",
    integrations: "Specified evidence connectors with OAuth, idempotent pulls and encrypted tokens.",
    data: "47 checksum verified migrations, four layer data separation and consent enforced in the database.",
    testing: "Golden evaluation harness, determinism tests and row level security proofs for every policy change.",
    ai: "AI is advisory only and can never write a decision."
  },
  screens: []
});

(function () {
  var order = ["conference-buddy", "validdata", "cb-medical-supply", "savvy-social-work", "prismart", "apparel-flow", "ttde"];
  window.PORTFOLIO.projects.sort(function (a, b) { return order.indexOf(a.slug) - order.indexOf(b.slug); });
  window.PORTFOLIO.projects.forEach(function (p) { if (!p.design && !p.builtLabel) p.builtLabel = "What shipped"; });
})();
