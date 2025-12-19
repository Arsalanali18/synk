// import { useState, useCallback } from 'react';

// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import Table from '@mui/material/Table';
// import Button from '@mui/material/Button';
// import TableBody from '@mui/material/TableBody';
// import Typography from '@mui/material/Typography';
// import TableContainer from '@mui/material/TableContainer';
// import TablePagination from '@mui/material/TablePagination';

// import { _users } from 'src/_mock';
// import { DashboardContent } from 'src/layouts/dashboard';

// import { Iconify } from 'src/components/iconify';
// import { Scrollbar } from 'src/components/scrollbar';

// import { TableNoData } from '../table-no-data';
// import { UserTableRow } from '../user-table-row';
// import { UserTableHead } from '../user-table-head';
// import { TableEmptyRows } from '../table-empty-rows';
// import { UserTableToolbar } from '../user-table-toolbar';
// import { emptyRows, applyFilter, getComparator } from '../utils';

// import type { UserProps } from '../user-table-row';

// // ----------------------------------------------------------------------

// export function UserView() {
//   const table = useTable();

//   const [filterName, setFilterName] = useState('');

//   const dataFiltered: UserProps[] = applyFilter({
//     inputData: _users,
//     comparator: getComparator(table.order, table.orderBy),
//     filterName,
//   });

//   const notFound = !dataFiltered.length && !!filterName;

//   return (
//     <DashboardContent>
//       <Box
//         sx={{
//           mb: 5,
//           display: 'flex',
//           alignItems: 'center',
//         }}
//       >
//         <Typography variant="h4" sx={{ flexGrow: 1 }}>
//           Subscriptions
//         </Typography>
//         <Button
//           variant="contained"
//           color="inherit"
//           startIcon={<Iconify icon="mingcute:add-line" />}
//         >
//           New Subscription
//         </Button>
//       </Box>

//       <Card>
//         <UserTableToolbar
//           numSelected={table.selected.length}
//           filterName={filterName}
//           onFilterName={(event: React.ChangeEvent<HTMLInputElement>) => {
//             setFilterName(event.target.value);
//             table.onResetPage();
//           }}
//         />

//         <Scrollbar>
//           <TableContainer sx={{ overflow: 'unset' }}>
//             <Table sx={{ minWidth: 800 }}>
//               <UserTableHead
//                 order={table.order}
//                 orderBy={table.orderBy}
//                 rowCount={_users.length}
//                 numSelected={table.selected.length}
//                 onSort={table.onSort}
//                 onSelectAllRows={(checked) =>
//                   table.onSelectAllRows(
//                     checked,
//                     _users.map((user) => user.id)
//                   )
//                 }
//                 headLabel={[
//                   { id: 'name', label: 'Name' },
//                   { id: 'company', label: 'Provider' },
//                   { id: 'role', label: 'Category' },
//                   { id: 'isVerified', label: 'Next Renewal', align: 'center' },
//                   { id: 'status', label: 'Status' },
//                   { id: '' },
//                 ]}
//               />
//               <TableBody>
//                 {dataFiltered
//                   .slice(
//                     table.page * table.rowsPerPage,
//                     table.page * table.rowsPerPage + table.rowsPerPage
//                   )
//                   .map((row) => (
//                     <UserTableRow
//                       key={row.id}
//                       row={row}
//                       selected={table.selected.includes(row.id)}
//                       onSelectRow={() => table.onSelectRow(row.id)}
//                     />
//                   ))}

//                 <TableEmptyRows
//                   height={68}
//                   emptyRows={emptyRows(table.page, table.rowsPerPage, _users.length)}
//                 />

//                 {notFound && <TableNoData searchQuery={filterName} />}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </Scrollbar>

//         <TablePagination
//           component="div"
//           page={table.page}
//           count={_users.length}
//           rowsPerPage={table.rowsPerPage}
//           onPageChange={table.onChangePage}
//           rowsPerPageOptions={[5, 10, 25]}
//           onRowsPerPageChange={table.onChangeRowsPerPage}
//         />
//       </Card>
//     </DashboardContent>
//   );
// }

// // ----------------------------------------------------------------------

// export function useTable() {
//   const [page, setPage] = useState(0);
//   const [orderBy, setOrderBy] = useState('name');
//   const [rowsPerPage, setRowsPerPage] = useState(5);
//   const [selected, setSelected] = useState<string[]>([]);
//   const [order, setOrder] = useState<'asc' | 'desc'>('asc');

//   const onSort = useCallback(
//     (id: string) => {
//       const isAsc = orderBy === id && order === 'asc';
//       setOrder(isAsc ? 'desc' : 'asc');
//       setOrderBy(id);
//     },
//     [order, orderBy]
//   );

//   const onSelectAllRows = useCallback((checked: boolean, newSelecteds: string[]) => {
//     if (checked) {
//       setSelected(newSelecteds);
//       return;
//     }
//     setSelected([]);
//   }, []);

//   const onSelectRow = useCallback(
//     (inputValue: string) => {
//       const newSelected = selected.includes(inputValue)
//         ? selected.filter((value) => value !== inputValue)
//         : [...selected, inputValue];

//       setSelected(newSelected);
//     },
//     [selected]
//   );

//   const onResetPage = useCallback(() => {
//     setPage(0);
//   }, []);

//   const onChangePage = useCallback((event: unknown, newPage: number) => {
//     setPage(newPage);
//   }, []);

//   const onChangeRowsPerPage = useCallback(
//     (event: React.ChangeEvent<HTMLInputElement>) => {
//       setRowsPerPage(parseInt(event.target.value, 10));
//       onResetPage();
//     },
//     [onResetPage]
//   );

//   return {
//     page,
//     order,
//     onSort,
//     orderBy,
//     selected,
//     rowsPerPage,
//     onSelectRow,
//     onResetPage,
//     onChangePage,
//     onSelectAllRows,
//     onChangeRowsPerPage,
//   };
// }

// import { useState, useCallback } from 'react';

// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import Modal from '@mui/material/Modal';
// import Stack from '@mui/material/Stack';
// import Table from '@mui/material/Table';
// import Button from '@mui/material/Button';
// import TableBody from '@mui/material/TableBody';
// import TextField from '@mui/material/TextField';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import TableContainer from '@mui/material/TableContainer';
// import TablePagination from '@mui/material/TablePagination';

// import { _users } from 'src/_mock';
// import { DashboardContent } from 'src/layouts/dashboard';

// import { Iconify } from 'src/components/iconify';
// import { Scrollbar } from 'src/components/scrollbar';

