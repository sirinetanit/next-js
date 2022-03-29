import Link from 'next/link'
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Error () {
    const router = useRouter();

    useEffect(()=>{
        setTimeout(()=>{
            //router.go(-1) /* retour a la page precidente */
            router.push('/');
        },3000) //apres 3 sec retour a la home page automatique
    },[])

    return (
        <div>
            <h1>Page not found</h1>
            <p>Go back to the home page <Link href="/"> Home page</Link></p>
        </div>
    );
}