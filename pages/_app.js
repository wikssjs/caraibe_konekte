import Layout from '../Components/Layout'
import '@/styles/globals.css'
import {Space_Grotesk} from 'next/font/google'

const space = Space_Grotesk({subsets:['latin']});
export default function App({ Component, pageProps }) {

  return <>
   <style jsx global>
    {`
    
     header{
      font-family:${space.style.fontFamily};
     }
     main{
      font-family:${space.style.fontFamily}
      
     }

    `}
  </style>
  <Layout>
    <Component {...pageProps} />
  </Layout>
  </>
  
}
