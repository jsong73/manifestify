const { User, Manifestation } = require("../models");
const { GraphQLError } = require("graphql")
const { signToken } = require("../utils/auth");


const resolvers = {
Query: {
    user: async (parent, { email }) => {
      return User.findOne({ email }).populate("manifestations");
    },
    manifestations: async (parent, { email }) => {
      const params = email ? { email } : {};
      return Manifestation.find(params).sort({ date: -1 });
    },
    manifestation: async (parent, { manifestationId }) => {
      return Manifestation.findById(manifestationId);
    },
    me: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findOne({ email: context.user.email })
        .populate("manifestations")
        return user;
      }
      throw new GraphQLError("You need to be logged in!");
    },
  },


Mutation:{
    addUser: async (parent, {email, password, birthday}) => {
        const user = await User.create({email, password, birthday});
        const token = signToken(user);
        return {token, user}
    },
    login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });
        
        if (!user) {
          throw new GraphQLError("No user found with this email!");
        }
  
        const correctPw = await user.isCorrectPassword(password);
        if (!correctPw) {
          throw new GraphQLError("Incorrect credentials!");
        }
        const token = signToken(user);
        return { token, user };
      },
    addManifestation: async (parent,{ todaysFeeling, whatToManifest, manifestationAction, manifestationObstacles, todayImGratefulFor , details }, context) => {
        if (context.user) {
          const manifestation = await Manifestation.create({
            todaysFeeling,
            whatToManifest,
            manifestationAction,
            manifestationObstacles,
            todayImGratefulFor,
            details,
            user: context.user._id,
          });
          await User.findByIdAndUpdate(context.user._id, {
            $push: { manifestations: manifestation._id },
          });
          return manifestation;
        }
        throw new GraphQLError("You need to be logged in!");
      },
    removeManifestation: async (parent, { manifestationId }, context) => {
        if (context.user) {
          await Manifestation.findByIdAndDelete(manifestationId);
          await User.findByIdAndUpdate(context.user._id, {
            $pull: { manifestations: manifestationId },
          });
          return true;
        }
        throw new GraphQLError("You need to be logged in!");
      },
    }
}


module.exports = resolvers;