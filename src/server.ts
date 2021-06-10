//import { PrismaClient } from '@prisma/client';
import express, { Application } from 'express'
import morgan from 'morgan'
import { signup, signin, protect } from './controllers/auth.controller'
import { router as userRouter } from './routes/user.route'
import { router as postRouter } from './routes/post.route'
import { router as commentRouter } from './routes/comment.route'
import { getAllPosts } from './controllers/post.controller'
import { getAllComments } from './controllers/comment.controller'
import asyncHandler from 'express-async-handler';

//const prisma = new PrismaClient();

const app: Application = express();

//middlewares
app.use(morgan('dev'));
app.use(express.json());

// function errorHandler(
//   err: HttpError ,
//   req: Request,
//   res: Response,
//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   next: NextFunction,
// ): void {
//   res.status(err.status ?? 500)
//   res.json(err)
// }

//routes
app.post('/signup', asyncHandler(signup));
app.post('/signin', asyncHandler(signin));
//app.post('/create', createUser )

app.get('/posts', getAllPosts);
app.get('/comments', getAllComments);

app.use('/api', protect);

app.use('/api/users', userRouter);
app.use('/api/posts', asyncHandler(postRouter));
app.use('/api/comments', commentRouter);

export { app };
