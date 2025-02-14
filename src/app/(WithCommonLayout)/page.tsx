import { getCurrentUser } from "@/services/AuthService";
import React from "react";

const HomePage = () => {
  const user = getCurrentUser();
  console.log(user);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-6"></div>
  );
};

export default HomePage;

// import React from 'react';

// const HomePage = () => {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-6">
//       <div className="max-w-xl text-center bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg transition-all duration-300">
//         <p className="text-lg md:text-xl font-semibold text-gray-700 dark:text-gray-300 leading-relaxed">
//           When trials arise, the devil calls—invite hearts to take a side.
//         </p>
//         <p className="mt-4 text-gray-600 dark:text-gray-400 italic">
//           Whether we actively participate in the fitna or react to it with anger and offense.
//           By taking any side—whether supporting or opposing—we still become part of the problem.
//         </p>
//         <p className="mt-6 text-xl font-semibold text-indigo-600 dark:text-indigo-400">
//           What you worship in desire is only part of it.
//         </p>
//         <p className="text-gray-700 dark:text-gray-300 text-lg">
//           Love is pure, noble, and divine—beyond all longing.
//         </p>
//         <p className="mt-6 text-gray-600 dark:text-gray-400">
//           If you take part in any side, you’ll be a pawn,
//           <br />
//           A shadow in someone's hand, easily drawn.
//         </p>
//         <p className="mt-4 text-gray-500 dark:text-gray-400 font-medium">
//           Cut off every connection with it.
//         </p>
//         <p className="mt-6 text-lg font-semibold text-green-600 dark:text-green-400">
//           In silence and patience, your soul will find,
//           <br />
//           The path to peace.
//         </p>
//       </div>
{
  /* <div className="max-w-xl text-center bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg transition-all duration-300">
        <p className="text-lg md:text-xl font-semibold text-gray-700 dark:text-gray-300 leading-relaxed">
          যখন ফিতনা আসে, শয়তান ডাকে—হৃদয়কে পক্ষ নেওয়ার আহ্বান জানায়।
        </p>
        <p className="mt-4 text-gray-600 dark:text-gray-400 italic">
          আমরা সক্রিয়ভাবে ফিতনায় অংশ নেই বা রাগ ও অপমানের মাধ্যমে প্রতিক্রিয়া
          জানাই—যে দিকেই থাকি না কেন, সমস্যারই অংশ হয়ে যাই।
        </p>
        <p className="mt-6 text-xl font-semibold text-indigo-600 dark:text-indigo-400">
          তুমি যেটাকে ভালোবাসা বলছো সেটা শুধু তোমার কাম উপাসনার একটি অংশ।
        </p>
        <p className="text-gray-700 dark:text-gray-300 text-lg">
          ভালোবাসা পবিত্র, মহৎ এবং ঐশ্বরিক—সব চাওয়ার ঊর্ধ্বে।
        </p>
        <p className="mt-6 text-gray-600 dark:text-gray-400">
          যদি কোনো পক্ষ নাও, তুমি হবে এক দাবার গুটি,
          <br />
          কারো হাতে পরিচালিত হবে।
        </p>
        <p className="mt-4 text-gray-500 dark:text-gray-400 font-medium">
          প্রত্যেক বন্ধন ছিন্ন করো তার সাথে।
        </p>
        <p className="mt-6 text-lg font-semibold text-green-600 dark:text-green-400">
          নীরবতা ও ধৈর্যের মাঝে আত্মা পাবে,
          <br />
          শান্তির পথ, যেখানে সত্য বিরাজে।
        </p>
      </div> */
}
//     </div>
//   );
// };

// export default HomePage;
