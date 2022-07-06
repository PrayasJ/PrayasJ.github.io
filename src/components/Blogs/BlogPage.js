import React, { Component } from 'react';
import {Box} from "@mui/material";
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import CodeBlock from './codeblocks';
import { info } from '../../info/Info';
import { useParams } from 'react-router-dom';
import Terminal from '../about/Terminal';

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
  }

class BlogPage extends Component {
    constructor(props){
        super(props)
        let { id }  = this.props.params
        let {
            title,
            md,
            date
        } = info.blogs[id]
        console.log('page', id, info.blogs[id])
        this.state = {
            title,
            md,
            date
        }
    }

    componentWillMount() {
        fetch(this.state.md).then((response) => {
            response.text().then((text) => {
                this.setState(
                    {
                        text:text
                    }
                )
            })
        })
    }
    
    render() {
        document.title = this.state.title
        return (
            <Box paddingTop={'3rem'} color={'white'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                <Terminal text={
                    <Box padding={'0.5rem'}>
                        <p>{this.state.date}</p>
                        <ReactMarkdown components={CodeBlock} children={this.state.text} remarkPlugins={[remarkGfm]} />
                    </Box>
            } isBlog={true}/>
            </Box>
        );
     }
}

export default withParams(BlogPage);