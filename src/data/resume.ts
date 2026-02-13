export const personal = {
  name: "Benjamin Fink",
  title: "Risk Analytics & Technology",
  linkedin: "https://linkedin.com/in/bfink91",
  github: "https://github.com/bfozone",
};

export const about = [
  `I work in risk.`,
  `Started in credit methodology for private banking. Moved into market risk and quantitative analytics. Then investment risk for asset management. Eventually stopped separating models from systems.`,
  `The unquantified risk was never in the portfolios. It's around them.`,
  `French. English. German.\nCQF in progress. Rust on the side.`,
  `Off the clock, same energy. Split keyboards, terminal configs, and hardware that demand constant appeasement.`,
];

export const skills: Record<string, string> = {
  Risk: `Measured it, monitored it, built the frameworks around it. Daily identification, escalation, and reporting across funds, insurance portfolios, and mandates. Most of the work is making sure nothing is invisible. The tail risk is always in the process, not the portfolio.`,
  Quantitative: `Pricing, decomposition, simulation, stress testing, backtesting. Time series modeling, attribution, numerical methods. VaR is the output. The interesting part is what goes into it. Everything is normally distributed until it isn't.`,
  Languages: `Several, across different paradigms. The right one depends on the problem. The wrong one teaches you something anyway. Neovim doesn't configure itself though.`,
  "Frameworks & Libraries": `Web frameworks for dashboards and APIs. Orchestration tools for pipelines. Visualization libraries for the charts nobody reads until something breaks. The frameworks change every few years. The problems they solve don't. The litany of deployment stays the same.`,
  "Data Infrastructure": `Relational databases at the core. Analytical query engines and columnar storage for the heavy lifting. Object storage when files need a home. ETL pipelines connecting everything that wasn't designed to talk to each other. Most of data engineering is convincing systems to cooperate.`,
  Platforms: `Portfolio management systems, risk analytics engines, ESG data providers. The vendor ecosystem that every risk function depends on and nobody fully trusts. The real skill is knowing what each one actually does well and building around the rest.`,
  DevOps: `Containers, orchestration, CI/CD, cloud, monitoring. The infrastructure that keeps the machine spirits running. Deployment is a ritual. Observability is a prayer.`,
};

export interface Experience {
  title: string;
  company: string;
  location: string;
  department: string;
  period: string;
  highlights: string[];
}

