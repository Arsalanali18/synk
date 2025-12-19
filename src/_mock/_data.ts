import {
  _id,
  _price,
  _times,
  _company,
  _boolean,
  _fullName,
  _taskNames,
  _postTitles,
  _description,
  _productNames,
} from './_mock';

// ----------------------------------------------------------------------

export const _myAccount = {
  displayName: 'Arsalan Ali Ahmed',
  email: 'arsalanaliahmed17@gmail.com',
  photoURL: '/assets/images/avatar/avatar-26.jpeg',
};

// ----------------------------------------------------------------------


import type { UserProps } from 'src/sections/user/user-table-row'; // import the type

export const _users = [...Array(24)].map((_, index) => ({
  id: _id(index),
  name: _fullName(index),
  company: _company(index),
  isVerified: _boolean(index),
  avatarUrl: `/assets/images/avatar/avatar-${index + 1}.webp`,
  status: index % 4 ? 'active' : 'banned',
  role:
    [
      'Entertainment / Streaming',
      'Entertainment / Streaming',
      'Entertainment / Streaming',
      'Music / Audio',
      'Entertainment / Streaming',
      'Music / Audio',
      'Productivity / Software',
      'Cloud Storage / Productivity',
      'Design / Productivity',
      'Productivity / Organization',
      'Design / Productivity',
      'Communication / Collaboration',
      'Shopping / Delivery',
      'Shopping / Rewards',
      'Food Delivery / Membership',
      'Grocery Delivery',
      'Finance / Digital Wallet',
      'Cloud Storage / Productivity',
      'Security / Password Management',
      'Health / Fitness',
      'Mental Health / Wellness',
      'Health / Fitness Tracking',
      'Gaming / Entertainment',
      'Gaming / Mobile Entertainment',
    ][index] || 'UI Designer',
}));

// Define a type for new subscription to fix TypeScript error
type NewSubscription = {
  name: string;
  company: string;
  role?: string;
};

// Function to dynamically add a new subscription
export const addSubscription = (newSub: NewSubscription) => {
  _users.push({
    id: _id(_users.length),
    name: newSub.name,
    company: newSub.company,
    isVerified: true,
    avatarUrl: `/assets/images/avatar/avatar-${_users.length + 1}.webp`,
    status: 'active',
    role: newSub.role || 'Custom',
  });
};

// ----------------------------------------------------------------------

export const _posts = [...Array(23)].map((_, index) => ({
  id: _id(index),
  title: _postTitles(index),
  description: _description(index),
  coverUrl: `/assets/images/cover/cover-${index + 1}.webp`,
  totalViews: 8829,
  totalComments: 7977,
  totalShares: 8556,
  totalFavorites: 8870,
  postedAt: _times(index),
  author: {
    name: _fullName(index),
    avatarUrl: `/assets/images/avatar/avatar-${index + 1}.webp`,
  },
}));

// ----------------------------------------------------------------------

const COLORS = [
  '#00AB55',
  '#000000',
  '#FFFFFF',
  '#FFC0CB',
  '#FF4842',
  '#1890FF',
  '#94D82D',
  '#FFC107',
];

export const _products = [...Array(24)].map((_, index) => {
  const setIndex = index + 1;

  return {
    id: _id(index),
    price: _price(index),
    name: _productNames(index),
    priceSale: setIndex % 3 ? null : _price(index),
    coverUrl: `/assets/images/product/product-${setIndex}.webp`,
    colors:
      (setIndex === 1 && COLORS.slice(0, 2)) ||
      (setIndex === 2 && COLORS.slice(1, 3)) ||
      (setIndex === 3 && COLORS.slice(2, 4)) ||
      (setIndex === 4 && COLORS.slice(3, 6)) ||
      (setIndex === 23 && COLORS.slice(4, 6)) ||
      (setIndex === 24 && COLORS.slice(5, 6)) ||
      COLORS,
    status:
      ([1, 3, 5].includes(setIndex) && 'sale') || ([4, 8, 12].includes(setIndex) && 'new') || '',
  };
});

// ----------------------------------------------------------------------

export const _langs = [
  {
    value: 'in',
    label: 'Indian',
    icon: '/assets/icons/flags/india.png',
  },
  {
    value: 'en',
    label: 'English',
    icon: '/assets/icons/flags/ic-flag-en.svg',
  },
  {
    value: 'de',
    label: 'German',
    icon: '/assets/icons/flags/ic-flag-de.svg',
  },
];

// ----------------------------------------------------------------------

export const _timeline = [...Array(5)].map((_, index) => ({
  id: _id(index),
  title: [
    '₹649 payment sent to Netflix',
    '12 subscription payments successfully processed',
    'Pending payment reminder sent for Adobe Creative Cloud',
    'New payment method added for Spotify Premium',
    'Automatic payment failed for Canva Pro',
  ][index],
  type: `order${index + 1}`,
  time: _times(index),
}));

export const _traffic = [
  {
    value: 'facebook',
    label: 'Total Income',
    total: 80000,
  },
  {
    value: 'google',
    label: 'Remaining Budget',
    total: 39370,
  },
  {
    value: 'linkedin',
    label: 'Spent This Month',
    total: 40630,
  },
  {
    value: 'twitter',
    label: 'Saved This Month',
    total: 12789,
  },
];

export const _tasks = Array.from({ length: 5 }, (_, index) => ({
  id: _id(index),
  name: _taskNames(index),
}));

// ----------------------------------------------------------------------


export const _notifications = [
  {
    id: '1',
    title: 'Subscription Renewal',
    description: 'Your Netflix subscription was renewed for ₹499.',
    avatarUrl: '/assets/images/avatar/netflix.svg',
    type: 'subscription',
    createdAt: '2025-10-07T09:24:00',
    postedAt: _times(1),
    isUnRead: true,
  },
  {
    id: '2',
    title: 'Weekly Spending Report',
    description: 'Your total spending this week increased by 12%.',
    avatarUrl: '/assets/images/avatar/report.svg',
    type: 'report',
    createdAt: '2025-10-06T16:45:00',
    postedAt: _times(2),
    isUnRead: true,
  },
  {
    id: '3',
    title: 'New Subscription Detected',
    description: 'Spotify Premium detected — ₹129/month added to Subscriptions.',
    avatarUrl: '/assets/images/avatar/spotify.svg',
    type: 'subscription_detected',
    createdAt: '2025-10-05T11:30:00',
    postedAt: _times(3),
    isUnRead: false,
  },
  {
    id: '4',
    title: 'Budget Limit Reached',
    description: 'You’ve reached 90% of your entertainment budget this month.',
    avatarUrl: '/assets/images/avatar/limit.svg',
    type: 'budget_alert',
    createdAt: '2025-10-03T18:10:00',
    postedAt: _times(4),
    isUnRead: false,
  },
  {
    id: '5',
    title: 'Smart Insight Available',
    description: 'You could save ₹800/month by canceling unused subscriptions.',
    avatarUrl: '/assets/images/avatar/insight.svg',
    type: 'insight',
    createdAt: '2025-10-02T10:00:00',
    postedAt: _times(5),
    isUnRead: false,
  },
];
