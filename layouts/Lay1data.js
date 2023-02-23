export const HOMEDATA = {
  links: [
   {name: "Home", url: "/", icon: "bx bxs-home"},
   {name: 'Blog', url: '/blog', icon: 'bx bxl-blogger'},
   {name: "App", url: null, icon: "bx bx-devices", submenu: [
    {name: "TOEFLABLE", url: "/toeflable"},
  ]},
  ]
 }

export const MYBLOG = {
 name: "MY BLOG",
 subname: "by Alifata",
 links: [
  {name: "ALIFATA.COM", url: "/", icon: "bx bxs-meteor"},
  {name: "About", url: "/blog", icon: "bx bxs-notepad bx-tada"},
  {name: "Productivity", url: null, icon: "bx bx-run bx-tada", submenu: [
    {name: "Manage Time by RachelHow", url: '/blog/manage-time-by-rachelhow'}
  ]},
  {name: "Others", url: null, icon: "bx bxs-cube", submenu: [
    {name: "Make Me Better", url: '/blog/better'}
  ]},
 ]
}

export const TOEFLABLE = {
 logo: {
   logoURL: "/logo.png",
   txtALT: "Logo Alifata",
 },
 name: "TOEFLABLE",
 subname: "by Alifata",
 links: [
   {name: "ALIFATA.COM", url: "/", icon: "bx bxs-meteor"},
   {name: "ABOUT", url: "/toeflable", icon: "bx bxs-notepad bx-tada"},
   {name: "LISTENING", url: null, icon: "bx bx-book-reader", submenu: [
     {name: "Sub Menu 1", url: "/apa-itu-toefl"},
   ]},
   {name: "STRUCTURE", url: null, icon: "bx bxs-edit-alt", submenu: [
     {name: "Pendahuluan", url: "/toeflable/structure"},
   ]},
   {name: "READING", url: null, icon: "bx bxs-chat", submenu: [
     {name: "Sub Menu 1", url: "/apa-itu-toefl"},
   ]},
   {name: "WRITING", url: null, icon: "bx bxs-megaphone", submenu: [
     {name: "Sub Menu 1", url: "/apa-itu-toefl"},
   ]},
   {name: "PRACTICE", url: '/toeflable/exercise', icon: "bx bxs-rocket"}
 ]
}