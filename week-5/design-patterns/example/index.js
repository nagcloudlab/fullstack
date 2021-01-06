

import { UrlBuilder } from './urlBuilder.js'


const url = new UrlBuilder()
    .setProtocol("https")
    .setHostname("example.com")
    .setAuthentication("user1", "shhh")
    .setPathname("resource1")
    .setSearch("q=text")
    .build()

console.log(url.toString())


