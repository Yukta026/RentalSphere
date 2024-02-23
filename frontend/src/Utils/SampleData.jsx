export const openServiceRequestsData = [
  {
    id: 1,
    serviceTitle: "Plumbing Issue",
    tenant: {
      name: "John Doe",
      unit: "Unit 101",
    },
    serviceDescription: "There is a leak under the kitchen sink.",
    date: "2024-02-21",
  },
  {
    id: 2,
    serviceTitle: "Electrical Problem",
    tenant: {
      name: "Jane Smith",
      unit: "Unit 202",
    },
    serviceDescription: "The lights in the living room are flickering.",
    date: "2024-02-20",
  },
  {
    id: 3,
    serviceTitle: "Broken Window",
    tenant: {
      name: "Michael Johnson",
      unit: "Unit 303",
    },
    serviceDescription: "One of the windows in the bedroom is cracked.",
    date: "2024-02-19",
  },
  {
    id: 4,
    serviceTitle: "Appliance Repair",
    tenant: {
      name: "Emily Wilson",
      unit: "Unit 404",
    },
    serviceDescription: "The microwave in the kitchen is not working.",
    date: "2024-02-18",
  },
  {
    id: 5,
    serviceTitle: "HVAC Maintenance",
    tenant: {
      name: "Sarah Brown",
      unit: "Unit 505",
    },
    serviceDescription: "The heating system in the apartment needs servicing.",
    date: "2024-02-17",
  },
];

export const outstandingBalancesData = [
  { name: "Samuel Llyod", unit: "Unit 810", balance: 2540 },
  { name: "George Harrison", unit: "Unit 920", balance: 1400 },
  { name: "Emily Johnson", unit: "Unit 725", balance: 1850 },
  { name: "Michael Smith", unit: "Unit 615", balance: 3200 },
  { name: "Emma Davis", unit: "Unit 532", balance: 950 },
  // Add more data as needed
];

export const sidebarMenuItems = [
  { name: "Dashboard", path: "overview" },
  { name: "Rent Management", path: "rentmanagement" },
  { name: "Lease Management", path: "leasemanagement" },
  { name: "Violation Log", path: "violationlog" },
  { name: "Service Requests", path: "servicerequests" },
  { name: "Announcements", path: "announcements" },
];