export const experience: Experience[] = [
  {
    title: "Senior Risk Manager, Deputy CRO",
    company: "Baloise Asset Management",
    location: "Basel",
    department: "Risk Management",
    period: "May 2023 - Present",
    highlights: [
      "Initiated and led creation of unified risk infrastructure and comprehensive investment risk framework for traditional assets across funds, insurance funds, and mandates",
      "Developed production-grade risk analytics platform (BAM ONE) transforming manual processes into automated dashboards, integrating data vendors",
      "Implemented KPIs covering risk analytics (market, liquidity, credit, counterparty, and ESG risk)",
      "Performed daily identification, analysis, and escalation of risk issues across all risk factors",
      "Led investment risk dialogues with portfolio managers and established automated reporting workflows to senior management and regulatory authorities",
      "Managed and mentored two junior risk analysts, coordinating work assignments, providing technical guidance, and ensuring quality of risk analysis deliverables",
      "Introduced modern technology stack across business units with full DevOps ownership",
      "Served as Deputy Chief Risk Officer ensuring risk infrastructure alignment with strategic objectives",
    ],
  },
  {
    title: "Investment Risk Specialist",
    company: "UBS Fund Management AG",
    location: "Basel",
    department: "ManCo Products",
    period: "March 2019 - April 2023",
    highlights: [
      "Steered investment risk framework under regulatory requirements for UBS and White Labelling funds",
      "Led software development of proprietary risk analytics and reporting solutions (web applications and tools)",
      "Investigated VaR figures and large overnight changes, conducted stress testing and backtesting, evaluated economic exposures",
      "Monitored fund's asset/liability liquidity risk and credit risks in securities lending and OTC transactions",
      "Performed pre-launch fund risk assessments and escalated exceptions to portfolio managers and relevant governing bodies",
      "Produced periodic investment risk reports for Executive Committee and Board of Directors",
      "Deputized Investment Risk team lead and served as single point of contact for robotics and data science projects",
    ],
  },
  {
    title: "Performance Analyst",
    company: "Bank Julius Baer",
    location: "Zürich",
    department: "Performance Controlling & Risk Analytics",
    period: "January 2018 - February 2019",
    highlights: [
      "Ensured GIPS compliance and handled performance measurement topics from all Bank areas and locations",
      "Monitored and reviewed performance development of client accounts and identified performance outliers",
      "Performed attribution analysis of equity/fixed income/multi-asset portfolios using factor-based risk models and total return attribution",
      "Analyzed performance differences along the investment process through contribution and attribution analysis",
      "Enhanced IT solutions for performance measurement and complex risk-return analysis across the Bank",
    ],
  },
  {
    title: "Quantitative Analyst",
    company: "Bank Julius Baer",
    location: "Zürich",
    department: "Risk Analytics",
    period: "June 2017 - November 2017",
    highlights: [
      "Fundamental Review of the Trading Book (FRTB) implementation - analyzed capital impact and evaluated vendor solutions for exotic derivatives",
      "Led weekly investment controlling for actively managed certificates (AMC), including trader interaction and trade approvals",
      "Participated in value at risk production and daily data checks",
      "Additionally supported IRRBB initiative with deposit volume forecasting model",
    ],
  },
  {
    title: "Risk Supervisor",
    company: "Société Générale Private Banking",
    location: "Monaco",
    department: "Credit Methodology Lombard",
    period: "January 2013 - August 2016",
    highlights: [
      "Designed credit risk framework for securities-backed lending in private banking",
      "Evaluated lending values and margin requirements across equity, fixed income, and structured products",
      "Built monitoring tools automating daily risk reports for front office and regulators",
      "Developed custom controls for collateral coverage and concentration risks",
    ],
  },
];

export interface Project {
  name: string;
  subtitle: string;
  company: string;
  period: string;
  description: string[];
  impact: string;
  techStack?: string[];
}

