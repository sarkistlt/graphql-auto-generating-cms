import { GraphQLSchema } from 'graphql/type';
import queries from './queries';
import mutations from './mutations';

const schema = new GraphQLSchema({
  query: queries,
  mutation: mutations,
});

export default schema;
