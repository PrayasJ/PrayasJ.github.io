import React, { Component } from 'react';
import { Box } from "@mui/material";
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import CodeBlock from './codeblocks';
import { Link } from 'react-router-dom';
import Terminal from '../about/Terminal';

class BlogBlock extends Component {
	constructor(props) {
		super(props)
		this.state = {
			title: props.title,
			md: props.md,
			index: props.index,
			date: props.date
		}
	}

	componentWillMount() {
		fetch(this.state.md).then((response) => {
			response.text().then((text) => {
				text = text.split('\n\n').splice(1)
				text.length = 5
				text = text.join("\n")
				text = text.substring(0, 128)
				text += "..."
				this.setState(
					{
						text: text
					}
				)
			})
		})
	}

	render() {
		return (
			<Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
				<Terminal isBlog={true} text={<Box display={'flex'} flexDirection={'column'}>
					<Link to={`${this.state.index}`}>
						<p style={{ fontSize: '2rem', color: 'dodgerblue' }}>{this.state.title}</p>
						<ReactMarkdown components={CodeBlock} children={this.state.text} remarkPlugins={[remarkGfm]} />
						<p style={{color: 'lightskyblue'}}>{this.state.date}</p>
					</Link>
				</Box>} />
			</Box>
		);
	}
}

export default BlogBlock;