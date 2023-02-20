import { useAuth } from "@library/AuthContext";
import NextLink from "next/link";
import styles from '@styles/ProtectedRoute.module.css';

export default function ProtectedRoute(props){
 const { user } = useAuth();
 if(!user) return <AuthUserOnly />
 return props.children
}

function AuthUserOnly(){
 return (
  <div className={styles['protected-route']}>
   <div>
    <h1>Please login first! 😡</h1>
    <NextLink href="/welcome">
     <button>Masuk</button>
    </NextLink>
   </div>
  </div>
 )
}