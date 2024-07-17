import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
        name: 'Credentials',
        credentials: {
            email: { label: "Email", type: "text", placeholder: "johndoe@email.com"},
            password: { label: "Password", type: "password" }
        },
        authorize: async (credentials) => {
            // Add your own logic here to find the user from the credentials supplied
            const user = { id: '1', name: 'John Doe', email: 'johndoe@email.com' }
            if (user) {
                return user
            } else {
                return null
            }
        }
    }),
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID || "",
        clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
    }),

    GithubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || "",
    }),
    // ...add more providers here
  ],
}
