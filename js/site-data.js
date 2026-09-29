/*
  Site content: every piece of text, every link and every portfolio item lives here.
  js/main.js renders the pages, js/motion.js adds the animation, css/style.css holds the look.
*/
window.SITE = {
  name: "Andrés Alegría",
  tagline: "Visual science communicator",
  siteTitle: "Andrés Alegría | Visual Science Communicator",

  nav: [
    { label: "Work", href: "index.html#work", page: "work" },
    { label: "Stories", href: "stories.html", page: "stories" },
    { label: "Services", href: "services.html", page: "services" },
    { label: "FAQs", href: "faqs.html", page: "faqs" },
    { label: "Contact", href: "contact.html", page: "contact" }
  ],

  social: [
    { label: "Behance", href: "https://www.behance.net/andres-alegria", text: "Bē" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/graphicsinscience", text: "in" }
  ],

  // ---------- Home ----------
  hero: {
    // the <em> part is set in the lighter colour
    title: "Clear graphics for <em>complex science.</em>",
    lead: "Hello. I’m Andrés Alegría, a visual science communicator. My work blends graphic design with an academic background in ecology, where I first used research data to shape nature conservation policy and stakeholder engagement across Central America. I’m a tree hugger :-)",
    actions: [
      { label: "Get in touch", href: "#contact", style: "ghost" }
    ]
  },

  // every portfolio piece below, shown on the scattered wall in the order of the file
  work: {
    label: "Examples",
    intro: "Open any of them to read it at full size."
  },

  storiesTeaser: {
    label: "Scrollytelling",
    title: "Stories that unfold as you scroll",
    intro: "Map-driven features for Mongabay, built with Mapbox, React and GSAP.",
    link: { label: "All stories", href: "stories.html" }
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
    title: "Andrés Alegría | Visual Science Communicator",
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
        embed: "https://scrollymap2026whalecollisions.vercel.app/", // the scrolly itself, played inside the card
        tools: "Mapbox GL · React · GSAP · Global Fishing Watch data",
        image: { src: "images/stories/Scrolly_Collision.jpg", width: 1100, height: 635, alt: "Opening screen of “Collision course”: a ship and a whale on converging tracks in the Mediterranean." }
      },
      {
        title: "What does a map miss?",
        deck: "A large-scale government-drafted map misses the details, driving a community anxious.",
        outlet: "Mongabay India",
        date: "2026-05-19",
        url: "https://india.mongabay.com/2026/05/what-a-coastal-zoning-map-leaves-out-explained-through-maps/",
        embed: "https://scrolly-map-2026-map-scale.vercel.app/", // the scrolly itself, played inside the card
        tools: "Mapbox GL · React · GSAP",
        image: { src: "images/stories/Scrolly.jpg", width: 1100, height: 641, alt: "Opening screen of “What does a map miss?”, over a coastal zoning map." }
      },
      {
        title: "Dual-purpose?",
        deck: "How a Chinese research vessel might serve both civilian and military roles, told through six months of its voyages.",
        outlet: "Mongabay",
        date: "2026-03-24",
        url: "https://news.mongabay.com/custom-story/2026/03/chinas-deep-sea-mining-fleet-may-also-track-us-submarines/",
        embed: "https://scrolly-map-2026-china-vessels-v2.vercel.app/", // the scrolly itself, played inside the card
        tools: "Mapbox GL · React · GSAP · AIS vessel tracks",
        image: { src: "images/stories/Scrolly_Dual.jpg", width: 1100, height: 635, alt: "Opening screen of “Dual-purpose?”, over a photograph of the seabed." }
      },
      {
        title: "Shifting Sands",
        deck: "Quarries devour the buffer forests of the Western Ghats after a sand-mining ban.",
        outlet: "Mongabay India",
        date: "2025-11-11",
        url: "https://india.mongabay.com/2025/11/quarries-devour-buffer-forests-of-western-ghats-after-sand-mining-ban/",
        embed: "https://mongabay-scrolly-map-2025-m-sand.vercel.app/", // the scrolly itself, played inside the card
        tools: "Mapbox GL · React",
        image: { src: "images/stories/StoryMap_1.jpg", width: 1100, height: 635, alt: "Opening screen of “Shifting Sands”, over an aerial view of a quarry." }
      },
      {
        title: "Clearing the Way",
        deck: "Satellite images reveal an oil project’s surge in a Ugandan park and wetland.",
        outlet: "Mongabay",
        date: "2025-09-18",
        url: "https://news.mongabay.com/custom-story/2025/09/satellite-images-reveal-oil-project-surge-in-ugandan-park-and-wetland/",
        embed: "https://mongabay-scrolly-map-2025-pipelines-three.vercel.app/", // the scrolly itself, played inside the card
        tools: "Mapbox GL · React · satellite imagery",
        extra: { label: "Also published in French", url: "https://fr.mongabay.com/custom-story/2025/10/ouganda-des-images-satellites-revelent-lexpansion-dun-projet-petrolier-dans-un-parc-et-une-zone-humide/" },
        image: { src: "images/stories/ScrollyMap_1.jpg", width: 1100, height: 636, alt: "Opening screen of “Clearing the Way”, over a forest photograph." }
      },
      {
        title: "Damming the Arai River",
        deck: "Irrigation Dam 2 will close the Arai River, which feeds the Pursat and the Tonle Sap, Cambodia’s most productive freshwater fishery.",
        outlet: "Mongabay",
        date: "2025-09-09",
        url: "https://news.mongabay.com/2025/09/cambodian-irrigation-dam-construction-threatens-riverine-communities-in-the-cardamoms/",
        embed: "https://mongabay-scrolly-map-2025-cambodia.vercel.app/", // the scrolly itself, played inside the card
        tools: "Mapbox GL · React",
        image: { src: "images/stories/ScrollyMap_2.jpg", width: 1100, height: 638, alt: "Opening screen of “Damming the Arai River”, over a river landscape." }
      }
    ],
    // the recordings play muted on a loop; each card links to where the 3D map lives
    interactive: {
      label: "Interactive 3D maps",
      title: "Seafloors you can turn around",
      intro: "Bathymetry built from open elevation data, rendered in the browser.",
      items: [
        {
          video: "images/portfolio/3d-maps/Marianas.mp4",
          poster: "images/portfolio/3d-maps/Marianas-poster.jpg",
          width: 800, height: 620,
          title: "The Mariana Trench in 3D",
          client: "Mongabay",
          url: "https://news.mongabay.com/2025/12/deep-sea-mining-interests-raise-alarms-among-mariana-trench-communities/",
          alt: "Animated 3D map of the Mariana Trench seafloor, turning to show the deep-sea mining areas under discussion."
        },
        {
          video: "images/portfolio/3d-maps/Honduras.mp4",
          poster: "images/portfolio/3d-maps/Honduras-poster.jpg",
          width: 640, height: 576,
          title: "The Honduran Caribbean seafloor in 3D",
          client: "Independent",
          url: "https://honduras.pubpub.org",
          alt: "Animated 3D map of the seafloor off Honduras’ Caribbean coast, with Roatán, Utila and Guanaja rising from the shelf."
        }
      ]
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
  // Each item: src (or video + poster), thumb (800 px copy used in the grid), width, height, title, client, alt,
  // story { url, title, date, outlet } when it ran in an article; paper { url, year } for a journal paper (the DOI link); year alone when there is no link.
  portfolio: [
    {
      id: "maps",
      title: "Maps",
      blurb: "Thematic and locator maps for news stories, built in QGIS and finished in Illustrator.",
      items: [
        {
          // before/after slider: compare[0] shows left of the handle, compare[1] right of it
          compare: [
            {
              src: "images/portfolio/maps/2026_093_AA_WaterApartheid_v1_Water.jpg",
              thumb: "images/thumbs/maps/2026_093_AA_WaterApartheid_v1_Water.jpg",
              alt: "Map of Recife showing how many hours each water supply zone had water in June 2026, from 40–119 hours in the lightest blue to the full 720 hours in the darkest."
            },
            {
              src: "images/portfolio/maps/2026_093_AA_WaterApartheid_v1_Women.jpg",
              thumb: "images/thumbs/maps/2026_093_AA_WaterApartheid_v1_Women.jpg",
              alt: "Map of Recife showing Black and brown women as a share of each neighborhood's residents in the 2022 Census, from 11.5–20% in the lightest red to 38–42% in the darkest."
            }
          ],
          width: 1500, height: 1200,
          title: "Abastecimento de água e mulheres negras no Recife",
          client: "Mongabay Brasil",
          story: { url: "https://brasil.mongabay.com/2026/09/mapa-aponta-desigualdade-racial-no-acesso-a-agua-no-recife/", title: "Mapa aponta desigualdade racial no acesso à água no Recife", date: "2026-09-29", outlet: "Mongabay Brasil" },
          alt: "Slider comparing two maps of Recife, Brazil: hours of water supply per zone in June 2026, and where Black women live. Only 73 of 309 supply zones had water all month; the periphery, where proportionally more Black women live, had water for fewer hours."
        },
        {
          src: "images/portfolio/maps/2026_014_AA_Brazil_Jaguar_v3_With_IT.jpg",
          thumb: "images/thumbs/maps/2026_014_AA_Brazil_Jaguar_v3_With_IT.jpg",
          width: 1500, height: 1200,
          title: "Jaguar range and Indigenous territories, Brazil",
          client: "Mongabay",
          story: { url: "https://news.mongabay.com/2026/02/researchers-eye-jaguar-conservation-wins-under-brazil-indigenous-stewardship-project/", title: "Researchers eye jaguar conservation wins under Brazil Indigenous stewardship project", date: "2026-02-18", outlet: "Mongabay" },
          alt: "Map of jaguar distribution across Brazil overlaid with Indigenous Territories, with the Amazon, Caatinga, Cerrado, Atlantic Forest, Pampa and Pantanal biomes in different colours."
        },
        {
          src: "images/portfolio/maps/2025_83_AA_Brazil_RockFormation_v3.jpg",
          thumb: "images/thumbs/maps/2025_83_AA_Brazil_RockFormation_v3.jpg",
          width: 1500, height: 1200,
          title: "Blasting the Pedral do Lourenço, Tocantins River",
          client: "Mongabay",
          story: { url: "https://news.mongabay.com/2025/06/brazil-set-to-blast-35-km-river-rock-formation-for-new-amazon-shipping-route/", title: "Brazil set to blast 35 km river rock formation for new Amazon shipping route", date: "2025-06-02", outlet: "Mongabay" },
          alt: "Map of Brazil showing protected areas and Indigenous Territories in light green, the Tocantins River Basin in pink, and the Tocantins River, Araguaia River, and mouth of the Tocantins River. There is a label indicating a 35 km strip of Pedral do Lourenço to be blasted for a natural rock barrier. Text explains the Brazilian plan to blast 35 km of Pedral do Lourenço on the Tocantins River to enable boats to pass during dry season, with sources listed as WDPA and LandMark 2024. Scale bars for 500 km and 500 miles are at the bottom right."
        },
        {
          src: "images/portfolio/maps/2025_104_AA_Brazil_Karipuna_v3_Map.jpg",
          thumb: "images/thumbs/maps/2025_104_AA_Brazil_Karipuna_v3_Map.jpg",
          width: 1500, height: 1200,
          title: "Forest loss on Karipuna Indigenous land, 2019–2025",
          client: "Mongabay",
          story: { url: "https://news.mongabay.com/short-article/2025/08/invasion-intensifies-on-karipuna-indigenous-land-in-the-brazilian-amazon/", title: "Invasion intensifies on Karipuna Indigenous land in the Brazilian Amazon", date: "2025-08-06", outlet: "Mongabay" },
          alt: "Map of the Karipuna Indigenous Territory in Rondônia, Brazil, showing tree cover loss from January 2019 to July 2025 in pink, main road network in yellow, and a house recently built by an invader marked with a dot. The map indicates over 10,000 hectares impacted by illegal activities, with a scale of 20 km. The map source is Google Earth and Global Forest Watch."
        },
        {
          src: "images/portfolio/maps/2025_92_AA_CITES_Leopards_Map_v2.jpg",
          thumb: "images/thumbs/maps/2025_92_AA_CITES_Leopards_Map_v2.jpg",
          width: 1500, height: 1200,
          title: "Global leopard trade flows, 2000–2024",
          client: "Mongabay",
          story: { url: "https://news.mongabay.com/2025/06/forgotten-leopards-being-driven-to-silent-extinction-by-poaching-and-trade/", title: "‘Forgotten’ leopards being driven to silent extinction by poaching and trade", date: "2025-06-26", outlet: "Mongabay" },
          alt: "Map showing global trade flow of leopards based on permits issued between 2000 and 2024, with major hotspots in South Africa, Zimbabwe, and Namibia, and the US as a top importer, sourced from CITES."
        },
        {
          src: "images/portfolio/maps/2026_003_AA_ChinaVessels_v10_Viz_8.jpg",
          thumb: "images/thumbs/maps/2026_003_AA_ChinaVessels_v10_Viz_8.jpg",
          width: 1500, height: 1200,
          title: "Xiang Yang Hong 06 nears US territories",
          client: "Mongabay",
          story: { url: "https://news.mongabay.com/custom-story/2026/03/chinas-deep-sea-mining-fleet-may-also-track-us-submarines/", title: "China’s deep-sea mining fleet may also track US submarines", date: "2026-03-24", outlet: "Mongabay" },
          alt: "Map of the western Pacific showing the track of the Chinese research vessel Xiang Yang Hong 06 as it nears US territories, including Guam."
        },
        {
          // an animation: a small looping video on the wall, the full-size one in the lightbox
          video: "images/portfolio/maps/2025_128_AA_Thailand_NitrogenDioxide_v2.mp4",
          videoThumb: "images/thumbs/maps/2025_128_AA_Thailand_NitrogenDioxide_v2.mp4",
          poster: "images/thumbs/maps/2025_128_AA_Thailand_NitrogenDioxide_v2-poster.jpg",
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
          src: "images/portfolio/charts/2025_160_AA_CBD_Finance_v3_CopyEdited.jpg",
          thumb: "images/thumbs/charts/2025_160_AA_CBD_Finance_v3_CopyEdited.jpg",
          width: 1500, height: 1200,
          title: "Biodiversity funding: gaps and growth",
          client: "Mongabay",
          story: { url: "https://news.mongabay.com/2026/02/big-biodiversity-goals-run-up-against-small-funding-realities/", title: "Big biodiversity goals run up against small funding realities", date: "2026-02-25", outlet: "Mongabay" },
          alt: "Chart of biodiversity conservation funding: progress toward the $30 billion goal of the Kunming-Montreal Global Biodiversity Framework, and the gaps that remain on other targets."
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
          thumb: "images/thumbs/layouts/Portfolio_-01.jpg",
          width: 1500, height: 1200,
          title: "La Ola magazine: fisheries issue",
          client: "Publication design",
          alt: "An open magazine showing articles about fisheries and underwater exploration, with the cover page titled \"LA OLA\" featuring an underwater photo of a fishing scene and a fish."
        },
        {
          src: "images/portfolio/layouts/Portfolio_-02.jpg",
          thumb: "images/thumbs/layouts/Portfolio_-02.jpg",
          width: 1500, height: 1200,
          title: "La Ola magazine: the northern coast of Honduras",
          client: "Publication design",
          alt: "An open magazine , with a person in a white coat and wide-brimmed hat on the cover, another page featuring a colorful topographic map of the northern coast of Honduras. "
        },
        {
          src: "images/portfolio/layouts/Portfolio_-08.jpg",
          thumb: "images/thumbs/layouts/Portfolio_-08.jpg",
          width: 1500, height: 1200,
          title: "Handbook for Authors",
          client: "IPCC",
          alt: "A handbook titled 'Handbook for Authors' has a graphic of a hand holding a leaf with a circular patterned background, and features the logos of IPCC and the Intergovernmental Panel on Climate Change."
        },
        {
          src: "images/portfolio/layouts/Portfolio_-07.jpg",
          thumb: "images/thumbs/layouts/Portfolio_-07.jpg",
          width: 1500, height: 1200,
          title: "Guía metodológica: zonas de recuperación pesquera",
          client: "Publication design",
          alt: "Brochure titled 'Guia Metodologica para evaluar el desarrollo de las zonas de recuperación pesquera en ecosistemas marinos del Caribe Hondureño'."
        },
        {
          src: "images/portfolio/layouts/Portfolio_-14.jpg",
          thumb: "images/thumbs/layouts/Portfolio_-14.jpg",
          width: 1500, height: 1200,
          title: "How to Adapt to a Changing Climate: Summary for All",
          client: "IPCC",
          alt: "Three pink booklets titled \"How to Adapt to a Changing Climate: Summary for All\" with icons related to climate change on the cover."
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
          thumb: "images/thumbs/peer-reviewed/1733307062760.jpg",
          width: 1500, height: 1501,
          title: "Progress and gaps in climate change adaptation in coastal cities",
          client: "Nature Cities",
          paper: { url: "https://doi.org/10.1038/s44284-024-00106-9", year: "2024" },
          alt: "Open magazine or journal page titled \"Progress and gaps in climate change adaptation in coastal cities across the globe\" with charts and graphs about climate risks and vulnerabilities."
        },
        {
          src: "images/portfolio/peer-reviewed/1733306697481.jpeg",
          thumb: "images/thumbs/peer-reviewed/1733306697481.jpg",
          width: 1500, height: 1501,
          title: "The tragedy of climate change science",
          client: "Climate and Development",
          paper: { url: "https://doi.org/10.1080/17565529.2021.2008855", year: "2022" },
          alt: "Page from academic journal titled 'The tragedy of climate change science' with a graph showing responses by science to climate change since 1970, and indicators of adverse change."
        },
        {
          src: "images/portfolio/peer-reviewed/1733307273965.jpeg",
          thumb: "images/thumbs/peer-reviewed/1733307273965.jpg",
          width: 1500, height: 1501,
          title: "A global assessment of actors and their roles in climate change adaptation",
          client: "Nature Climate Change",
          paper: { url: "https://doi.org/10.1038/s41558-023-01824-z", year: "2023" },
          alt: "Open publication of a scientific article titled 'A global assessment of actors and their roles in climate change adaptation' with colorful pie charts and data visualizations on climate adaptation by region and actor type."
        },
        {
          src: "images/portfolio/peer-reviewed/1733396318491.jpeg",
          thumb: "images/thumbs/peer-reviewed/1733396318491.jpg",
          width: 1500, height: 1501,
          title: "Towards an IPCC Atlas for comprehensive climate change risk assessments",
          client: "npj Climate Action",
          paper: { url: "https://doi.org/10.1038/s44168-024-00193-3", year: "2024" },
          alt: "Scientific article titled 'Towards an IPCC Atlas for comprehensive climate change risk assessments' with maps and diagrams about climate risk, exposure, and response, and authors listed below the title."
        },
        {
          src: "images/portfolio/peer-reviewed/_linkedin-09.jpg",
          thumb: "images/thumbs/peer-reviewed/_linkedin-09.jpg",
          width: 1500, height: 1500,
          title: "Climate change on television reaches the engaged but misses distant audiences",
          client: "Nature Climate Change",
          paper: { url: "https://doi.org/10.1038/s41558-026-02575-3", year: "2026" },
          alt: "Nature Climate Change article 'Climate change on television reaches the engaged but misses distant audiences', open to its charts of climate coverage across German television programme categories and of how the topic ranked on the news agenda from September to November 2022."
        }
      ]
    },
    {
      id: "ipcc",
      title: "IPCC report figures",
      blurb: "Figures for IPCC assessment reports.",
      items: [
        {
          src: "images/portfolio/ipcc/IPCC_AR6_WGII_BurningEmbers.jpg",
          thumb: "images/thumbs/ipcc/IPCC_AR6_WGII_BurningEmbers.jpg",
          width: 1500, height: 1500,
          title: "Global and regional risks for increasing levels of global warming",
          client: "IPCC AR6 WGII",
          year: "2022",
          alt: "Printed page from the Summary for Policymakers of the IPCC Working Group II report, Climate Change 2022, showing the figure 'Global and regional risks for increasing levels of global warming': projected warming to 2100 under five emissions scenarios beside burning-ember bars of rising risk for the Reasons for Concern, ecosystems and health."
        },
        {
          src: "images/portfolio/ipcc/IPCC_SROCC_ExtremeSeaLevelEvents.jpg",
          thumb: "images/thumbs/ipcc/IPCC_SROCC_ExtremeSeaLevelEvents.jpg",
          width: 1500, height: 1500,
          title: "Extreme sea level events",
          client: "IPCC SROCC",
          year: "2019",
          alt: "Printed page from the Summary for Policymakers of the IPCC Special Report on the Ocean and Cryosphere, showing Figure SPM.4, 'Extreme sea level events': a schematic of how sea level rise turns once-a-century extreme sea levels into yearly events, and world maps of when this happens at coastal locations under RCP8.5 and RCP2.6."
        }
      ]
    }
  ]
};
