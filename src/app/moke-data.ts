export const BUS_ROUTES = [
  {
    id: 1,
    route: 'Route 1',
    stops: ['Stop A', 'Stop B', 'Stop C']
  },
  {
    id: 2,
    route: 'Route 2',
    stops: ['Stop D', 'Stop E', 'Stop F']
  },
  // Add more mock routes here
];

export const BUS_SCHEDULES = [
  {
    id: 1,
    route: 'Route 1',
    departure: '2024-08-08T08:00:00',
    arrival: '2024-08-08T12:00:00',
    busNumber: 'A123',
    stops: BUS_ROUTES.find(route => route.route === 'Route 1')?.stops
  },
  {
    id: 2,
    route: 'Route 2',
    departure: '2024-08-08T09:00:00',
    arrival: '2024-08-08T13:00:00',
    busNumber: 'B456',
    stops: BUS_ROUTES.find(route => route.route === 'Route 2')?.stops
  },
  // Add more mock schedules here
];
