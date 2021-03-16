import { NextApiRequest, NextApiResponse  } from 'next'
import bcrypt from 'bcryptjs'
import prisma from '../../../middleware/prisma'

export default async (req: NextApiRequest, res: NextApiResponse ) => {
  const { method } = req;
  switch (method) {
    case 'POST':
      const { email, name, password, role="ADMIN" } = req.body;

      if (!email || !password || !name) {
        return res.status(400).json({
          success: false,
          message: 'Request missing',
        });
      }
      const findUser = await prisma.users.findUnique({ where: { email } })
      if(!findUser) {
        const payload: any = {
          email,
          name,
          role,
          password: bcrypt.hashSync(password, 10),
        }
        const createUser: any = await prisma.users.create({ data: payload});
        if(createUser) {
          res.status(200).json({ success: true, message: 'success' });
        } else {
          res.status(400).json({ success: false, message: `can't create user ${email}` });
        }
      } else {
        res.status(400).json({ success: false, message: `user ${email} already exists` });
      }
      break;
  
    default:
      res.status(400).json({ success: false, message: '404 not found' });
      break;
  }
};