export const ROUTES = {
  LOGIN: '/login',
  HOME: '/home',
  SIGNUP: '/signup',
} as const;

export type RoutePath = (typeof ROUTES)[keyof typeof ROUTES];
