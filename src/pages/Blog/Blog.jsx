import React from 'react';

const Blog = () => {
  return (
    <div className="max-w-7xl mx-auto my-16">
      {/* <div className="container mx-auto px-4 py-8"> */}
      {/* <h2 className="text-3xl text-center font-bold mb-4">Blog Page</h2> */}
      <div className="grid gap-6">
        <div className="bg-white rounded p-6 shadow">
          <h3 className="text-lg font-semibold mb-2">
            Question: What is an access token and refresh token? How do they
            work and where should we store them on the client-side?
          </h3>
          <p>
            Answer: An access token is used for authentication and
            authorization. It is a credential that identifies a user and their
            permissions. A refresh token is used to obtain a new access token
            once the current one expires. Access tokens should be stored
            securely on the client-side, such as in memory or client-side
            storage mechanisms like cookies or local storage.
          </p>
        </div>
        <div className="bg-white rounded p-6 shadow">
          <h3 className="text-lg font-semibold mb-2">
            Question: Compare SQL and NoSQL databases?
          </h3>
          <p>
            Answer: SQL databases are relational databases that store structured
            data in tables with predefined schemas. They use SQL for querying
            and manipulating data. NoSQL databases, on the other hand, are
            non-relational databases that store data in flexible, schema-less
            formats like JSON. They provide high scalability and flexibility but
            sacrifice some features like complex transactions and joins.
          </p>
        </div>
        <div className="bg-white rounded p-6 shadow">
          <h3 className="text-lg font-semibold mb-2">
            Question: What is Express.js?
          </h3>
          <p>
            Answer: Express.js is a minimalist web framework for Node.js. It
            provides a simple and flexible way to build web applications and
            APIs. Express.js allows you to define routes, handle HTTP requests
            and responses, and implement middleware for additional
            functionality. It is widely used in the Node.js ecosystem.
          </p>
        </div>
        <div className="bg-white rounded p-6 shadow">
          <h3 className="text-lg font-semibold mb-2">
            Question: What is Nest.js?
          </h3>
          <p>
            Answer: Nest.js is a progressive Node.js framework built on top of
            Express.js. It provides a robust set of features and architectural
            patterns for building scalable and maintainable server-side
            applications. Nest.js leverages TypeScript, dependency injection,
            and a modular architecture to simplify development and improve code
            organization.
          </p>
        </div>
        <div className="bg-white rounded p-6 shadow">
          <h3 className="text-lg font-semibold mb-2">
            Question: What is MongoDB aggregate?
          </h3>
          <p>
            Answer: MongoDB's aggregate function is used for advanced data
            aggregation operations. It allows you to process and transform data
            from a collection using a pipeline of stages. The pipeline includes
            stages like filtering, grouping, sorting, and applying mathematical
            operations. The aggregate function is powerful for data analysis and
            reporting tasks in MongoDB.
          </p>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Blog;