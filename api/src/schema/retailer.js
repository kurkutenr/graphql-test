import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    retailers: [Retailer!]
  }

  extend type Mutation {
    addRetailer(name: String!, retailerId: String!): Retailer
  }

  type Retailer {
    """
    Description for field
    Supports **multi-line** description for your [API](http://example.com)!
    """
    name: String!
    retailerId: String!
  }
`;
