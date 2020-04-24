import React from 'react';
import { Link, useStaticQuery } from 'gatsby'

const Layout = ({ children }) => {

	const menu = useStaticQuery(graphql`
		query {
			wpgraphql {
				menus {
					nodes {
						menuItems {
							nodes {
							url
							label
							}
						}
					}
				}
				generalSettings {
					url
				}
			}
		}
	`)

	console.log(menu)

	const url = menu.wpgraphql.generalSettings.url;
	const menuItems = menu.wpgraphql.menus.nodes[0].menuItems.nodes.map( item => ({
		label: item.label,
		url: item.url.replace(url, '')
	}));

	return (
		<>
			<header>
				<Link  to="/">elPuas Jamstack</Link>
				{menuItems.filter(item => item.url !== '/').map(item =>(
					<Link to={item.url}>{item.label}</Link>
				))}
			</header>
			<main>{ children }</main>
		</>
	);
};

export default Layout;