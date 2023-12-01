/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    remotePatterns:[
        {
            protocol:'https',
            hostname:'tailus.io'
        },
        {
          protocol:'https',
          hostname:'www.w3.org'
        },
        {
          protocol:'https',
          hostname:'avatars.githubusercontent.com'
        },
        {
          protocol:'https',
          hostname:'lh3.googleusercontent.com'
        }
    ]
  }

}

module.exports = nextConfig
