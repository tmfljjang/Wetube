import express from 'express';
import routes from '../routes';
import {videos} from '../controllers/videoController';
const videoRouter = express.Router();

videoRouter.get(routes.videos, videos);

export default videoRouter;