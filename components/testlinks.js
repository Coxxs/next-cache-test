import Link from 'next/link'
import Router from 'next/router'

export default function Testlinks() {
  return <>
    <p>Click these links to test:</p>
    <ul>
      <li><Link href="/hi/aaaa"><a>/hi/aaaa</a></Link></li>
      <li><Link href="/hi/aa:aa"><a>/hi/aa:aa</a></Link> ← This page is incorrectly cached in-browser</li>
      <li><Link href="/hi/aa%3Aaa"><a>/hi/aa%3Aaa</a></Link></li>
      <li><a href="#" onClick={ (e) => { Router.push("/hi/aa:aa"); e.preventDefault() }} >Route.push(&quot;/hi/aa:aa&quot;)</a> ← This page is incorrectly cached in-browser</li>
      <li><a href="#" onClick={ (e) => { Router.push("/hi/aa%3Aaa"); e.preventDefault() }}>Route.push(&quot;/hi/aa%3Aaa&quot;)</a></li>
    </ul>
  </>
}