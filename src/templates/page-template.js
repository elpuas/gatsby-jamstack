import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout'

export const query = graphql`
	query ($id: ID!) {
		wpgraphql {
			page(id: $id) {
				title
				content
			}
		}
	}
`;

const PageTemplate = ({ data }) => {
	// Destructure Object
	const { title, content } = data.wpgraphql.page;
	return ( // Test Object <pre>{ JSON.stringify( data, null, 2) }</pre>
		<Layout>
			<h1  dangerouslySetInnerHTML={{ __html: title }} />
			<div dangerouslySetInnerHTML={{ __html: content }} />
		</Layout>
	)
};

export default PageTemplate;