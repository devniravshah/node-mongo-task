const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserViewSchema = new Schema(
  {
    userId: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      required: true,
      default: new Date()
    },
    productId: {
      type: String,
      required: true
    }
  },
  {
    timestamps: {
      createdAt: 'created_at', updatedAt: 'updated_at'
    }
  }
);

const UserViewModal = mongoose.model('UserView', UserViewSchema);
module.exports = UserViewModal;