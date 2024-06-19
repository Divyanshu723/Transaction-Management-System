import React, { useState, useEffect } from 'react';
import { getAllTransactions } from '../services/operations/transactionAPI';
import { getStatistics } from '../services/operations/statisticsAPI';
import { getPriceRange } from '../services/operations/priceRangeAPI';
import ApexChart from './ApexChart';
import TransactionTable from './TransactionTable';
import StatisticsSection from './StatisticsSection';
import { Input } from '@nextui-org/react';
import { IoSearch } from "react-icons/io5";
import Dropdown from './Dropdown';
import LoadingSkeleton from './LoadingSkeleton';

const TransactionDashboard = () => {
    const [transactions, setTransactions] = useState([]);
    const [search, setSearch] = useState('');
    const [month, setMonth] = useState('March');
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(10);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(false);
    const [statistics, setStatistics] = useState({
        totalSaleAmount: 0,
        totalSoldItems: 0,
        totalNotSoldItems: 0
    });
    const [priceRange, setPriceRange] = useState([]);

    // Fetch transactions from the backend
    const fetchTransactions = async (queryParams) => {
        try {
            setLoading(true);
            const response = await getAllTransactions(queryParams);
            setTransactions(response?.data || []);
            setTotalPages(Math.ceil(response?.totalCount / perPage)); // Calculate total pages
            setLoading(false);
        } catch (error) {
            console.error('Error fetching transactions:', error.message);
        }
    };

    // Fetch statistics for the selected month
    const fetchStatistics = async () => {
        try {
            setLoading(true);
            const response = await getStatistics({ month });
            setStatistics(response);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching statistics:', error.message);
        }
    };

    // Fetch price range for the selected month
    const fetchPriceRange = async () => {
        try {
            setLoading(true);
            const response = await getPriceRange({ month });
            setPriceRange(response);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching price Range Data:', error.message);
        }
    };

    // Fetch transactions and statistics on month, page, or perPage change
    useEffect(() => {
        if (!search)
            fetchTransactions({ month, page, perPage });
    }, [month, page, perPage, search]);

    useEffect(() => {
        fetchStatistics();
        fetchPriceRange();
    }, [month]);


    // Handle month selection change
    const handleMonthChange = (e) => {
        setSearch('');
        setMonth(e.target.value);
        setPage(1); // Reset to first page on new month selection
    };

    // Handle search submit (either clicking the search button or pressing Enter)
    const handleSearchSubmit = (e) => {
        if (e.key === 'Enter') {
            setPage(1); // Reset to first page on new search
            fetchTransactions({ search, month, page: 1, perPage });
        }
    };

    // Handle page change
    const handlePageChange = (newPage) => {
        if (newPage < 1 || newPage > totalPages) return;
        setPage(newPage);
    };

    // Handle per-page count change
    const handlePerPageChange = (e) => {
        setPerPage(Number(e.target.value));
        setPage(1); // Reset to first page on items per page change
    };


    return (
        <div className="container mx-auto p-4">
            {/* Header Section */}
            <h1 className="text-3xl font-bold font-inter text-gray-800">Roxiler Systems</h1>
            {/* Transaction Dashboard Heading */}
            <div>
                <h2 className="text-2xl flex font-inter mt-10 md:mt-5 lg:mt-2 items-center justify-center font-semibold mb-2">Transaction Dashboard</h2>
            </div>
            <div className="flex justify-between items-center mb-4">

                <div className='w-[25%] '>
                    <Input
                        isClearable
                        radius="lg"
                        onKeyDown={handleSearchSubmit}
                        value={search}
                        onValueChange={setSearch}
                        classNames={{
                            label: "text-black/50 dark:text-white/90",
                            inputWrapper: [
                                "!cursor-text",
                            ],
                        }}
                        placeholder="Type to search transactions and press Enter"
                        startContent={
                            <IoSearch className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0 mt-1 text-lg" />
                        }
                    />
                </div>

                {/* Month Dropdown */}
                <Dropdown
                    value={month}
                    onChange={handleMonthChange}
                    options={[
                        "January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"
                    ]}
                />
            </div>

            {/* Transaction Table Section */}
            {
                loading ? (<LoadingSkeleton />) : (<TransactionTable
                    transactions={transactions}
                    page={page}
                    totalPages={totalPages}
                    perPage={perPage}
                    handlePageChange={handlePageChange}
                    handlePerPageChange={handlePerPageChange}
                />)
            }

            <div className='flex flex-col items-center justify-center gap-10 mt-8 rounded-md'>
                {/* Statistics Section */}
                <div className='mx-auto flex flex-col gap-2'>
                    <p className=" text-2xl font-semibold font-inter mb-2">Transaction Statistics - {month}</p>
                    {
                        loading ? (<LoadingSkeleton />) : (<div className="bg-white rounded-md shadow-md p-4" style={{ backgroundColor: '#EDF6F6' }}>
                            <StatisticsSection statistics={statistics} month={month} />
                        </div>)
                    }
                </div>
                <div className='w-full border border-gray-300'></div>
                {/* Chart Section */}
                <div className='mx-auto flex flex-col gap-2'>
                    <p className="text-2xl text-center font-semibold font-inter mb-2">Bar Chart Statistics - {month}</p>
                    {
                        loading ? (<LoadingSkeleton />) : (<div className="bg-white rounded-md shadow-md p-4" style={{ backgroundColor: '#EDF6F6' }}>
                            <ApexChart priceRange={priceRange} />
                        </div>)
                    }
                </div>
                <div className='w-full border border-gray-300'></div>
            </div>
            <footer className='mt-5'>
                <p className='text-center font-semibold'>Made with ❤️ by Divyanshu</p>
            </footer>
        </div>
    );
};

export default TransactionDashboard;
