import Image from "next/image";

function ImageContainer({
  mainImage,
  name
}: {
  mainImage: string;
  name: string;
}) {
  return (
    <section className="h-[300px] md:h-[500px] shadow-sm relative">
      <Image
        src={
          mainImage
            ? `https://zikdvdnrvqdvrrhvwjau.supabase.co/storage/v1/object/public/portfolio-bucket/${mainImage}`
            : ""
        }
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        quality={80}
        alt={name}
        className="object-cover"
        priority
      />
    </section>
  );
}
export default ImageContainer;
