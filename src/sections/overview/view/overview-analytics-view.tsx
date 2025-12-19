// import Grid from '@mui/material/Grid';
// import Typography from '@mui/material/Typography';

// import { DashboardContent } from 'src/layouts/dashboard';
// import { _posts, _tasks, _traffic, _timeline } from 'src/_mock';

// import { AnalyticsNews } from '../analytics-news';
// import { AnalyticsTasks } from '../analytics-tasks';
// import { AnalyticsCurrentVisits } from '../analytics-current-visits';
// import { AnalyticsOrderTimeline } from '../analytics-order-timeline';
// import { AnalyticsWebsiteVisits } from '../analytics-website-visits';
// import { AnalyticsWidgetSummary } from '../analytics-widget-summary';
// import { AnalyticsTrafficBySite } from '../analytics-traffic-by-site';
// import { AnalyticsCurrentSubject } from '../analytics-current-subject';
// import { AnalyticsConversionRates } from '../analytics-conversion-rates';

// // ----------------------------------------------------------------------

// export function OverviewAnalyticsView() {
//   return (
//     <DashboardContent maxWidth="xl">
//       <Typography variant="h4" sx={{ mb: { xs: 3, md: 5 } }}>+
//         Hi, Welcome back!
//       </Typography>

//       <Grid container spacing={3}>
//         <Grid size={{ xs: 12, sm: 6, md: 3 }}>
//           <AnalyticsWidgetSummary
//             title="Monthly Spendings"
//             percent={1.9}
//             total={40625}
//             icon={<img alt="Weekly sales" src="/assets/icons/glass/ic-glass-bag.svg" />}
//             chart={{
//               categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
//               series: [22, 18, 35, 50, 67, 55, 48, 30],
//             }}
//           />
//         </Grid>

//         <Grid size={{ xs: 12, sm: 6, md: 3 }}>
//           <AnalyticsWidgetSummary
//             title="Active Subscriptions"
//             percent={-5}
//             total={14}
//             color="secondary"
//             icon={<img alt="New users" src="/assets/icons/glass/ic-glass-users.svg" />}
//             chart={{
//               categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
//               series: [11, 12, 15, 18, 13, 12, 14, 9],
//             }}
//           />
//         </Grid>

//         <Grid size={{ xs: 12, sm: 6, md: 3 }}>
//           <AnalyticsWidgetSummary
//             title="Upcoming Bills"
//             percent={2.1}
//             total={9}
//             color="warning"
//             icon={<img alt="Purchase orders" src="/assets/icons/glass/ic-glass-buy.svg" />}
//             chart={{
//               categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
//               series: [1200, 900, 700, 580, 900, 750, 1050, 1100],
//             }}
//           />
//         </Grid>

//         <Grid size={{ xs: 12, sm: 6, md: 3 }}>
//           <AnalyticsWidgetSummary
//             title="Savings Summary"
//             percent={0.6}
//             total={214}
//             color="error"
//             icon={<img alt="Messages" src="/assets/icons/glass/ic-glass-message.svg" />}
//             chart={{
//               categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
//               series: [300, 190, 150, 120, 210, 190, 250, 280],
//             }}
//           />
//         </Grid>

//         <Grid size={{ xs: 12, md: 6, lg: 4 }}>
//           <AnalyticsCurrentVisits
//             title="Spending By Categories"
//             chart={{
//               series: [
//                 { label: 'Rent', value: 4000 },
//                 { label: 'Food', value: 3500 },
//                 { label: 'Entertainment', value: 2800 },
//                 { label: 'Misc', value: 1900 },
//               ],
//             }}
//           />
//         </Grid>

//         <Grid size={{ xs: 12, md: 6, lg: 8 }}>
//           <AnalyticsWebsiteVisits
//             title="Spending Trends"
//             subheader="(+43%) than last year"
//             chart={{
//               categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
//               series: [
//                 { name: 'Rent', data: [4000, 4500, 4200, 4100, 4300, 3900, 4000, 4400, 4200] },
//                 { name: 'Food', data: [3500, 3600, 3300, 3600, 3400, 3700, 3200, 3900, 3200] },
//                 { name: 'Entertainment', data: [2800, 3000, 2900, 3200, 3100, 2900, 3000, 3400, 3200] },
//                 { name: 'Misc', data: [1900, 2200, 2500, 2100, 2000, 2500, 2300, 2400, 2500] },
//               ],
//             }}
//           />
//         </Grid>

