// index.js
import express from 'express';
import cors from 'cors';
import adminRouter from './Routes/adminRoutes.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const app = express();

app.use(cors({
  origin: ['http://localhost:3001', 'http://localhost:3000'],
  optionsSuccessStatus: 200,
  methods: ['GET', 'POST', 'PUT'],
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Optional

app.use('/admin', adminRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
