import Image from "next/image";

function ImageContainer({
  mainImage,
  name
}: {
  mainImage: string;
  name: string;
}) {
  return (
    <section className="h-[300px] md:h-[500px] relative mt-8">
      <Image
        src={mainImage}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        alt={name}
        className="object-cover  rounded-md"
        priority
      />
    </section>
  );
}
export default ImageContainer;
