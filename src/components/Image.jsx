
import {IKImage} from "imagekitio-react"
import config from "../config"
const Image = ({ src, className, w, h, alt}) => {
  return (
    <IKImage
        urlEndpoint={config.env.imageKit.urlEndpoint}
        path={src}
        className={className}
        loading="lazy"
        lqip={{active: true, quality: 20}}
        alt={alt}
        width={w}
        height={h}
        transformation={[
            {
                width: w,
                height: h,
            }
        ]}

    />
  )
}

export default Image