// import { TableNoData } from '../table-no-data';
// import { UserTableRow } from '../user-table-row';
// import { UserTableHead } from '../user-table-head';
// import { TableEmptyRows } from '../table-empty-rows';
// import { UserTableToolbar } from '../user-table-toolbar';
// import { emptyRows, applyFilter, getComparator } from '../utils';

// import type { UserProps } from '../user-table-row';

// // ----------------------------------------------------------------------

// export function UserView() {
//   const table = useTable();
//   const [filterName, setFilterName] = useState('');
//   const [openModal, setOpenModal] = useState(false);
//   const [newSubscription, setNewSubscription] = useState({
//     name: '',
//     provider: '',
//     category: '',
//     renewalDate: '',
//     status: '',
//   });

//   const handleOpenModal = () => setOpenModal(true);
//   const handleCloseModal = () => setOpenModal(false);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setNewSubscription({ ...newSubscription, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log('New Subscription:', newSubscription);
//     handleCloseModal();
//   };

//   const dataFiltered: UserProps[] = applyFilter({
//     inputData: _users,
//     comparator: getComparator(table.order, table.orderBy),
//     filterName,
//   });

//   const notFound = !dataFiltered.length && !!filterName;

//   return (
//     <DashboardContent>
//       <Box
//         sx={{
//           mb: 5,
//           display: 'flex',
//           alignItems: 'center',
//         }}
//       >
//         <Typography variant="h4" sx={{ flexGrow: 1 }}>
//           Subscriptions
//         </Typography>
//         <Button
//           variant="contained"
//           color="inherit"
//           startIcon={<Iconify icon="mingcute:add-line" />}
//           onClick={handleOpenModal}
//         >
//           New Subscription
//         </Button>
//       </Box>

//       <Card>
//         <UserTableToolbar
//           numSelected={table.selected.length}
//           filterName={filterName}
//           onFilterName={(event: React.ChangeEvent<HTMLInputElement>) => {
//             setFilterName(event.target.value);
//             table.onResetPage();
//           }}
//         />

//         <Scrollbar>
//           <TableContainer sx={{ overflow: 'unset' }}>
//             <Table sx={{ minWidth: 800 }}>
//               <UserTableHead
//                 order={table.order}
//                 orderBy={table.orderBy}
//                 rowCount={_users.length}
//                 numSelected={table.selected.length}
//                 onSort={table.onSort}
//                 onSelectAllRows={(checked) =>
//                   table.onSelectAllRows(
//                     checked,
//                     _users.map((user) => user.id)
//                   )
//                 }
//                 headLabel={[
//                   { id: 'name', label: 'Name' },
//                   { id: 'company', label: 'Provider' },
//                   { id: 'role', label: 'Category' },
//                   { id: 'isVerified', label: 'Next Renewal', align: 'center' },
//                   { id: 'status', label: 'Status' },
//                   { id: '' },
//                 ]}
//               />
//               <TableBody>
//                 {dataFiltered
//                   .slice(
//                     table.page * table.rowsPerPage,
//                     table.page * table.rowsPerPage + table.rowsPerPage
//                   )
//                   .map((row) => (
//                     <UserTableRow
//                       key={row.id}
//                       row={row}
//                       selected={table.selected.includes(row.id)}
//                       onSelectRow={() => table.onSelectRow(row.id)}
//                     />
//                   ))}

//                 <TableEmptyRows
//                   height={68}
//                   emptyRows={emptyRows(table.page, table.rowsPerPage, _users.length)}
//                 />

//                 {notFound && <TableNoData searchQuery={filterName} />}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </Scrollbar>

//         <TablePagination
//           component="div"
//           page={table.page}
//           count={_users.length}
//           rowsPerPage={table.rowsPerPage}
//           onPageChange={table.onChangePage}
//           rowsPerPageOptions={[5, 10, 25]}
//           onRowsPerPageChange={table.onChangeRowsPerPage}
//         />
//       </Card>

//       {/* Overlay Form Modal */}
//       <Modal
//         open={openModal}
//         onClose={handleCloseModal}
//         aria-labelledby="add-subscription-modal"
//         sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
//       >
//         <Card sx={{ width: 400, p: 3, boxShadow: 10, borderRadius: 3 }}>
//           <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
//             <Typography variant="h6">Add New Subscription</Typography>
//             <IconButton onClick={handleCloseModal}>
//               <Iconify icon="mingcute:close-line" />
//             </IconButton>
//           </Stack>

//           <Box component="form" onSubmit={handleSubmit}>
//             <Stack spacing={2}>
//               <TextField label="Subscription Name" name="name" value={newSubscription.name} onChange={handleChange} fullWidth required />
//               <TextField label="Provider" name="provider" value={newSubscription.provider} onChange={handleChange} fullWidth required />
//               <TextField label="Category" name="category" value={newSubscription.category} onChange={handleChange} fullWidth required />
//               <TextField label="Next Renewal Date" type="date" name="renewalDate" value={newSubscription.renewalDate} onChange={handleChange} fullWidth InputLabelProps={{ shrink: true }} />
//               <TextField label="Status" name="status" value={newSubscription.status} onChange={handleChange} fullWidth />

//               <Button variant="contained" type="submit" color="primary">
//                 Add Subscription
//               </Button>
//             </Stack>
//           </Box>
//         </Card>
//       </Modal>
//     </DashboardContent>
//   );
// }

// // ----------------------------------------------------------------------

// export function useTable() {
//   const [page, setPage] = useState(0);
//   const [orderBy, setOrderBy] = useState('name');
//   const [rowsPerPage, setRowsPerPage] = useState(5);
//   const [selected, setSelected] = useState<string[]>([]);
//   const [order, setOrder] = useState<'asc' | 'desc'>('asc');

//   const onSort = useCallback(
//     (id: string) => {
//       const isAsc = orderBy === id && order === 'asc';
//       setOrder(isAsc ? 'desc' : 'asc');
//       setOrderBy(id);
//     },
//     [order, orderBy]
//   );

//   const onSelectAllRows = useCallback((checked: boolean, newSelecteds: string[]) => {
//     if (checked) {
//       setSelected(newSelecteds);
//       return;
//     }
//     setSelected([]);
//   }, []);

//   const onSelectRow = useCallback(
//     (inputValue: string) => {
//       const newSelected = selected.includes(inputValue)
//         ? selected.filter((value) => value !== inputValue)
//         : [...selected, inputValue];

