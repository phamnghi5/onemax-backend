const express = require('express');
const cors = require('cors');
const app = express();

const authRoutes = require('./routes/auth');
const miningRoutes = require('./routes/mine');
const balanceRoutes = require('./routes/balance');
const historyRoutes = require('./routes/history');
const leaderboardRoutes = require('./routes/leaderboard');
const withdrawRoutes = require('./routes/withdraw');

app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/mine', miningRoutes);
app.use('/balance', balanceRoutes);
app.use('/history', historyRoutes);
app.use('/leaderboard', leaderboardRoutes);
app.use('/withdraw', withdrawRoutes);

// ❌ Đã xóa phần phục vụ frontend vì bạn deploy frontend riêng

// ✅ Cổng chạy backend
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