//         <Grid size={{ xs: 12, md: 6, lg: 8 }}>
//           <AnalyticsConversionRates
//             title="Savings Per Month"
//             subheader="(+43%) than last month"
//             chart={{
//               categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun ', 'Jul', 'Sep'],
//               series: [
//                 { name: 'Savings Percentage', data: [33, 42, 37, 29, 25, 35, 28, 31] },
//                 // { name: 'Feb', data: [53, 32, 33, 52, 13] },
//               ],
//             }}
//           />
//         </Grid>

//         <Grid size={{ xs: 12, md: 6, lg: 4 }}>
//           <AnalyticsCurrentSubject
//             title="Subscription Detection"
//             chart={{
//               categories: [
//                 'Entertainment',
//                 'Music',
//                 'Productivity',
//                 'Utilities',
//                 'Shopping',
//                 'Education',
//               ],
//               series: [
//                 { name: 'Last Month', data: [65, 50, 40, 70, 45, 30] },
//                 { name: 'This Month', data: [75, 60, 55, 80, 55, 40] },
//                 { name: 'Projected', data: [85, 65, 60, 90, 65, 50] },
//               ],
//             }}
//           />
//         </Grid>

//         <Grid size={{ xs: 12, md: 6, lg: 8 }}>
//           <AnalyticsNews title="Financial Insights" list={_posts.slice(0, 5)} />
//         </Grid>

//         <Grid size={{ xs: 12, md: 6, lg: 4 }}>
//           <AnalyticsOrderTimeline title="Payment timeline" list={_timeline} />
//         </Grid>

//         <Grid size={{ xs: 12, md: 6, lg: 4 }}>
//           <AnalyticsTrafficBySite title="Budget Performance" list={_traffic} />
//         </Grid>

//         <Grid size={{ xs: 12, md: 6, lg: 8 }}>
//           <AnalyticsTasks title="Financial To-Do List" list={_tasks} />
//         </Grid>
//       </Grid>
//     </DashboardContent>
//   );
// }


// import axios from 'axios';
// import { useEffect, useState } from 'react';

// import Grid from '@mui/material/Grid';
// import Typography from '@mui/material/Typography';

// import { DashboardContent } from 'src/layouts/dashboard';
// import { _posts, _tasks, _traffic, _timeline } from 'src/_mock';

// import { AnalyticsNews } from '../analytics-news';
// import { AnalyticsTasks } from '../analytics-tasks';
// import { AnalyticsCurrentVisits } from '../analytics-current-visits';
// import { AnalyticsOrderTimeline } from '../analytics-order-timeline';
// import { AnalyticsWebsiteVisits } from '../analytics-website-visits';
// import { AnalyticsWidgetSummary } from '../analytics-widget-summary';
// import { AnalyticsTrafficBySite } from '../analytics-traffic-by-site';
// import { AnalyticsCurrentSubject } from '../analytics-current-subject';
// import { AnalyticsConversionRates } from '../analytics-conversion-rates';

// // ----------------------------------------------------------------------

// export function OverviewAnalyticsView() {
//   const [loading, setLoading] = useState(true);

//   const [summary, setSummary] = useState({
//     monthlySpend: 0,
//     activeSubscriptions: 0,
//     upcomingBills: 0,
//     savings: 0,
//   });

//   const [categorySpend, setCategorySpend] = useState<any[]>([]);
//   const [monthlyTrends, setMonthlyTrends] = useState<any>({
//     categories: [],
//     series: [],
//   });

//   useEffect(() => {
//     async function fetchDashboard() {
//       try {
//         const res = await axios.get('http://localhost:5000/api/dashboard/overview');
//         const data = res.data;

//         setSummary(data.summary);
//         setCategorySpend(data.categorySpend);
//         setMonthlyTrends(data.monthlyTrends);
//       } catch (err) {
//         console.error('Failed to load dashboard data', err);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchDashboard();
//   }, []);

//   if (loading) return null;

//   return (
//     <DashboardContent maxWidth="xl">
//       <Typography variant="h4" sx={{ mb: { xs: 3, md: 5 } }}>
//         Hi, Welcome back!
//       </Typography>

