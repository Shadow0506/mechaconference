import { useNavigate } from "react-router-dom";
import { Table } from "flowbite-react";
export function Registration_home() {
    const navigate = useNavigate();
    return (
        <div className="mx-auto flex flex-col text-gray-900">
            <div className="px-5 py-5 mx-auto flex flex-col">
                <div className="flex flex-wrap w-full mb-4 mx-auto">
                    <div className="lg:w-full lg:mb-0 pt-10">
                        <h1 className="sm:text-6xl text-3xl font-medium title-font mb-4">
                            REGISTRATION
                        </h1>
                        <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                    </div>
                </div>
            </div>
            <div className="sm:mx-auto overflow-x-auto">
                <Table hoverable className="border border-gray-300 rounded-lg relative">
                    <div className="absolute inset-0 z-0">
                        <img src="https://img.freepik.com/free-photo/view-arrangement-with-keyboard-notebooks_23-2148847749.jpg?size=626&ext=jpg&ga=GA1.1.553209589.1715212800&semt=ais_user" alt="background" className="object-cover w-full h-full opacity-10 rounded-lg" />
                    </div>
                    <Table.Head className="relative z-10">
                        <Table.HeadCell className="whitespace-nowrap font-medium sm:text-2xl text-xl border border-gray-300 bg-gray-100 rounded-t-lg sm:p-10">Category</Table.HeadCell>
                        <Table.HeadCell className="whitespace-nowrap font-medium sm:text-2xl text-xl border border-gray-300 bg-gray-100 sm:p-10">Indian Participants</Table.HeadCell>
                        <Table.HeadCell className="whitespace-nowrap font-medium sm:text-2xl text-xl border border-gray-300 bg-gray-100 sm:p-10">Foreign Participants</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        <Table.Row className="bg-white">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 sm:text-2xl text-xl border border-gray-300 sm:p-8">Students</Table.Cell>
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 sm:text-2xl text-xl border border-gray-300 sm:p-8">Rs. 2,500/-</Table.Cell>
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 sm:text-2xl text-xl border border-gray-300 sm:p-8">USD 150</Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 sm:text-2xl text-xl border border-gray-300 sm:p-8">Faculty/ Academia</Table.Cell>
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 sm:text-2xl text-xl border border-gray-300 sm:p-8">Rs. 5,000/-</Table.Cell>
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 sm:text-2xl text-xl border border-gray-300 sm:p-8">USD 250</Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 sm:text-2xl text-xl border border-gray-300 sm:p-8">Industry/R&D Organization</Table.Cell>
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 sm:text-2xl text-xl border border-gray-300 sm:p-8">Rs. 10,000/-</Table.Cell>
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 sm:text-2xl text-xl border border-gray-300 sm:p-8">USD 450</Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>

            <div className="flex justify-center">
                <a className="text-indigo-500 inline-flex items-center sm:mt-10 mt-5" onClick={() => { navigate('/registration') }} target="_blank">Proceed To Register
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </a>
            </div>
        </div>
    );
}
