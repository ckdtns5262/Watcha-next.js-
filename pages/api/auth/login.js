import { connectDB } from '@/util/database';
import bcrypt from 'bcrypt';
import { getServerSession } from 'next-auth';
import authOptions from '../auth/[...nextauth]'
export default async function signin(req, res) {
    // let session = getServerSession(req, res, authOptions)
    // console.log(session)
  if (req.method === 'POST') {
    console.log(req.body);
    let db = (await connectDB).db('watcha');
    let user = await db.collection('user_cred').findOne({ email: req.body.email });

    if (!user) {
      console.log('해당 이메일은 없음');
      return res.status(400).json({ error: '해당 이메일은 없음' });
    }
    const pwcheck = await bcrypt.compare(req.body.password, user.password);
    if (!pwcheck) {
      console.log('비번 틀렸음');
      return res.status(400).json({ error: '비번 틀렸음' });
    }
    res.writeHead(302, { Location: '/' });
    res.end();
  }
}