//       <Grid container spacing={3}>
//         <Grid size={{ xs: 12, sm: 6, md: 3 }}>
//           <AnalyticsWidgetSummary
//             title="Monthly Spendings"
//             percent={1.9}
//             total={summary.monthlySpend}
//             icon={<img alt="Weekly sales" src="/assets/icons/glass/ic-glass-bag.svg" />}
//             chart={{ categories: [], series: [] }}
//           />
//         </Grid>

//         <Grid size={{ xs: 12, sm: 6, md: 3 }}>
//           <AnalyticsWidgetSummary
//             title="Active Subscriptions"
//             percent={-5}
//             total={summary.activeSubscriptions}
//             color="secondary"
//             icon={<img alt="Users" src="/assets/icons/glass/ic-glass-users.svg" />}
//             chart={{ categories: [], series: [] }}
//           />
//         </Grid>

//         <Grid size={{ xs: 12, sm: 6, md: 3 }}>
//           <AnalyticsWidgetSummary
//             title="Upcoming Bills"
//             percent={2.1}
//             total={summary.upcomingBills}
//             color="warning"
//             icon={<img alt="Bills" src="/assets/icons/glass/ic-glass-buy.svg" />}
//             chart={{ categories: [], series: [] }}
//           />
//         </Grid>

//         <Grid size={{ xs: 12, sm: 6, md: 3 }}>
//           <AnalyticsWidgetSummary
//             title="Savings Summary"
//             percent={0.6}
//             total={summary.savings}
//             color="error"
//             icon={<img alt="Savings" src="/assets/icons/glass/ic-glass-message.svg" />}
//             chart={{ categories: [], series: [] }}
//           />
//         </Grid>

//         <Grid size={{ xs: 12, md: 6, lg: 4 }}>
//           <AnalyticsCurrentVisits
//             title="Spending By Categories"
//             chart={{ series: categorySpend }}
//           />
//         </Grid>

//         <Grid size={{ xs: 12, md: 6, lg: 8 }}>
//           <AnalyticsWebsiteVisits
//             title="Spending Trends"
//             subheader="(+43%) than last year"
//             chart={monthlyTrends}
//           />
//         </Grid>

//         {/* Everything below remains unchanged */}
//         <Grid size={{ xs: 12, md: 6, lg: 8 }}>
//           <AnalyticsConversionRates title="Savings Per Month" chart={{ categories: [], series: [] }} />
//         </Grid>

//         <Grid size={{ xs: 12, md: 6, lg: 4 }}>
//           <AnalyticsCurrentSubject title="Subscription Detection" chart={{ categories: [], series: [] }} />
//         </Grid>

//         <Grid size={{ xs: 12, md: 6, lg: 8 }}>
//           <AnalyticsNews title="Financial Insights" list={_posts.slice(0, 5)} />
//         </Grid>

//         <Grid size={{ xs: 12, md: 6, lg: 4 }}>
//           <AnalyticsOrderTimeline title="Payment timeline" list={_timeline} />
//         </Grid>

//         <Grid size={{ xs: 12, md: 6, lg: 4 }}>
//           <AnalyticsTrafficBySite title="Budget Performance" list={_traffic} />
//         </Grid>

//         <Grid size={{ xs: 12, md: 6, lg: 8 }}>
//           <AnalyticsTasks title="Financial To-Do List" list={_tasks} />
//         </Grid>
//       </Grid>
//     </DashboardContent>
//   );
// }


// import axios from 'axios';
// import { useEffect, useState } from 'react';

// import Grid from '@mui/material/Grid';
// import Typography from '@mui/material/Typography';

// import { DashboardContent } from 'src/layouts/dashboard';
// import { _posts, _tasks, _traffic, _timeline } from 'src/_mock';

// import { AnalyticsNews } from '../analytics-news';
// import { AnalyticsTasks } from '../analytics-tasks';
// import { AnalyticsCurrentVisits } from '../analytics-current-visits';
// import { AnalyticsOrderTimeline } from '../analytics-order-timeline';
// import { AnalyticsWebsiteVisits } from '../analytics-website-visits';
// import { AnalyticsWidgetSummary } from '../analytics-widget-summary';
// import { AnalyticsTrafficBySite } from '../analytics-traffic-by-site';
// import { AnalyticsCurrentSubject } from '../analytics-current-subject';
// import { AnalyticsConversionRates } from '../analytics-conversion-rates';

