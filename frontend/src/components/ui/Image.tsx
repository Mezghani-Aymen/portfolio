import ImageNext from "next/image";

export interface IImageProps {
  filename: string;
  path?: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

export default function Image({
  filename,
  path,
  alt,
  width,
  height,
  className,
  priority = false,
}: IImageProps) {
  const basePath = path ?? process.env.NEXT_PUBLIC_IMAGE_BASE_PATH;
  const url = `${basePath}${filename}`;

  return (
    <ImageNext
      src={url}
      alt={alt ?? "image"}
      priority={priority}
      className={className}
      {...(width && height ? { width, height } : { fill: true })}
    />
  );
}