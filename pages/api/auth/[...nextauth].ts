import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authConfig: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Log In",
            credentials: {
                email: { label: "EMail", type: "text", name: "email" },
                password: { label: "Senha", type: "password", name: "password" },
            },
            async authorize(credentials, req) {
                const response = await fetch("/authorize", {
                    method: "POST",
                    body: JSON.stringify(credentials),
                    headers: { "Content-Type": "application/json" },
                });
                const user = await response.json();
                if (response.ok && user) {
                    return user;
                }
                return null;
            },
        }),
    ],
};

export default NextAuth(authConfig);
