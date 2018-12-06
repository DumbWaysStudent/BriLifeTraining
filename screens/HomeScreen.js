import React, { Component } from 'react'
import { Container, Content, Text, Button, List, ListItem } from 'native-base'
import axios from 'axios'

export default class HomeScreen extends Component {

    state = {
        categories: []
    }

    async componentDidMount(){
        // //promise
        // axios.get('http://192.168.0.17:3000/categories').then((res, err)=>{
        //     this.setState({categories: res.data})
        // })

        alert('RIZKY')
        //async await
        const res = await axios.get('http://192.168.0.17:3000/categories')
        this.setState({categories: res.data})
    }

    render(){
        return (            
            <Container>
                <Content>
                    <List>
                        {this.state.categories.map((category)=>(
                            <ListItem>
                                <Text>{category.title}</Text>
                            </ListItem>
                        ))}
                    </List>                    
                </Content>
            </Container>
        )
    }

}