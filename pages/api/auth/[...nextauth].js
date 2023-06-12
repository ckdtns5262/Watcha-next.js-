import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import {connectDB} from '@/util/database'
import NextAuth from "next-auth";
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'

const GITHUB_CLIENT_ID = process.env.NEXT_APP_GITHUB_CLIENT_ID
const GITHUB_SECRET_ID = process.env.NEXT_APP_GITHUB_SECRET_ID
const GOOGLE_CLIENT_ID = process.env.NEXT_APP_GOOGLE_CLIENT_ID
const GOOGLE_SECRET_ID = process.env.NEXT_APP_GOOGLE_SECRET_ID

export const authOptions = {
    providers : [
        GithubProvider({
          clientId : GITHUB_CLIENT_ID,
          clientSecret : GITHUB_SECRET_ID
        }),
        GoogleProvider({
            clientId : GOOGLE_CLIENT_ID,
            clientSecret : GOOGLE_SECRET_ID
        }),
        // CredentialProvider({
        //     name : 'credentials',
        //     credentials :{
        //         email : {label : "email", type : 'text'},
        //         password : {label : "password", type : "password"}
        //     },
        
        //     2. 로그인요청시 실행되는 코드
        //     직접 DB에서 아이디, 비번 비교하고 아이디 비번 맞으면 return 결과, 틀리면 return null 해야함
        //     async authorize(credentials){
        //         let db = (await connectDB).db('watcha')
        //         let user = await db.collection('user_cred').findOne({email : credentials.email})
        //         if(!user){
        //             alert('해당 이메일 없음')
        //             return null
        //         } 
        //         const pwcheck = await bcrypt.compare(credentials.password, user.password)
        //         if(!pwcheck){
        //             alert('비밀번호 틀림')
        //             return null
        //         }
        //         return user
        //     }
        // })
    ],
    // jwt 잘 써나야 잘됨
    session : {
        strategy : 'jwt',
        maxAge : 30 * 24 * 60 * 60 // 30일
    },
 
    secret : 'qwer1234',
    adapter : MongoDBAdapter(connectDB)
}
export default NextAuth(authOptions)
