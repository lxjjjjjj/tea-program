import { Component } from 'react'
import { View, MovableArea, MovableView } from '@tarojs/components'
import './index.styl'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <MovableArea className='container'>
          <View class="static"></View>
          <MovableView className='move' direction='all'>旅行的意义</MovableView>
        </MovableArea>
      </View>
    )
  }
}
