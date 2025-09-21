import { Router } from "express";
import { statsController } from "./stats.controller";

const router = Router();

router.get("/", statsController.BorrowsAggregate);


export const StatsRoutes = router