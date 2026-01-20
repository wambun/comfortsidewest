export interface TeamMember {
  name: string;
  title: string;
  credentials?: string;
  image: string;
  bio: string;
  linkedin?: string;
}

export interface BoardMember {
  name: string;
  title: string;
  company?: string;
}

export const leadershipTeam: TeamMember[] = [
  {
    name: 'Michael A. Viola',
    title: 'Chief Executive Officer',
    image: '/static/images/team/michael-viola.jpg',
    bio: 'After more than 25 years in the Professional Employer Organization (PEO) space, Michael co-founded Oasis Outsourcing and grew it into the largest privately held PEO in the United States. His vision and leadership continue to drive Congruity HR forward.',
  },
  {
    name: 'Bobby Higgins',
    title: 'Chief Operating Officer / General Counsel',
    image: '/static/images/team/bobby-higgins.jpg',
    bio: 'A career attorney, investor, and board member with experience at prestigious firms including Sidley Austin, Goldman Sachs, and Bain Capital. Bobby brings a unique blend of legal expertise and business acumen to Congruity HR.',
  },
  {
    name: 'Ellen Presman',
    title: 'Senior Vice President of Benefit Operations & Brokerage Services',
    image: '/static/images/team/ellen-presman.png',
    bio: 'With more than a decade of industry expertise in benefits operations, Ellen previously held leadership roles at Tandem HR and Vensure, bringing deep knowledge of employee benefits administration.',
  },
  {
    name: 'Pamela Keller',
    title: 'Senior Vice President of Payroll Operations',
    credentials: 'CPP, PHR, SHRM-CP',
    image: '/static/images/team/pamela-keller.jpg',
    bio: 'Over a decade of experience in PEO services and payroll platforms. Pamela ensures smooth payroll operations and compliance for all Congruity HR clients.',
  },
  {
    name: 'Michael Bowman',
    title: 'Senior Vice President of Risk Management Services',
    credentials: 'CIC, CBIA',
    image: '/static/images/team/michael-bowman.jpg',
    bio: 'An expert in risk management and insurance, Michael helps clients navigate complex workers\' compensation and liability challenges with confidence.',
  },
  {
    name: 'Kathy Lively',
    title: 'Senior Vice President of Compliance',
    image: '/static/images/team/kathy-lively.jpg',
    bio: 'Decades of senior regulatory compliance expertise in PEO and compliance risk management. Kathy ensures Congruity HR and its clients stay ahead of changing regulations.',
  },
  {
    name: 'Danita Torres',
    title: 'Executive Vice President of Operations and Client Services',
    image: '/static/images/team/danita-torres.jpg',
    bio: 'More than two decades of implementation and benefits consulting experience in PEO environments. Danita leads our client services team with a focus on exceptional service delivery.',
  },
  {
    name: 'Courtney Edlund',
    title: 'Vice President of Revenue Operations & Client Communications',
    image: '/static/images/team/courtney-edlund.jpg',
    bio: 'A decade of revenue operations experience in PEO and sales sectors. Courtney drives growth initiatives and ensures clear communication with all stakeholders.',
  },
  {
    name: 'Wade Krett',
    title: 'Vice President of Finance',
    image: '/static/images/team/wade-krett.jpg',
    bio: 'More than 25 years of experience in accounting, finance, and treasury roles. Wade oversees financial operations and strategic planning at Congruity HR.',
  },
  {
    name: 'Paul Forlenza',
    title: 'Vice President of Retirement Plan Services',
    image: '/static/images/team/paul-forlenza.jpg',
    bio: 'Over 30 years of retirement plan experience with deep expertise in Multiple Employer Plans. Paul helps clients build comprehensive retirement benefits for their employees.',
  },
  {
    name: 'Hugo De La Cuesta',
    title: 'Vice President of Benefits Underwriting',
    image: '/static/images/team/hugo-de-la-cuesta.jpg',
    bio: 'Over 25 years of experience with 18 years specializing in PEO underwriting. Hugo\'s expertise ensures competitive and comprehensive benefits packages.',
  },
  {
    name: 'Nick Genova',
    title: 'Vice President of Benefit Operations',
    image: '/static/images/team/nick-genova.jpg',
    bio: 'Over a decade of experience in HR and benefits administration. Nick ensures seamless benefits operations and exceptional service for all clients.',
  },
];

export const boardMembers: BoardMember[] = [
  {
    name: 'Paul Schilpp',
    title: 'Managing Partner',
    company: 'RFE Investment Partners',
  },
  {
    name: 'Michael Rubel',
    title: 'Managing Partner',
    company: 'RFE Investment Partners',
  },
  {
    name: 'Bill Bronander',
    title: 'Principal',
    company: 'RFE Investment Partners',
  },
  {
    name: 'David Storch',
    title: 'Former Chairman and CEO',
    company: 'AAR Corp',
  },
  {
    name: 'Laurie Zaucha',
    title: 'Former Chief Human Resources Officer',
    company: 'Paychex',
  },
  {
    name: 'Leah Machado',
    title: 'Former National Senior Director Human Resources Services',
    company: 'Paychex',
  },
  {
    name: 'Vinay Bachireddy',
    title: 'Partner',
    company: 'Weave Growth',
  },
];