// // ----------------------------------------------------------------------

// export function OverviewAnalyticsView() {
//   const [loading, setLoading] = useState(true);

//   const [summary, setSummary] = useState({
//     monthlySpend: 0,
//     activeSubscriptions: 0,
//     upcomingBills: 0,
//     savings: 0,
//   });

//   const [categorySpend, setCategorySpend] = useState<any[]>([]);
//   const [monthlyTrends, setMonthlyTrends] = useState<any>({
//     categories: [],
//     series: [],
//   });

//   useEffect(() => {
//     async function fetchDashboard() {
//       try {
//         const res = await axios.get(
//           'http://localhost:5000/api/dashboard/overview',
//           {
//             params: { t: Date.now() }, // ⬅️ cache buster (VERY IMPORTANT)
//           }
//         );

//         console.log('📊 Dashboard data from backend:', res.data);

//         setSummary(res.data.summary);
//         setCategorySpend(res.data.categorySpend);
//         setMonthlyTrends(res.data.monthlyTrends);
//       } catch (err) {
//         console.error('❌ Failed to load dashboard data', err);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchDashboard();
//   }, []);

//   if (loading) {
//     return (
//       <DashboardContent maxWidth="xl">
//         <Typography>Loading dashboard...</Typography>
//       </DashboardContent>
//     );
//   }

//   return (
//     <DashboardContent maxWidth="xl">
//       <Typography variant="h4" sx={{ mb: { xs: 3, md: 5 } }}>
//         Hi, Welcome back!
//       </Typography>

//       <Grid container spacing={3}>
//         <Grid size={{ xs: 12, sm: 6, md: 3 }}>
//           <AnalyticsWidgetSummary
//             title="Monthly Spendings"
//             percent={1.9}
//             total={summary.monthlySpend}
//             icon={<img alt="Weekly sales" src="/assets/icons/glass/ic-glass-bag.svg" />}
//             chart={{ categories: [], series: [] }}
//           />
//         </Grid>

//         <Grid size={{ xs: 12, sm: 6, md: 3 }}>
//           <AnalyticsWidgetSummary
//             title="Active Subscriptions"
//             percent={-5}
//             total={summary.activeSubscriptions}
//             color="secondary"
//             icon={<img alt="Users" src="/assets/icons/glass/ic-glass-users.svg" />}
//             chart={{ categories: [], series: [] }}
//           />
//         </Grid>

//         <Grid size={{ xs: 12, sm: 6, md: 3 }}>
//           <AnalyticsWidgetSummary
//             title="Upcoming Bills"
//             percent={2.1}
//             total={summary.upcomingBills}
//             color="warning"
//             icon={<img alt="Bills" src="/assets/icons/glass/ic-glass-buy.svg" />}
//             chart={{ categories: [], series: [] }}
//           />
//         </Grid>

//         <Grid size={{ xs: 12, sm: 6, md: 3 }}>
//           <AnalyticsWidgetSummary
//             title="Savings Summary"
//             percent={0.6}
//             total={summary.savings}
//             color="error"
//             icon={<img alt="Savings" src="/assets/icons/glass/ic-glass-message.svg" />}
//             chart={{ categories: [], series: [] }}
//           />
//         </Grid>

//         <Grid size={{ xs: 12, md: 6, lg: 4 }}>
//           <AnalyticsCurrentVisits
//             title="Spending By Categories"
//             chart={{ series: categorySpend }}
//           />
//         </Grid>

//         <Grid size={{ xs: 12, md: 6, lg: 8 }}>
//           <AnalyticsWebsiteVisits
//             title="Spending Trends"
//             subheader="Updated from backend"
//             chart={monthlyTrends}
//           />
//         </Grid>

//         {/* Everything below intentionally left STATIC as requested */}
//         <Grid size={{ xs: 12, md: 6, lg: 8 }}>
//           <AnalyticsConversionRates title="Savings Per Month" chart={{ categories: [], series: [] }} />
//         </Grid>

//         <Grid size={{ xs: 12, md: 6, lg: 4 }}>
//           <AnalyticsCurrentSubject title="Subscription Detection" chart={{ categories: [], series: [] }} />
//         </Grid>

