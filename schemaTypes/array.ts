// ./schema/recommendation/RecommendationItem.tsx

import {ObjectItemProps, PatchEvent, set, useFormValue} from 'sanity'
import {Box, Flex, Switch} from '@sanity/ui'
import {useDocumentPane} from 'sanity/desk'
import {useCallback} from 'react'
import {Recommendation} from './recommendationType'

export function RecommendationItem(props: ObjectItemProps<Recommendation>) {
  const {value, path} = props

  // Item props don't have `onChange`, but we can get it from useDocumentPane()
  // This hook is currently marked internal – be aware that this can break in
  // future Studio updates
  const {onChange} = useDocumentPane()

  // Get the parent array to check if any other items are featured
  const parentPath = path.slice(0, -1)
  const allItems = useFormValue(parentPath) as Recommendation[]

  const handleClick = useCallback(() => {
    const nextValue = value?.featured ? false : true
    const clickedFeaturedPath = [...path, 'featured']
    const otherFeaturedPaths = allItems.length
      ? allItems
          ?.filter((p) => p._key !== value?._key && p.featured)
          .map((p) => [...parentPath, {_key: p._key}, 'featured'])
      : []

    // Because onChange came from useDocumentPane
    // we need to wrap it in a PatchEvent
    // and supply the path to the field
    onChange(
      PatchEvent.from([
        // Update this field
        set(nextValue, clickedFeaturedPath),
        // Maybe update other fields
        ...otherFeaturedPaths.map((path) => set(false, path)),
      ])
    )
  }, [value?.featured, value?._key, path, allItems, onChange, parentPath])

  return (
    <Flex gap={3} paddingRight={2} align="center">
      <Box flex={1}>{props.renderDefault(props)}</Box>
      <Switch checked={value?.featured} onClick={handleClick} />
    </Flex>
  )
}