//       setSelected(newSelected);
//     },
//     [selected]
//   );

//   const onResetPage = useCallback(() => {
//     setPage(0);
//   }, []);

//   const onChangePage = useCallback((event: unknown, newPage: number) => {
//     setPage(newPage);
//   }, []);

//   const onChangeRowsPerPage = useCallback(
//     (event: React.ChangeEvent<HTMLInputElement>) => {
//       setRowsPerPage(parseInt(event.target.value, 10));
//       onResetPage();
//     },
//     [onResetPage]
//   );

//   return {
//     page,
//     order,
//     onSort,
//     orderBy,
//     selected,
//     rowsPerPage,
//     onSelectRow,
//     onResetPage,
//     onChangePage,
//     onSelectAllRows,
//     onChangeRowsPerPage,
//   };
// }

// import axios from 'axios';
// import { useEffect } from 'react';
// import { useState, useCallback } from 'react';
// import { useSearchParams } from 'react-router-dom';

// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import Modal from '@mui/material/Modal';
// import Stack from '@mui/material/Stack';
// import Table from '@mui/material/Table';
// import Button from '@mui/material/Button';
// import TableBody from '@mui/material/TableBody';
// import TextField from '@mui/material/TextField';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import TableContainer from '@mui/material/TableContainer';
// import TablePagination from '@mui/material/TablePagination';

// import { _users as initialUsers } from 'src/_mock';
// import { DashboardContent } from 'src/layouts/dashboard';

// import { Iconify } from 'src/components/iconify';
// import { Scrollbar } from 'src/components/scrollbar';

// import { TableNoData } from '../table-no-data';
// import { UserTableRow } from '../user-table-row';
// import { UserTableHead } from '../user-table-head';
// import { TableEmptyRows } from '../table-empty-rows';
// import { UserTableToolbar } from '../user-table-toolbar';
// import { emptyRows, applyFilter, getComparator } from '../utils';

// import type { UserProps } from '../user-table-row';

// // ----------------------------------------------------------------------

// export function UserView() {
//   const table = useTable();
//   const [filterName, setFilterName] = useState('');
//   const [openModal, setOpenModal] = useState(false);
//   const [users, setUsers] = useState(initialUsers); // ← local copy of subscriptions

//   const [newSubscription, setNewSubscription] = useState({
//     name: '',
//     provider: '',
//     category: '',
//     renewalDate: '',
//     status: '',
//   });

//   const handleOpenModal = () => setOpenModal(true);
//   const handleCloseModal = () => setOpenModal(false);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setNewSubscription({ ...newSubscription, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     // Add new subscription to list dynamically
//     const newSub = {
//       id: String(users.length + 1),
//       name: newSubscription.name,
//       company: newSubscription.provider,
//       role: newSubscription.category,
//       isVerified: !!newSubscription.renewalDate,
//       status: newSubscription.status || 'active',
//       avatarUrl: `/assets/images/avatar/avatar-${users.length + 1}.webp`,
//     };

//     setUsers((prev) => [...prev, newSub]); // update local state

//     setNewSubscription({
//       name: '',
//       provider: '',
//       category: '',
//       renewalDate: '',
//       status: '',
//     });

//     handleCloseModal();
//   };

//   const dataFiltered: UserProps[] = applyFilter({
//     inputData: users, // ← use local state instead of _users
//     comparator: getComparator(table.order, table.orderBy),
//     filterName,
//   });

//   const notFound = !dataFiltered.length && !!filterName;

//   return (
//     <DashboardContent>
//       <Box
//         sx={{
//           mb: 5,
//           display: 'flex',
//           alignItems: 'center',
//         }}
//       >
//         <Typography variant="h4" sx={{ flexGrow: 1 }}>
//           Subscriptions
//         </Typography>
//         <Button
//           variant="contained"
//           color="inherit"
//           startIcon={<Iconify icon="mingcute:add-line" />}
//           onClick={handleOpenModal}
//         >
//           New Subscription
//         </Button>
//       </Box>

//       <Card>
//         <UserTableToolbar
//           numSelected={table.selected.length}
//           filterName={filterName}
//           onFilterName={(event: React.ChangeEvent<HTMLInputElement>) => {
//             setFilterName(event.target.value);
//             table.onResetPage();
//           }}
//         />

//         <Scrollbar>
//           <TableContainer sx={{ overflow: 'unset' }}>
//             <Table sx={{ minWidth: 800 }}>
//               <UserTableHead
//                 order={table.order}
//                 orderBy={table.orderBy}
//                 rowCount={users.length}
//                 numSelected={table.selected.length}
//                 onSort={table.onSort}
//                 onSelectAllRows={(checked) =>
//                   table.onSelectAllRows(
//                     checked,
//                     users.map((user) => user.id)
//                   )
//                 }
//                 headLabel={[
//                   { id: 'name', label: 'Name' },
//                   { id: 'company', label: 'Provider' },
//                   { id: 'role', label: 'Category' },
//                   { id: 'isVerified', label: 'Next Renewal', align: 'center' },
//                   { id: 'status', label: 'Status' },
//                   { id: '' },
//                 ]}
//               />
//               <TableBody>
//                 {dataFiltered
//                   .slice(
//                     table.page * table.rowsPerPage,
//                     table.page * table.rowsPerPage + table.rowsPerPage
//                   )
//                   .map((row) => (
//                     <UserTableRow
//                       key={row.id}
//                       row={row}
//                       selected={table.selected.includes(row.id)}
//                       onSelectRow={() => table.onSelectRow(row.id)}
//                     />
//                   ))}

//                 <TableEmptyRows
//                   height={68}
//                   emptyRows={emptyRows(table.page, table.rowsPerPage, users.length)}
//                 />

//                 {notFound && <TableNoData searchQuery={filterName} />}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </Scrollbar>

//         <TablePagination
//           component="div"
//           page={table.page}
//           count={users.length}
//           rowsPerPage={table.rowsPerPage}
//           onPageChange={table.onChangePage}
//           rowsPerPageOptions={[5, 10, 25]}
//           onRowsPerPageChange={table.onChangeRowsPerPage}
//         />
//       </Card>

//       {/* Overlay Form Modal */}
//       <Modal
//         open={openModal}
//         onClose={handleCloseModal}
//         aria-labelledby="add-subscription-modal"
//         sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
//       >
//         <Card sx={{ width: 400, p: 3, boxShadow: 10, borderRadius: 3 }}>
//           <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
//             <Typography variant="h6">Add New Subscription</Typography>
//             <IconButton onClick={handleCloseModal}>
//               <Iconify icon="mingcute:close-line" />
//             </IconButton>
//           </Stack>

