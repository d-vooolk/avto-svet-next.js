import {ImageProps} from "@/app/components/Image/types";

const Image = (props: ImageProps) => {
    const {
        src,
        alt,
        className,
        width,
        height,
        ...rest
    } = props;

    return (
        <img
            src={src}
            alt={alt}
            className={className}
            width={width}
            height={height}
            {...rest}
        />
    )
}

export default Image;