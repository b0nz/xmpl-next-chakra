import { NextApiRequest, NextApiResponse  } from 'next'
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'
import prisma from '../../middleware/prisma'

const KEY: string = process.env.JWT_KEY || '';

export default async (req: NextApiRequest, res: NextApiResponse ) => {
  const { method } = req;
  switch (method) {
    case 'POST':
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(400).json({
          success: false,
          message: 'Request missing username or password',
        });
      }

      const user: any = await prisma.users.findUnique({
        where: {
          email,
        },
      })
      
      if(user) {
        if (bcrypt.compareSync(password, user?.password)) {
          const payload = {
            email: user.email,
            name: user.name,
          }
          jwt.sign(
            payload,
            KEY,
            {
              expiresIn: 7200, // 2 hour in seconds
            },
            (err, token) => {
              if(token) {
                res.status(200).json({
                  success: true,
                  data: {
                    token: 'Bearer ' + token,
                  },
                  message: 'success'
                });
              } else {
                console.log(err);
              }
            },
          );
        } else {
          res.status(400).json({ success: false, message: 'Password incorrect' });
        }
      } else {
        res.status(400).json({ success: false, message: 'User Not Found' });
      }
      break;
  
    default:
      res.status(400).json({ success: false, message: '404 not found' });
      break;
  }
};