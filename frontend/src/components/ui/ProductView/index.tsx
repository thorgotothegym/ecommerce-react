import Link from "next/link"
import Image from "next/image"

type Props = {
    view?: string
    src?: string
    width?: number
    height?: number
    name: string
    description: string
    price: number
}

export const ProductView = ({ view = 'view', src = '/placeholder.svg', width = 400, height = 300, name, description, price }: Props) => {
    return <>
        <div className="relative overflow-hidden rounded-lg group">
            <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                <span className="sr-only">{view}</span>
            </Link>
            <Image
                src={src}
                alt={name}
                width={width}
                height={height}
                className="object-cover w-full h-60"
                style={{ aspectRatio: "400/300", objectFit: "cover" }}
            />
            <div className="p-4 bg-background">
                <h3 className="text-lg font-semibold md:text-xl">
                    {name}
                </h3>
                <p className="text-sm text-muted-foreground">{description}</p>
                <h4 className="text-base font-semibold md:text-lg">{price}</h4>
            </div>
        </div>
    </>
}