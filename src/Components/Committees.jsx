import Typewriter from "typewriter-effect";
import { Table } from "flowbite-react";
import { faculty } from "./advisory.json";
import nitin from './nitindixit.jpeg'
import { Committees_home } from "./HomeComponents/Committees_home";
import { New_committee } from "./HomeComponents/New_committee";
export function Committees() {
    return (
        <div style={{ backgroundColor: '#F0F8FF' }}>
            <div className="pt-10">

                <Committees_home />
                <New_committee/>
            </div>

            <section className="text-gray-600 body-font ">
                <div className="container  mx-auto">
                    <div className="flex flex-col text-center w-full">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                            <Typewriter onInit={(typewriter) => {
                                typewriter
                                    .typeString("Advisory Committee")
                                    .pauseFor(1500)
                                    .start();
                            }} />
                        </h1>
                    </div>
                    <div className="overflow-x-auto">
                        <Table hoverable className=" border border-gray-300 rounded-lg">
                            <Table.Head>
                                <Table.HeadCell className="whitespace-nowrap font-medium text-lg border border-gray-300 bg-gray-100 p-2 md:p-4">Name</Table.HeadCell>
                                <Table.HeadCell className="whitespace-nowrap font-medium text-lg border border-gray-300 bg-gray-100 p-2 md:p-4">Designation</Table.HeadCell>
                                <Table.HeadCell className="whitespace-nowrap font-medium text-lg border border-gray-300 bg-gray-100 p-2 md:p-4">Institute</Table.HeadCell>
                                <Table.HeadCell className="whitespace-nowrap font-medium text-lg border border-gray-300 bg-gray-100 p-2 md:p-4">Email</Table.HeadCell>
                                <Table.HeadCell className="whitespace-nowrap font-medium text-lg border border-gray-300 bg-gray-100 p-2 md:p-4">Mobile Number</Table.HeadCell>
                                <Table.HeadCell className="whitespace-nowrap font-medium text-lg border border-gray-300 bg-gray-100 p-2 md:p-4">Area of Research</Table.HeadCell>
                            </Table.Head>
                            <Table.Body>
                                {faculty.map((item, index) => (
                                    <Table.Row key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                        <Table.Cell className="whitespace-nowrap font-medium text-base text-gray-900 border border-gray-300 p-2 md:p-4">{item.name}</Table.Cell>
                                        <Table.Cell className="whitespace-nowrap font-medium text-base text-gray-900 border border-gray-300 p-2 md:p-4">{item.designation}</Table.Cell>
                                        <Table.Cell className="whitespace-nowrap font-medium text-base text-gray-900 border border-gray-300 p-2 md:p-4">{item.institute}</Table.Cell>
                                        <Table.Cell className="whitespace-nowrap font-medium text-base text-gray-900 border border-gray-300 p-2 md:p-4">{item.emailid}</Table.Cell>
                                        <Table.Cell className="whitespace-nowrap font-medium text-base text-gray-900 border border-gray-300 p-2 md:p-4">{item.mobile_number}</Table.Cell>
                                        <Table.Cell className="whitespace-wrap font-medium text-base text-gray-900 border border-gray-300 p-2 md:p-4">{item.area_of_research}</Table.Cell>
                                    </Table.Row>
                                ))}
                            </Table.Body>
                        </Table>
                    </div>

                </div>
            </section>

        </div>
    )
}
