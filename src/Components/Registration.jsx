import Typewriter from "typewriter-effect";
import { Table } from "flowbite-react";

export function Registration() {
    return (
        <div className="bg-blue-50 mx-auto flex flex-col text-gray-900">
            <div className="container mx-auto  py-8 sm:py-12 flex flex-col text-gray-900">
                <div className="text-center mb-8">
                    <h1 className="sm:text-4xl text-2xl font-medium text-gray-900 mb-2">
                        <Typewriter onInit={(typewriter) => {
                            typewriter
                                .typeString("REGISTRATION")
                                .pauseFor(1500)
                                .start();
                        }} />
                    </h1>
                    <div className="h-1 w-20 bg-blue-500 rounded mx-auto mb-4"></div>
                </div>

                <div className="overflow-x-auto">
                    <Table hoverable className="w-full border border-gray-300 rounded-lg">
                        <Table.Head>
                            <Table.HeadCell className="whitespace-nowrap font-medium text-lg border border-gray-300 bg-gray-100 p-4">Category</Table.HeadCell>
                            <Table.HeadCell className="whitespace-nowrap font-medium text-lg border border-gray-300 bg-gray-100 p-4">Indian Participants</Table.HeadCell>
                            <Table.HeadCell className="whitespace-nowrap font-medium text-lg border border-gray-300 bg-gray-100 p-4">Foreign Participants</Table.HeadCell>
                        </Table.Head>
                        <Table.Body>
                            <Table.Row className="bg-white">
                                <Table.Cell className="whitespace-nowrap font-medium text-lg text-gray-900 border border-gray-300 p-4">Students</Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-lg text-gray-900 border border-gray-300 p-4">Rs. 2,500/-</Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-lg text-gray-900 border border-gray-300 p-4">USD 150</Table.Cell>
                            </Table.Row>
                            <Table.Row className="bg-white">
                                <Table.Cell className="whitespace-nowrap font-medium text-lg text-gray-900 border border-gray-300 p-4">Faculty/Academia</Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-lg text-gray-900 border border-gray-300 p-4">Rs. 5,000/-</Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-lg text-gray-900 border border-gray-300 p-4">USD 250</Table.Cell>
                            </Table.Row>
                            <Table.Row className="bg-white">
                                <Table.Cell className="whitespace-nowrap font-medium text-lg text-gray-900 border border-gray-300 p-4">Industry/R&D Organization</Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-lg text-gray-900 border border-gray-300 p-4">Rs. 10,000/-</Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-lg text-gray-900 border border-gray-300 p-4">USD 450</Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </div>

                <p className="text-xl pt-5 mt-5">Registration can be done online using the link given below, and the registration fee can also be paid online to the below account:</p>
                <div className="overflow-x-auto overflow-y-hidden ">
                    <Table hoverable className="w-full mt-8 border border-gray-300 rounded-lg">
                        <Table.Head>
                            <Table.HeadCell className="whitespace-nowrap font-medium text-lg border border-gray-300 bg-gray-100 p-4">Beneficiary Name</Table.HeadCell>
                            <Table.HeadCell className="whitespace-nowrap font-medium text-lg border border-gray-300 bg-gray-100 p-4">Punjab Engineering College (Registration / Applications A/c)</Table.HeadCell>
                        </Table.Head>
                        <Table.Body>
                            <Table.Row className="bg-white">
                                <Table.Cell className="whitespace-nowrap font-medium text-lg text-gray-900 border border-gray-300 p-4">Bank</Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-lg text-gray-900 border border-gray-300 p-4">State Bank of India</Table.Cell>
                            </Table.Row>
                            <Table.Row className="bg-white">
                                <Table.Cell className="whitespace-nowrap font-medium text-lg text-gray-900 border border-gray-300 p-4">Account No.</Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-lg text-gray-900 border border-gray-300 p-4">39083056639</Table.Cell>
                            </Table.Row>
                            <Table.Row className="bg-white">
                                <Table.Cell className="whitespace-nowrap font-medium text-lg text-gray-900 border border-gray-300 p-4">IFSC</Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-lg text-gray-900 border border-gray-300 p-4">SBIN0002452</Table.Cell>
                            </Table.Row>
                            <Table.Row className="bg-white">
                                <Table.Cell className="whitespace-nowrap font-medium text-lg text-gray-900 border border-gray-300 p-4">MICRO</Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-lg text-gray-900 border border-gray-300 p-4">160002008</Table.Cell>
                            </Table.Row>
                            <Table.Row className="bg-white">
                                <Table.Cell className="whitespace-nowrap font-medium text-lg text-gray-900 border border-gray-300 p-4">Address</Table.Cell>
                                <Table.Cell className="whitespace-nowrap font-medium text-lg text-gray-900 border border-gray-300 p-4">PEC Market, Sector 12, Chandigarh</Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </div>

                <div className="mt-8 text-center">
                    <button className="inline-block px-8 py-4 text-white bg-blue-500 border border-transparent rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white">
                        Register
                    </button>
                </div>
            </div>
        </div>
    );
}
