'use client'

import fs from 'fs'
import Image from 'next/image'
import styles from './page.module.css'
import {Unity, UnityConfig, useUnityContext} from "react-unity-webgl";
import {getBuilds} from "../lib/builds";

/*export async function getStaticProps() {
    let filess : string[] = getBuilds()

    
    return {
        props : {
            filess
        }
    }
}*/

export default function Home() {

    const buildPath = "builds/latest/WebGL"
    
    
    
    const { unityProvider } = useUnityContext({
        loaderUrl: `${buildPath}build/WebGL.loader.js`,
        dataUrl: `${buildPath}build/WebGL.data`,
        frameworkUrl: `${buildPath}build/WebGL.framework.js`,
        codeUrl: `${buildPath}build/WebGL.wasm`,
    } as UnityConfig);
  return (
    <main className={styles.main}>
        <Unity unityProvider={unityProvider} />
        <iframe width={'100%'} height={'1000'} src={'builds/latest/WebGL/WebGL/index.html'}/>
       {/* {filess.map((file)=>{
            return <a href={`builds/WebGL/${file}`}>{file}</a>
        })}*/}
        
    </main>
  )
}
