
const express = require('express')
const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString
} = require('graphql')

var { graphqlHTTP } = require('express-graphql');

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: "HellWorld",
        fields: () => ({
            message: {
                type: GraphQLString,
                resolve: () => 'Hello World'
            }
        })
    })
})

const app = express();

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}))


app.listen(8080, () => {
    console.log("api-server up")
})