//           <Box component="form" onSubmit={handleSubmit}>
//             <Stack spacing={2}>
//               <TextField
//                 label="Subscription Name"
//                 name="name"
//                 value={newSubscription.name}
//                 onChange={handleChange}
//                 fullWidth
//                 required
//               />
//               <TextField
//                 label="Provider"
//                 name="provider"
//                 value={newSubscription.provider}
//                 onChange={handleChange}
//                 fullWidth
//                 required
//               />
//               <TextField
//                 label="Category"
//                 name="category"
//                 value={newSubscription.category}
//                 onChange={handleChange}
//                 fullWidth
//                 required
//               />
//               <TextField
//                 label="Next Renewal Date"
//                 type="date"
//                 name="renewalDate"
//                 value={newSubscription.renewalDate}
//                 onChange={handleChange}
//                 fullWidth
//                 InputLabelProps={{ shrink: true }}
//               />
//               <TextField
//                 label="Status"
//                 name="status"
//                 value={newSubscription.status}
//                 onChange={handleChange}
//                 fullWidth
//               />

//               <Button variant="contained" type="submit" color="primary">
//                 Add Subscription
//               </Button>
//             </Stack>
//           </Box>
//         </Card>
//       </Modal>
//     </DashboardContent>
//   );
// }

// // ----------------------------------------------------------------------

// export function useTable() {
//   const [page, setPage] = useState(0);
//   const [orderBy, setOrderBy] = useState('name');
//   const [rowsPerPage, setRowsPerPage] = useState(5);
//   const [selected, setSelected] = useState<string[]>([]);
//   const [order, setOrder] = useState<'asc' | 'desc'>('asc');

//   const onSort = useCallback(
//     (id: string) => {
//       const isAsc = orderBy === id && order === 'asc';
//       setOrder(isAsc ? 'desc' : 'asc');
//       setOrderBy(id);
//     },
//     [order, orderBy]
//   );

//   const onSelectAllRows = useCallback((checked: boolean, newSelecteds: string[]) => {
//     if (checked) {
//       setSelected(newSelecteds);
//       return;
//     }
//     setSelected([]);
//   }, []);

//   const onSelectRow = useCallback(
//     (inputValue: string) => {
//       const newSelected = selected.includes(inputValue)
//         ? selected.filter((value) => value !== inputValue)
//         : [...selected, inputValue];

//       setSelected(newSelected);
//     },
//     [selected]
//   );

//   const onResetPage = useCallback(() => {
//     setPage(0);
//   }, []);

//   const onChangePage = useCallback((event: unknown, newPage: number) => {
//     setPage(newPage);
//   }, []);

//   const onChangeRowsPerPage = useCallback(
//     (event: React.ChangeEvent<HTMLInputElement>) => {
//       setRowsPerPage(parseInt(event.target.value, 10));
//       onResetPage();
//     },
//     [onResetPage]
//   );

//   return {
//     page,
//     order,
//     onSort,
//     orderBy,
//     selected,
//     rowsPerPage,
//     onSelectRow,
//     onResetPage,
//     onChangePage,
//     onSelectAllRows,
//     onChangeRowsPerPage,
//   };
// }

// import axios from 'axios';
// import { useEffect } from 'react';
// import { useState, useCallback } from 'react';
// import { useSearchParams } from 'react-router-dom';

// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import Modal from '@mui/material/Modal';
// import Stack from '@mui/material/Stack';
// import Table from '@mui/material/Table';
// import Button from '@mui/material/Button';
// import TableBody from '@mui/material/TableBody';
// import TextField from '@mui/material/TextField';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import TableContainer from '@mui/material/TableContainer';
// import TablePagination from '@mui/material/TablePagination';

// import { _users as initialUsers } from 'src/_mock';
// import { DashboardContent } from 'src/layouts/dashboard';

// import { Iconify } from 'src/components/iconify';
// import { Scrollbar } from 'src/components/scrollbar';

// import { TableNoData } from '../table-no-data';
// import { UserTableRow } from '../user-table-row';
// import { UserTableHead } from '../user-table-head';
// import { TableEmptyRows } from '../table-empty-rows';
// import { UserTableToolbar } from '../user-table-toolbar';
// import { emptyRows, applyFilter, getComparator } from '../utils';

// import type { UserProps } from '../user-table-row';
// import { useTable } from 'src/hooks/useTable';

// ----------------------------------------------------------------------
// React & Core Libraries
// ----------------------------------------------------------------------
// import axios from 'axios';
// import { useSearchParams } from 'react-router-dom';
// import { useEffect, useState, useCallback } from 'react';
// import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// // ----------------------------------------------------------------------
// // MUI Components
// // ----------------------------------------------------------------------
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import Modal from '@mui/material/Modal';
// import Stack from '@mui/material/Stack';
// import Table from '@mui/material/Table';
// import Button from '@mui/material/Button';
// import TableBody from '@mui/material/TableBody';
// import TextField from '@mui/material/TextField';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import TableContainer from '@mui/material/TableContainer';
// import TablePagination from '@mui/material/TablePagination';

// // ----------------------------------------------------------------------
// // Project Components & Hooks
// // ----------------------------------------------------------------------
// import { useTable } from 'src/hooks/useTable';

// import { fetchGmailMessages } from 'src/utils/gmail';

// import { auth } from "src/firebaseConfig";
// import { _users as initialUsers } from 'src/_mock';
// import { DashboardContent } from 'src/layouts/dashboard';

// import { Iconify } from 'src/components/iconify';
// import { Scrollbar } from 'src/components/scrollbar';

// // ----------------------------------------------------------------------
// // Table & User Components
// // ----------------------------------------------------------------------
// import { TableNoData } from '../table-no-data';
// import { UserTableRow } from '../user-table-row';
// import { UserTableHead } from '../user-table-head';
// import { TableEmptyRows } from '../table-empty-rows';
// import { UserTableToolbar } from '../user-table-toolbar';
// import { emptyRows, applyFilter, getComparator } from '../utils';

// import type { UserProps } from '../user-table-row';

// export function UserView() {
//   const [googleUser, setGoogleUser] = useState<any>(null);
//   const table = useTable();
//   const [filterName, setFilterName] = useState('');
//   const [openModal, setOpenModal] = useState(false);
//   const [users, setUsers] = useState(initialUsers); // ← local copy of subscriptions

//   // new: search params to detect return from backend
//   const [searchParams] = useSearchParams();

