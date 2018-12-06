import React, { Component } from 'react'
import { Container, Content, Text, Button, List, ListItem } from 'native-base'
import axios from 'axios'

export default class HomeScreen extends Component {

    state = {
        categories: []
    }

    async componentDidMount(){

<<<<<<< HEAD
        alert('RIZKY')
=======
        //EDITED BY SOBARI
>>>>>>> 6fb9d195e2b511d506aa0209e3f15ffc3557c89a
        //async await
        const res = await axios.get('http://192.168.0.17:3000/categories')
        this.setState({categories: res.data})
    }
        //tes push
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