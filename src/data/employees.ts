export interface Employee {
  id: string;
  employeeId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  jobTitle: string;
  department: string;
  division: string;
  location: string;
  manager: string | null;
  managerId: string | null;
  hireDate: string;
  terminationDate: string | null;
  status: 'active' | 'inactive' | 'pending' | 'terminated';
  employmentType: 'full-time' | 'part-time' | 'contractor' | 'intern';
  compensation: {
    baseSalary: number;
    currency: string;
    payGrade: string;
    bonus: number;
    lastReviewDate: string;
    nextReviewDate: string;
  };
  personalInfo: {
    dateOfBirth: string;
    gender: string;
    nationality: string;
    address: string;
    city: string;
    country: string;
    emergencyContact: string;
    emergencyPhone: string;
  };
  avatar?: string;
}

export const employees: Employee[] = [
  {
    id: "emp-001",
    employeeId: "EMP-2024-001",
    firstName: "Sarah",
    lastName: "Chen",
    email: "sarah.chen@company.com",
    phone: "+1 (555) 123-4567",
    jobTitle: "Chief Technology Officer",
    department: "Technology",
    division: "Executive",
    location: "San Francisco, CA",
    manager: null,
    managerId: null,
    hireDate: "2019-03-15",
    terminationDate: null,
    status: "active",
    employmentType: "full-time",
    compensation: {
      baseSalary: 285000,
      currency: "USD",
      payGrade: "E1",
      bonus: 75000,
      lastReviewDate: "2024-01-15",
      nextReviewDate: "2025-01-15"
    },
    personalInfo: {
      dateOfBirth: "1982-07-22",
      gender: "Female",
      nationality: "American",
      address: "456 Tech Drive",
      city: "San Francisco",
      country: "USA",
      emergencyContact: "Michael Chen",
      emergencyPhone: "+1 (555) 987-6543"
    }
  },
  {
    id: "emp-002",
    employeeId: "EMP-2024-002",
    firstName: "Marcus",
    lastName: "Johnson",
    email: "marcus.johnson@company.com",
    phone: "+1 (555) 234-5678",
    jobTitle: "VP of Engineering",
    department: "Technology",
    division: "Engineering",
    location: "San Francisco, CA",
    manager: "Sarah Chen",
    managerId: "emp-001",
    hireDate: "2020-06-01",
    terminationDate: null,
    status: "active",
    employmentType: "full-time",
    compensation: {
      baseSalary: 225000,
      currency: "USD",
      payGrade: "D1",
      bonus: 55000,
      lastReviewDate: "2024-02-20",
      nextReviewDate: "2025-02-20"
    },
    personalInfo: {
      dateOfBirth: "1985-11-08",
      gender: "Male",
      nationality: "American",
      address: "789 Innovation Blvd",
      city: "Oakland",
      country: "USA",
      emergencyContact: "Lisa Johnson",
      emergencyPhone: "+1 (555) 876-5432"
    }
  },
  {
    id: "emp-003",
    employeeId: "EMP-2024-003",
    firstName: "Emily",
    lastName: "Rodriguez",
    email: "emily.rodriguez@company.com",
    phone: "+1 (555) 345-6789",
    jobTitle: "Senior Software Engineer",
    department: "Technology",
    division: "Engineering",
    location: "Austin, TX",
    manager: "Marcus Johnson",
    managerId: "emp-002",
    hireDate: "2021-09-15",
    terminationDate: null,
    status: "active",
    employmentType: "full-time",
    compensation: {
      baseSalary: 165000,
      currency: "USD",
      payGrade: "C2",
      bonus: 25000,
      lastReviewDate: "2024-03-10",
      nextReviewDate: "2025-03-10"
    },
    personalInfo: {
      dateOfBirth: "1990-04-15",
      gender: "Female",
      nationality: "American",
      address: "321 Developer Lane",
      city: "Austin",
      country: "USA",
      emergencyContact: "Carlos Rodriguez",
      emergencyPhone: "+1 (555) 765-4321"
    }
  },
  {
    id: "emp-004",
    employeeId: "EMP-2024-004",
    firstName: "David",
    lastName: "Kim",
    email: "david.kim@company.com",
    phone: "+1 (555) 456-7890",
    jobTitle: "Director of Human Resources",
    department: "Human Resources",
    division: "People Operations",
    location: "New York, NY",
    manager: null,
    managerId: null,
    hireDate: "2018-01-10",
    terminationDate: null,
    status: "active",
    employmentType: "full-time",
    compensation: {
      baseSalary: 175000,
      currency: "USD",
      payGrade: "D2",
      bonus: 35000,
      lastReviewDate: "2024-01-05",
      nextReviewDate: "2025-01-05"
    },
    personalInfo: {
      dateOfBirth: "1978-09-30",
      gender: "Male",
      nationality: "American",
      address: "555 HR Plaza",
      city: "New York",
      country: "USA",
      emergencyContact: "Jennifer Kim",
      emergencyPhone: "+1 (555) 654-3210"
    }
  },
  {
    id: "emp-005",
    employeeId: "EMP-2024-005",
    firstName: "Aisha",
    lastName: "Patel",
    email: "aisha.patel@company.com",
    phone: "+1 (555) 567-8901",
    jobTitle: "HR Business Partner",
    department: "Human Resources",
    division: "People Operations",
    location: "New York, NY",
    manager: "David Kim",
    managerId: "emp-004",
    hireDate: "2022-04-20",
    terminationDate: null,
    status: "active",
    employmentType: "full-time",
    compensation: {
      baseSalary: 95000,
      currency: "USD",
      payGrade: "C1",
      bonus: 12000,
      lastReviewDate: "2024-04-15",
      nextReviewDate: "2025-04-15"
    },
    personalInfo: {
      dateOfBirth: "1993-12-05",
      gender: "Female",
      nationality: "American",
      address: "888 Talent Street",
      city: "Brooklyn",
      country: "USA",
      emergencyContact: "Raj Patel",
      emergencyPhone: "+1 (555) 543-2109"
    }
  },
  {
    id: "emp-006",
    employeeId: "EMP-2024-006",
    firstName: "James",
    lastName: "Wilson",
    email: "james.wilson@company.com",
    phone: "+1 (555) 678-9012",
    jobTitle: "Chief Financial Officer",
    department: "Finance",
    division: "Executive",
    location: "Chicago, IL",
    manager: null,
    managerId: null,
    hireDate: "2017-08-01",
    terminationDate: null,
    status: "active",
    employmentType: "full-time",
    compensation: {
      baseSalary: 295000,
      currency: "USD",
      payGrade: "E1",
      bonus: 85000,
      lastReviewDate: "2024-01-20",
      nextReviewDate: "2025-01-20"
    },
    personalInfo: {
      dateOfBirth: "1975-02-14",
      gender: "Male",
      nationality: "American",
      address: "100 Finance Center",
      city: "Chicago",
      country: "USA",
      emergencyContact: "Martha Wilson",
      emergencyPhone: "+1 (555) 432-1098"
    }
  },
  {
    id: "emp-007",
    employeeId: "EMP-2024-007",
    firstName: "Olivia",
    lastName: "Thompson",
    email: "olivia.thompson@company.com",
    phone: "+1 (555) 789-0123",
    jobTitle: "Financial Analyst",
    department: "Finance",
    division: "Financial Planning",
    location: "Chicago, IL",
    manager: "James Wilson",
    managerId: "emp-006",
    hireDate: "2023-02-01",
    terminationDate: null,
    status: "active",
    employmentType: "full-time",
    compensation: {
      baseSalary: 85000,
      currency: "USD",
      payGrade: "B2",
      bonus: 10000,
      lastReviewDate: "2024-02-01",
      nextReviewDate: "2025-02-01"
    },
    personalInfo: {
      dateOfBirth: "1995-06-28",
      gender: "Female",
      nationality: "American",
      address: "222 Numbers Ave",
      city: "Chicago",
      country: "USA",
      emergencyContact: "Robert Thompson",
      emergencyPhone: "+1 (555) 321-0987"
    }
  },
  {
    id: "emp-008",
    employeeId: "EMP-2024-008",
    firstName: "Alex",
    lastName: "Martinez",
    email: "alex.martinez@company.com",
    phone: "+1 (555) 890-1234",
    jobTitle: "Product Designer",
    department: "Product",
    division: "Design",
    location: "Los Angeles, CA",
    manager: "Marcus Johnson",
    managerId: "emp-002",
    hireDate: "2022-08-15",
    terminationDate: null,
    status: "active",
    employmentType: "full-time",
    compensation: {
      baseSalary: 125000,
      currency: "USD",
      payGrade: "C1",
      bonus: 15000,
      lastReviewDate: "2024-08-15",
      nextReviewDate: "2025-08-15"
    },
    personalInfo: {
      dateOfBirth: "1992-03-17",
      gender: "Non-binary",
      nationality: "American",
      address: "444 Creative Blvd",
      city: "Los Angeles",
      country: "USA",
      emergencyContact: "Maria Martinez",
      emergencyPhone: "+1 (555) 210-9876"
    }
  },
  {
    id: "emp-009",
    employeeId: "EMP-2024-009",
    firstName: "Michael",
    lastName: "Brown",
    email: "michael.brown@company.com",
    phone: "+1 (555) 901-2345",
    jobTitle: "Software Engineer",
    department: "Technology",
    division: "Engineering",
    location: "Seattle, WA",
    manager: "Emily Rodriguez",
    managerId: "emp-003",
    hireDate: "2023-06-01",
    terminationDate: null,
    status: "active",
    employmentType: "full-time",
    compensation: {
      baseSalary: 130000,
      currency: "USD",
      payGrade: "C1",
      bonus: 18000,
      lastReviewDate: "2024-06-01",
      nextReviewDate: "2025-06-01"
    },
    personalInfo: {
      dateOfBirth: "1994-10-22",
      gender: "Male",
      nationality: "American",
      address: "777 Code Street",
      city: "Seattle",
      country: "USA",
      emergencyContact: "Susan Brown",
      emergencyPhone: "+1 (555) 109-8765"
    }
  },
  {
    id: "emp-010",
    employeeId: "EMP-2024-010",
    firstName: "Jessica",
    lastName: "Lee",
    email: "jessica.lee@company.com",
    phone: "+1 (555) 012-3456",
    jobTitle: "Marketing Manager",
    department: "Marketing",
    division: "Brand",
    location: "New York, NY",
    manager: null,
    managerId: null,
    hireDate: "2020-11-01",
    terminationDate: null,
    status: "active",
    employmentType: "full-time",
    compensation: {
      baseSalary: 115000,
      currency: "USD",
      payGrade: "C2",
      bonus: 20000,
      lastReviewDate: "2024-11-01",
      nextReviewDate: "2025-11-01"
    },
    personalInfo: {
      dateOfBirth: "1988-05-09",
      gender: "Female",
      nationality: "American",
      address: "999 Brand Way",
      city: "Manhattan",
      country: "USA",
      emergencyContact: "Kevin Lee",
      emergencyPhone: "+1 (555) 098-7654"
    }
  },
  {
    id: "emp-011",
    employeeId: "EMP-2024-011",
    firstName: "Ryan",
    lastName: "Garcia",
    email: "ryan.garcia@company.com",
    phone: "+1 (555) 123-4568",
    jobTitle: "Sales Representative",
    department: "Sales",
    division: "Enterprise",
    location: "Denver, CO",
    manager: null,
    managerId: null,
    hireDate: "2024-01-15",
    terminationDate: null,
    status: "pending",
    employmentType: "full-time",
    compensation: {
      baseSalary: 75000,
      currency: "USD",
      payGrade: "B1",
      bonus: 30000,
      lastReviewDate: "2024-01-15",
      nextReviewDate: "2025-01-15"
    },
    personalInfo: {
      dateOfBirth: "1996-08-20",
      gender: "Male",
      nationality: "American",
      address: "123 Sales Drive",
      city: "Denver",
      country: "USA",
      emergencyContact: "Ana Garcia",
      emergencyPhone: "+1 (555) 987-6544"
    }
  },
  {
    id: "emp-012",
    employeeId: "EMP-2024-012",
    firstName: "Linda",
    lastName: "Wang",
    email: "linda.wang@company.com",
    phone: "+1 (555) 234-5679",
    jobTitle: "Data Scientist",
    department: "Technology",
    division: "Data & Analytics",
    location: "Boston, MA",
    manager: "Sarah Chen",
    managerId: "emp-001",
    hireDate: "2021-03-01",
    terminationDate: null,
    status: "active",
    employmentType: "full-time",
    compensation: {
      baseSalary: 155000,
      currency: "USD",
      payGrade: "C2",
      bonus: 22000,
      lastReviewDate: "2024-03-01",
      nextReviewDate: "2025-03-01"
    },
    personalInfo: {
      dateOfBirth: "1989-01-25",
      gender: "Female",
      nationality: "Chinese",
      address: "456 Analytics Ave",
      city: "Boston",
      country: "USA",
      emergencyContact: "Wei Wang",
      emergencyPhone: "+1 (555) 876-5433"
    }
  },
  {
    id: "emp-013",
    employeeId: "EMP-2023-045",
    firstName: "Thomas",
    lastName: "Anderson",
    email: "thomas.anderson@company.com",
    phone: "+1 (555) 345-6790",
    jobTitle: "DevOps Engineer",
    department: "Technology",
    division: "Infrastructure",
    location: "Portland, OR",
    manager: "Marcus Johnson",
    managerId: "emp-002",
    hireDate: "2019-07-15",
    terminationDate: "2024-06-30",
    status: "terminated",
    employmentType: "full-time",
    compensation: {
      baseSalary: 140000,
      currency: "USD",
      payGrade: "C1",
      bonus: 0,
      lastReviewDate: "2024-01-15",
      nextReviewDate: "2025-01-15"
    },
    personalInfo: {
      dateOfBirth: "1987-11-30",
      gender: "Male",
      nationality: "American",
      address: "789 Server Lane",
      city: "Portland",
      country: "USA",
      emergencyContact: "Trinity Anderson",
      emergencyPhone: "+1 (555) 765-4322"
    }
  },
  {
    id: "emp-014",
    employeeId: "EMP-2024-014",
    firstName: "Sophie",
    lastName: "Dubois",
    email: "sophie.dubois@company.com",
    phone: "+1 (555) 456-7891",
    jobTitle: "UX Researcher",
    department: "Product",
    division: "Design",
    location: "San Francisco, CA",
    manager: "Alex Martinez",
    managerId: "emp-008",
    hireDate: "2023-09-01",
    terminationDate: null,
    status: "active",
    employmentType: "part-time",
    compensation: {
      baseSalary: 55000,
      currency: "USD",
      payGrade: "B2",
      bonus: 5000,
      lastReviewDate: "2024-09-01",
      nextReviewDate: "2025-09-01"
    },
    personalInfo: {
      dateOfBirth: "1997-04-12",
      gender: "Female",
      nationality: "French",
      address: "321 Research Blvd",
      city: "San Francisco",
      country: "USA",
      emergencyContact: "Jean Dubois",
      emergencyPhone: "+33 6 12 34 56 78"
    }
  },
  {
    id: "emp-015",
    employeeId: "EMP-2024-015",
    firstName: "Carlos",
    lastName: "Santos",
    email: "carlos.santos@company.com",
    phone: "+1 (555) 567-8902",
    jobTitle: "IT Support Specialist",
    department: "Technology",
    division: "IT Operations",
    location: "Miami, FL",
    manager: "Marcus Johnson",
    managerId: "emp-002",
    hireDate: "2024-03-01",
    terminationDate: null,
    status: "active",
    employmentType: "contractor",
    compensation: {
      baseSalary: 65000,
      currency: "USD",
      payGrade: "B1",
      bonus: 0,
      lastReviewDate: "2024-03-01",
      nextReviewDate: "2025-03-01"
    },
    personalInfo: {
      dateOfBirth: "1991-07-08",
      gender: "Male",
      nationality: "Brazilian",
      address: "555 Support Street",
      city: "Miami",
      country: "USA",
      emergencyContact: "Maria Santos",
      emergencyPhone: "+1 (555) 654-3211"
    }
  }
];

