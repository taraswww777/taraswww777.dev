import {ImageProps} from "next/dist/client/image";

export const imageLoader: ImageProps['loader'] = ({
  src, width, quality = 75
}) => {

  return `${src}?w=${width}&q=${quality}`
}
