import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout';

export const query = graphql`
	query {
		wpgraphql {
			posts {
			  nodes {
				id
				title
				uri
				excerpt
			  }
			}
		}
	}
`;

const Blog = ({ data } ) => {

	const posts = data.wpgraphql.posts.nodes;

	return (
		<Layout>
			{posts.map( post => (
				<div key={post.id} className="Card">
					<Link to={`/blog/${post.uri}`} >
						<h3 className="CardTitle" dangerouslySetInnerHTML={{ __html: post.title }} />
					</Link>
					<div className="CardContent" dangerouslySetInnerHTML={{ __html: post.excerpt }} />
				</div>
			)

			)}

		</Layout>
	)
}

export default Blog;