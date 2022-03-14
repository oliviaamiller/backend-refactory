const pool = require('../utils/pool');

module.exports = class Order {
  id;
  product;
  quantity;

  constructor(row) {
    this.id = row.id;
    this.product = row.product;
    this.quantity = row.quantity;
  }

  static async insert({ product, quantity }) {
    // TODO: Implement me
  }

  static async getAll() {
    // TODO: Implement me
  }

  static async getById(id) {
    // TODO: Implement me
    const { rows } = await pool.query(
      `
      SELECT
      *
      FROM
        orders
      WHERE 
        id=$1
      `,
      [id]
    );
    return new Order(rows[0]);
  }

  static async updateById(id, { product, quantity }) {
    // TODO: Implement me
  }

  static async deleteById(id) {
    // TODO: Implement me
  }
};
