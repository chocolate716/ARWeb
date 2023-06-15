import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
    <!DOCTYPE html>
<html>
  <head>
  <meta charset="utf-8">
    <title>ブログ用</title>
    <script src="https://aframe.io/releases/1.0.4/aframe.min.js"></script> 
    //外部ライブラリを読み込む場合
　　<script src="../js/aframe.min.js"></script>
　　//同じサーバーにアップロードする場合
    <!-- 使用したライブラリ等の情報およびライセンスは次を参照 https://da.lib.shimane-u.ac.jp/virtual_tour/about.html#used -->
  </head>
  <body>
    
  <a-scene vr-mode-ui="enabled: false" device-orientation-permission-ui="enabled: false" cursor="fuse: false; rayOrigin: mouse">
	  
    <a-sky src="../img/background/1F_outside.JPG" rotation="0 0 1" position="0 0 0"></a-sky>
    <a-box color="#E3916E" rotation="0 0 0" position="0 0 -10" width="2" height="2" depth="2"></a-box>
  </a-scene>

  </body>
</html>


    </main>
  )
}
