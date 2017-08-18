import React from 'react'
import { Button } from 'react-native-material-design'
import PropTypes from 'prop-types'

export default MDButton = (props) =>
  <Button
    value={props.title}
    onPress={props.onPress}
  />

MDButton.PropTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
}


