import prisma from "@/app/lib/prima";
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth, { NextAuthOptions } from "next-auth"
import { Adapter } from "next-auth/adapters";
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { signInEmailPassword } from "@/app/auth/actions/auth-action";


/**
 * sirve para que podemos utulizar la refrencia en 
 * otros lugares
 */

export const authOptions:NextAuthOptions={
  adapter:PrismaAdapter(prisma) as Adapter,
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
        }),
        /**
         * creamos una nueva ruta
         */
        CredentialsProvider({
          name: "Credentials",
          credentials: {
            email: { label: "Correo electronico", type: "email", placeholder: "usuario@xx.com" },
            password: { label: "Contrasena", type: "password" }
          },
          async authorize(credentials, req) {
            // Add logic here to look up the user from the credentials supplied
            const user = await signInEmailPassword(credentials!.email,credentials!.password)
      
            if (user) {
              // Any object returned will be saved in `user` property of the JWT
              return user
            } else {
              // If you return null then an error will be displayed advising the user to check their details.
              return null
      
              // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
            }
          }

        })
      ],

      /**
       * estrategias como queremos manejarlo
       */
      session:{
        strategy:'jwt'
      },
      callbacks:{
        /**
         * sin fucion que pasan en un cierto ciclo de vida 
         * de la autenticacion
         */
        async signIn(){
          /**
           * podemos negar el acceso
           */
          return true
        },
        async jwt({token,user,account,profile}){
          /**
           * obtiene la imforcion que haga parte del jwt
           */
          const dbUser=await prisma.user.findUnique({where:{email:token.email ?? 'no-email'}})
          token.roles=dbUser?.roles??['no-roles'];
          token.id=dbUser?.id ??'no-user';

          return token;
        },
         async session({session,token,user}){
          /**
           * 
           */

          if(session && session.user){
            session.user.roles=token.roles;
            session.user.id=token.id;

          }
          return session;

        }
      }

}
const handler=NextAuth(authOptions);

/**
 * definimos las peticiones que vamos a manejar 
 * 
 */
export  {handler as GET,handler as POST};