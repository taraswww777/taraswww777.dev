import {ImageProps} from "next/image";

export const imageLoader: ImageProps['loader'] = ({
  src, width, quality = 75
}) => {

  return `${src}?w=${width}&q=${quality}`
}
