const holim = {
  name: "holim",
  age: 20,
  gender: "male",
};

const resolvers = {
  Query: {
    person: () => holim,
  },
};
export default resolvers;