export const departments = [
  "Technology",
  "Human Resources",
  "Finance",
  "Product",
  "Marketing",
  "Sales"
];

export const locations = [
  "San Francisco, CA",
  "New York, NY",
  "Austin, TX",
  "Chicago, IL",
  "Los Angeles, CA",
  "Seattle, WA",
  "Denver, CO",
  "Boston, MA",
  "Portland, OR",
  "Miami, FL"
];

export const businessRules = [
  {
    id: "br-001",
    name: "Compensation Change Approval",
    description: "Any salary increase above 10% requires VP approval",
    status: "active",
    category: "Compensation"
  },
  {
    id: "br-002",
    name: "Probation Period",
    description: "New hires have a 90-day probation period before benefits eligibility",
    status: "active",
    category: "Onboarding"
  },
  {
    id: "br-003",
    name: "Manager Assignment",
    description: "Every employee must have a designated manager except C-level executives",
    status: "active",
    category: "Organization"
  },
  {
    id: "br-004",
    name: "Termination Notice",
    description: "Voluntary terminations require 2 weeks notice for non-management roles",
    status: "active",
    category: "Offboarding"
  },
  {
    id: "br-005",
    name: "Performance Review Cycle",
    description: "Annual performance reviews must be completed within 30 days of anniversary date",
    status: "active",
    category: "Performance"
  }
];

export const analyticsData = {
  headcount: {
    total: 247,
    active: 232,
    pending: 8,
    terminated: 7
  },
  turnover: {
    rate: 12.4,
    voluntary: 8.2,
    involuntary: 4.2
  },
  diversity: {
    gender: {
      male: 52,
      female: 44,
      other: 4
    },
    departments: {
      Technology: 89,
      Finance: 42,
      "Human Resources": 28,
      Marketing: 35,
      Sales: 38,
      Product: 15
    }
  },
  compensation: {
    averageSalary: 125000,
    medianSalary: 115000,
    totalPayroll: 30875000
  },
  tenure: {
    "0-1 years": 45,
    "1-3 years": 78,
    "3-5 years": 62,
    "5+ years": 62
  }
};
