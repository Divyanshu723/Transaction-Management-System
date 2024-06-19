import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination, Button } from "@nextui-org/react";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";

const TransactionTable = ({
    transactions,
    page,
    totalPages,
    perPage,
    handlePageChange,
    handlePerPageChange
}) => {
    return (
        <div className="flex flex-col gap-3">
            <Table
                aria-label="Transaction Table"
                color="default"
                selectionMode="single"
                defaultSelectedKeys={["0"]}
            >
                <TableHeader>
                    <TableColumn>ID</TableColumn>
                    <TableColumn>Title</TableColumn>
                    <TableColumn>Description</TableColumn>
                    <TableColumn>Price</TableColumn>
                    <TableColumn>Category</TableColumn>
                    <TableColumn>Sold</TableColumn>
                    <TableColumn>Image</TableColumn>
                </TableHeader>
                <TableBody>
                    {transactions.map(transaction => (
                        <TableRow key={transaction.id} >
                            <TableCell>{transaction.id}</TableCell>
                            <TableCell>{transaction.title}</TableCell>
                            <TableCell>{transaction.description}</TableCell>
                            <TableCell>{transaction.price}</TableCell>
                            <TableCell>{transaction.category}</TableCell>
                            <TableCell>{transaction.sold ? 'Yes' : 'No'}</TableCell>
                            <TableCell>
                                <img src={transaction.image} alt={transaction.productTitle} className="w-20 h-20 object-contain" />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            {/* Pagination and Controls */}
            <div className="flex justify-between items-center mt-4">
                <div className="flex items-center gap-2">
                    <p className="font-semibold">Page</p>
                    <Pagination
                        shadow
                        size="sm"
                        total={totalPages}
                        page={page}
                        onChange={handlePageChange}
                    />
                </div>

                <div className='flex gap-4'>
                    <Button
                        onClick={() => handlePageChange(page - 1)}
                        disabled={page === 1}
                        variant="bordered"
                        startContent={<MdOutlineNavigateBefore className="text-lg"/>}
                        className="cursor-pointer font-medium"
                    >
                        Previous
                    </Button>
                    <Button
                        onClick={() => handlePageChange(page + 1)}
                        disabled={Math.ceil(totalPages) === page}
                        color="primary"
                        endContent={<MdOutlineNavigateNext className="text-lg" />}
                        className="cursor-pointer text-medium"
                    >
                        Next
                    </Button>
                </div>

                <select
                    className="border p-2 rounded-md bg-[#F4F4F5] text-gray-700 focus:outline-none cursor-pointer"
                    value={perPage}
                    onChange={handlePerPageChange}
                >
                    {[2, 5, 10, 20, 30, 40, 50].map(count => (
                        <option key={count} value={count}>{count} per page</option>
                    ))}
                </select>
            </div>
            <div className=" mt-8 border-1 border-gray-300"></div>
        </div>
    );
};

export default TransactionTable;
