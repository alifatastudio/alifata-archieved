import { useState } from "react";
import NextLink from "next/link";
import styles from "@styles/Layout1.module.css";
import Footer from "@components/Footer";

// LAYOUT 1
export default function Lay1({nocontent, children}){
  return (
    <>
      <Sidebar />
      
      {/* CONTENT SECTION */}
      <section className={styles['home-section']}>
        <div className={nocontent ? "" : styles['home-content']}>
          {children}
        </div>
      </section> 
      <Footer />
    </>
  )
}

// SIDEBAR
function Sidebar(){
  const [isOpen, setIsOpen] = useState(false);
  const toogleSidebar = () => {
    const rev = !isOpen;
    setIsOpen(rev);
  }

  //  DATA
  const lay_data = {
    logo: {
      logoURL: "",
      txtALT: "",
    },
    name: "LEARN TOEFL",
    subname: "by Alifata",
    links: [
      {name: "Home", url: "/toefl", icon: "bx bx-book"}
    ]
  }

  const { logo, name, subname, links} = lay_data;

 return (
   <section 
    className={`${styles['sidebar']} ${isOpen ? '' : styles['close']}`}>
     <Brand
      logo={logo}
      name={name}
      subname={subname}
      isOpen={isOpen} 
      toogleSidebar={toogleSidebar}
     /> 
     <ul className={styles['nav-links']}>
        {links.map(link => (
          <NavLink 
            name={link.name}
            url={link.url}
            icon={link.icon}
          />
        ))}
       <NavLinkMenu />
       <ProfileDetails />
     </ul>
   </section>
 )
}

// BRAND - APP INFO
function Brand({isOpen, toogleSidebar, logo, name, subname}){
 return ( 
   <div className={styles['info']}>
     <div className={styles['logo']}>
       <img 
        src={logo?.logoURL || "/logo.png"} 
        alt={logo?.logoALT || "Logo Alifata"} />
     </div>
     <div className={styles['toefl']}>
       <span className={styles['toefl-name']}>
         {name || "ALIFATA"}
       </span>
       <span className={styles['toefl-by']}>
         {subname || "by Fikri Ali Fata"}
       </span>
     </div>
     <div className={styles['toogle']} onClick={toogleSidebar}>
      {isOpen?'Close':'Open'}
     </div>
   </div>
 )
}

// NAVLINK
function NavLink({name, url, icon}){
  return (
    <li>
      <NextLink href={url}>
        <i className={icon}></i>
        <span className={styles['link-name']}>
          {name}
        </span>
      </NextLink>
      <ul className={styles['sub-menu']}>
        <li>
          <NextLink href={url} className={styles['link-name']}>
            {name}
          </NextLink>
        </li>
      </ul>
    </li>
  );
}

// NAVLINK WITH SUB MENU
function NavLinkMenu(){
 const [showMenu, setShowMenu] = useState(false);

 function toogleShowMenu(){
   const rev = !showMenu;
   setShowMenu(rev);
 }

 return (
   <li className={showMenu ? styles['showMenu']: ''}>
     <div className={styles['iocn-link']}>
       <a href="#">
         <i className='bx bx-collection'></i>
         <span className={styles['link-name']}>
          Category
         </span>
       </a>
       <i className={`bx bxs-chevron-down ${styles['arrow']}`} 
        onClick={toogleShowMenu}></i>
     </div>

     <ul className={styles['sub-menu']}>
       <li>
        <a className={styles['link-menu']} href="#">
          Category
        </a>
       </li>
       <li><a href="#">HTML & CSS</a></li>
       <li><a href="#">JavaScript</a></li>
       <li><a href="#">PHP & MySQL</a></li>
     </ul>
   </li>
 );
}

// PROFILE DETAILS
function ProfileDetails(){
 return (
   <li>
     <div className={styles['profile-details']}>
       <div className={styles['profile-content']}>
         <img 
          src="/avatar.png" 
          alt="profileImg" />
       </div>
       <div className={styles['name-job']}>
         <div className={styles['profile-name']}>Prem Shahi</div>
         <div className={styles['job']}>Web Desginer</div>
       </div>
       <i className='bx bx-log-out'></i>
     </div>
   </li>
 );
}