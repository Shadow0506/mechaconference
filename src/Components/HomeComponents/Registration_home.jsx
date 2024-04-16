export function Registration_home() {
    return (

        <div class="container mx-auto flex flex-col">
    <div class="flex flex-col text-center w-full mt-10">
        <h1 class="sm:text-5xl text-2xl font-medium title-font text-gray-900">
            REGISTRATION FEES
        </h1>
    </div>
    <div class="lg:w-5/6 mx-auto">
        <div class="rounded-lg overflow-hidden">
            <div class="relative overflow-x-auto">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                CATEGORY
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Indian Participants
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Foreign Participants
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="border-b bg-gray-800 border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Students
                            </th>
                            <td class="px-6 py-4">
                                Rs. 2,500/-
                            </td>
                            <td class="px-6 py-4">
                                USD 150
                            </td>
                        </tr>
                        <tr class="border-b bg-gray-800 border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Faculty/ Academia
                            </th>
                            <td class="px-6 py-4">
                                Rs. 5,000/-
                            </td>
                            <td class="px-6 py-4">
                                USD 250
                            </td>
                        </tr>
                        <tr class="bg-gray-800 border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Industry/R&D Organization
                            </th>
                            <td class="px-6 py-4">
                                Rs. 10,000/-
                            </td>
                            <td class="px-6 py-4">
                                USD 450
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>



    )
}