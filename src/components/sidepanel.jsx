"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, ChevronRight } from "lucide-react";

const Sidebar = () => {
  const [isChannelsOpen, setIsChannelsOpen] = useState(true);

  return (
    <div className="w-[288px] h-screen bg-white border-r border-gray-200 flex flex-col">
      {/* Top Section */}
      <div className="flex-1">
        {/* Brand Switcher */}
        <div className="flex items-center p-4 pb-2">
          <div className="h-10 w-10 rounded-[10px] border border-green-500 flex items-center justify-center bg-white mr-2">
            <span className="text-xs px-2 py-2 text-gray-500">pepfsp</span>
          </div>
          <div className="flex justify-between items-center bg-[#FDFDFD] rounded-xl border border-aqua-500 px-2 py-1 w-full">
            <div className="flex items-center">
              <div className="w-6 h-6 rounded bg-teal-500 flex items-center justify-center text-white mr-2">
                <span className="text-xs">ts</span>
              </div>
              <span className="text-sm font-medium text-gray-700">Test_brand</span>
            </div>
            <div className="flex">
              <ChevronDown className="w-4 h-4 text-gray-500" />
              <ChevronRight className="w-4 h-4 text-gray-500 ml-2" />
            </div>
          </div>
        </div>
       
       <div className="flex mt-8">
        <div className="flex flex-col px-4 mb-6 mt-4">
          <div className="flex flex-col items-center gap-2 h-[60vh]">
            <div className="flex items-center flex-col border border-aqua-500 rounded-md p-1 mb-1">
              <span className="text-cyan-500 font-medium text-xs">mama</span>
              <span className="text-lime-500 font-medium text-xs ml-1">town</span>
            </div>
            <div className="w-10 h-10 rounded bg-black flex items-center justify-center mb-1">
              <div className="text-red-600 font-bold text-lg">A</div>
            </div>
            <button className="w-10 h-10 rounded-[10px] border border-gray-300 flex items-center justify-center text-green-600 font-bold text-lg">
              +
            </button>

          
          </div>
          <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-medium mt-1">
            <span>SS</span>
          </div>
        </div>
        
        <div className="px-3 py-3 bg-[#F8F8F8]">
        <nav className="flex h-[60vh] flex-col gap-1 text-sm text-gray-700">
          {/* Overview */}
          <a href="#" className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100">
            <div className="w-5 h-5 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            </div>
            <span>Overview</span>
          </a>

          {/* Channels Dropdown */}
          <div>
            <button
            //   onClick={() => setIsChannelsOpen(!isChannelsOpen)}
              className="w-full flex items-center justify-between px-4 py-2 hover:bg-gray-100"
            >
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Channels</span>
              </div>
              {isChannelsOpen ? (
                <ChevronDown className="w-4 h-4 text-gray-500" />
              ) : (
                <ChevronRight className="w-4 h-4 text-gray-500" />
              )}
            </button>
            {isChannelsOpen && (
              <div className="ml-12 flex flex-col gap-2 py-1">
                <a href="#" className="text-gray-600 hover:text-black text-sm py-1">
                  Meta Ads
                </a>
                <a href="#" className="text-gray-600 hover:text-black text-sm py-1">
                  Google Ads
                </a>
                <a
                  href="#"
                  className="bg-[#d8ece8] text-gray-800 rounded-md px-3 py-1 text-sm"
                >
                  Quick Commerce
                </a>
              </div>
            )}
          </div>

          {/* Creatives */}
          <a href="#" className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100">
            <div className="w-5 h-5 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4V5h12v10z" clipRule="evenodd" />
              </svg>
            </div>
            <span>Creatives</span>
          </a>
        </nav>

      <div className="mt-auto p-4">
        <div className="flex flex-col gap-4 ">
          {/* Help */}
          <div className="flex items-center gap-3 text-gray-600 hover:text-black cursor-pointer">
            <div className="w-5 h-5 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
            </div>
            <span>Help</span>
          </div>

          {/* Settings */}
          <div className="flex items-center gap-3 text-gray-600 hover:text-black cursor-pointer">
            <div className="w-5 h-5 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>
            </div>
            <span>Settings</span>
          </div>

          {/* User Avatar */}
        
        </div>
      </div>
      </div>

      </div>
      </div>
    </div>
  );
};

export default Sidebar;