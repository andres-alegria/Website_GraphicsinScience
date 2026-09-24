/*
  Site content: every piece of text, every link and every portfolio item lives here.
  js/main.js renders the pages, js/motion.js adds the animation, css/style.css holds the look.
*/
window.SITE = {
  name: "Andrés Alegría",
  tagline: "Data graphics",
  siteTitle: "Andrés Alegría | Data Graphics",

  nav: [
    { label: "Work", href: "index.html#work", page: "work" },
    { label: "Stories", href: "stories.html", page: "stories" },
    { label: "Services", href: "services.html", page: "services" },
    { label: "About", href: "index.html#about", page: "about" },
    { label: "FAQs", href: "faqs.html", page: "faqs" },
    { label: "Contact", href: "contact.html", page: "contact" }
  ],

  social: [
    { label: "Behance", href: "https://www.behance.net/andres-alegria", text: "Bē" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/graphicsinscience", text: "in" }
  ],

  // ---------- Home ----------
  hero: {
    label: "Visual science communicator",
    // the <em> part is set in the lighter colour
    title: "Clear graphics for <em>complex science.</em>",
    lead: "Hello. I’m Andrés Alegría, a visual science communicator. My work blends graphic design with an academic background in ecology, where I first used research data to shape nature conservation policy and stakeholder engagement across Central America. I’m a tree hugger :-)",
    facts: [
      ["Based in", "Germany (CET), working remotely worldwide"],
      ["Working with", "Researchers, NGOs and newsrooms"],
      ["Tools", "QGIS · Illustrator · Mapbox · R · Tableau"]
    ],
    actions: [
      { label: "See the work", href: "#work", style: "primary" },
      { label: "Get in touch", href: "#contact", style: "ghost" }
    ]
  },

  wall: {
    label: "Selected work",
    note: "A dozen pieces from the last few years. Click any of them to see it at full size."
  },

  marquee: ["Information design", "Cartography", "QGIS", "Tableau", "R", "Graphic design", "Layout", "Mapbox", "Illustrator", "StoryMaps"],

  work: {
    label: "Work",
    title: "Maps, charts, diagrams and stories",
    intro: "Everything below was made for a scientist, an NGO or a newsroom. Filter by type, or open a piece to read it properly and jump to the story it ran in."
  },

  clients: {
    label: "Selected clients and publications",
    list: ["Mongabay", "Mongabay India", "Mongabay Brasil", "IPCC Working Group II", "Nature Climate Change", "Journal of Environmental Management", "NGOs across Central America"]
  },

  storiesTeaser: {
    label: "Scrollytelling",
    title: "Stories that unfold as you scroll",
    intro: "Map-driven features for Mongabay, built with Mapbox, React and GSAP.",
    link: { label: "All stories", href: "stories.html" }
  },

  about: {
    label: "About",
    title: "Ecology first, design second, both in every figure.",
    text: [
      "<p>I’m a graphic designer specialising in visual science communication, with an academic background in ecology. I started out applying research data to nature conservation policy and stakeholder engagement across Central America, and that habit of starting from the evidence still shapes every map and chart I make.</p>",
      "<p>Whether you need a data-driven map, a clear infographic or a full interactive visualization, I offer design services tailored to researchers, NGOs and media organisations. I work remotely with teams across time zones, and I send drafts at every key stage so the graphic stays scientifically right while it becomes visually clear.</p>"
    ],
    photo: {
      src: "images/about/AndresAlegria_photo.png",
      width: 1000, height: 1000,
      alt: "Photo of Andrés Alegría during a presentation at a Mongabay event."
    },
    facts: [
      ["Deliverables", "Editable vector files (PDF, SVG, AI, EPS) plus high-resolution PNG or TIFF"],
      ["Formats", "Journal figures, report layouts, news graphics, interactive pieces"],
      ["Workflow", "Data review, visual options, drafts at key stages, feedback rounds"]
    ],
    link: { label: "What I can do for your project", href: "services.html" }
  },

  faqTeaser: {
    label: "Questions I get asked",
    title: "How working together goes",
    link: { label: "Read the full FAQ", href: "faqs.html" }
  },

  contact: {
    label: "Contact",
    title: "Have a dataset, a draft figure or a story in mind?",
    intro: [
      "<p>I enjoy translating scientific information into clear and visually engaging graphics. I usually collaborate with researchers, scientists and journalists covering environmental conservation topics such as fisheries, biodiversity and climate change.</p>",
      "<p>Feel free to get in touch. I’d be glad to discuss how we can bring your project to life.</p>"
    ]
  },

  // Contact form: submissions go to Web3Forms (web3forms.com), which emails them on.
  // The access key belongs in client-side code and is public.
  contactForm: {
    endpoint: "https://api.web3forms.com/submit",
    hiddenFields: {
      access_key: "00aaceb8-6230-4448-8030-af61e3e7e9cb",
      subject: "New message from graphicsinscience.com",
      from_name: "graphicsinscience.com"
    },
    email: "",
    heading: "Get in touch.",
    emailLabel: "Email",
    messageLabel: "Message",
    submitLabel: "Send message",
    mailSubject: "Website enquiry",
    successMessage: "Thank you! Your message has been sent.",
    errorMessage: "Sorry, something went wrong. Please try again later.",
    notConnectedMessage: "This form is not connected yet."
  },

  footer: {
    title: "Andrés Alegría | Data Graphics",
    tagline: "Maps, charts and stories for science that needs to be understood.",
    note: "© {year} Andrés Alegría · graphicsinscience.com"
  },

  // ---------- Stories page ----------
  stories: {
    label: "Scrollytelling",
    title: "Stories that unfold as you scroll",
    lead: "Long-form, map-driven features for Mongabay and its bureaus. Each one is a custom build: the reader scrolls, and the map flies, layers appear and the numbers land at the moment the text needs them.",
    items: [
      {
        title: "Collision course",
        deck: "Why whales are dying in the Mediterranean’s shipping lanes.",
        outlet: "Mongabay",
        date: "2026-09-14",
        url: "https://news.mongabay.com/custom-story/2026/09/can-we-stop-ships-from-killing-the-mediterraneans-last-great-whales/",
        tools: "Mapbox GL · React · GSAP · Global Fishing Watch data",
        image: { src: "images/portfolio/storymaps/Scrolly_Collision.jpg", width: 1500, height: 867, alt: "Opening screen of “Collision course”: a ship and a whale on converging tracks in the Mediterranean." }
      },
      {
        title: "What does a map miss?",
        deck: "A large-scale government-drafted map misses the details, driving a community anxious.",
        outlet: "Mongabay India",
        date: "2026-05-19",
        url: "https://india.mongabay.com/2026/05/what-a-coastal-zoning-map-leaves-out-explained-through-maps/",
        tools: "Mapbox GL · React · GSAP",
        image: { src: "images/portfolio/storymaps/Scrolly.png", width: 1500, height: 874, alt: "Opening screen of “What does a map miss?”, over a coastal zoning map." }
      },
      {
        title: "Dual-purpose?",
        deck: "How a Chinese research vessel might serve both civilian and military roles, told through six months of its voyages.",
        outlet: "Mongabay",
        date: "2026-03-24",
        url: "https://news.mongabay.com/custom-story/2026/03/chinas-deep-sea-mining-fleet-may-also-track-us-submarines/",
        tools: "Mapbox GL · React · GSAP · AIS vessel tracks",
        image: { src: "images/portfolio/storymaps/Scrolly_Dual.jpg", width: 1500, height: 867, alt: "Opening screen of “Dual-purpose?”, over a photograph of the seabed." }
      },
      {
        title: "Shifting Sands",
        deck: "Quarries devour the buffer forests of the Western Ghats after a sand-mining ban.",
        outlet: "Mongabay India",
        date: "2025-11-11",
        url: "https://india.mongabay.com/2025/11/quarries-devour-buffer-forests-of-western-ghats-after-sand-mining-ban/",
        tools: "Mapbox GL · React",
        image: { src: "images/portfolio/storymaps/StoryMap_1.png", width: 1500, height: 867, alt: "Opening screen of “Shifting Sands”, over an aerial view of a quarry." }
      },
      {
        title: "Clearing the Way",
        deck: "Satellite images reveal an oil project’s surge in a Ugandan park and wetland.",
        outlet: "Mongabay",
        date: "2025-09-18",
        url: "https://news.mongabay.com/custom-story/2025/09/satellite-images-reveal-oil-project-surge-in-ugandan-park-and-wetland/",
        tools: "Mapbox GL · React · satellite imagery",
        extra: { label: "Also published in French", url: "https://fr.mongabay.com/custom-story/2025/10/ouganda-des-images-satellites-revelent-lexpansion-dun-projet-petrolier-dans-un-parc-et-une-zone-humide/" },
        image: { src: "images/portfolio/storymaps/ScrollyMap_1.png", width: 1500, height: 868, alt: "Opening screen of “Clearing the Way”, over a forest photograph." }
      },
      {
        title: "Damming the Arai River",
        deck: "Irrigation Dam 2 will close the Arai River, which feeds the Pursat and the Tonle Sap, Cambodia’s most productive freshwater fishery.",
        outlet: "Mongabay",
        date: "2025-09-09",
        url: "https://news.mongabay.com/2025/09/cambodian-irrigation-dam-construction-threatens-riverine-communities-in-the-cardamoms/",
        tools: "Mapbox GL · React",
        image: { src: "images/portfolio/storymaps/ScrollyMap_2.png", width: 1500, height: 870, alt: "Opening screen of “Damming the Arai River”, over a river landscape." }
      }
    ],
    interactive: {
      label: "Interactive 3D maps",
      title: "Seafloors you can turn around",
      intro: "Bathymetry built from open elevation data, rendered in the browser."
    }
  },

  // ---------- Services ----------
  services: {
    label: "Services",
    title: "Clear, professional and accessible graphics to communicate your research.",
    intro: "Need support? I design figures, maps and layouts that hold up to peer review and still read at a glance.",
    groups: [
      { title: "For your next paper", items: ["Figures", "Maps", "Graphical abstracts", "Social media threads", "Journal covers", "Page layouts", "Figure feedback"] },
      { title: "For your next conference", items: ["Posters", "Presentation slides", "Logos", "Infographics"] },
      { title: "For your next story", items: ["News maps and charts", "Scrollytelling features", "Interactive dashboards", "3D maps"] }
    ],
    howTitle: "How it works",
    how: [
      "We usually start with a short call or email exchange where you describe your project, share sample material (data, draft figures, article outline), and tell me about your deadlines and target outlet.",
      "Pricing depends on scope and complexity: for small, well-defined tasks I often propose a fixed price; for larger projects I estimate based on expected days of work. In every case you receive a clear quote before we start, with what’s included.",
      "I send drafts at key stages so you can comment, and we iterate until the visuals match both your scientific standards and your communication goals."
    ],
    cta: { label: "Tell me about your project", href: "contact.html" }
  },

  // ---------- FAQs ----------
  faqs: {
    label: "FAQs",
    title: "Questions I get asked",
    items: [
      {
        question: "Can you design publication-ready figures, maps, and data visualizations for my scientific paper or environmental story?",
        answer: [
          "Yes. I specialize in publication-ready figures and maps for scientific articles, reports, and environmental journalism. I regularly work with climate, ecology, conservation and social–environmental datasets and know how to translate complex results into clear, accurate visual stories.",
          "For scientific publications, I follow journal guidelines (size, resolution, color profiles, typography) and deliver editable vector files (typically PDF, SVG, AI, or EPS) plus high-resolution PNGs or TIFFs for submission systems. For media outlets, I adapt the same graphics to work well both on screen and in print, including variations for social media or story headers when needed.",
          "I can help with maps, charts, infographics, schematics, and multi-panel figures – from first sketch to final layout – so that your visuals are both scientifically robust and visually consistent with your paper, report, or article."
        ]
      },
      {
        question: "I already have my data (spreadsheets, R scripts, or GIS files) or preliminary graphics. How can you help me turn it into clear, accurate graphics?",
        answer: [
          "Most of my projects start exactly like this: you already have the data and analysis, and perhaps a few graphic outputs, you need help turning them into clear, story-driven visuals.",
          "You can send me spreadsheets, R/Python outputs, GIS layers (QGIS, shapefiles, GeoPackage, GeoJSON), or dashboard exports. I first review the material and ask a few targeted questions about your key message, audience, and constraints (journal guidelines, report format, platform, etc.). Then I propose a set of visual options: which charts or maps make sense, which comparisons to highlight, and how to simplify without losing scientific nuance.",
          "From there I create design drafts – for example, map layouts in QGIS/Mapbox, charts based on your data, or schematic diagrams summarizing your framework or methods. You stay in control of the analysis and interpretation; I focus on visual clarity, accessibility, and accurate representation of your results. Final files are delivered in formats you can directly use in manuscripts, presentations, StoryMaps, or web articles."
        ]
      },
      {
        question: "How do you work in terms of pricing, timelines, and remote collaboration with clients across the world?",
        answer: [
          "I work with clients internationally, so almost all of my projects are remote. We usually start with a short call or email exchange where you describe your project, share sample material (data, draft figures, article outline), and tell me about your deadlines and target outlet (journal, report, media story, etc.).",
          "Pricing depends on scope and complexity: for small, well-defined tasks (for example, polishing a single figure or map) I often propose a fixed price; for larger projects (a full set of figures, a report layout, or an interactive piece) I estimate based on expected days of work. In every case, you receive a clear quote before we start, with what’s included (number of figures, feedback rounds, file formats).",
          "For collaboration, I’m flexible: we can work via email, shared folders, or your preferred project tools. I send drafts at key stages so you can comment, and we iterate until the visuals match both your scientific standards and your communication goals. I’m based in Germany (CET), but I regularly coordinate with teams across different time zones."
        ]
      }
    ]
  },

  // ---------- Portfolio ----------
  // Each item: src (or video + poster), width, height, title, client, alt,
  // story { url, title, date, outlet } when it ran in an article, featured: true for the selected-work wall.
  portfolio: [
    {
      id: "maps",
      title: "Maps",
      blurb: "Thematic and locator maps for news stories, built in QGIS and finished in Illustrator.",
      items: [
        {
          src: "images/portfolio/maps/2026_014_AA_Brazil_Jaguar_v3_With_IT.jpg",
          width: 1500, height: 1200,
          title: "Jaguar range and Indigenous territories, Brazil",
          client: "Mongabay",
          featured: true,
          story: { url: "https://news.mongabay.com/2026/02/researchers-eye-jaguar-conservation-wins-under-brazil-indigenous-stewardship-project/", title: "Researchers eye jaguar conservation wins under Brazil Indigenous stewardship project", date: "2026-02-18", outlet: "Mongabay" },
          alt: "Map of jaguar distribution across Brazil overlaid with Indigenous Territories, with the Amazon, Caatinga, Cerrado, Atlantic Forest, Pampa and Pantanal biomes in different colours."
        },
        {
          src: "images/portfolio/maps/2025_83_AA_Brazil_RockFormation_v3.jpg",
          width: 1500, height: 1200,
          title: "Blasting the Pedral do Lourenço, Tocantins River",
          client: "Mongabay",
          story: { url: "https://news.mongabay.com/2025/06/brazil-set-to-blast-35-km-river-rock-formation-for-new-amazon-shipping-route/", title: "Brazil set to blast 35 km river rock formation for new Amazon shipping route", date: "2025-06-02", outlet: "Mongabay" },
          alt: "Map of Brazil showing protected areas and Indigenous Territories in light green, the Tocantins River Basin in pink, and the Tocantins River, Araguaia River, and mouth of the Tocantins River. There is a label indicating a 35 km strip of Pedral do Lourenço to be blasted for a natural rock barrier. Text explains the Brazilian plan to blast 35 km of Pedral do Lourenço on the Tocantins River to enable boats to pass during dry season, with sources listed as WDPA and LandMark 2024. Scale bars for 500 km and 500 miles are at the bottom right."
        },
        {
          src: "images/portfolio/maps/2025_78_AA_Brazil_Eucalyptus_v2.gif",
          width: 1350, height: 1080,
          title: "Eucalyptus expansion in Mato Grosso do Sul, 2010–2023",
          client: "Mongabay",
          story: { url: "https://news.mongabay.com/short-article/2025/06/eucalyptus-boom-in-brazils-cerrado-dries-up-springs-forces-out-smallholders/", title: "Eucalyptus boom in Brazil’s Cerrado dries up springs, forces out smallholders", date: "2025-06-06", outlet: "Mongabay" },
          alt: "Map showing eucalyptus plantation areas in Mato Grosso do Sul, Brazil, with locations labeled as Ribas do Rio Pardo, Água Clara, Selvíria, Três Lagoas, and Brasilândia. The map highlights the increase in plantation area from 2010 to 2023 and shows the Paraná River."
        },
        {
          src: "images/portfolio/maps/2025_95_AA_Panama_Darien_v3.jpg",
          width: 1500, height: 1200,
          title: "The Darién Gap and its protected areas",
          client: "Mongabay",
          featured: true,
          story: { url: "https://news.mongabay.com/2025/06/panama-boosts-protections-in-the-darien-gap-but-deforestation-threats-still-loom/", title: "Panama boosts protections in the Darién Gap, but deforestation threats still loom", date: "2025-06-24", outlet: "Mongabay" },
          alt: "Map of the Darien Gap region highlighting areas in Panama and Colombia, showing the Darien National Park in Panama, parts of the Comarca Emberá Wounaan and Guna Yala regions, and the main road network."
        },
        {
          src: "images/portfolio/maps/2025_104_AA_Brazil_Karipuna_v3_Map.jpg",
          width: 1500, height: 1200,
          title: "Forest loss on Karipuna Indigenous land, 2019–2025",
          client: "Mongabay",
          story: { url: "https://news.mongabay.com/short-article/2025/08/invasion-intensifies-on-karipuna-indigenous-land-in-the-brazilian-amazon/", title: "Invasion intensifies on Karipuna Indigenous land in the Brazilian Amazon", date: "2025-08-06", outlet: "Mongabay" },
          alt: "Map of the Karipuna Indigenous Territory in Rondônia, Brazil, showing tree cover loss from January 2019 to July 2025 in pink, main road network in yellow, and a house recently built by an invader marked with a dot. The map indicates over 10,000 hectares impacted by illegal activities, with a scale of 20 km. The map source is Google Earth and Global Forest Watch."
        },
        {
          src: "images/portfolio/maps/2025_61_AA_Chimpanzee_v1.jpg",
          width: 1500, height: 1200,
          title: "Ranges of the four chimpanzee subspecies",
          client: "Mongabay",
          story: { url: "https://news.mongabay.com/2025/05/fighting-back-against-guinea-bissaus-illegal-chimpanzee-trade/", title: "Fighting back against Guinea-Bissau’s illegal chimpanzee trade", date: "2025-05-29", outlet: "Mongabay" },
          alt: "Map showing the geographic range of four subspecies of common chimpanzee. Red for Pan troglodytes verus across Guinea, Sierra Leone, Liberia, and Côte d'Ivoire. Orange for P. troglodytes ellioti in Cameroon. Yellow for P. troglodytes troglodytes across Gabon, Equatorial Guinea, Cameroon, Sao Tome and Principe, and parts of Congo. Purple for P. troglodytes schweinfurthii covering Uganda, Rwanda, Burundi, Tanzania, and parts of Congo. Gray indicates protected areas."
        },
        {
          src: "images/portfolio/maps/2025_70_AA_Ecuador_v5.jpg",
          width: 1500, height: 1200,
          title: "Overlapping Indigenous claims in Cuyabeno, Ecuador",
          client: "Mongabay",
          story: { url: "https://news.mongabay.com/2025/07/ecuadors-government-promised-same-land-in-the-amazon-to-two-indigenous-peoples/", title: "Ecuador’s government promised same land in the Amazon to two Indigenous peoples", date: "2025-07-14", outlet: "Mongabay" },
          alt: "Map of indigenous lands within the Cuyabeno Wildlife Reserve in Ecuador, highlighting disputed indigenous territories in yellow, indigenous territories in grey with diagonal lines, and protected areas in dark green. The map also shows neighboring countries, including Colombia, Peru, and Ecuador, with a small globe icon indicating the Northern Ecuadorian Amazon."
        },
        {
          src: "images/portfolio/maps/2025_85_AA_Thailand_MaeLaLuang_v3.jpg",
          width: 1500, height: 1200,
          title: "A fluorite mine and the Mae La Luang River, Thailand",
          client: "Mongabay",
          story: { url: "https://news.mongabay.com/2025/06/mining-company-returns-to-haunt-thailands-karen-communities-as-resistance-mounts/", title: "Mining company returns to haunt Thailand’s Karen communities as resistance mounts", date: "2025-06-04", outlet: "Mongabay" },
          alt: "Map highlighting the Mae La Noi district in northern Thailand and the Mae La Luang River, with proposed fluoride mine locations and main road network, warning about contamination risks."
        },
        {
          src: "images/portfolio/maps/2025_75_AA_Brazil_Bioceanic_Railway_v7.jpg",
          width: 1500, height: 1200,
          title: "The Bioceanic Corridor: Chancay to Ilhéus",
          client: "Mongabay",
          story: { url: "https://news.mongabay.com/2025/06/brazil-china-megarailway-raises-deforestation-warnings-in-the-amazon/", title: "Brazil & China megarailway raises deforestation warnings in the Amazon", date: "2025-06-16", outlet: "Mongabay" },
          alt: "Map showing a planned railway corridor connecting Chancay Port in Peru to Ilhéus in Brazil, passing through Cusco, Rio Branco, Porto Velho, Lucas do Rio Verde, and Mara Rosa, with different lines indicating existing and planned railways in South America."
        },
        {
          src: "images/portfolio/maps/2025_92_AA_CITES_Leopards_Map_v2.jpg",
          width: 1500, height: 1200,
          title: "Global leopard trade flows, 2000–2024",
          client: "Mongabay",
          story: { url: "https://news.mongabay.com/2025/06/forgotten-leopards-being-driven-to-silent-extinction-by-poaching-and-trade/", title: "‘Forgotten’ leopards being driven to silent extinction by poaching and trade", date: "2025-06-26", outlet: "Mongabay" },
          alt: "Map showing global trade flow of leopards based on permits issued between 2000 and 2024, with major hotspots in South Africa, Zimbabwe, and Namibia, and the US as a top importer, sourced from CITES."
        },
        {
          src: "images/portfolio/maps/2025_76_AA_DRC_New_Oil_Blocks_v3.jpg",
          width: 1500, height: 1200,
          title: "New oil blocks in the DRC",
          client: "Mongabay Afrique",
          story: { url: "https://fr.mongabay.com/2025/05/rdc-la-societe-civile-soppose-a-louverture-de-52-nouveaux-blocs-petroliers/", title: "RDC : La société civile s’oppose à l’ouverture de 52 nouveaux blocs pétroliers", date: "2025-05-22", outlet: "Mongabay Afrique" },
          alt: "Map of the Democratic Republic of Congo showing new oil exploration blocks, existing protected areas, and the Kinshasa-Kivu Green Corridor project area, with label for Kinsasha and Muanda along the coastline."
        },
        {
          src: "images/portfolio/maps/2025_113_AA_Nashulai_v2.jpg",
          width: 1500, height: 1200,
          title: "Nashulai Maasai Conservancy, Kenya",
          client: "Mongabay",
          featured: true,
          story: { url: "https://news.mongabay.com/2025/12/a-maasai-conservancy-uses-private-lands-to-protect-kenyas-wildlife-corridors/", title: "In Kenya, Maasai private landowners come together to protect wildlife corridors", date: "2025-12-01", outlet: "Mongabay" },
          alt: "Map showing the Nashulai Maasai Conservancy in Kenya, its protected areas, and its boundaries within the Greater Serengeti-Mara Ecosystem, with main roads and the Kenya-Tanzania border indicated."
        },
        {
          src: "images/portfolio/maps/2025_65_AA_DRC_v1_EN.jpg",
          width: 1500, height: 1200,
          title: "Virunga, Kahuzi-Biega and Upemba national parks",
          client: "Mongabay",
          story: { url: "https://news.mongabay.com/2025/04/through-colonization-conflicts-and-conservation-100-years-of-virunga-national-park/", title: "Through colonization, conflicts and conservation: 100 years of Virunga National Park", date: "2025-04-28", outlet: "Mongabay" },
          alt: "Map of the Democratic Republic of the Congo showing protected areas, national parks, and regions with rebel control, including Virunga, Kahuzi-Biega, Upemba, and other parks, with a legend and inset globe indicating location in Africa."
        },
        {
          src: "images/portfolio/maps/2026_003_AA_ChinaVessels_v10_Viz_8.jpg",
          width: 1500, height: 1200,
          title: "Xiang Yang Hong 06 nears US territories",
          client: "Mongabay",
          story: { url: "https://news.mongabay.com/custom-story/2026/03/chinas-deep-sea-mining-fleet-may-also-track-us-submarines/", title: "China’s deep-sea mining fleet may also track US submarines", date: "2026-03-24", outlet: "Mongabay" },
          alt: "Map of the western Pacific showing the track of the Chinese research vessel Xiang Yang Hong 06 as it nears US territories, including Guam."
        },
        {
          src: "images/portfolio/maps/2025_19_Nepal_Elephants_v2.jpg",
          width: 1500, height: 1000,
          title: "Elephant migration routes on the Nepal border",
          client: "Mongabay",
          story: { url: "https://news.mongabay.com/2025/01/how-a-nepali-border-village-learned-to-live-with-migratory-wild-elephants/", title: "How a Nepali border village learned to live with migratory wild elephants", date: "2025-01-30", outlet: "Mongabay" },
          alt: "Map of Nepal showing protected areas, road network, traditional elephant migration route, and key locations such as Shuklaphanta, Bardia National Park, Chitwan National Park, Kathmandu, Sundar Haricha, and Bahundangi. The map includes a small inset world map highlighting Nepal's location."
        },
        {
          src: "images/portfolio/maps/2025_60_AA_Monkeyfarms_v4.jpg",
          width: 1500, height: 1200,
          title: "Suspected macaque farms in Southeast Asia",
          client: "Mongabay",
          story: { url: "https://news.mongabay.com/2025/04/report-alleges-criminality-in-cambodian-vietnamese-monkey-trade/", title: "Report alleges criminality in Cambodian, Vietnamese monkey trade", date: "2025-04-21", outlet: "Mongabay" },
          alt: "Map of Southeast Asia showing suspected locations of monkey breeding farms in Cambodia, Vietnam, and Laos, with a legend listing farm names and numbers, protected areas in green, and a smuggling point marked with an orange circle."
        },
        {
          src: "images/portfolio/maps/2025_59_AA_Thailand_Dugongs_v4.jpg",
          width: 1500, height: 1200,
          title: "Dugong migrations along Thailand’s Andaman coast",
          client: "Mongabay",
          story: { url: "https://news.mongabay.com/2025/04/dugong-numbers-plummet-amid-seagrass-decline-in-thailands-andaman-sea/", title: "Dugong numbers plummet amid seagrass decline in Thailand’s Andaman Sea", date: "2025-04-10", outlet: "Mongabay" },
          alt: "Map showing dugong migration paths along Thailand's west coast, from Myanmar to Malaysia, passing through Phang Nga Bay, Phuket, Krabi, Trang, Koh Libong, and oil spill marked areas, highlighting Hat Chao Mai Marine National Park in yellow. Small icons of dugongs are present along the paths."
        },
        {
          src: "images/portfolio/maps/2025_128_AA_Thailand_NitrogenDioxide_v2_Compressed.gif",
          width: 1350, height: 1080,
          title: "Nitrogen dioxide over northern Thailand",
          client: "Mongabay",
          story: { url: "https://news.mongabay.com/2025/10/anguish-for-residents-as-thailands-most-polluting-coal-plant-gets-new-lease-of-life/", title: "Anguish for residents as Thailand’s most polluting coal plant gets new lease of life", date: "2025-10-01", outlet: "Mongabay" },
          alt: "Animated map of nitrogen dioxide pollution across northern Thailand from Sentinel-5P satellite data, with the Mae Moh coal plant as a hotspot."
        }
      ]
    },
    {
      id: "charts",
      title: "Charts",
      blurb: "Charts that carry a story’s numbers, drafted in R and finished for print and screen.",
      items: [
        {
          src: "images/portfolio/charts/2025_91_AA_CITES_Leopards_Chart_v3.jpg",
          width: 1500, height: 1200,
          title: "CITES permits for leopard parts over 25 years",
          client: "Mongabay",
          featured: true,
          story: { url: "https://news.mongabay.com/2025/06/forgotten-leopards-being-driven-to-silent-extinction-by-poaching-and-trade/", title: "‘Forgotten’ leopards being driven to silent extinction by poaching and trade", date: "2025-06-26", outlet: "Mongabay" },
          alt: "A graph showing the number of international permits issued for trade leopards over 25 years, categorized by permit type, with a significant decline in permits issued since 2014."
        },
        {
          src: "images/portfolio/charts/2025_96_AA_ClimateBancking_v5-02.jpg",
          width: 1500, height: 1200,
          title: "Top 10 banks financing fossil fuels, 2023–2024",
          client: "Mongabay",
          story: { url: "https://news.mongabay.com/2025/06/banks-bet-big-on-fossil-fuels-boosting-financing-in-2024-report-finds/", title: "Banks bet big on fossil fuels, boosting financing in 2024, report finds", date: "2025-06-30", outlet: "Mongabay" },
          alt: "Bar chart comparing fossil fuel financing by top 10 banks in 2023 and 2024, with percentage increases at the top. JPMorgan Chase had the highest 2024 investment, followed by Bank of America and Citigroup. The chart shows green bars for 2023 investments and dark bars for 2024 investments, with dollar amounts on the y-axis."
        },
        {
          src: "images/portfolio/charts/2025_160_AA_CBD_Finance_v3_CopyEdited.jpg",
          width: 1500, height: 1200,
          title: "Biodiversity funding: gaps and growth",
          client: "Mongabay",
          story: { url: "https://news.mongabay.com/2026/02/big-biodiversity-goals-run-up-against-small-funding-realities/", title: "Big biodiversity goals run up against small funding realities", date: "2026-02-25", outlet: "Mongabay" },
          alt: "Chart of biodiversity conservation funding: progress toward the $30 billion goal of the Kunming-Montreal Global Biodiversity Framework, and the gaps that remain on other targets."
        },
        {
          src: "images/portfolio/charts/2025_96_AA_ClimateBancking_v5-03.jpg",
          width: 1500, height: 1200,
          title: "Cumulative fossil fuel financing, 2016–2024",
          client: "Mongabay",
          story: { url: "https://news.mongabay.com/2025/06/banks-bet-big-on-fossil-fuels-boosting-financing-in-2024-report-finds/", title: "Banks bet big on fossil fuels, boosting financing in 2024, report finds", date: "2025-06-30", outlet: "Mongabay" },
          alt: "Line graph showing cumulative fossil fuel financing from 2016 to 2024, reaching $7.9 trillion in 2024, with data points labeled each year and a background overlay of US dollar bills."
        },
        {
          src: "images/portfolio/charts/2025_104_AA_Brazil_Karipuna_v3_PT_Chart.jpg",
          width: 1500, height: 1200,
          title: "Desmatamento na Terra Indígena Karipuna, 2014–2024",
          client: "Mongabay Brasil",
          story: { url: "https://brasil.mongabay.com/2025/08/invasoes-se-intensificam-na-terra-indigena-karipuna-em-rondonia/", title: "Invasões se intensificam na Terra Indígena Karipuna, em Rondônia", date: "2025-08-14", outlet: "Mongabay Brasil" },
          alt: "Graph showing deforestation of Indigenous Karipuna land from 2014 to 2024, with peaks in 2017, 2018, and 2022. Notable events: 2022 peak marked as the highest deforestation point, and notes indicating that Lula's presidency in 2023 resulted in deforestation remaining in decline, with a federal operation removing invaders in 2024."
        }
      ]
    },
    {
      id: "dashboards",
      title: "Dashboards",
      blurb: "Interactive Tableau dashboards embedded in news coverage.",
      items: [
        {
          src: "images/portfolio/dashboards/1739517558747.gif",
          width: 800, height: 800,
          title: "Moves to curtail bottom trawling in European MPAs",
          client: "Mongabay · Tableau",
          story: { url: "https://news.mongabay.com/2025/02/lawsuit-is-latest-push-to-curb-bottom-trawling-in-protected-european-waters/", title: "Lawsuit is latest push to curb bottom trawling in protected European waters", date: "2025-02-13", outlet: "Mongabay" },
          alt: "Map illustrating moves to curtail bottom trawling in European Marine Protected Areas from 2023 to 2025, showing MPAs, EEA zones, and policy advocacy points."
        },
        {
          src: "images/portfolio/dashboards/1734085544489.jpeg",
          width: 800, height: 800,
          title: "Global methane emissions dashboard",
          client: "Mongabay India · Tableau",
          featured: true,
          story: { url: "https://india.mongabay.com/2024/12/the-methane-puzzle-of-ambition-and-action-unfolds-at-cop29/", title: "The methane puzzle of ambition and action unfolds at COP29", date: "2024-12-13", outlet: "Mongabay India" },
          alt: "Line charts showing global methane emission projections from 1990 to 2050, and main human sources of methane by sector (agriculture, energy, industrial, waste) with filters for country, region, and subregion."
        },
        {
          src: "images/portfolio/dashboards/1734626854137.gif",
          width: 800, height: 800,
          title: "Protected areas in Africa",
          client: "Tableau Public",
          alt: "Map of Africa showing protected areas, with filters by country, governance, and designation status, and a legend indicating extent in square kilometers for terrestrial and marine/costal areas."
        },
        {
          src: "images/portfolio/dashboards/1736430176113.gif",
          width: 800, height: 800,
          title: "Extreme weather events of 2024",
          client: "Mongabay · Tableau",
          story: { url: "https://news.mongabay.com/short-article/2025/01/deaths-linked-to-extreme-weather-in-2024/", title: "At least 11,500 deaths linked to extreme weather in 2024", date: "2025-01-09", outlet: "Mongabay" },
          alt: "Infographic showing extreme weather events of 2024, with icons representing storms, floods, landslides, wildfires, droughts, extreme temperatures, and glacial floods, and data on global and North country impacts."
        }
      ]
    },
    {
      id: "schematics",
      title: "Schematics",
      blurb: "Diagrams that explain processes, systems and governance for scientific reports.",
      items: [
        {
          src: "images/portfolio/schematics/schematics-05.jpg",
          width: 1500, height: 1200,
          title: "Co-production of knowledge systems",
          client: "Report figure",
          alt: "Diagram showing the co-production and evolution of knowledge systems over time, with three stages labeled (a), (b), and (c). Each stage features stylized plant-like structures representing independently available knowledge systems, with an overlay of co-produced knowledge at the top, and an arrow indicating the trajectory of knowledge systems over time."
        },
        {
          src: "images/portfolio/schematics/schematics-04.jpg",
          width: 1500, height: 1200,
          title: "Governance of the ocean, coasts and cryosphere",
          client: "Report figure",
          featured: true,
          alt: "Flowchart illustrating governance of the ocean, coasts, and cryosphere under a changing climate, showing levels from local to global, including organizations, governments, indigenous bodies, and global institutions."
        },
        {
          src: "images/portfolio/schematics/schematics-03.jpg",
          width: 1500, height: 1200,
          title: "Ocean processes, in cross-section",
          client: "Report figure",
          alt: "Schematic cross-section of ocean processes and the features they act on, with a colour-coded legend."
        },
        {
          src: "images/portfolio/schematics/schematics-07.jpg",
          width: 1500, height: 1200,
          title: "Climate change effects on deep-ocean ecosystems",
          client: "Report figure",
          alt: "Diagram showing effects of climate change on ocean ecosystems and biogeochemical processes, including impacts on canyon, slope, and seamount ecosystems, with labels for different ocean zones, features, and effects."
        },
        {
          src: "images/portfolio/schematics/schematics-06.jpg",
          width: 1500, height: 1200,
          title: "Glacier and ice sheet processes",
          client: "Report figure",
          alt: "Diagram of glacier and ice sheet processes, showing ice flow, melting, calving, and sea level changes with color-coded elements and symbols."
        },
        {
          src: "images/portfolio/schematics/schematics-02.jpg",
          width: 1500, height: 1200,
          title: "Human impacts and knowledge gaps in the deep sea",
          client: "Report figure",
          alt: "Diagram illustrating human impacts and knowledge gaps in the deep sea, including activities like fishing, oil extraction, pollution, and mining affecting different benthic zones, with sections on environmental stratification, ecosystem services, and governance institutions."
        },
        {
          src: "images/portfolio/schematics/schematic-1.jpg",
          width: 1500, height: 1200,
          title: "From deforestation to climate impacts",
          client: "Report figure",
          alt: "Diagram illustrating the cycle from deforestation to climate impacts, emphasizing how community conservation efforts and sustainable infrastructure can mitigate deforestation, restore ecosystems, and reduce climate change effects."
        }
      ]
    },
    {
      id: "storymaps",
      title: "StoryMaps",
      blurb: "Scrollytelling stories built with Mapbox, React and GSAP.",
      items: [
        {
          src: "images/portfolio/storymaps/StoryMap_1.png",
          width: 1500, height: 867,
          title: "Shifting Sands",
          client: "Mongabay India",
          story: { url: "https://india.mongabay.com/2025/11/quarries-devour-buffer-forests-of-western-ghats-after-sand-mining-ban/", title: "Shifting Sands", date: null, outlet: "Mongabay India" },
          alt: "Opening screen of the Mongabay India story “Shifting Sands”, on quarries eating into the buffer forests of the Western Ghats."
        },
        {
          src: "images/portfolio/storymaps/ScrollyMap_2.png",
          width: 1500, height: 870,
          title: "Damming the Arai River",
          client: "Mongabay",
          story: { url: "https://news.mongabay.com/2025/09/cambodian-irrigation-dam-construction-threatens-riverine-communities-in-the-cardamoms/", title: "Damming the Arai River", date: null, outlet: "Mongabay" },
          alt: "Opening screen of the Mongabay story “Damming the Arai River”, on an irrigation dam in Cambodia’s Cardamom Mountains."
        },
        {
          src: "images/portfolio/storymaps/ScrollyMap_1.png",
          width: 1500, height: 868,
          title: "Clearing the Way",
          client: "Mongabay",
          story: { url: "https://news.mongabay.com/custom-story/2025/09/satellite-images-reveal-oil-project-surge-in-ugandan-park-and-wetland/", title: "Clearing the Way", date: null, outlet: "Mongabay" },
          alt: "Opening screen of the Mongabay story “Clearing the Way”, on satellite images of an oil project in a Ugandan park and wetland."
        },
        {
          src: "images/portfolio/storymaps/Scrolly_Dual.jpg",
          width: 1500, height: 867,
          title: "Dual-purpose?",
          client: "Mongabay",
          featured: true,
          story: { url: "https://news.mongabay.com/custom-story/2026/03/chinas-deep-sea-mining-fleet-may-also-track-us-submarines/", title: "Dual-purpose?", date: null, outlet: "Mongabay" },
          alt: "Opening screen of the Mongabay story \"Dual-purpose?\", on a Chinese research vessel that may serve civilian and military roles, over a photograph of the seabed."
        },
        {
          src: "images/portfolio/storymaps/Scrolly.png",
          width: 1500, height: 874,
          title: "What does a map miss?",
          client: "Mongabay India",
          story: { url: "https://india.mongabay.com/2026/05/what-a-coastal-zoning-map-leaves-out-explained-through-maps/", title: "What does a map miss?", date: null, outlet: "Mongabay India" },
          alt: "Opening screen of the Mongabay India story “What does a map miss?”, on a coastal zoning map and the details it leaves out."
        },
        {
          src: "images/portfolio/storymaps/Scrolly_Collision.jpg",
          width: 1500, height: 867,
          title: "Collision course",
          client: "Mongabay",
          featured: true,
          story: { url: "https://news.mongabay.com/custom-story/2026/09/can-we-stop-ships-from-killing-the-mediterraneans-last-great-whales/", title: "Collision course", date: null, outlet: "Mongabay" },
          alt: "Opening screen of the Mongabay story \"Collision course\", showing a ship and a whale on converging tracks in the Mediterranean."
        }
      ]
    },
    {
      id: "3d-maps",
      title: "3D Interactive Maps",
      blurb: "Interactive 3D bathymetry built from open elevation data.",
      items: [
        {
          video: "images/portfolio/3d-maps/Marianas.mp4",
          poster: "images/portfolio/3d-maps/Marianas-poster.jpg",
          width: 800, height: 620,
          title: "The Mariana Trench in 3D",
          client: "Mongabay",
          featured: true,
          story: { url: "https://news.mongabay.com/2025/12/deep-sea-mining-interests-raise-alarms-among-mariana-trench-communities/", title: "The Mariana Trench in 3D", date: null, outlet: "Mongabay" },
          alt: "Animated 3D map of the Mariana Trench seafloor, turning to show the deep-sea mining areas under discussion."
        },
        {
          video: "images/portfolio/3d-maps/Honduras.mp4",
          poster: "images/portfolio/3d-maps/Honduras-poster.jpg",
          width: 640, height: 576,
          title: "The Honduran Caribbean seafloor in 3D",
          client: "Independent",
          story: { url: "https://honduras.pubpub.org", title: "The Honduran Caribbean seafloor in 3D", date: null, outlet: "Independent" },
          alt: "Animated 3D map of the seafloor off Honduras’ Caribbean coast, with Roatán, Utila and Guanaja rising from the shelf."
        }
      ]
    },
    {
      id: "layouts",
      title: "Layouts",
      blurb: "Editorial and publication design: magazines, brochures, handbooks.",
      items: [
        {
          src: "images/portfolio/layouts/Portfolio_-01.jpg",
          width: 1500, height: 1200,
          title: "La Ola magazine: fisheries issue",
          client: "Publication design",
          alt: "An open magazine showing articles about fisheries and underwater exploration, with the cover page titled \"LA OLA\" featuring an underwater photo of a fishing scene and a fish."
        },
        {
          src: "images/portfolio/layouts/Portfolio_-02.jpg",
          width: 1500, height: 1200,
          title: "La Ola magazine: the northern coast of Honduras",
          client: "Publication design",
          featured: true,
          alt: "An open magazine , with a person in a white coat and wide-brimmed hat on the cover, another page featuring a colorful topographic map of the northern coast of Honduras. "
        },
        {
          src: "images/portfolio/layouts/Portfolio_-06.jpg",
          width: 1500, height: 1200,
          title: "Newspaper series on Honduran fisheries",
          client: "Publication design",
          alt: "Stack of newspapers on an orange background, with headlines about Honduras, artificial reefs, and fishing, featuring images of a beach, a fish, and people at the beach."
        },
        {
          src: "images/portfolio/layouts/Portfolio_-08.jpg",
          width: 1500, height: 1200,
          title: "Handbook for Authors",
          client: "IPCC",
          alt: "A handbook titled 'Handbook for Authors' has a graphic of a hand holding a leaf with a circular patterned background, and features the logos of IPCC and the Intergovernmental Panel on Climate Change."
        },
        {
          src: "images/portfolio/layouts/Portfolio_-07.jpg",
          width: 1500, height: 1200,
          title: "Guía metodológica: zonas de recuperación pesquera",
          client: "Publication design",
          alt: "Brochure titled 'Guia Metodologica para evaluar el desarrollo de las zonas de recuperación pesquera en ecosistemas marinos del Caribe Hondureño' with a graphic of a fish tank with fish and a grid chart, dated May 2018, authored by Andre Alvarado, with CEM logo."
        },
        {
          src: "images/portfolio/layouts/Portfolio_-14.jpg",
          width: 1500, height: 1200,
          title: "How to Adapt to a Changing Climate: Summary for All",
          client: "IPCC",
          alt: "Three pink booklets titled \"How to Adapt to a Changing Climate: Summary for All\" with icons related to climate change on the cover."
        },
        {
          src: "images/portfolio/layouts/Portfolio_-10.jpg",
          width: 1500, height: 1200,
          title: "Artisanal fisheries brochure, Guanaja",
          client: "Publication design",
          alt: "Brochure for artisanal fisheries in Guanjá, displaying text and diagrams about the area's marine resources and management policies."
        },
        {
          src: "images/portfolio/layouts/Portfolio_-03.jpg",
          width: 1500, height: 1200,
          title: "Fishing licences brochure",
          client: "Publication design",
          alt: "Brochure about fishing licenses, showing various ID cards, fish images, and information on artisanal and industrial fishing licenses in Spanish."
        },
        {
          src: "images/portfolio/layouts/Portfolio_-04.jpg",
          width: 1500, height: 1200,
          title: "Municipal strategic development plan",
          client: "Publication design",
          alt: "Open brochure with blue background, yellow and white text, and images of people and a landscape. The brochure discusses a municipal strategic development plan."
        },
        {
          src: "images/portfolio/layouts/Portfolio_-05.jpg",
          width: 1500, height: 1200,
          title: "Fisheries law pamphlets",
          client: "Publication design",
          alt: "Two folded pamphlets on pink background, one titled \"Ley de la PESA\" in Spanish, with a picture of a man holding a spear, and the other with visible text in Spanish."
        },
        {
          src: "images/portfolio/layouts/Portfolio_-09.jpg",
          width: 1500, height: 1200,
          title: "Hammerhead shark conservation tri-fold",
          client: "Publication design",
          alt: "A tri-fold brochure about hammerhead sharks, highlighting conservation efforts, identification guides, and regional regulations. The front features an image of a hammerhead shark swimming underwater."
        }
      ]
    },
    {
      id: "peer-reviewed",
      title: "Peer-reviewed",
      blurb: "Figures for papers in peer-reviewed journals.",
      items: [
        {
          src: "images/portfolio/peer-reviewed/1733307062760.jpeg",
          width: 1500, height: 1501,
          title: "Progress and gaps in climate change adaptation in coastal cities",
          client: "Journal article",
          alt: "Open magazine or journal page titled \"Progress and gaps in climate change adaptation in coastal cities across the globe\" with charts and graphs about climate risks and vulnerabilities."
        },
        {
          src: "images/portfolio/peer-reviewed/1733306697481.jpeg",
          width: 1500, height: 1501,
          title: "The tragedy of climate change science",
          client: "Nature Climate Change",
          alt: "Page from academic journal titled 'The tragedy of climate change science' with a graph showing responses by science to climate change since 1970, and indicators of adverse change."
        },
        {
          src: "images/portfolio/peer-reviewed/1733307273965.jpeg",
          width: 1500, height: 1501,
          title: "A global assessment of actors and their roles in climate change adaptation",
          client: "Nature Climate Change",
          alt: "Open publication of a scientific article titled 'A global assessment of factors and their roles in climate change adaptation' with colorful pie charts and data visualizations on climate adaptation by region and actor type."
        },
        {
          src: "images/portfolio/peer-reviewed/1733396318491.jpeg",
          width: 1500, height: 1501,
          title: "Towards an IPCC Atlas for comprehensive climate change risk assessments",
          client: "Journal article",
          alt: "Scientific article titled 'Towards an IPCC Atlas for comprehensive climate change risk assessments' with maps and diagrams about climate risk, exposure, and response, and authors listed below the title."
        },
        {
          src: "images/portfolio/peer-reviewed/1733475367753.jpeg",
          width: 1500, height: 1501,
          title: "Declining snow cover and winter tourism",
          client: "Journal of Environmental Management",
          alt: "A magazine page from the Journal of Environmental Management discussing how declining snow cover affects winter tourism and the potential adaptation strategies, including artificial snow-making and alternative winter activities."
        },
        {
          src: "images/portfolio/peer-reviewed/1735909753001.jpeg",
          width: 800, height: 800,
          title: "AI applications in African agriculture",
          client: "Journal article",
          alt: "Map of Africa highlighting six countries with numbered icons and descriptions of artificial intelligence applications in agriculture: Ghana (yield prediction), Nigeria (smart irrigation), Ethiopia (agricultural extension), Kenya (crop disease detection), Rwanda (AI and IoT integration), South Africa (livestock monitoring)."
        },
        {
          src: "images/portfolio/peer-reviewed/_linkedin-09.jpg",
          width: 1500, height: 1500,
          title: "Figures for a research paper",
          client: "Journal article",
          alt: "Sample figures from a peer-reviewed paper, laid out as a set."
        }
      ]
    },
    {
      id: "ipcc",
      title: "IPCC report figures",
      blurb: "Figures from the IPCC Sixth Assessment Report, Working Group II.",
      items: [
        {
          src: "images/portfolio/ipcc/ipcc-06.jpg",
          width: 1500, height: 1620,
          title: "Reindeer herding under climate pressure, Sweden",
          client: "IPCC AR6 WGII",
          alt: "Map of Sweden showing reindeer herding areas with a list of factors affecting indigenous reindeer livelihood, weather condition impacts, effects on people and animals, and land pressure effects, with icons indicating impacts and their severity."
        },
        {
          src: "images/portfolio/ipcc/ipcc-08.jpg",
          width: 1500, height: 1620,
          title: "Projected risks for 65 European cities",
          client: "IPCC AR6 WGII",
          alt: "A chart showing projected changes in risk levels of pluvial flooding, extreme heat, and meteorological drought across 65 European cities over mid and far future periods. The chart uses colored dots and shaded areas to indicate risk levels, population size, and European regions."
        },
        {
          src: "images/portfolio/ipcc/ipcc-05.jpg",
          width: 1500, height: 1620,
          title: "Sea level rise and flooding in Venice, 1900–2020",
          client: "IPCC AR6 WGII",
          featured: true,
          alt: "A detailed infographic showing the relationship between sea level rise and flooding in Venice from 1900 to 2020. The upper section illustrates rising relative sea levels, flood events, and significant water management milestones. The middle section projects future sea level rises with confidence ranges and milestones for lagoon closures. The lower section visualizes projected sea level rises in Venice with confidence intervals. The right side features a satellite map of Venice highlighting key features like the city center, lagoon, barrier islands, and inlets connecting to the sea, with annotations explaining flood prevention infrastructure."
        },
        {
          src: "images/portfolio/ipcc/ipcc-07.jpg",
          width: 1500, height: 1620,
          title: "Relative risk by sector and hazard, North America",
          client: "IPCC AR6 WGII",
          alt: "A detailed chart titled 'Rapid assessment of relative risk by sector and climate hazard for North America,' showing levels of risk for various sectors and hazards using colored squares to indicate risk levels, with legend indicating purple for very high, red for high, yellow for moderate, and white for not applicable or not assessed."
        },
        {
          src: "images/portfolio/ipcc/ipcc-04.jpg",
          width: 1500, height: 1620,
          title: "Climate risks to hydropower and irrigation in Africa",
          client: "IPCC AR6 WGII",
          alt: "Map and charts illustrating climate risks to hydropower and irrigation in Africa, including distribution of hydropower plants, correlation of river flows, capacity, forecast revenues, and irrigation data for major river basins like Congo, Nile, Zambezi, Niger, and Senegal."
        },
        {
          src: "images/portfolio/ipcc/ipcc-03.jpg",
          width: 1500, height: 1620,
          title: "How climate change affects food security through water",
          client: "IPCC AR6 WGII",
          alt: "A detailed infographic explaining how climate change impacts food security through water issues, divided into three sections. The first section shows a timeline of food production loss events from 1970 to 2013, highlighting an increase in drought-related and other climate-related events. The second section projects the rise of land and population affected by droughts from 2006 to 2099. The third section compares impacts across regions and water systems on crop yield and water quality, with various symbols indicating positive or negative influences and confidence levels."
        },
        {
          src: "images/portfolio/ipcc/ipcc-02.jpg",
          width: 1500, height: 1620,
          title: "Observed impacts on ecosystems and human systems",
          client: "IPCC AR6 WGII",
          featured: true,
          alt: "A detailed infographic showing the impacts of climate change on ecosystems and human systems worldwide, divided into sections for impacts on ecosystems and human systems, with various geographic regions and categories."
        },
        {
          src: "images/portfolio/ipcc/ipcc-09.jpg",
          width: 1500, height: 1620,
          title: "Risk management options across sectors",
          client: "IPCC AR6 WGII",
          alt: "Chart illustrating risk management options in society, categorized by risk type such as coastal systems, ecosystems, infrastructure, health, food security, water security, peace, and migration, with color-coded confidence levels and governance responsibilities."
        },
        {
          src: "images/portfolio/ipcc/ipcc-13.jpg",
          width: 1500, height: 1620,
          title: "Global economic impact estimates by warming level",
          client: "IPCC AR6 WGII",
          alt: "Graph titled 'Global aggregate economic impact estimates by global warming level' showing multiple charts. The first four show estimated percentage loss in global GDP relative to global temperature increase, using different modeling methods: statistical, structural, meta-analyses, and AR5 methods. The fifth chart shows global average temperature change over time at different warming levels, with projections for near 2000s, mid-2050s, and long 2090s, color-coded by warming levels from 1.9°C to 5.8°C."
        },
        {
          src: "images/portfolio/ipcc/ipcc-10.jpg",
          width: 1500, height: 1620,
          title: "The urban adaptation gap by region",
          client: "IPCC AR6 WGII",
          alt: "A chart displaying the urban adaptation gap to current climate risks across different regions and adaptation actions, with categories including Africa, Asia, Australasia, the Americas, Europe, North America, and Small Islands. The chart compares high and lower income exposure populations and shows adaptation measures for flood, storm, heatwaves, water, and food security."
        },
        {
          src: "images/portfolio/ipcc/ipcc-11.jpg",
          width: 1500, height: 1620,
          title: "Financial linkages spreading flood costs from Europe",
          client: "IPCC AR6 WGII",
          alt: "Diagram illustrating how European regions are connected through financial linkages that distribute flood damage costs to other parts of the world. The diagram shows arcs from Europe to regions worldwide, with bubbles representing costs in millions of USD, highlighting the impact of flood risks and adaptation levels."
        },
        {
          src: "images/portfolio/ipcc/ipcc-12.jpg",
          width: 1500, height: 1620,
          title: "Projected warming and reasons for concern",
          client: "IPCC AR6 WGII",
          alt: "A scientific chart showing projected global temperature change from 1950 to 2100 under different scenarios, with risk levels for climate concerns indicated by color-coded bars representing very high, high, moderate, and undetectable risks. The chart also lists reasons for concern related to climate impacts, such as systems threatened and impacts magnitude."
        }
      ]
    }
  ]
};
