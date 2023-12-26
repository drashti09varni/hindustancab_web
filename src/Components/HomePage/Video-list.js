// import React from 'react'

// export default function VideoList() {
//   return (
//     <div className='py-24'>
//         <h1 className='text-[35px] my-font'><center>Little Glimpse Of Hindustan Rides</center></h1>
//         <div class="flex flex-wrap">
//   <div class="border-e border-gray-200 dark:border-gray-700">
//     <nav class="flex flex-col space-y-2" aria-label="Tabs" role="tablist" data-hs-tabs-vertical="true">
//       <button type="button" class="hs-tab-active:border-blue-500 hs-tab-active:text-blue-600 dark:hs-tab-active:text-blue-600 py-1 pe-4 inline-flex items-center gap-x-2 border-e-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500 active" id="vertical-tab-with-border-item-1" data-hs-tab="#vertical-tab-with-border-1" aria-controls="vertical-tab-with-border-1" role="tab">
//         Tab 1
//       </button>
//       <button type="button" class="hs-tab-active:border-blue-500 hs-tab-active:text-blue-600 dark:hs-tab-active:text-blue-600 py-1 pe-4 inline-flex items-center gap-x-2 border-e-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500" id="vertical-tab-with-border-item-2" data-hs-tab="#vertical-tab-with-border-2" aria-controls="vertical-tab-with-border-2" role="tab">
//         Tab 2
//       </button>
//       <button type="button" class="hs-tab-active:border-blue-500 hs-tab-active:text-blue-600 dark:hs-tab-active:text-blue-600 py-1 pe-4 inline-flex items-center gap-x-2 border-e-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500" id="vertical-tab-with-border-item-3" data-hs-tab="#vertical-tab-with-border-3" aria-controls="vertical-tab-with-border-3" role="tab">
//         Tab 3
//       </button>
//     </nav>
//   </div>

//   <div class="ms-3">
//     <div id="vertical-tab-with-border-1" role="tabpanel" aria-labelledby="vertical-tab-with-border-item-1">
//       <p class="text-gray-500 dark:text-gray-400">
//         This is the <em class="font-semibold text-gray-800 dark:text-gray-200">first</em> item's tab body.
//       </p>
//     </div>
//     <div id="vertical-tab-with-border-2" class="hidden" role="tabpanel" aria-labelledby="vertical-tab-with-border-item-2">
//       <p class="text-gray-500 dark:text-gray-400">
//         This is the <em class="font-semibold text-gray-800 dark:text-gray-200">second</em> item's tab body.
//       </p>
//     </div>
//     <div id="vertical-tab-with-border-3" class="hidden" role="tabpanel" aria-labelledby="vertical-tab-with-border-item-3">
//       <p class="text-gray-500 dark:text-gray-400">
//         This is the <em class="font-semibold text-gray-800 dark:text-gray-200">third</em> item's tab body.
//       </p>
//     </div>
//   </div>
// </div>
//     </div>
//   )
// }

import { useEffect, useRef, useState } from 'react';

import thumb1 from '../../Images/hindustanrides/videos/thumb-1.jpg';
import thumb2 from '../../Images/hindustanrides/videos/thumb-2.jpg';
import thumb3 from '../../Images/hindustanrides/videos/thumb-3.jpg';
import thumb4 from '../../Images/hindustanrides/videos/thumb-4.jpg';
import thumb5 from '../../Images/hindustanrides/videos/thumb-5.webp';
import thumb6 from '../../Images/hindustanrides/videos/thumb-6.jpg';
import thumb7 from '../../Images/hindustanrides/videos/thumb-7.jpeg';
import thumb8 from '../../Images/hindustanrides/videos/thumb-8.jpg';
import thumb9 from '../../Images/hindustanrides/videos/thumb-9.jpeg';

const tabsData = [
  {
    label: 'DJ PARTY @ GOA',
    thumbnail: thumb1,
    link: 'https://youtu.be/ey4LD_iWNAU?si=NL_z-D2FcL8S69XK',
    content: 'Content for DJ PARTY @ GOA',
  },
  {
    label: 'SCUBA DIVING UNDER WATER',
    thumbnail: thumb2,
    link: 'https://youtu.be/6ZGtBQkYYkU?si=-XSxebZ6f2aUE2WM',
    content: 'Content for SCUBA DIVING UNDER WATER',
  },
  // ... other tabs
];

export default function VideoList() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);

  const tabsRef = useRef([]);

  useEffect(() => {
    function setTabPosition() {
      const currentTab = tabsRef.current[activeTabIndex];
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
      setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
    }

    setTabPosition();
    window.addEventListener('resize', setTabPosition);

    return () => window.removeEventListener('resize', setTabPosition);
  }, [activeTabIndex]);

  return (
    <div>
      <div className="relative">
        <div className="border-b">
          {tabsData.map((tab, idx) => (
            <button
              key={idx}
              ref={(el) => (tabsRef.current[idx] = el)}
              className={`pt-2 pb-3 ${idx === activeTabIndex ? 'text-blue-600 border-b-2 border-blue-500' : 'text-gray-500 hover:text-blue-600'}`}
              onClick={() => setActiveTabIndex(idx)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <span
          className="absolute bottom-0 block h-1 bg-teal-500 transition-all duration-300"
          style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
        />
      </div>
      <div className="py-4">
        <img src={tabsData[activeTabIndex].thumbnail} alt={`Thumbnail for ${tabsData[activeTabIndex].label}`} className='w-10 h-10' />
        <p>{tabsData[activeTabIndex].content}</p>
        <a href={tabsData[activeTabIndex].link} target="_blank" rel="noopener noreferrer">
          Watch Video
        </a>
      </div>
    </div>
  );
}
