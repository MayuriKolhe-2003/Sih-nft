import { useCallback, useEffect, useState } from "react"
import Link from "next/link";

const completed=()=> {
    const handleClick = () => {
        alert("Certificate generated with Token Id : tygfer98-hyuij786-vfrtygu6-uijhyuvf")
      };
      const handleClick1 = () => {
        alert(" Token Id : bnxc23qw-hyuij786-vfrtygu6-56tr3io4")
      };
    return (
        <div class="mt-10">
            <div class="text-center">
                <h2 class="text-3xl font-semibold text-red-800">Online course for Blockchain</h2>
                <p class="text-sm text-gray-500">Launch Date: Sep 30, 2023</p>
                </div>
                <div class="overflow-x-auto mt-8">
                
                <table class="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr>
                            <th class="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider border-b">ID</th>
                            <th class="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider border-b">Name</th>
                            <th class="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider border-b">Completion Date</th>
                            <th class="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider border-b">Other</th>
                            <th class="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider border-b">Certificate</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">

                        <tr>
                            <td class="px-6 py-4 whitespace-nowrap">1</td>
                            <td class="px-6 py-4 whitespace-nowrap">John Doe</td>
                            <td class="px-6 py-4 whitespace-nowrap">2023-09-30</td>
                            <td class="px-6 py-4 whitespace-nowrap">
                            <button class="px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600">Other data</button>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <button class="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600" onClick={handleClick1}>Issued</button>
                            </td>
                        </tr>

                        <tr>
                            <td class="px-6 py-4 whitespace-nowrap">2</td>
                            <td class="px-6 py-4 whitespace-nowrap">Mayuri Kolhe</td>
                            <td class="px-6 py-4 whitespace-nowrap">2023-09-30</td>
                            <td class="px-6 py-4 whitespace-nowrap">
                            <button class="px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600">Other data</button>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <button class="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600" onClick={handleClick}>Generate</button>
                            </td>
                        </tr>

                        <tr>
                            <td class="px-6 py-4 whitespace-nowrap">3</td>
                            <td class="px-6 py-4 whitespace-nowrap">Aditya Mittal</td>
                            <td class="px-6 py-4 whitespace-nowrap">2023-09-30</td>
                            <td class="px-6 py-4 whitespace-nowrap">
                            <button class="px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600">Other data</button>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <button class="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600" onClick={handleClick1}>Issued</button>
                            </td>
                        </tr>

                        <tr>
                            <td class="px-6 py-4 whitespace-nowrap">4</td>
                            <td class="px-6 py-4 whitespace-nowrap">Rushi Balapure</td>
                            <td class="px-6 py-4 whitespace-nowrap">2023-09-30</td>
                            <td class="px-6 py-4 whitespace-nowrap">
                            <button class="px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600">Other data</button>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <button class="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600" onClick={handleClick}>Generate</button>
                            </td>
                        </tr>

                        <tr>
                            <td class="px-6 py-4 whitespace-nowrap">5</td>
                            <td class="px-6 py-4 whitespace-nowrap">Ayush Bulbule</td>
                            <td class="px-6 py-4 whitespace-nowrap">2023-09-30</td>
                            <td class="px-6 py-4 whitespace-nowrap">
                            <button class="px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600">Other data</button>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <button class="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600" onClick={handleClick}>Generate</button>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>


        </div>
    );
}

export default completed;