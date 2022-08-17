"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// routes
const diary_routes_1 = __importDefault(require("./routes/diary.routes"));
// const
const app = (0, express_1.default)();
// utils
app.use(express_1.default.json());
const PORT = 4001;
// routes
app.use('/api/v1/diaries', diary_routes_1.default);
app.listen(PORT, () => {
    console.log(`Server on port http://localhost:${PORT}`);
});
