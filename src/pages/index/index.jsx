import { Component } from 'react'
import { View, MovableArea, MovableView } from '@tarojs/components'
import './index.styl'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleScale (e) { 
    console.log(e)
  }
  render () {
    return (
      <View className='index'>
        <MovableArea className='container'>
          <View class="static"></View>
          <MovableView className='move' scale={true} direction='all' onScale='handleScale'>旅行的意义</MovableView>
        </MovableArea>
      </View>
    )
  }
}
