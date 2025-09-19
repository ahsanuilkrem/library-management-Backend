import { Router } from "express"
import { bookRoutes } from "../models/book/book.route"
import { borrowRoutes } from "../models/borrow/borrow.route"

export const router = Router()



const moduleRoutes = [
    {
        path: "/books",
        router: bookRoutes
    },
     {
        path: "/borrow",
        router: borrowRoutes
    }
  
  
]


moduleRoutes.forEach((route) => {
    router.use(route.path, route.router)
})