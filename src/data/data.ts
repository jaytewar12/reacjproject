export type Member = {
  id: number;
  name: string;
  email: string;
  status?: string;
  regularClients?: number;
  trialClients?: number;
  plan?: string;
  expires?: string;
  daysLeft?: string;
  trialStatus?: string;
  trialEnds?: string;
  expiredDate?: string;
  lastPlan?: string;
  reason?: string;
  actions?: string;
};

export const coachesData: Member[] = [
  { id: 1, name: "Emma Wilson", email: "emma.wilson@example.com", status: "Active", regularClients: 18, trialClients: 6 },
  { id: 2, name: "Mike Johnson", email: "mike.johnson@example.com", status: "Active", regularClients: 15, trialClients: 3 },
];

export const preferredCustomersData: Member[] = [
  { 
    id: 1, 
    name: "David Brown", 
    email: "david.brown@email.com", 
    status: "Active", 
    plan: "1 Month", 
    expires: "8/12/2024",
    actions: "Convert to Coach"
  },
];

export const umsConsumersData: Member[] = [
  { id: 4, name: "John Smith", email: "john.smith@example.com", status: "Active", plan: "20 Days", daysLeft: "15 Days",actions: "Convert to PC"},
  { id: 5, name: "Lisa Anderson", email: "lisa.anderson@example.com", status: "Active", plan: "1 Month", daysLeft: "22 Days",actions: "Convert to PC"},
];

export const trialCustomersData: Member[] = [
  { id: 6, name: "Maria Garcia", email: "maria.garcia@example.com", trialStatus: "Active", trialEnds: "24/3/2024", daysLeft: "5 days left",actions: "Convert to UMS" },
  { id: 7, name: "Carol Rodriguez", email: "carol.rodriguez@example.com", trialStatus: "Inactive", trialEnds: "20/3/2024", daysLeft: "0 days left",actions: "Convert to UMS" },
];

export const expiredUsersData: Member[] = [
  { id: 8, name: "Robert Wilson", email: "robert.wilson@example.com", status: "Expired", expiredDate: "28/02/2024", lastPlan: "Premium monthly", reason: "payment failed", actions: "Reactive" },
  { id: 9, name: "Sarah Thompson", email: "sarah.thompson@example.com", status: "Expired", expiredDate: "15/01/2024", lastPlan: "Basic Weekly", reason: "User Cancelled", actions: "Reactive" },
];