export interface PersonalProject {
  name: string;
  subtitle: string;
  description: string;
  techStack: string[];
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    name: "BAM ONE",
    subtitle: "Enterprise Risk Analytics Platform",
    company: "Baloise Asset Management",
    period: "2023-Present",
    description: [
      "Initiated and led development from concept to production, creating unified risk infrastructure that transformed manual processes into central analytics hub",
      "Built cloud-native ecosystem: Python/Dash, Mage AI orchestration, MinIO data lake, PostgreSQL, Trino with Iceberg tables, integrated with SimCorp/Bloomberg/MSCI; full DevOps ownership (OpenShift, Jenkins/ArgoCD, Prometheus/Grafana)",
    ],
    impact:
      "FINMA praised as exemplary implementation; enabled shift from monthly to daily risk monitoring across all risk dimensions",
    techStack: [
      "Python",
      "Dash",
      "FastAPI",
      "Mage AI",
      "MinIO",
      "PostgreSQL",
      "Trino",
      "Iceberg",
      "OpenShift",
      "Jenkins",
      "ArgoCD",
    ],
  },
  {
    name: "Risk Cockpit",
    subtitle: "Investment Risk Monitoring Platform",
    company: "UBS Fund Management",
    period: "2019-2023",
    description: [
      "Led development as sole technical owner and lead software developer, modernizing from local R Shiny instances to centralized web application",
      "Built complete data ecosystem: automated pipelines from multiple sources, SQLite backend, threshold monitoring with alerting; extended with Python while maintaining R core",
    ],
    impact:
      "Standardized risk reporting across team, supporting regulatory requirements for UBS and White Labelling funds",
    techStack: ["R", "Shiny", "Python", "SQLite"],
  },
  {
    name: "Structured Products Risk Approximation Model",
    subtitle: "ML-based Regulatory Risk Scoring",
    company: "Bank Julius Baer",
    period: "2018",
    description: [
      "Co-developed ML prototype with external vendor for regulatory risk scoring of third-party structured products lacking pricing models",
      "Implemented k-nearest neighbor algorithm using term sheet characteristics (underlying, maturity, barriers) with automated parsing and vendor API integration",
    ],
    impact:
      "Enabled regulatory compliance for previously unmeasurable products; prototype became foundation for production system",
    techStack: ["Python", "ML/KNN", "API Integration"],
  },
  {
    name: "FRTB Capital Charge Vendor Evaluation",
    subtitle: "Exotic Derivatives Analysis",
    company: "Bank Julius Baer",
    period: "2017",
    description: [
      "Led technical evaluation of MSCI RiskMetrics module for exotic derivatives capital charges under FRTB framework",
      "Decomposed complex products using vendor's scripting language into component risks (FX, options, bonds); validated Monte Carlo valuations against front office models",
    ],
    impact:
      "Delivered buy/no-buy recommendation based on model accuracy, product coverage, and implementation complexity",
    techStack: ["MSCI RiskMetrics", "Monte Carlo", "Derivatives"],
  },
  {
    name: "Deposit Volume Forecasting Model (IRRBB)",
    subtitle: "Time Series Forecasting",
    company: "Bank Julius Baer",
    period: "2017",
    description: [
      "Implemented academic research for Banking Book Risk team to forecast deposit volumes under rate scenarios using R time series models (ARIMA/VAR)",
    ],
    impact: "Model adopted for internal reporting",
    techStack: ["R", "ARIMA", "VAR", "Time Series"],
  },
];

export const personalProjects: PersonalProject[] = [
  {
    name: "SAMRisk",
    subtitle: "Investment Risk & Performance Dashboard",
    description:
      "Mockup dashboard for portfolio analytics, risk monitoring, and performance reporting. Vue 3, ECharts, PrimeVue, with full mock API layer.",
    techStack: ["Vue", "TypeScript", "ECharts", "PrimeVue", "Vite", "Bun"],
    demo: "https://samrisk.cerberusrisk.io/",
  },
  {
    name: "CerberusRisk",
    subtitle: "Portfolio Risk Analytics Platform",
    description:
      "Demo application showcasing institutional-grade risk analytics - VaR, CVaR, Monte Carlo simulations, stress testing, and GIPS-compliant reporting",
    techStack: ["Dash", "FastAPI", "PostgreSQL", "Docker", "Plotly"],
    github: "https://github.com/bfozone/cerberusrisk",
    demo: "https://app.cerberusrisk.io/",
  },
];

export interface Education {
  degree: string;
  field: string;
  school: string;
  location: string;
  period: string;
  thesis?: string;
}

export const education: Education[] = [
  {
    degree: "Master of Science in Finance (MSc)",
    field: "Research Track Quantitative Finance",
    school: "Université Paris-Dauphine, PSL Research University",
    location: "Paris",
    period: "2016 - 2017",
    thesis:
      "Agricultural Derivative Markets Integration: A Graph Theory Analysis",
  },
  {
    degree: "Bachelor of Business Administration (BBA)",
    field: "Banking and Financial Markets",
    school: "EDHEC Business School",
    location: "Nice",
    period: "2009 - 2013",
    thesis: "Credit Risk Calculation and Management",
  },
];

export const additional = {
  languages: [
    { name: "French", level: "Native" },
    { name: "English", level: "Fluent" },
    { name: "German", level: "Fluent" },
  ],
  certifications: [
    {
      name: "Certificate in Quantitative Finance (CQF)",
      status: "In Progress",
      expected: "2026",
      url: "https://www.cqf.com/",
    },
  ],
};
