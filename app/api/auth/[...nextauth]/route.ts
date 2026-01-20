import NextAuth, { type NextAuthOptions } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";

export const authOptions: NextAuthOptions = {
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID!,
      clientSecret: process.env.DISCORD_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    async jwt({ token, profile, account }) {
      if (account?.provider === "discord" && profile) {
        token.discordId = (profile as any).id;
        token.name = (profile as any).username ?? token.name;
      }
      return token;
    },
    async session({ session, token }) {
      (session.user as any).discordId = (token as any).discordId;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
