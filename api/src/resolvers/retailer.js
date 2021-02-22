export default {
  Query: {
    retailers: async (parent, args, { models }) => models.Retailer.findAll(),
  },
  Mutation: {
    addRetailer: async (
      parent,
      { name, retailerId },
      { models, secret }
    ) => {
      const retailer = await models.Retailer.addRetailer({
        name,
        retailerId
      });
      
      return retailer
    },
  },
};
