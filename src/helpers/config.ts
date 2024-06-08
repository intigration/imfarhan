import type { SiteConfig } from '$src/types/Config';

const config: SiteConfig = {
  title: 'Muhammad Farhan',
  description: 'Critical Thinker',
  source: 'https://github.com/intigration/portfolio',
  baseUrl: 'http://localhost:5173',
  initialFeeds: [{ label: 'Notes', url: 'https://www.genislab.com/feed' },    {
    label: 'BlogSpot',
    url: 'https://news.google.com/rss/search?q=ai&hl=en-PK&gl=PK&ceid=PK:en',
  }, {
    label: 'BlogSpot',
    url: 'https://feedfry.com/rss/11ef16e88db2c2e8918b7cd4290feb47',
  }],
  additionalFeeds: [
    // { label: 'Notes', url: 'https://www.genislab.com/feed' },
    // {
    //   label: 'Dev.to',
    //   url: 'https://genislab.com/feeds/atom',
    // },
    {
      label: 'BlogSpot',
      url: 'https://news.google.com/rss/search?q=ai&hl=en-PK&gl=PK&ceid=PK:en',
    },
    // {
    //   label: 'GitHub',
    //   url: 'https://news.google.com/rss/search?q=LLM',
    // },
    // {
    //   label: 'StackOverflow',
    //   url: 'https://raw.githubusercontent.com/intigration/feeds/main/stackoverflow.atom',
    // },
    // // { label: 'Twitter', url: 'https://raw.githubusercontent.com/intigration/feeds/main/twitter.atom' },
    // {
    //   label: 'Reddit',
    //   url: 'https://raw.githubusercontent.com/intigration/feeds/main/reddit.atom',
    // },
    // {
    //   label: 'Docker',
    //   url: 'https://raw.githubusercontent.com/intigration/feeds/main/mastodon.atom',
    // },
    // {
    //   label: 'YouTube',
    //   url: 'https://raw.githubusercontent.com/intigration/feeds/main/youtube.atom',
    // },
  ],

  routeLinks: [
    { label: 'Home', route: '/home', color: 'var(--accent-1, #ff0099)' },
    {
      label: 'AI Accelerated Quality',
      route: '/blog',
      color: 'var(--accent-2, #b45eff)',
      description: 'LinkedIn Newsletter, Skills development tutorials and Technology updates',
    },
    // {
    //   label: 'Technologies',
    //   route: '/technologies',
    //   color: 'var(--accent-2, #b45eff)',
    //   description: 'Technologies and Tooling Chain',
    // },
    {
      label: 'Projects',
      route: '/projects',
      color: 'var(--accent-3, #01c0f0)',
      description: 'Projects and Products work',
    },
    {
      label: 'Contact',
      route: '/contact',
      color: 'var(--accent-1, #ff0099)',
      description: 'Social profile links, and meeting appointment',
    },
    {
      label: 'workspace',
      route: '/workspace',
      color: 'var(--accent-2, #b45eff)',
      description: 'my workspace',
    },
    {
      label: 'Profile',
      route: '/about',
      color: 'var(--accent-4, #1de691)',
      description: 'Bio and professional experience',
    },
  ],
  footerInfo: {
    author: 'Muhammad Farhan',
    authorSite: 'https://github.com/intigration',
    license: 'MIT',
    licenseLink: '',
    copyright: true,
  },
  githubUser: 'intigration',
  docker:'intigration',
  defaultTheme: 'callisto',
  defaultLanguage: 'en',
  colorSchemes: {
    dark: {
      background: '#101010',
      foreground: '#fafafa',
      'dimmed-text': '#808080',
      'card-background': '#1b1b1b',
      'card-border': '1px solid #2a2a2a',
      'code-background': '#333',
      accent: '#01c0f0',
      'accent-1': '#ff0099',
      'accent-2': '#b45eff',
      'accent-3': '#01c0f0',
      'accent-4': '#1de691',
      'home-accent-background': '#2a3367',
      'home-accent-foreground': 'var(--foreground)',
    },
    light: {
      background: '#ededed',
      foreground: '#2a3367',
      'card-background': '#F8F8FF',
      'card-border': '1px solid #0000001a',
      'home-accent-background': '#2a3367',
      'home-accent-foreground': 'var(--foreground)',
    },
    callisto: {
      background: '#0a192f',
      foreground: '#dcdcdc',
      'dimmed-text': '#8892b0',
      'card-background': '#0b1021',
      'card-border': '1px solid #ffffff1a',
      'accent-1': '#00ccb4',
      'accent-2': '#00ccb4',
      'accent-3': '#00ccb4',
      'accent-4': '#00ccb4',
      'voronoi-background': '#0a192f',

      'home-accent-background': '#00ccb4',
      'home-tile-background': '#0B1021',
      'voronoi-lines': '#4ee8d61a',

      'voronoi-c1': '#141B33',
      'voronoi-c2': '#131A31',
      'voronoi-c3': '#12192F',
      'voronoi-c4': '#11182D',
      'voronoi-c5': '#10172B',
      'voronoi-c6': '#0F1629',
      'voronoi-c7': '#0E1527',
      'voronoi-c8': '#0D1425',
      'voronoi-c9': '#0C1323',
      'voronoi-c10': '#0B1221',

      'voronoi-r0': '#141b33',
      'voronoi-r1': '#141b33',
      'voronoi-r2': '#12182e',
      'voronoi-r3': '#101629',
      'voronoi-r4': '#0e1324',
      'voronoi-r5': '#0c101f',
      'voronoi-r6': '#0c101f',
      'voronoi-r7': '#0a0e1a',
      'voronoi-r8': '#0a0e1a',
      'voronoi-r9': '#080b14',
      'voronoi-r10': '#06080f',
    },
  },
  workExperience: [
    {
      company: "GENISLAB TECHNOLOGIES",
      jobTitle: "AI CONSULTANT QA",
      datesWorked: "SEP-2023",
      companyUrl: "https://genislab.com",
      companyLogo: "https://th.bing.com/th/id/OIP.kunYIKMPd1cj8OhLo5enDQAAAA?rs=1&pid=ImgDetMain",
      responsibilities: "Quality targets definition and planning for MVP releases in continuous agile format"
        + '- Performed consultation, coordination and collaboration within QA and customer'
        + ' - Generative AI Copilot / NLP Chabot Autonomous Agents & workflows.'
        + ' - Writing and executing effective test cases and matrices (decision tables).'
        + ' - Data Testing (Analysis)– Testing different features and modules including different types of data. Team and task management to ensure risk-free and client-compliant project delivery.',
      projectType: "Projects",
      projects: [
        {
          name: "Value Stream Management",
          description: "<div>VSM is all about to reflect business value in the deliverable. Value Stream Management (VSM) is a powerful approach to improving application delivery by optimizing the entire software development and delivery process. It focuses on streamlining and visualizing the flow of work from ideation to production, with the ultimate goal of delivering value to customers faster and more efficiently. Here are some ways VSM can help overcome challenges in application delivery:&nbsp; ⬛End-to-End Visibility:&nbsp; ⬛Reducing Waste:&nbsp; ⬛Improved Collaboration:&nbsp; ⬛Prioritization:&nbsp; ⬛Data-Driven Decision Making: ⬛Continuous Improvement:&nbsp; ⬛Risk Reduction:&nbsp; ⬛Enhanced Predictability:&nbsp; ⬛Alignment with Business Goals:&nbsp; ⬛Cultural Shift:&nbsp;&nbsp; To effectively implement VSM, organizations need the right tools, methodologies, and a commitment to continuous improvement. It&%2339;s not a one-time fix but an ongoing journey toward delivering software more efficiently and effectively. By embracing the principles of Value Stream Management, organizations can overcome challenges in application delivery and drive greater value for their customers.</div>"
        },
        {
          name: "LLM application, powered with RAG",
          description: "QA supervisor, a specialist agent for quality assurance opeartions"
        }
      ]
    },
    {
      company: "Digital Industries Factory Automation",
      jobTitle: "PLM AGILE EXPERT (QUALITY)",
      companyUrl: "https://siemens.com",
      companyLogo: "https://th.bing.com/th/id/OIP.TKODKOlhNEcAkyKDgJIS0AAAAA?rs=1&pid=ImgDetMain",
      datesWorked: "SEP-2022",
      responsibilities: "Led the overall QA activities for the AI and ML software product line which involves numerous GA product releases and various services projects. Product technical risk assessments, identification and mitigation. Product requirements analysis and maintain traceability. Collaborated closely with product managers, developers, and stakeholders to align testing efforts with project goals and user expectations. Identified missing scenarios, interoperability and integration cases in product specifications, provided improvements and functional feedback. Created project plans for different product releases, test automation and services projects. Reported daily, weekly, sprint retrospective, bi-monthly progress, defects status, release metrics to management. Provided training and support to team.",
      projectType: "Projects",
      projects: 
      [ 

        {
          name: "Transfer of Technology - JV",
          description: "<div>Cross functional teams collaboration to collectively built &amp; roll-out PLM complaint quality release.</div>"
        },

 
        {
          name: "AIS Continuous Quality Strategy",
          description: "<div>- Orchestrate diverse processes with templatized release pipelines to make releases repeatable and predictable - Track all releases of various levels of automation to reduce errors and accelerate delivery&nbsp; - Assess the risk of failure and alert stakeholders involved to fix potential issues before they get into production</div>"
        }

      ]
    },
    {
      company: "Digital Industries Software (Technology & Innovation)",
      jobTitle: "TEAM LEAD QA",
      datesWorked: "OCT-2017",
      companyUrl: "https://siemens.com",
      companyLogo: "https://th.bing.com/th/id/OIP.TKODKOlhNEcAkyKDgJIS0AAAAA?rs=1&pid=ImgDetMain",
      responsibilities: "Played a key role in executing on the IoT Software Platform test automation strategy, driving quality and testability of built over AWS. Managed resource allocation and developed cost-effective test plans meeting client requirements. Enabled integrated team’s environment and tooling-chain for faster collaboration. Product coverage analysis and test cases review. Test automation frameworks design and implementation. Processes development, implementation and improvements. Managed Jira for sprint monitoring and client interaction. Increased work visibility through interconnected task management workflow. Correspondence on issues with development teams and customers. Established management dashboard and reporting. Tracked and ensured compliance with requirements throughout SDLC, status reporting and ensuring quality release. A fully automated test deployment workflow initiated right from the SlackUI.",
      projectType: "Projects",
      projects: [
        {          name: "Hamlet valves real-time condition & health monitoring",
        description: "<div> The ability to know Valve information, state, condition, and system information, condition.<br> The ability to have the right and sufficient information in order to make predictive maintenance.  The ability to Log the information and upload it to a cloud platform for computing, analytics, statistics, history.<br> As General Rule, Event is Generated at the lowest available layer, Actioned in the lowest available level, and Pushed up to the next upper level.&%23160;<br> Local or System Events are to be Configured by UI similar to node-red<br> All system devices will be remotely F\\w upgradable</div>"
      },
  
      {
        name: "Product security cyber threat & risk assessment - Cybersecurity",
        description: "<div>Cybersecurity sets out mandatory requirements to ensure that products, solutions, and services are adequately protected against Product and Solution Security (PSS) risks and cyber threats. All applicable legal and regulatory requirements must be adhered to and the international standards and respective industry-standard practice shall be observed.&nbsp; The goal is to sells products, solutions and services which meet generally accepted engineering practices for PSS. When developing&nbsp; products and systems, overall development process should comply with the requirements set by IEC62443 4-1.</div>"
      },
      {
        name: "OR2 cloud-device data Simulator",
        description: "<div>IoT device simulator A.K.A Orion Simulator is the tool developed inhouse to simulate remote telemetry &amp; devices data with great flexibility.&nbsp; * Replay existing datasets with modified data (such as updated timestamps, generated ids etc);&nbsp; * Automatic derivation of dataset structure which allows you to customize your dataset without the need to describe its structure from scratch;&nbsp; * Generate datasets of any complexity. Generated data can be described via constructor or JavaScript function. Multiple rules are available in constructor such as &quot;Random integer&quot;, &quot;UUID&quot; and others. JS function&nbsp; gives you maximum flexibility to generate data - it supports popular JS libraries *lodash* and *momentjs*.&nbsp; * Send data to the following targeted platforms with minimum configuration *target systems*&nbsp; - AMQP (credentials and certificates)&nbsp; - Kafka (certificates)&nbsp; - Local object storage (*minio* object storage)&nbsp; - MQTT (access keys, access token, credentials, certificates)&nbsp; - REST (credentials, certificates)&nbsp; - Websocket (credentials, certificates)&nbsp; * Customize frequency with which data will be sent - based on dataset timestamp properties or just constant time interval. The tool also supports relative timestamp properties which depend on other timestamp or date properties. It means that data can be replayed with the same interval between timestamps as in initial dataset.&nbsp; * Continuous Integration- all you need is to download 2 docker files and run 2 commands.</div>"
      },
      {
        name: "AI enabled ML models training platform",
        description: ""
      },
      {
        name: "Predictive analytics for industrial asset through on-premise IoT-gateway (Anamoly detection via acoustic data monitoring.)",
        description: "<div><p>Rapid development and proof of concept for the IIOT Edge application use cases.&%23160;&%23160; Performance dashboard to define, create and monitor Key Performance Indicators&%23160;<br></p></div><div><div style=\"text-align&%2358;center;\"><b>Industrial Automation application Components&%23160; &%23160;<p><b><span style=\"font-weight&%2358;400;text-align&%2358;start;\"> ⬛Key hardware components&%2358;</span></b></p><p><b><span style=\"font-weight&%2358;400;text-align&%2358;start;\">⬛</span></b>&%23160;&%23160;Acoustic Sensors&%23160;&%23160;&%23160;&%23160;<br></p></div><div><ul><li>Accoustic monitoring with specific envelope based vibration data collection sensor network</li><li>Comprehensive performance analytics of multi-site data based on frequency envelopes.</li><li>RTSP with dashboard to monitor real-time data for each sensor&%23160;&%23160;&%23160;</li><li>Data secured with &%23160;&%23160;TSL Encryption</li></ul></div><div>&%23160;</div><div style=\"text-align&%2358;center;\">⬛</div><div style=\"text-align&%2358;left;\"><span style=\"text-align&%2358;left;background-color&%2358;rgb(255, 255, 255);display&%2358;inline !important;\">Key software components&%2358;&%23160;<span>&%23160;</span></span><br></div>&%23160; - core software stack linux based IIoT gateway.&%23160;&%23160;<br>⬛ Edge Software components&%2358;&%23160; &%23160; &%23160; &%23160; &%23160;<br><ul><li>Device Service Layer enhancements to enable missing southbound connectivity&%23160; &%23160; &%23160;&%23160;</li><li>SDK customizations to connect external applications hosted on the cloud&%23160;&%23160;</li></ul>⬛ Application-specific components&%2358; containerized app-runtime&%23160; &%23160; &%23160; &%23160; &%23160; &%23160; &%23160;&%23160;<br><ul><li>&%23160;Deep machine learning model trained with previously analyzed &amp; classified defects&%23160; &%23160; &%23160; &%23160; &%23160; &%23160; &%23160;&%23160;</li><li>&%23160;Intel’s OpenVino toolkit for maximizing video inference performance on the edge gateway&%23160; &%23160; &%23160; &%23160; &%23160; &%23160; &%23160;&%23160;</li><li>&%23160;Automated decision-making in the edge by leveraging data analytics capability on-premise</li></ul></div>"
      },

      {
        name: "M3-Machine Monitoring & Management",
        description: "<div><ul><li>A solution with multiple levels of processing and aggregation&%23160;</li><li>Managed smart sensors e.g. acoustic nodes. (mist-computing)</li><li>Managed smart edge servers (gateways) with custom logic deployed as managed containers post device issuance featuring artificial intelligence algorithms, data aggregation, compression, anonymization, local data bases,... (fog-computing) </li><li>Self hosted multi-tenant UI and machine management persistence (cloud-computing)</li><li>MindSphere tenant for application data, big data algorithm and inter cloud connectivity (Big Data &amp; Data lake</li></ul></div>"
      },
      {
        name: "Simulation Twin Lab",
        description: ""
      },
      ]
    },
    {
      company: "Mentor Graphics Inc (www.mentor.com)",
      jobTitle: "SENIOR TECHNICAL LEAD",
      datesWorked: "APR-2015",
      responsibilities: "Developed test plans and test procedures for testing of all components at module, system and integration levels, performing risk analysis when required. Adherence to existing processes, identifying process gaps and proposing improvements. Assisted project and product teams to increase test effectiveness and coverage, while reducing the cost of test execution. Ensuring requirement compliance in SDLC, identifying specifications gaps, taking follow-up and reviews to ensure timely, quality results. Led the execution of test cases through both automated and manual tests. Collaborating with stakeholders to defining and managing sprints using Jira. Creating and sharing status reports with management. Owned quality reporting, defect diagnostics, and software release sign-off. Conducting user acceptance demos with clients and engaging with remote teams on daily assignments. Provided training and support to team members.",
      projectType: "Projects",
      companyUrl: "https://mentor.com",
      companyLogo: "https://th.bing.com/th/id/OIP.ns4ts3RevoQBPr0_S7ImPgHaCc?rs=1&pid=ImgDetMain",
      projects: [
        {
          name: "CSP - Cloud Services Platform",
          description: "<div>Implementing a reliable and scalable cloud infrastructure is critical to building out your internet of things. The cloud platform provides the foundation to initiate setup and provision your selected datacenters with confidence of high availability for your network of devices. The IoT enablement of services includes file store, device management, configuration utilities and monitoring services so you may centralize operations.&nbsp; Provisioning an embedded device, managing firmware updates, version tracking and monitor of device activity are a subset of core services by the cloud platform. Going beyond the basics, the RESTful architecture facilitates managed API services and IoT applications. The platform flexibility enables easy customizations to tailor your IoT around your equipment and/or business needs</div>"
        }
      ]
    },
    {
      company: "Intech Process Automation (www.intechww.com)",
      jobTitle: "QUALITY ASSURANCE MANAGER",
      companyUrl: "https://intechww.com",
      companyLogo: "https://www.intechww.com/wp-content/uploads/INTECH_Automation_Intelligence_Logo-80pxh.png",
      datesWorked: "JUL-2009",
      responsibilities: "Innovated sellable quality product. Contributed to IntelliMAX's success as a cutting-edge solution and marketable product for industrial applications. Team and Task Management - Developed and implemented strategic plans for risk-free, client-compliant delivery. Facilitated collaboration among development teams, architects, documentation specialists, project managers, commercial teams, and quality assurance groups. Led software testers and field engineers, crafted robust validation strategies, ensuring the reliability of mission-critical industrial systems. Tracked and traced requirements specifications throughout SDLC. Identified and suggested revisions to existing quality standards and processes.",
      projectType: "Projects",
      projects: [
        {
          name: "IoT Device Management",
          description: ""
        },
        {
          name: "IntelliMAX (Industrial Automation & HMI Software)",
          description: "<div>IntelliMAX - An Industrial automation software (Client Server Architecture); it has the following layers to work,&%23160;</div><div><br></div><div> • First layer (Presentation Layer) interact with user and facilitate the user to control and monitor the plant activities. it works with Internet Explorer.</div><div><br></div><div> • Second layer (Business Layer) consist on the business rules, and it serve all the layers in product.</div><div><br></div><div> • Third layer (Data Access Layer) handles the Databases (MySQL) being updated from live environment of plant.</div><div><br></div><div> • Forth layer (Data Access Layer) interact/responsible to handle the communication with other/third party software, it can act as provider and consumer as well; it is based on OPC Specification of HDA, AnE, DA. </div><div><br></div><div>• Fifth layer (Business Layer) secure the production environment and provide the security mechanism, product contains its own layer and model to implement security.</div>"
        }, {
          name: "Plant Information Management System - SCADA Historian",
          description: "<div>A very large and critical nature project to develop an application to acquisite data from multiple DA and A&amp;E sources and concept of SCADA partner allows commenting/annotations on distributed data remotely from the central node with distributed live storage locations, time and Event based scheduling of backups creation, provision of Historical Data Access to other parties,multi-server data aggregation, multiple data compression techniques, archive management, reporting, Different Real – Historical time trend visualization.&nbsp; My role was Technical Manager and responsible for Project (QA Resource, test estimation and Task) Planning, analysis, test designs, manage QA &amp; test architecture, performance tuning and scalability, design and lab tests management.</div>"
        },
        {
          name: "PLC Alarming",
          description: "<div>A complete alarming system which allows user/engineer to directly configure the Alarming module within PLC and enable mapping of PLC registers with HMI tags.&nbsp; Responsibility: Project (QA Resources, Time and Task) Planning, Functional Analysis, Design, test execution of the application with different PLC’s and Remote terminal units.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Role: Technical Manager/System Test engineer.</div>"
        },
        {
          name: "Distributed Intelligence",
          description: "<div>Distributed Intelligence solution caters to manufacturing facilities/plants that have multiple facilities geographically dispersed or assets located at remote sites. It ensures lossless data transfer from all the sites with the capability to synchronize data in case of network failure, also provides integration with business applications such as SAP, MAXIMO etc.&nbsp; Responsibility: Requirement analysis, Test case designing, execution and maintenance.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Role: Team Lead/System Test engineer</div>"
        },
        {
          name: "Plant Assets Ontology ISA95",
          description: "<div>Plant assets &amp; factory process designer &amp; runtime visualization web/thin client. Description: Solution which allows user/engineer to develop the application’s projects based on object oriented model, re-using and referencing of the objects to build fast and managed projects. Responsibility: Requirement analysis, Test case designing, execution and maintenance.</div>"
        },
        {
          name: "OPC server & client compliance DA/HDA/AnE",
          description: "<div>Description:&nbsp; To ensure the full compliance with the OPC standards for Data Access, Historical Data Access and Alarms &amp; Events Servers and clients (www.opc.org).&nbsp;&nbsp; Responsibility: Project (QA Resources, Time and Task) Planning, Functional Analysis, Design, test execution of the application and devices. Interaction with the OPC organization for publishing the results and compliance certification.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Role: Technical Manager/System test engineer.</div>"
        },
        {
          name: "OEE (Overall equipment efficiency)",
          description: "<div>Description: This solution collects all the relevant information via the control systems installed at the site and then provides in depth analysis on OEE calculation and the factors that contribute to OEE.Main components includes a production transaction engine, Databases and reporting and BI analytical tools. Responsibility: Project (QA Resources, Time and Task) Planning, Functional Analysis, Design, test execution of the application and devices&nbsp; Role: Technical Manager/System test engineer.</div>"
        },
        {
          name: "SCADA hot redundant Server & Client Switchover",
          description: "<div>A highly efficient fail-safe system that gets enabled in case of any crashes, network cessations, or hardware failures (at the server end).&nbsp; With seamless user experience, the Redundancy feature allows shifting/re-directing all clients connected with active server to standby server through its switchover mechanism. It also includes complete state synchronization of front end modules and backend/underlying databases.&nbsp; Responsibility: Requirement analysis, Estimations, Test strategy and plan development, execution, UAT, BETA deployments, Tests sets for different data-bases and devices.&nbsp;&nbsp; Role: Technical Manager/System/Field test engineer</div>"
        }
      ]
    },
    {
      company: "Imperious Technologies (www.imperioustech.com)",
      jobTitle: "APPLICATION ENGINEER",
      companyUrl: "https://imperioustech.com",
      companyLogo: "https://th.bing.com/th/id/OIP.9vH5_a0xXspJ80n8ov1W0wAAAA?rs=1&pid=ImgDetMain",
      datesWorked: "SEP-2007",
      responsibilities: "Wrote test scripts to assess software quality, and develops automated test reporting to increase overall product validation process. Implemented health checks for deployed services, also update documentation for this runbook. Simulate tag values, alarm event, and historical data for OPC UA server compliance testing.",
      projectType: "Clients",
      projects: [
        {
          name: "Test Scripts",
          logo: "https://i.ibb.co/WgKKMFQ/Isos.jpg",
          description: ""
        }
      ]
    }
  ],
  projectComplimentaryData: [
    {
      name: 'AdGuardian-Term',
      thumbnail: 'https://i.ibb.co/wgJDXs2/adguardian-banner-2.png',
    },
    {
      name: 'aliciasykes.com',
      thumbnail: 'https://repository-images.githubusercontent.com/165275206/a5fc1f00-f206-11e9-9f21-6e5f696368e7',
    },
    {
      name: 'all-the-countries',
      thumbnail: 'https://repository-images.githubusercontent.com/331389984/ab3f8a8b-a3bc-493c-9f0c-b119ec1575af',
    },
    {
      name: 'anti-theft-charge',
      thumbnail: 'https://i.ibb.co/LZfDXR9/Screenshot-from-2023-10-29-23-51-27.png',
    },
    {
      name: 'awesome-privacy',
      language: 'astro',
      thumbnail: 'https://repository-images.githubusercontent.com/512269935/6b38d78e-6e4d-484e-bbc8-e0dd81c97e0a',
    },
    {
      name: 'brewfile',
      thumbnail: 'https://i.ibb.co/N9c30xT/lissy93-brewfile-banner.png',
    },
    {
      name: 'bug-bounties',
      thumbnail: 'https://raw.githubusercontent.com/Lissy93/bug-bounties/main/web/public/banner.png',
    },
    {
      name: 'cheat-code',
      thumbnail: 'https://i.ibb.co/3BJNCpg/cheatcode.png',
    },
    {
      name: 'cso',
      thumbnail: 'https://github.com/Lissy93/cso/blob/HEAD/public/banner.png?raw=true',
      language: 'Solid',
    },
    {
      name: 'dashy',
      featured: true,
      thumbnail: 'https://repository-images.githubusercontent.com/343078060/82f850a2-b1af-4e9f-9245-c92700d74856',
    },
    {
      name: 'docker-tcpdump',
      thumbnail: 'https://i.ibb.co/RQyX8kL/docker-tcp-dump.png',
    },
    {
      name: 'dotfiles',
      thumbnail: 'https://i.ibb.co/YyrcjsH/Screenshot-from-2023-12-10-18-19-26.png',
    },
    {
      name: 'email-comparison',
      language: 'lit',
      thumbnail: 'https://i.ibb.co/f8ZfxmW/email-comparison-screenshot.png',
    },
    {
      name: 'espanso-config',
      thumbnail: 'https://repository-images.githubusercontent.com/362820466/b1ef9380-a909-11eb-9d34-2aaf94ed5d95',
    },
    {
      name: 'git-into-open-source',
      thumbnail: 'https://i.ibb.co/Jm8gpBN/git-into-opensource-banner.png',
    },
    {
      name: 'happy-app',
      thumbnail: 'https://repository-images.githubusercontent.com/94193652/5880b180-f208-11e9-9ab5-9f4b86f46017',
    },
    {
      name: 'hasami-shogi',
      thumbnail: 'https://i.ibb.co/vvpw9Yg/upscaled-hasami.jpg',
    },
    {
      name: 'lissy93',
      language: 'markdown',
      thumbnail: 'https://i.ibb.co/TkqZmZ9/Screenshot-from-2023-10-29-23-48-30.png',
    },
    {
      name: 'minesweper',
      thumbnail: 'https://repository-images.githubusercontent.com/19034001/6fff26ca-21ea-4381-bf66-8ceb67bd047a',
    },
    {
      name: 'minimal-terminal-prompt',
      thumbnail: 'https://i.ibb.co/hMMPqPr/minimal-terminal-prompt.png',
    },
    {
      name: 'my-website',
      thumbnail: 'https://i.ibb.co/ZhMTxmR/my-website-banner-image.png',
    },
    {
      name: 'OLD_AdGuardian-Term',
      thumbnail: 'https://i.ibb.co/BykbdjF/Screenshot-from-2023-06-03-22-57-07.png',
    },
    {
      name: 'personal-security-checklist',
      language: 'qwik',
      thumbnail: 'https://i.ibb.co/mTvmYGJ/personal-security-checklist.png',
    },
    {
      name: 'portainer-templates',
      thumbnail: 'https://i.ibb.co/J2g5Czy/portainer-templates-banner.png',
    },
    {
      name: 'revision-quizzes',
      thumbnail: 'https://i.ibb.co/JvCGbYf/revision-quizzes-screenshot.png',
    },
    {
      name: 'sentiment-analysis',
      thumbnail: 'https://i.ibb.co/ysLpBCn/sentiment-analysis-png.png',
    },
    {
      name: 'twitter-sentiment-visualisation',
      thumbnail: 'https://i.ibb.co/W0f10Vv/sentiment-sweep-grid.png',
    },
    {
      name: 'usermonkey',
      thumbnail: 'https://i.ibb.co/hLj9HfR/user-monkey.png',
    },
    {
      name: 'web-check',
      language: 'react',
      thumbnail: 'https://i.ibb.co/mSz2H3n/web-check-banner.png',
    },
    {
      name: 'who-dat',
      thumbnail: 'https://github.com/Lissy93/who-dat/blob/main/public/who-dat.png?raw=true',
    },
  ],
  postComplimentaryData: [
    {
      postRef: '50 ways to bring in extra cash as a developer',
      thumbnail: 'https://i.ibb.co/DDQBHvL/developer-side-hustles.png',
    },
    {
      postRef: 'CLI tools you cant live without',
      thumbnail: 'https://i.ibb.co/F4THZ2T/cli-tools-banner.png',
    },
    {
      postRef: '20 git commands',
      thumbnail: 'https://i.ibb.co/yqtrTTS/git-commands-banner.png',
    },
    {
      postRef: 'useful css resources',
      thumbnail: 'https://i.ibb.co/CMxy3tz/css-resources-2.png',
    },
    {
      postRef: 'my top 50 windows apps',
      thumbnail: 'https://i.ibb.co/nmPRGgp/open-source-windows-apps.png',
    },
    {
      postRef: 'my top 50 android apps',
      thumbnail: 'https://i.ibb.co/cc8WP4K/App-icons-banner-medium.png',
    },
    {
      postRef: 'pimping up your duckduckgo',
      thumbnail: 'https://i.ibb.co/6XYydtq/Duck-Duck-Go-Themes.png',
    },
    {
      postRef: 'custom styling for listed',
      thumbnail: 'https://i.ibb.co/dMh1y13/listed-dark.png',
    },
    {
      postRef: 'fun with realtime data',
      thumbnail: 'https://i.ibb.co/HqJ77Mf/Fun-with-live-data-banner.png',
    },
    {
      postRef: 'fave youtube chanels',
      thumbnail: 'https://i.ibb.co/185MLZq/youtube-channels-banner.png',
    },
    {
      postRef: 'top 25 raspberry pi projects',
      thumbnail: 'https://i.ibb.co/LP1wZtc/Top-Raspberry-Pi-Projects.png',
    },
    {
      postRef: 'using espanso to boost efficiency',
      thumbnail: 'https://i.ibb.co/6W1Bqyz/espanso-config-banner.png',
    },
    {
      postRef: 'hello world',
      thumbnail: 'https://i.ibb.co/0rfWV1f/DSCN0566-1.jpg',
    },
    {
      postRef: 'dashy a selfhosted homelab dashboard',
      thumbnail: 'https://i.ibb.co/c6kTRch/dashy-theme.png',
    },
    { postRef: '', thumbnail: '' },
  ],
  contact: {
    name: 'Muhammad Farhan',
    email: 'engr-farhan@icloud.com',
    website: 'https://eng-farhan.netlify.app',
    socials: {
      Twitter: 'f3rhan1',
      GitHub: 'intigration',
      Docker: 'intigration',
      // Mastodon: '@Lissy93',
      LinkedIn: 'in/engr-farhan'
      // Instagram: 'liss.sykes',
      // YouTube: 'AliciaSykes',
      // Reddit: 'lissy93',
      // StackOverflow: '979052/alicia',
      // KeyBase: 'AliciaSykes',
      // Facebook: 'Liss.Sykes',
      // PeerList: 'alicia',
      // CodersRank: 'lissy93',
      // 'OMG.lol': 'alicia',
    },
    socialButtonLimit: 6,
    mailerConfig: {
      service_id: 'gmail',
      template_id: 'website-contact-form',
      user_id: 'user_K6F041q1dQvz8SJLSOZCR',
      template_params: {},
    },
    pgpKeyLink: 'https://keybase.io/aliciasykes/pgp_keys.asc?fingerprint=0688f8d34587d954e9e51fb8fedb68f55c0283a7',
    pgpPublicKey: `-----BEGIN PGP PUBLIC KEY BLOCK-----
      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
      mFFVmpQe2X/qgZBVVYC+LjpxNEMt6w==
      =dpLK
      -----END PGP PUBLIC KEY BLOCK-----
`,
  },
  workspace: {
    intro: 'Scaling AI by taking human in loop...',
    bio: [
      "I'm Farhan, a seasoned software engineering consultant and certified <a href'https://istqb.org/'>ISTQB</a> tester having working knowledge of all phases of SDLC stage.",

      `I have strong work credentials and successful track
      record to develop commerical products. `, `I combine vision with operational, domain & technical expertise to bring next-generation
      technologies to market in record time. 
      <br /  
       `,

      `      In spare time, I would like to go on long drive with family or friends.
      `,
    ],
    picture: 'https://avatars.githubusercontent.com/u/25178774?v=4',
  },
  about: {
    intro: 'Scaling AI by taking human in loop...',
    bio: [
      "I'm Farhan, an experienced software developer and certified <a href'https://istqb.org/'>ISTQB</a> tester having working knowledge of all phases of SDLC stage.",

      `▶ As a seasoned Full Stack Development Engineer with over 10 years of practical development experience, with strong analytical skills and expertise in broad range of technologies.
<br /><br />▶ Demonstrated ability to create innovative AI solutions for diverse applications such as natural language processing, computer vision, and autonomous systems.
<br /><br />▶ Having hands on product development experience in IoT domain, specifically covered back-end development using Java, Python and related open source technologies.<br /><br />▶  Experience in Agile software development using SCRUM.
<br /><br />▶ Expertise in Python, JavaScript, TypeScript, ReactJS, VueJS, Selenium, Postman, Playwright, Electron, Angular, Spring, ReadyAPI, Hibernate, MongoDB, MySQL and Cassandra.
<br /><br />▶ Proficient in design and development of software applications especially in software as a service (SaaS) layer and micro-services.
<br /><br />▶ Exposed to designing system level database, restful services.
<br /><br />▶ Having hands on experience in build automation using Jenkins, Gitlab CI, Circle CI
<br /><br />Throughout my career, I have successfully led and contributed to numerous projects, from inception through deployment, consistently ensuring optimal performance, security, and user experience. My proficiency in agile methodologies and collaborative environments enables me to work effectively within diverse teams, driving innovation and continuous improvement.
<br />
<br />
"Self-reflection is key to purposeful testing."
<br />
      <br />  
       `,

      `      In spare time, I would like to go on long drive with family or friends.
      `,
    ],
    picture: 'https://avatars.githubusercontent.com/u/25178774?v=4',
  },
  techStack: {
    backend: [
      {
        language: 'Rust',
        projects: [''],
      },
      {
        language: 'Go',
        projects: ['', '', ''],
      },
      {
        language: 'Node',
        projects: [''],
      },
      {
        language: 'Python',
        projects: ['', '', '', ''],
      },
      {
        language: 'Java',
        projects: ['', '', '', ''],
      },
      {
        language: 'PHP',
        projects: [''],
      },
    ],
    frontend: [
      {
        language: 'Vue',
        projects: [''],
      },
      {
        language: 'Svelte',
        projects: [''],
      },
      {
        language: 'React',
        projects: [''],
      },
      {
        language: 'Solid',
        projects: [''],
      },
      {
        language: 'Angular',
        projects: ['', ''],
      },
      {
        language: 'Astro',
        projects: [''],
      },
      {
        language: 'D3',
        projects: [''],
      },
      {
        language: 'Alpine',
        projects: [''],
      },
      {
        language: 'CoffeeScript',
        projects: [''],
      },
      {
        language: 'HTML',
        projects: [''],
      },
    ],
    mobile: [
      {
        language: 'Swift',
        projects: ['hasami-shogi', 'Spotter'],
      },
      {
        language: 'Kotlin',
        projects: ['anti-theft-charge'],
      },
      {
        language: 'Flutter',
        projects: ['nfu'],
      },
      {
        language: 'Android',
        projects: ['Minesweper', 'anti-theft-charge', 'TuneSender', 'TreasureHunt', 'got-home-safe', 'Study-Time'],
      },
      // {
      //   language: 'React Native',
      //   projects: [''],
      // },
    ],
    other: [
      {
        language: 'Bash',
        projects: [''],
      },
      {
        language: 'Docker',
        projects: [''],
      },
      {
        language: 'Config',
        projects: [''],
      },
      {
        language: 'Markdown',
        projects: ['personal-security-checklist', 'awesome-privacy'],
      },
    ],
  },
  techStackExtras: {
    devOps: [
      'Ansible', 'Kubernetes', 'Prometheus', 'GitHubActions', 'Grafana'
    ],
    emulation: [
      'qemu', 'virtualbox'
    ],
    cloud: [
      'Netlify', 'Vercel', 'Cloudflare', 'Azure', 'AWS', 'GCP',
    ],
    databases: [
      'PostgreSQL', 'SQLite', 'Redis', 'MySQL', 'MongoDB',
    ],
    testing: [
      'Jest', 'Puppeteer', 'Enzyme', 'Cypress', 'ReadyAPI', 'Postman',
    ],
    security: [
      'Nmap', 'OWASPZAP', 'BurpSuite', 'Wireshark',
    ],
  },
  // plausible: {
  //   scriptSrc: 'https://no-track.as93.net/js/script.js',
  //   domain: 'aliciasykes.com',
  // },
};

export default config;
