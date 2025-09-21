"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const book_route_1 = require("../models/book/book.route");
const borrow_route_1 = require("../models/borrow/borrow.route");
const stats_route_1 = require("../models/stats/stats.route");
exports.router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: "/books",
        router: book_route_1.bookRoutes
    },
    {
        path: "/borrow",
        router: borrow_route_1.borrowRoutes
    },
    {
        path: "/stats",
        router: stats_route_1.StatsRoutes
    }
];
moduleRoutes.forEach((route) => {
    exports.router.use(route.path, route.router);
});
