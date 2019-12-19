import Sequelize, { Model } from 'sequelize';

class Plan extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        duration: Sequelize.INTEGER,
        price: Sequelize.FLOAT,
        total_price: {
          type: Sequelize.VIRTUAL,
          get() {
            return parseFloat((this.duration * this.price).toFixed(2));
          },
        },
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Plan;
