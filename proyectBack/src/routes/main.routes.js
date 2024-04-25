import { Router } from "express"
import routerTask from "./tasks.routes.js"

const router = Router()

router.use('/api/tasks', routerTask)

export default router