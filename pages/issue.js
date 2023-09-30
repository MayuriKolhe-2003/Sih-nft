import { useCallback, useEffect, useState } from "react"
import Link from "next/link";

export default function issue() {

  return (
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">

    <Link href='completed'>
  <div class="bg-white shadow-lg rounded-lg overflow-hidden">
    <img src="https://www.iilmlko.ac.in/demo/wp-content/uploads/2023/04/20191209online.jpg" alt="Course 1" class="w-full h-45 object-cover"/>
    <div class="p-2">
      <h2 class="text-lg font-semibold text-gray-800">Online course for Blockchain</h2>
      <p class="text-sm text-gray-500">Launch Date: Sep 30, 2023</p>
    </div>
    <div class="p-2 border-t border-gray-200">
      <div class="flex justify-between items-center">
        <div class="text-sm text-gray-500">
          <i class="fas fa-user"></i> Applicants: 1000
        </div>
        <div class="text-sm text-gray-500">
          <i class="fas fa-check-circle"></i> Completed: 50
        </div>
      </div>
    </div>
  </div>
  </Link>

 
  <div class="bg-white shadow-lg rounded-lg overflow-hidden">
    <img src="https://media.collegedekho.com/media/img/news/List-of-polytechnic-courses-featured-image_2.png" alt="Course 2" class="w-full h-45 object-cover"/>
    <div class="p-2">
      <h2 class="text-lg font-semibold text-gray-800">Smart Education</h2>
      <p class="text-sm text-gray-500">Launch Date: Oct 15, 2023</p>
    </div>
    <div class="p-2 border-t border-gray-200">
      <div class="flex justify-between items-center">
        <div class="text-sm text-gray-500">
          <i class="fas fa-user"></i> Applicants: 80
        </div>
        <div class="text-sm text-gray-500">
          <i class="fas fa-check-circle"></i> Completed: 60
        </div>
      </div>
    </div>
  </div>

  
  <div class="bg-white shadow-lg rounded-lg overflow-hidden">
    <img src="https://www.iilmlko.ac.in/demo/wp-content/uploads/2023/04/20191209online.jpg" alt="Course 3" class="w-full h-45 object-cover"/>
    <div class="p-2">
      <h2 class="text-lg font-semibold text-gray-800">Water Management</h2>
      <p class="text-sm text-gray-500">Launch Date: Nov 5, 2023</p>
    </div>
    <div class="p-4 border-t border-gray-200">
      <div class="flex justify-between items-center">
        <div class="text-sm text-gray-500">
          <i class="fas fa-user"></i> Applicants: 120
        </div>
        <div class="text-sm text-gray-500">
          <i class="fas fa-check-circle"></i> Completed: 70
        </div>
      </div>
    </div>
  </div>
</div>


  );
}