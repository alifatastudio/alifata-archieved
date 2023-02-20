import { useState } from "react";
import NextLink from "next/link";
import styles from "@styles/Layout1.module.css";
import { useAuth } from "@library/AuthContext";

// LAYOUT 1
export default function Lay1({
  nocontent, 
  logo,
  name,
  subname,
  links,
  children
}){
  return (
    <>
      <Sidebar 
        logo={logo}
        name={name}
        submenu={subname}
        links={links}
      />
      
      {/* CONTENT SECTION */}
      <section className={styles['home-section']}>
        <div className={nocontent ? "" : styles['home-content']}>
          {children}
        </div>
      </section> 
    </>
  )
}

// SIDEBAR
function Sidebar(props){
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const toogleSidebar = () => {
    const rev = !isOpen;
    setIsOpen(rev);
  }

  const { logo, name, subname, links } = props;

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
        {links?.map(link => {
          if(link.url != null) return (
            <NavLink 
              key={link.name}
              name={link.name}
              url={link.url}
              icon={link.icon}
            />
          )
          return <NavLinkMenu
            key={link.name}
            name={link.name}
            icon={link.icon}
            submenu={link.submenu}
          />
        })}
        <NavLinkMenu
          name="Setting"
          icon="bx bx-cog"
          submenu={[
            {name: user ? 'Keluar': 'Masuk', url: user ? '/jangan-lupa-mampir-lagi': '/welcome'},
          ]}
        />
     </ul>
     <ProfileDetails />

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
function NavLinkMenu({name, icon, submenu}){
 const [showMenu, setShowMenu] = useState(false);

 function toogleShowMenu(){
   const rev = !showMenu;
   setShowMenu(rev);
 }

 return (
   <li className={showMenu ? styles['showMenu']: ''}>
     <div className={styles['iocn-link']}>
       <a href={`#${name}`}>  
         <i className={icon}></i>
         <span className={styles['link-name']}>
          {name}
         </span>
       </a>
       <i className={`bx bxs-chevron-down ${styles['arrow']}`} 
        onClick={toogleShowMenu}></i>
     </div>

     <ul className={styles['sub-menu']}>
       <li>
        <a className={styles['link-name']} href={`#${name}`}>
          {name}
        </a>
       </li>
       {submenu?.map((menu) => (
        <li key={menu.name}>
          <NextLink href={menu.url}>
            {menu.name}
          </NextLink>
        </li>
       ))}
     </ul>
   </li>
 );
}

// PROFILE DETAILS
function ProfileDetails(){
  const { user } = useAuth();

 return (
    <div className={styles['profile-details']}>
      <div className={styles['profile-content']}>
        <img 
          src={user?.photoURL || '/avatar-batman.png'} 
        alt={user?.displayName || 'Profile Image'} />
      </div>
      <div className={styles['profile-name']}>
        {user?.displayName}
      </div>
    </div>
 );
}