//   const [newSubscription, setNewSubscription] = useState({
//     name: '',
//     provider: '',
//     category: '',
//     renewalDate: '',
//     status: '',
//   });

//   const handleOpenModal = () => setOpenModal(true);
//   const handleCloseModal = () => setOpenModal(false);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setNewSubscription({ ...newSubscription, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     // Add new subscription to list dynamically
//     const newSub = {
//       id: String(users.length + 1),
//       name: newSubscription.name,
//       company: newSubscription.provider,
//       role: newSubscription.category,
//       isVerified: !!newSubscription.renewalDate,
//       status: newSubscription.status || 'active',
//       avatarUrl: `/assets/images/avatar/avatar-${users.length + 1}.webp`,
//     };

//     setUsers((prev) => [...prev, newSub]); // update local state

//     setNewSubscription({
//       name: '',
//       provider: '',
//       category: '',
//       renewalDate: '',
//       status: '',
//     });

//     handleCloseModal();
//   };

//   // ---------------- New Google detection logic ----------------

//   // 1) When user clicks, start the backend OAuth flow (backend redirects to Google)
//   // const startGoogleAuth = () => {
//   //   // open in same tab so backend can redirect to frontend after callback
//   //   window.location.href = 'http://localhost:5000/api/auth/google';
//   //   // if you'd rather open a popup, use window.open(url, 'googleAuthWindow', 'width=600,height=700')
//   // };

// const provider = new GoogleAuthProvider();
// provider.addScope("https://www.googleapis.com/auth/gmail.readonly");

// async function startGoogleAuth() {
//   try {
//     const result = await signInWithPopup(auth, provider);
//     const credential = GoogleAuthProvider.credentialFromResult(result);

//     // Access token for Gmail API
//     const token = credential?.accessToken;
//     console.log("✅ Gmail access token:", token);

//     if (token) {
//       // Now fetch Gmail messages using this access token
//       const response = await fetch(
//         `https://gmail.googleapis.com/gmail/v1/users/me/messages?q=subscription OR invoice`,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       const data = await response.json();
//       console.log("📬 Fetched Gmail Messages:", data.messages || "No messages found.");
//     }
//   } catch (error) {
//     console.error("Google Auth Error:", error);
//   }
// }

//   // 2) Fetch detected subscriptions from backend (after OAuth finishes)
//   const fetchDetectedSubscriptions = async () => {
//     try {
//       const res = await axios.get('http://localhost:5000/api/subscriptions/detected', {
//         withCredentials: true, // if backend sets cookies; optional otherwise
//       });

//       const detected = res.data || [];

//       if (!Array.isArray(detected) || detected.length === 0) {
//         return;
//       }

//       // Map detected items into the same shape as `users` row objects
//       const mapped = detected.map((s: any, idx: number) => ({
//         id: String(users.length + idx + 1),
//         name: s.name || s.service || 'Unknown',
//         company: s.provider || s.vendor || s.sender || 'Unknown',
//         role: s.category || 'Subscription',
//         isVerified: true,
//         status: s.status || 'active',
//         avatarUrl: `/assets/images/avatar/avatar-${users.length + idx + 1}.webp`,
//         nextRenewal: s.renewalDate || s.date || null,
//         amount: s.amount || null,
//       }));

//       // Append to users state (avoid duplicates by `name + company`)
//       setUsers((prev) => {
//         const byKey = new Set(prev.map((p) => `${p.name}|${p.company}`));
//         const filtered = mapped.filter((m: any) => !byKey.has(`${m.name}|${m.company}`));
//         return [...prev, ...filtered];
//       });
//     } catch (err) {
//       console.error('Failed to fetch detected subscriptions', err);
//     }
//   };

//   // On mount, if backend redirected back with ?detected=1 then fetch detected subs
//   useEffect(() => {
//     if (searchParams.get('detected') === '1') {
//       // small delay so backend finalize storage
//       setTimeout(() => {
//         fetchDetectedSubscriptions();
//       }, 500);
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   // ---------------- end new logic ----------------

//   const dataFiltered: UserProps[] = applyFilter({
//     inputData: users, // ← use local state instead of _users
//     comparator: getComparator(table.order, table.orderBy),
//     filterName,
//   });

//   const notFound = !dataFiltered.length && !!filterName;

//   return (
//     <DashboardContent>
//       <Box
//         sx={{
//           mb: 5,
//           display: 'flex',
//           alignItems: 'center',
//         }}
//       >
//         <Typography variant="h4" sx={{ flexGrow: 1 }}>
//           Subscriptions
//         </Typography>

//         {/* keep New Subscription button */}
//         <Button
//           variant="contained"
//           color="inherit"
//           startIcon={<Iconify icon="mingcute:add-line" />}
//           onClick={handleOpenModal}
//           sx={{ mr: 2 }}
//         >
//           New Subscription
//         </Button>

//         {/* NEW: Google detection button (separate) */}
//         <Button
//           variant="outlined"
//           color="primary"
//           startIcon={<Iconify icon={'mdi:email-outline' as any} />}
//           onClick={startGoogleAuth}
//         >
//           Detect from Gmail
//         </Button>
//       {googleUser && (
//         <Box sx={{ mt: 3, textAlign: 'center' }}>
//           <img
//             src={googleUser.photoURL}
//             alt="User Avatar"
//             width={80}
//             height={80}
//             style={{ borderRadius: '50%', marginBottom: 8 }}
//           />
//           <Typography variant="h6">{googleUser.displayName}</Typography>
//           <Typography variant="body2" color="text.secondary">
//             {googleUser.email}
//           </Typography>
//         </Box>
//       )}
//       </Box>

//       {/* rest of your component unchanged (Card, UserTableToolbar, table etc.) */}
//       <Card>
//         <UserTableToolbar
//           numSelected={table.selected.length}
//           filterName={filterName}
//           onFilterName={(event: React.ChangeEvent<HTMLInputElement>) => {
//             setFilterName(event.target.value);
//             table.onResetPage();
//           }}
//         />