//         <Grid size={{ xs: 12, md: 6, lg: 8 }}>
//           <AnalyticsNews title="Financial Insights" list={_posts.slice(0, 5)} />
//         </Grid>

//         <Grid size={{ xs: 12, md: 6, lg: 4 }}>
//           <AnalyticsOrderTimeline title="Payment timeline" list={_timeline} />
//         </Grid>

//         <Grid size={{ xs: 12, md: 6, lg: 4 }}>
//           <AnalyticsTrafficBySite title="Budget Performance" list={_traffic} />
//         </Grid>

//         <Grid size={{ xs: 12, md: 6, lg: 8 }}>
//           <AnalyticsTasks title="Financial To-Do List" list={_tasks} />
//         </Grid>
//       </Grid>
//     </DashboardContent>
//   );
// }



// 

// import axios from 'axios';
// import { useEffect, useState } from 'react';

// import Grid from '@mui/material/Grid';
// import Typography from '@mui/material/Typography';

// import { DashboardContent } from 'src/layouts/dashboard';
// import { _posts, _tasks, _traffic, _timeline } from 'src/_mock';

// import { AnalyticsNews } from '../analytics-news';
// import { AnalyticsTasks } from '../analytics-tasks';
// import { AnalyticsCurrentVisits } from '../analytics-current-visits';
// import { AnalyticsOrderTimeline } from '../analytics-order-timeline';
// import { AnalyticsWebsiteVisits } from '../analytics-website-visits';
// import { AnalyticsWidgetSummary } from '../analytics-widget-summary';
// import { AnalyticsTrafficBySite } from '../analytics-traffic-by-site';
// import { AnalyticsCurrentSubject } from '../analytics-current-subject';
// import { AnalyticsConversionRates } from '../analytics-conversion-rates';

// // ----------------------------------------------------------------------


// export function OverviewAnalyticsView() {
//   const [loading, setLoading] = useState(true);

//   const [summary, setSummary] = useState({
//     monthlySpend: 0,
//     activeSubscriptions: 0,
//     upcomingBills: 0,
//     savings: 0,
//   });

//   const [summaryCharts, setSummaryCharts] = useState<any>({});
//   const [categorySpend, setCategorySpend] = useState<any[]>([]);
//   const [monthlyTrends, setMonthlyTrends] = useState<any>({});
//   const [savingsPerMonth, setSavingsPerMonth] = useState<any>({});
//   const [subscriptionDetection, setSubscriptionDetection] = useState<any>({});

//   useEffect(() => {
//     async function fetchDashboard() {
//       try {
//         const res = await axios.get('http://localhost:5000/api/dashboard/overview', {
//           params: { t: Date.now() },
//         });

//         const data = res.data;

//         setSummary(data.summary);
//         setSummaryCharts(data.summaryCharts);
//         setCategorySpend(data.categorySpend);
//         setMonthlyTrends(data.monthlyTrends);
//         setSavingsPerMonth(data.savingsPerMonth);
//         setSubscriptionDetection(data.subscriptionDetection);
//       } catch (err) {
//         console.error('Failed to load dashboard data', err);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchDashboard();
//   }, []);

//   if (loading) {
//     return (
//       <DashboardContent maxWidth="xl">
//         <Typography>Loading dashboard...</Typography>
//       </DashboardContent>
//     );
//   }

//   return (
//     <DashboardContent maxWidth="xl">
//       <Typography variant="h4" sx={{ mb: { xs: 3, md: 5 } }}>
//         Hi, Welcome back!
//       </Typography>

//       <Grid container spacing={3}>
//         <Grid size={{ xs: 12, sm: 6, md: 3 }}>
//           <AnalyticsWidgetSummary
//             title="Monthly Spendings"
//             total={summary.monthlySpend}
//             icon={<img alt="Monthly spend" src="/assets/icons/glass/ic-glass-bag.svg" />}
//             chart={summaryCharts.monthlySpend} percent={0}          />
//         </Grid>

//         <Grid size={{ xs: 12, sm: 6, md: 3 }}>
//           <AnalyticsWidgetSummary
//             title="Active Subscriptions"
//             total={summary.activeSubscriptions}
//             color="secondary"
//             icon={<img alt="Subscriptions" src="/assets/icons/glass/ic-glass-users.svg" />}
//             chart={summaryCharts.activeSubscriptions} percent={0}          />
//         </Grid>

