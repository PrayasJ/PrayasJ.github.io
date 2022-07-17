import React, { Component } from 'react';
import {Box} from "@mui/material";
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import CodeBlock from './codeblocks';
import { info } from '../../info/Info';
import { Link, useParams } from 'react-router-dom';
import Terminal from '../about/Terminal';
import Style from '../portfolio/Portfolio.module.scss'

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
        this.state = {
            id,
            title,
            md,
            date
        }
        this.reRender = this.reRender.bind(this)
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
    
    reRender(id) {
        let {
            title,
            md,
            date
        } = info.blogs[id]
        fetch(md).then((response) => {
            response.text().then((text) => {
            document.title = this.state.title
                this.setState(
                    {
                        text,
                        id,
                        title,
                        md,
                        date
                    }
                )
            })
        })
    }

    render() {
        document.title = this.state.title
        console.log(info.blogs.length,  "length")
        return (
            <Box paddingTop={'3rem'} color={'white'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                <Terminal text={
                    <Box padding={'0.5rem'}>
                        <p>{this.state.date}</p>
                        <ReactMarkdown components={CodeBlock} children={this.state.text} remarkPlugins={[remarkGfm]} />
                    </Box>
            } isBlog={true}/>
                <Box justifyContent={'center'} display={'flex'} width={'20rem'} alignItems={'center'}>
                    {parseInt(this.state.id) > 0 ? 
                    <Link               
                        className={Style.button1}
                        style={{
                            margin: '1rem',
                            display: 'inline-block'
                        }}  
                        onClick={() => this.reRender(parseInt(this.state.id) - 1)} 
                        to={`/blogs/${parseInt(this.state.id) - 1}`}
                    >
                        Previous
                    </Link>: null}

                    {parseInt(this.state.id) < info.blogs.length - 1 ? 
                    <Link   
                        className={Style.button1} 
                        style={{
                            margin: '1rem',
                            display: 'inline-block'
                        }}            
                        onClick={() => this.reRender(parseInt(this.state.id) + 1)} 
                        to={`/blogs/${parseInt(this.state.id) + 1}`}
                    >
                        Next
                    </Link>: null}
                </Box>
            </Box>
        );
     }
}

export default withParams(BlogPage);