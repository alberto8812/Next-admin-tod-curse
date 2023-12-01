import NextAuth, { NextAuthOptions } from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";


/**
 * sirve para que podemos utulizar la refrencia en 
 * otros lugares
 */

export const authOptions:NextAuthOptions={
    /**
     * definimos los providers
     */
    providers: [
        /**
         * provedor de autenticacion github
         */
        GithubProvider({
          clientId: process.env.GITHUB_ID ?? '',
          clientSecret: process.env.GITHUB_SECRET ?? '',
        }),
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID?? '',
          clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
        })
      ],
}
const handler=NextAuth(authOptions);

/**
 * definimos las peticiones que vamos a manejar 
 * 
 */
export  {handler as GET,handler as POST};