import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

import { allCategories } from '../redux/actions'

class CategoryScreen extends Component {

    componentDidMount(){
        this.props.dispatch(allCategories())        
    }

    render(){
        return (
            <View>
                {this.props.list.map((l)=>(
                    <Text>{l.title}</Text>
                ))}                
            </View>
        )
    }
}

const mapStateToProps = (state)=> ({
    list: state.list
})

export default connect(mapStateToProps)(CategoryScreen)