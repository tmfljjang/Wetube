import express from 'express';
import routes from '../routes';
import {videos, upload, videoDetail, editVideo, deleteVideo } from '../controllers/videoController';
const videoRouter = express.Router();

videoRouter.get(routes.videos, videos);
videoRouter.get(routes.upload, videos);
videoRouter.get(routes.videoDetail, videos);
videoRouter.get(routes.editVideo, videos);
videoRouter.get(routes.deleteVideo, videos);

export default videoRouter;