//         <Grid size={{ xs: 12, sm: 6, md: 3 }}>
//           <AnalyticsWidgetSummary
//             title="Upcoming Bills"
//             total={summary.upcomingBills}
//             color="warning"
//             icon={<img alt="Bills" src="/assets/icons/glass/ic-glass-buy.svg" />}
//             chart={summaryCharts.upcomingBills} percent={0}          />
//         </Grid>

//         <Grid size={{ xs: 12, sm: 6, md: 3 }}>
//           <AnalyticsWidgetSummary
//             title="Savings Summary"
//             total={summary.savings}
//             color="error"
//             icon={<img alt="Savings" src="/assets/icons/glass/ic-glass-message.svg" />}
//             chart={summaryCharts.savings} percent={0}          />
//         </Grid>

//         <Grid size={{ xs: 12, md: 6, lg: 4 }}>
//           <AnalyticsCurrentVisits title="Spending By Categories" chart={{ series: categorySpend }} />
//         </Grid>

//         <Grid size={{ xs: 12, md: 6, lg: 8 }}>
//           <AnalyticsWebsiteVisits
//             title="Spending Trends"
//             subheader="Updated from backend"
//             chart={monthlyTrends}
//           />
//         </Grid>

//         <Grid size={{ xs: 12, md: 6, lg: 8 }}>
//           <AnalyticsConversionRates
//             title="Savings Per Month"
//             chart={savingsPerMonth}
//           />
//         </Grid>

//         <Grid size={{ xs: 12, md: 6, lg: 4 }}>
//           <AnalyticsCurrentSubject
//             title="Subscription Detection"
//             chart={subscriptionDetection}
//           />
//         </Grid>

//         <Grid size={{ xs: 12, md: 6, lg: 8 }}>
//           <AnalyticsNews title="Financial Insights" list={_posts.slice(0, 5)} />
//         </Grid>

//         <Grid size={{ xs: 12, md: 6, lg: 4 }}>
//           <AnalyticsOrderTimeline title="Payment timeline" list={_timeline} />
//         </Grid>

//         <Grid size={{ xs: 12, md: 6, lg: 4 }}>
//           <AnalyticsTrafficBySite title="Budget Performance" list={_traffic} />
//         </Grid>

//         <Grid size={{ xs: 12, md: 6, lg: 8 }}>
//           <AnalyticsTasks title="Financial To-Do List" list={_tasks} />
//         </Grid>
//       </Grid>
//     </DashboardContent>
//   );
// }


import axios from 'axios';
import { useEffect, useState } from 'react';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { DashboardContent } from 'src/layouts/dashboard';
import { _posts, _tasks, _traffic, _timeline } from 'src/_mock';

import { AnalyticsNews } from '../analytics-news';
import { AnalyticsTasks } from '../analytics-tasks';
import { AnalyticsCurrentVisits } from '../analytics-current-visits';
import { AnalyticsOrderTimeline } from '../analytics-order-timeline';
import { AnalyticsWebsiteVisits } from '../analytics-website-visits';
import { AnalyticsWidgetSummary } from '../analytics-widget-summary';
import { AnalyticsTrafficBySite } from '../analytics-traffic-by-site';
import { AnalyticsCurrentSubject } from '../analytics-current-subject';
import { AnalyticsConversionRates } from '../analytics-conversion-rates';

// ----------------------------------------------------------------------