//         <Scrollbar>
//           <TableContainer sx={{ overflow: 'unset' }}>
//             <Table sx={{ minWidth: 800 }}>
//               <UserTableHead
//                 order={table.order}
//                 orderBy={table.orderBy}
//                 rowCount={users.length}
//                 numSelected={table.selected.length}
//                 onSort={table.onSort}
//                 onSelectAllRows={(checked) =>
//                   table.onSelectAllRows(
//                     checked,
//                     users.map((user) => user.id)
//                   )
//                 }
//                 headLabel={[
//                   { id: 'name', label: 'Name' },
//                   { id: 'company', label: 'Provider' },
//                   { id: 'role', label: 'Category' },
//                   { id: 'isVerified', label: 'Next Renewal', align: 'center' },
//                   { id: 'status', label: 'Status' },
//                   { id: '' },
//                 ]}
//               />
//               <TableBody>
//                 {dataFiltered
//                   .slice(
//                     table.page * table.rowsPerPage,
//                     table.page * table.rowsPerPage + table.rowsPerPage
//                   )
//                   .map((row) => (
//                     <UserTableRow
//                       key={row.id}
//                       row={row}
//                       selected={table.selected.includes(row.id)}
//                       onSelectRow={() => table.onSelectRow(row.id)}
//                     />
//                   ))}

//                 <TableEmptyRows
//                   height={68}
//                   emptyRows={emptyRows(table.page, table.rowsPerPage, users.length)}
//                 />

//                 {notFound && <TableNoData searchQuery={filterName} />}
//               </TableBody>
//             </Table>
//           </TableContainer>
//         </Scrollbar>

//         <TablePagination
//           component="div"
//           page={table.page}
//           count={users.length}
//           rowsPerPage={table.rowsPerPage}
//           onPageChange={table.onChangePage}
//           rowsPerPageOptions={[5, 10, 25]}
//           onRowsPerPageChange={table.onChangeRowsPerPage}
//         />
//       </Card>

//       {/* Overlay Form Modal unchanged — paste your same modal code here */}
//       <Modal
//         open={openModal}
//         onClose={handleCloseModal}
//         aria-labelledby="add-subscription-modal"
//         sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
//       >
//         <Card sx={{ width: 400, p: 3, boxShadow: 10, borderRadius: 3 }}>
//           <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
//             <Typography variant="h6">Add New Subscription</Typography>
//             <IconButton onClick={handleCloseModal}>
//               <Iconify icon="mingcute:close-line" />
//             </IconButton>
//           </Stack>

//           <Box component="form" onSubmit={handleSubmit}>
//             <Stack spacing={2}>
//               <TextField
//                 label="Subscription Name"
//                 name="name"
//                 value={newSubscription.name}
//                 onChange={handleChange}
//                 fullWidth
//                 required
//               />
//               <TextField
//                 label="Provider"
//                 name="provider"
//                 value={newSubscription.provider}
//                 onChange={handleChange}
//                 fullWidth
//                 required
//               />
//               <TextField
//                 label="Category"
//                 name="category"
//                 value={newSubscription.category}
//                 onChange={handleChange}
//                 fullWidth
//                 required
//               />
//               <TextField
//                 label="Next Renewal Date"
//                 type="date"
//                 name="renewalDate"
//                 value={newSubscription.renewalDate}
//                 onChange={handleChange}
//                 fullWidth
//                 InputLabelProps={{ shrink: true }}
//               />
//               <TextField
//                 label="Status"
//                 name="status"
//                 value={newSubscription.status}
//                 onChange={handleChange}
//                 fullWidth
//               />

//               <Button variant="contained" type="submit" color="primary">
//                 Add Subscription
//               </Button>
//             </Stack>
//           </Box>
//         </Card>
//       </Modal>
//     </DashboardContent>
//   );
// }

import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

// ----------------------------------------------------------------------
// MUI Components
// ----------------------------------------------------------------------
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import TableBody from '@mui/material/TableBody';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';

// ----------------------------------------------------------------------
// Project Components & Hooks
// ----------------------------------------------------------------------
import { useTable } from 'src/hooks/useTable';

import { auth } from 'src/firebaseConfig';
import { DashboardContent } from 'src/layouts/dashboard';

import { Iconify } from 'src/components/iconify';
import { Scrollbar } from 'src/components/scrollbar';

// ----------------------------------------------------------------------
// Table & User Components
// ----------------------------------------------------------------------
import { TableNoData } from '../table-no-data';
import { UserTableRow } from '../user-table-row';
import { UserTableHead } from '../user-table-head';
import { TableEmptyRows } from '../table-empty-rows';
import { UserTableToolbar } from '../user-table-toolbar';
import { emptyRows, applyFilter, getComparator } from '../utils';
import profilepic from '../../../../public/assets/images/avatar/avatar-23.webp';

import type { UserProps } from '../user-table-row';

// ----------------------------------------------------------------------

