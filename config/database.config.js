const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://tvlama23144:Lam05082005@cluster0.dqxug.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/users');
        console.log('Kết nối MongoDB thành công');
    } catch (err) {
        console.error('Lỗi kết nối MongoDB:', err);
        process.exit(1);
    }
};

module.exports = connectDB;