export function OverviewAnalyticsView() {
  const [loading, setLoading] = useState(true);

  const [summary, setSummary] = useState({
    monthlySpend: 0,
    activeSubscriptions: 0,
    upcomingBills: 0,
    savings: 0,
  });

  const [summaryCharts, setSummaryCharts] = useState<any>({
    monthlySpend: { categories: [], series: [] },
    activeSubscriptions: { categories: [], series: [] },
    upcomingBills: { categories: [], series: [] },
    savings: { categories: [], series: [] },
  });

  const [categorySpend, setCategorySpend] = useState<any[]>([]);
  const [monthlyTrends, setMonthlyTrends] = useState<any>({
    categories: [],
    series: [],
  });

  const [savingsPerMonth, setSavingsPerMonth] = useState<any>({
    categories: [],
    series: [],
  });

  const [subscriptionDetection, setSubscriptionDetection] = useState<any>({
    categories: [],
    series: [],
  });

  useEffect(() => {
    async function fetchDashboard() {
      try {
        const res = await axios.get(
          'http://localhost:5000/api/dashboard/overview',
          { params: { t: Date.now() } }
        );

        const data = res.data;

        setSummary(data.summary);
        setSummaryCharts(data.summaryCharts);
        setCategorySpend(data.categorySpend);
        setMonthlyTrends(data.monthlyTrends);
        setSavingsPerMonth(data.savingsPerMonth);
        setSubscriptionDetection(data.subscriptionDetection);
      } catch (err) {
        console.error('❌ Failed to load dashboard data', err);
      } finally {
        setLoading(false);
      }
    }

    fetchDashboard();
  }, []);

  if (loading) {
    return (
      <DashboardContent maxWidth="xl">
        <Typography>Loading dashboard...</Typography>
      </DashboardContent>
    );
  }

  return (
    <DashboardContent maxWidth="xl">
      <Typography variant="h4" sx={{ mb: { xs: 3, md: 5 } }}>
        Hi, Welcome back!
      </Typography>

      <Grid container spacing={3}>
        {/* TOP 4 SUMMARY WIDGETS */}
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <AnalyticsWidgetSummary
            title="Monthly Spendings"
            total={summary.monthlySpend}
            percent={0}
            icon={<img src="/assets/icons/glass/ic-glass-bag.svg" />}
            chart={summaryCharts.monthlySpend}
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <AnalyticsWidgetSummary
            title="Active Subscriptions"
            total={summary.activeSubscriptions}
            percent={0}
            color="secondary"
            icon={<img src="/assets/icons/glass/ic-glass-users.svg" />}
            chart={summaryCharts.activeSubscriptions}
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <AnalyticsWidgetSummary
            title="Upcoming Bills"
            total={summary.upcomingBills}
            percent={0}
            color="warning"
            icon={<img src="/assets/icons/glass/ic-glass-buy.svg" />}
            chart={summaryCharts.upcomingBills}
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <AnalyticsWidgetSummary
            title="Savings Summary"
            total={summary.savings}
            percent={0}
            color="error"
            icon={<img src="/assets/icons/glass/ic-glass-message.svg" />}
            chart={summaryCharts.savings}
          />
        </Grid>

        {/* PIE CHART */}
        <Grid size={{ xs: 12, md: 6, lg: 4 }}>
          <AnalyticsCurrentVisits
            title="Spending By Categories"
            chart={{ series: categorySpend }}
          />
        </Grid>

        {/* LINE CHART */}
        <Grid size={{ xs: 12, md: 6, lg: 8 }}>
          <AnalyticsWebsiteVisits
            title="Spending Trends"
            subheader="Updated from backend"
            chart={monthlyTrends}
          />
        </Grid>

        {/* SAVINGS */}
        <Grid size={{ xs: 12, md: 6, lg: 8 }}>
          <AnalyticsConversionRates
            title="Savings Per Month"
            chart={savingsPerMonth}
          />
        </Grid>

        {/* DETECTION */}
        <Grid size={{ xs: 12, md: 6, lg: 4 }}>
          <AnalyticsCurrentSubject
            title="Subscription Detection"
            chart={subscriptionDetection}
          />
        </Grid>

        {/* STATIC SECTIONS */}
        <Grid size={{ xs: 12, md: 6, lg: 8 }}>
          <AnalyticsNews title="Financial Insights" list={_posts.slice(0, 5)} />
        </Grid>

        <Grid size={{ xs: 12, md: 6, lg: 4 }}>
          <AnalyticsOrderTimeline title="Payment timeline" list={_timeline} />
        </Grid>

        <Grid size={{ xs: 12, md: 6, lg: 4 }}>
          <AnalyticsTrafficBySite title="Budget Performance" list={_traffic} />
        </Grid>

        <Grid size={{ xs: 12, md: 6, lg: 8 }}>
          <AnalyticsTasks title="Financial To-Do List" list={_tasks} />
        </Grid>
      </Grid>
    </DashboardContent>
  );
}
