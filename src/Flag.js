/* eslint-disable fp/no-nil */
/* eslint-disable fp/no-rest-parameters */
/* eslint-disable better/no-ifs */

import React from 'react'
import flags from './flags'
import { getAlphaTwoCode } from './country'
import Image from 'next/image'

export default (props) => {
  const { code, height, fallback = null, ...rest } = props
  if (!code) return fallback
  if (!height) return fallback

  const width = rest.width || height
  const alphaTwo = getAlphaTwoCode(code)
  const flag = flags['flag_' + alphaTwo.replace('-', '_')]
  return flag ? (
    <div
      className="world-flag"
      style={{
        position: 'relative',
        width: `${width}px`,
        height: `${height}px`,
      }}
    >
      <Image {...rest} src={flag} width={width} height={height} />
    </div>
  ) : (
    fallback
  )
}
