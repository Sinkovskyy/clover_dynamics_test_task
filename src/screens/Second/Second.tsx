import { Service } from '@/common/services'
import { TPost } from '@/common/services/posts/types'
import { Card } from '@/components/card'
import React, { useCallback, useEffect, useState } from 'react'
import { FlatList } from 'react-native'
import { RefreshButton, RefreshButtonTitle, styles } from './styled'

const INITIAL_NUM_TO_RENDER = 10

export const Second = () => {
  const [posts, setPosts] = useState<TPost[]>([])

  const getPosts = async () => {
    try {
      const response = await Service.Posts.getPosts()
      return response
    } catch (e) {
      console.log(e)
    }
  }

  const onRefreshButtonPress = useCallback(() => {
    getPosts().then(response => response && setPosts(response))
  }, [])

  const ListFooterComponent = useCallback(
    () => (
      <RefreshButton onPress={onRefreshButtonPress}>
        <RefreshButtonTitle>Refresh</RefreshButtonTitle>
      </RefreshButton>
    ),
    [onRefreshButtonPress],
  )

  useEffect(() => {
    getPosts().then(response => response && setPosts(response))
  }, [])

  return (
    <>
      <FlatList
        style={styles.flatList}
        data={posts}
        keyExtractor={item => String(item.id)}
        initialNumToRender={INITIAL_NUM_TO_RENDER}
        renderItem={({ item }) => (
          <Card.Post info={item.body} title={item.title} />
        )}
        ListFooterComponent={ListFooterComponent}
      />
    </>
  )
}