export function UserView() {
  const [googleUser, setGoogleUser] = useState<any>(null);
  const [gmailMessages, setGmailMessages] = useState<any[]>([]);
  const [gmailToken, setGmailToken] = useState<string | null>(null);

  const table = useTable();
  const [filterName, setFilterName] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [users, setUsers] = useState<UserProps[]>([]);

  useEffect(() => {
    async function fetchSubscriptions() {
      try {
        const res = await axios.get('http://localhost:5000/api/subscriptions');

        const mapped = res.data.map((item: any) => ({
          id: item._id, // 🔥 CRITICAL FIX
          name: item.name,
          company: item.company,
          role: item.role,
          isVerified: item.isVerified,
          status: item.status,
          avatarUrl: item.avatarUrl,
        }));

        setUsers(mapped);
      } catch (error) {
        console.error('Failed to fetch subscriptions', error);
      }
    }

    fetchSubscriptions();
  }, []);

  const [searchParams] = useSearchParams();

  const [newSubscription, setNewSubscription] = useState({
    name: '',
    provider: '',
    category: '',
    renewalDate: '',
    status: '',
  });

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewSubscription({ ...newSubscription, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/api/subscriptions', {
        name: newSubscription.name,
        company: newSubscription.provider,
        role: newSubscription.category,
        isVerified: !!newSubscription.renewalDate,
        status: newSubscription.status || 'active',
        avatarUrl: `/assets/images/avatar/avatar-${Math.floor(Math.random() * 24) + 1}.webp`,
      });

      // 🔥 FORCE id mapping
      const saved = {
        id: res.data._id || res.data.id, // handles both cases
        name: res.data.name,
        company: res.data.company,
        role: res.data.role,
        status: res.data.status,
        isVerified: res.data.isVerified,
        avatarUrl: res.data.avatarUrl,
      };

      setUsers((prev) => [...prev, saved]);

      handleCloseModal();
    } catch (err) {
      console.error('Failed to add subscription', err);
    }
  };

  const handleDeleteSubscription = async (id: string) => {
    if (!id) {
      console.error('❌ Delete failed: id is undefined');
      return;
    }

    try {
      await axios.delete(`http://localhost:5000/api/subscriptions/${id}`);
      setUsers((prev) => prev.filter((u) => u.id !== id));
    } catch (error) {
      console.error('❌ Failed to delete subscription', error);
    }
  };

  // ----------------------------------------------------------------------
  // GOOGLE AUTH + GMAIL FETCH
  // ----------------------------------------------------------------------

  // async function startGoogleAuth() {
  //   try {
  //     const result = await signInWithPopup(auth, provider);
  //     const credential = GoogleAuthProvider.credentialFromResult(result);
  //     const token = credential?.accessToken;
  //     setGmailToken(token || null);
  //     setGoogleUser(result.user);

  //     console.log("✅ Gmail access token:", token);

  //     if (token) {
  //       await fetchGmailMessages(token);
  //     }
  //   } catch (error) {
  //     console.error("Google Auth Error:", error);
  //   }
  // }
  // const provider = new GoogleAuthProvider();
  // provider.addScope('https://www.googleapis.com/auth/gmail.readonly');
  // provider.addScope('https://www.googleapis.com/auth/gmail.metadata');
  // provider.setCustomParameters({ prompt: 'consent' });
  const provider = new GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/gmail.readonly');
  provider.addScope('https://www.googleapis.com/auth/gmail.metadata');
  provider.addScope('https://www.googleapis.com/auth/userinfo.email');
  provider.addScope('https://www.googleapis.com/auth/userinfo.profile');
  provider.setCustomParameters({
    prompt: 'consent', // Forces Google to ask for new permissions
    access_type: 'offline',
  });

  async function startGoogleAuth() {
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      const user = result.user;

      setGoogleUser({
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
      });

      console.log('✅ Gmail access token:', token);

      if (!token) return;

      // Step 1: Search Gmail for likely subscription/invoice messages
      const searchQuery = 'subscription OR invoice OR receipt OR payment';
      const listResponse = await fetch(
        `https://gmail.googleapis.com/gmail/v1/users/me/messages?q=${encodeURIComponent(searchQuery)}&maxResults=10`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const listData = await listResponse.json();

      if (!listData.messages || listData.messages.length === 0) {
        console.log('No messages found.');
        return;
      }

      // Step 2: Fetch details of each message
      const messages = await Promise.all(
        listData.messages.slice(0, 10).map(async (msg: any) => {
          const res = await fetch(
            `https://gmail.googleapis.com/gmail/v1/users/me/messages/${msg.id}?format=metadata&metadataHeaders=Subject&metadataHeaders=From`,
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );
          const data = await res.json();
          const headers = data.payload.headers;
          const subject = headers.find((h: any) => h.name === 'Subject')?.value || 'No Subject';
          const from = headers.find((h: any) => h.name === 'From')?.value || 'Unknown Sender';
          return { id: msg.id, subject, from };
        })
      );

      console.log('📬 Decoded Gmail Messages:', messages);

      // Step 3: Convert detected messages to subscription entries
      const mapped = messages.map((m, idx) => {
        const lower = m.from.toLowerCase();
        let category = 'Subscription';
        // eslint-disable-next-line @typescript-eslint/no-shadow
        let provider = 'Unknown';

        if (lower.includes('netflix')) {
          provider = 'Netflix';
          category = 'Entertainment';
        } else if (lower.includes('spotify')) {
          provider = 'Spotify';
          category = 'Music';
        } else if (lower.includes('amazon')) {
          provider = 'Amazon Prime';
          category = 'Shopping';
        } else if (lower.includes('apple')) {
          provider = 'Apple';
          category = 'Apps';
        } else if (lower.includes('google')) {
          provider = 'Google One';
          category = 'Cloud Storage';
        }

        return {
          id: String(users.length + idx + 1),
          name: m.subject.slice(0, 40),
          company: provider,
          role: category,
          isVerified: true,
          status: 'active',
          avatarUrl: `/assets/images/avatar/avatar-${(users.length + idx + 1) % 24}.webp`,
        };
      });

      setUsers((prev) => {
        // Deduplicate based on subject + sender combo
        const existingKeys = new Set(prev.map((p) => `${p.name}|${p.company}`));
        const newOnes = mapped.filter((m) => !existingKeys.has(`${m.name}|${m.company}`));
        return [...prev, ...newOnes];
      });
    } catch (error) {
      console.error('Google Auth Error:', error);
    }
  }

  // Fetch Gmail messages and decode subjects
  async function fetchGmailMessages(token: string) {
    try {
      // Step 1: Get message list (IDs)
      const listResponse = await fetch(
        'https://gmail.googleapis.com/gmail/v1/users/me/messages?q=subscription OR invoice',
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const listData = await listResponse.json();
      const messages = listData.messages || [];

      if (messages.length === 0) {
        console.log('No messages found.');
        setGmailMessages([]);
        return;
      }

      // Step 2: Fetch details for each message
      const messageDetails = await Promise.all(
        messages.slice(0, 10).map(async (msg: any) => {
          const res = await fetch(
            `https://gmail.googleapis.com/gmail/v1/users/me/messages/${msg.id}`,
            { headers: { Authorization: `Bearer ${token}` } }
          );
          const data = await res.json();

          const headers = data.payload.headers;
          const subjectHeader = headers.find((h: any) => h.name === 'Subject');
          const fromHeader = headers.find((h: any) => h.name === 'From');

          return {
            id: msg.id,
            subject: subjectHeader ? subjectHeader.value : '(No Subject)',
            from: fromHeader ? fromHeader.value : '(Unknown Sender)',
          };
        })
      );

      console.log('📬 Decoded Gmail Messages:', messageDetails);
      setGmailMessages(messageDetails);
    } catch (error) {
      console.error('Error fetching Gmail messages:', error);
    }
  }

  // ----------------------------------------------------------------------
  // FETCH DETECTED SUBSCRIPTIONS (existing logic)
  // ----------------------------------------------------------------------

  const fetchDetectedSubscriptions = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/subscriptions/detected', {
        withCredentials: true,
      });

      const detected = res.data || [];
      if (!Array.isArray(detected) || detected.length === 0) return;

      const mapped = detected.map((s: any, idx: number) => ({
        id: String(users.length + idx + 1),
        name: s.name || s.service || 'Unknown',
        company: s.provider || s.vendor || s.sender || 'Unknown',
        role: s.category || 'Subscription',
        isVerified: true,
        status: s.status || 'active',
        avatarUrl: `/assets/images/avatar/avatar-${users.length + idx + 1}.webp`,
        nextRenewal: s.renewalDate || s.date || null,
        amount: s.amount || null,
      }));

      setUsers((prev) => {
        const byKey = new Set(prev.map((p) => `${p.name}|${p.company}`));
        const filtered = mapped.filter((m: any) => !byKey.has(`${m.name}|${m.company}`));
        return [...prev, ...filtered];
      });
    } catch (err) {
      console.error('Failed to fetch detected subscriptions', err);
    }
  };
  

  useEffect(() => {
    if (searchParams.get('detected') === '1') {
      setTimeout(() => {
        fetchDetectedSubscriptions();
      }, 500);
    }
  }, [searchParams]);

  
  console.log(
  '🧪 USERS STATE:',
  users.map((u) => ({ id: u.id, name: u.name }))
);


  // ----------------------------------------------------------------------
  // TABLE DATA + UI
  // ----------------------------------------------------------------------

  const dataFiltered: UserProps[] = applyFilter({
    inputData: users,
    comparator: getComparator(table.order, table.orderBy),
    filterName,
  });

  const notFound = !dataFiltered.length && !!filterName;

  return (
    <DashboardContent>
      <Box
        sx={{
          mb: 5,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" sx={{ flexGrow: 1 }}>
          Subscriptions
        </Typography>

        {/* Add Subscription */}
        <Button
          variant="contained"
          color="inherit"
          startIcon={<Iconify icon="mingcute:add-line" />}
          onClick={handleOpenModal}
          sx={{ mr: 2 }}
        >
          New Subscription
        </Button>

        {/* Detect from Gmail */}
        <Button
          variant="outlined"
          color="primary"
          startIcon={<Iconify icon={'mdi:email-outline' as any} />}
          onClick={startGoogleAuth}
        >
          Detect from Gmail
        </Button>
      </Box>

      {/* Gmail User Info */}
      {googleUser && (
        <Box sx={{ mt: 3, textAlign: 'center' }}>
          <img
            src={profilepic}
            alt="User Avatar"
            width={80}
            height={80}
            style={{ borderRadius: '50%', marginBottom: 8 }}
          />
          <Typography variant="h6">{googleUser.displayName}</Typography>
          <Typography variant="body2" color="text.secondary">
            {googleUser.email}
          </Typography>
        </Box>
      )}

      {/* Gmail Messages Display */}
      {gmailMessages.length > 0 && (
        <Card sx={{ mt: 4, p: 2 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Detected Gmail Messages
          </Typography>
          <Scrollbar>
            <ul>
              {gmailMessages.map((msg) => (
                <li key={msg.id} style={{ marginBottom: 10 }}>
                  <strong>{msg.subject}</strong> <br />
                  <small style={{ color: '#666' }}>{msg.from}</small>
                </li>
              ))}
            </ul>
          </Scrollbar>
        </Card>
      )}

      {/* Subscription Table */}
      <Card sx={{ mt: 4 }}>
        <UserTableToolbar
          numSelected={table.selected.length}
          filterName={filterName}
          onFilterName={(event: React.ChangeEvent<HTMLInputElement>) => {
            setFilterName(event.target.value);
            table.onResetPage();
          }}
        />

        <Scrollbar>
          <TableContainer sx={{ overflow: 'unset' }}>
            <Table sx={{ minWidth: 800 }}>
              <UserTableHead
                order={table.order}
                orderBy={table.orderBy}
                rowCount={users.length}
                numSelected={table.selected.length}
                onSort={table.onSort}
                onSelectAllRows={(checked) =>
                  table.onSelectAllRows(
                    checked,
                    users.map((user) => user.id)
                  )
                }
                headLabel={[
                  { id: 'name', label: 'Name' },
                  { id: 'company', label: 'Provider' },
                  { id: 'role', label: 'Category' },
                  { id: 'isVerified', label: 'Next Renewal', align: 'center' },
                  { id: 'status', label: 'Status' },
                  { id: '' },
                ]}
              />
              <TableBody>
                {dataFiltered
                  .slice(
                    table.page * table.rowsPerPage,
                    table.page * table.rowsPerPage + table.rowsPerPage
                  )
                  .map((row) => (
                    <UserTableRow
                      key={row.id}
                      row={row}
                      selected={table.selected.includes(row.id)}
                      onSelectRow={() => table.onSelectRow(row.id)}
                      onDelete={() => handleDeleteSubscription(row.id)} // ✅ id passed HERE
                    />
                  ))}

                <TableEmptyRows
                  height={68}
                  emptyRows={emptyRows(table.page, table.rowsPerPage, users.length)}
                />

                {notFound && <TableNoData searchQuery={filterName} />}
              </TableBody>
            </Table>
          </TableContainer>
        </Scrollbar>

        <TablePagination
          component="div"
          page={table.page}
          count={users.length}
          rowsPerPage={table.rowsPerPage}
          onPageChange={table.onChangePage}
          rowsPerPageOptions={[5, 10, 25]}
          onRowsPerPageChange={table.onChangeRowsPerPage}
        />
      </Card>

      {/* Add Subscription Modal */}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="add-subscription-modal"
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Card sx={{ width: 400, p: 3, boxShadow: 10, borderRadius: 3 }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
            <Typography variant="h6">Add New Subscription</Typography>
            <IconButton onClick={handleCloseModal}>
              <Iconify icon="mingcute:close-line" />
            </IconButton>
          </Stack>

          <Box component="form" onSubmit={handleSubmit}>
            <Stack spacing={2}>
              <TextField
                label="Subscription Name"
                name="name"
                value={newSubscription.name}
                onChange={handleChange}
                fullWidth
                required
              />
              <TextField
                label="Provider"
                name="provider"
                value={newSubscription.provider}
                onChange={handleChange}
                fullWidth
                required
              />
              <TextField
                label="Category"
                name="category"
                value={newSubscription.category}
                onChange={handleChange}
                fullWidth
                required
              />
              <TextField
                label="Next Renewal Date"
                type="date"
                name="renewalDate"
                value={newSubscription.renewalDate}
                onChange={handleChange}
                fullWidth
                InputLabelProps={{ shrink: true }}
              />
              <TextField
                label="Status"
                name="status"
                value={newSubscription.status}
                onChange={handleChange}
                fullWidth
              />

              <Button variant="contained" type="submit" color="primary">
                Add Subscription
              </Button>
            </Stack>
          </Box>
        </Card>
      </Modal>
      
    </DashboardContent>
    
  );
}
