//import { ClientComponent } from '@/app/ui/ClientComponent'

import Breadcrumb from "@/components/ui/Breadcrumb";
import Sidebar from "@/components/ui/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  //return (
  //  <>
  //    <div id="main" className='w-screen  h-[84vh] max-h-[84vh] flex flex-col justify-center items-start px-14 py-1 overflow-auto'>
  //      <div className=" animate-mac-folder-open bg-white dark:bg-neutral-800 dark:text-white w-[80vw] h-[80vh] max-h-[80vh] overflow-y-auto grid grid-cols-5 rounded-xl border border-gray-400">
  //        <div className=' relative h-full max-h-full overflow-hidden w-full col-span-1 border-r rounded-l-xl border-r-gray-400 pl-7 dark:bg-neutral-700'>
  //          <Sidebar />
  //        </div>
  //        <div className='max-h-full h-full overflow-auto w-full col-span-4 rounded-xl '>
  //          <div className="grid grid-rows-12 h-full">
  //            <div className='row-span-1 border-b border-b-gray-400 flex items-center pl-20 dark:bg-neutral-700'>
  //              <Breadcrumb />
  //            </div>
  //            <div className="row-span-11 p-8 overflow-y-auto overflow-x-hidden h-full">
  //
  //              <main>{children}</main>
  //            </div>
  //          </div>
  //        </div>
  //      </div>
  //    </div>
  //  </>
  //)
  //return (
  //  <div className="flex-grow px-6 py-4 overflow-hidden">
  //    <div className="animate-mac-folder-open bg-white dark:bg-neutral-800 dark:text-white w-full h-full overflow-hidden grid grid-cols-5 rounded-xl border border-gray-400">
  //      {/* Sidebar */}
  //      <div className='relative h-full overflow-hidden w-full col-span-1 border-r rounded-l-xl border-r-gray-400 pl-7 dark:bg-neutral-700'>
  //        <Sidebar />
  //      </div>
  //
  //      {/* Right side (breadcrumb + content) */}
  //      <div className='h-full overflow-hidden w-full col-span-4 rounded-xl'>
  //        <div className="grid grid-rows-12 h-full">
  //          <div className='row-span-1 border-b border-b-gray-400 flex items-center pl-20 dark:bg-neutral-700'>
  //            <Breadcrumb />
  //          </div>
  //          <div className="row-span-11 p-8 overflow-y-auto overflow-x-hidden h-full">
  //            <main>{children}</main>
  //          </div>
  //        </div>
  //      </div>
  //    </div>
  //  </div>
  //);
  //
  //return (
  //   <div className="flex-grow px-6 py-4 overflow-hidden">
  //     <div className="animate-mac-folder-open bg-white dark:bg-neutral-800 dark:text-white w-full h-full grid grid-cols-5 rounded-xl border border-gray-400 overflow-hidden">
  //       {/* Sidebar */}
  //       <div className='relative h-full w-full col-span-1 border-r border-r-gray-400 pl-7 dark:bg-neutral-700 overflow-hidden rounded-l-xl'>
  //         <Sidebar />
  //       </div>
  //
  //       {/* Main Content */}
  //       <div className='h-full w-full col-span-4 grid grid-rows-12 overflow-hidden'>
  //         <div className='row-span-1 border-b border-b-gray-400 flex items-center pl-20 dark:bg-neutral-700'>
  //           <Breadcrumb />
  //         </div>
  //         <div className="row-span-11 p-8 overflow-y-auto overflow-x-hidden">
  //           <main>{children}</main>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );

  return (
    <div className="h-[733px] w-full px-6 py-4 overflow-hidden">
      <div className="animate-mac-folder-open bg-white dark:bg-neutral-800 dark:text-white w-full h-full grid grid-cols-5 rounded-xl border border-gray-400 overflow-hidden">
        {/* Sidebar */}
        <div className='relative h-full w-full col-span-1 border-r border-r-gray-400 pl-7 dark:bg-neutral-700 overflow-hidden rounded-l-xl'>
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className='h-full w-full col-span-4 grid grid-rows-12 overflow-auto'>
          <div className='row-span-1 border-b border-b-gray-400 flex items-center pl-20 dark:bg-neutral-700'>
            <Breadcrumb />
          </div>
          <div className="row-span-11 p-8 overflow-y-auto overflow-x-hidden">
            <main>{children}</main>
          </div>
        </div>
      </div>
    </div>
  );
}
